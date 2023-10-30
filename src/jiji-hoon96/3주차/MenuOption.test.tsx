import { render } from '@testing-library/react';
import { MenuOption } from './MenuOption';
import { userEvent } from '@testing-library/user-event';
import { MenuOptionsProps } from './types';

const sampleData = {
  name: '[국내산갈비] 전통 돼지갈비찜',
  isPopular: true,
  description: '1인분에만 밥이 포함되어있습니다 기본구성은 석박지+김+갈비찜입니다',
  review: 215,
  optionSelect: true,
  selectList: [
    {
      name: '1인분(밥포함)',
      price: 18000,
    },
    {
      name: '소(2~3인분)',
      price: 30000,
    },
    {
      name: '중(3~4인분)',
      price: 45000,
    },
  ],
  image: '음식1.jpg',
  minOrderPrice: 9900,
  defaultPrice: 0,
};

let commonProps: MenuOptionsProps;

beforeEach(() => {
  commonProps = { ...sampleData };
});

describe('랜더링 테스트', () => {
  it('데이터가 정상적으로 출력되는지 테스트', () => {
    const { getByText } = render(<MenuOption {...sampleData} />);
    const textArray = [
      commonProps.name,
      commonProps.description,
      '수량',
      '가격',
      '메뉴 사진은 연출된 이미지로 실제 조리된 음식과 다를 수 있습니다.',
      '배달최소금액',
    ];

    textArray.forEach((text) => {
      expect(getByText(text)).toBeInTheDocument();
    });

    commonProps.selectList.forEach((element) => {
      expect(getByText(element.price)).toBeInTheDocument();
      expect(getByText(element.name)).toBeInTheDocument();
    });
  });

  it('가장 아래에는 장바구니에 담기 버튼이 있고 ${최종가격}형태로 버튼이 있습니다.', () => {
    const { getByRole } = render(<MenuOption {...sampleData} />);
    const addButton = getByRole('button', { name: /.*원 담기/i });
    expect(addButton).toBeInTheDocument();
  });

  describe('이미지 랜더링 테스트', () => {
    it('이미지가 존재하는지 테스트', () => {
      const { getByAltText } = render(<MenuOption {...sampleData} />);

      const imgElement = getByAltText(sampleData.name);
      expect(imgElement).toBeInTheDocument();
      expect(imgElement).toHaveAttribute('src', sampleData.image);
    });
    it('이미지가 없으면 baseURL 이 이미지를 대체하는지 테스트', () => {
      const sampleDataWithoutImage = { ...sampleData, image: null };
      const { queryByRole } = render(<MenuOption {...sampleDataWithoutImage} />);
      const imgElement = queryByRole('img');

      expect(imgElement).toBeInTheDocument();
      expect(imgElement).toHaveAttribute('src', 'baseURL');
      expect(imgElement).toHaveAttribute('alt', sampleDataWithoutImage.name);
    });
  });

  describe('<인기> 랜더링 테스트', () => {
    it('<인기> 표시, 메뉴이름, 설명을 보여줍니다', () => {
      const { getByText } = render(<MenuOption {...sampleData} />);

      const popularTag = getByText('인기');
      expect(popularTag).toBeInTheDocument();

      const menuName = getByText(sampleData.name);
      expect(menuName).toBeInTheDocument();

      const description = getByText(sampleData.description);
      expect(description).toBeInTheDocument();
    });

    it('<인기> 가 없을 때 <인기> 태그를 보여주지 않습니다', () => {
      const { queryByText } = render(<MenuOption {...{ ...sampleData, isPopular: false }} />);

      const popularTag = queryByText('인기');
      expect(popularTag).toBeNull();
    });
  });

  describe('가격 옵션 랜더링 테스트', () => {
    it('가격 옵션이 여러개인 경우', () => {
      const { getByText, getAllByLabelText } = render(<MenuOption {...sampleData} />);

      const labels = getAllByLabelText(/labelList/i);
      expect(labels).toHaveLength(3);

      sampleData.selectList.forEach((option) => {
        const optionName = getByText(option.name);
        expect(optionName).toBeInTheDocument();

        const optionPrice = getByText(option.price.toString());
        expect(optionPrice).toBeInTheDocument();
      });
    });

    it('가격 옵션이 하나밖에 없는 경우', () => {
      const { queryByRole } = render(<MenuOption {...{ ...sampleData, optionSelect: false }} />);
      const optionList = queryByRole('list');
      expect(optionList).toBeNull();
    });

    it('가격 목록 아래에 라디오 버튼으로 보여줘야 함', () => {
      const { getByRole } = render(<MenuOption {...sampleData} />);
      expect(getByRole('radio', { name: sampleData.selectList[0].name })).toBeInTheDocument();
      expect(getByRole('radio', { name: sampleData.selectList[1].name })).toBeInTheDocument();
      expect(getByRole('radio', { name: sampleData.selectList[2].name })).toBeInTheDocument();
    });
  });
});

describe('기능 테스트', () => {
  describe('수량 기능 테스트', () => {
    it('수량을 선택할 수 있습니다.', async () => {
      const user = userEvent.setup();

      const { getByRole, queryByRole } = render(<MenuOption {...sampleData} />);
      const decrementButton = getByRole('button', { name: 'decreaseBtn' });
      const increaseButton = getByRole('button', { name: 'increaseBtn' });
      const countSpan = queryByRole('span', { name: 'countSpan' });
      await user.click(increaseButton);
      expect(countSpan).toHaveTextContent('2');
      await user.click(decrementButton);
      expect(countSpan).toHaveTextContent('1');
    });

    it('클릭하여 숫자를 조절할 수 있으며, 최소 값은 1입니다.', async () => {
      const { getByLabelText } = render(<MenuOption {...sampleData} />);
      const user = userEvent.setup();

      const decreaseButton = getByLabelText('decreaseBtn');
      const increaseButton = getByLabelText('increaseBtn');
      const countSpan = getByLabelText('countSpan');

      expect(Number(countSpan.textContent)).toBeGreaterThanOrEqual(1);

      await user.click(decreaseButton);
      expect(Number(countSpan.textContent)).toBeGreaterThanOrEqual(1);

      await user.click(increaseButton);
      expect(Number(countSpan.textContent)).toBeGreaterThanOrEqual(1);
    });
  });

  describe('가격 옵션 기능 테스트', () => {
    it('처음에 첫 번째 라디오 버튼이 선택되어 있어야 한다.', () => {
      const { getByRole } = render(<MenuOption {...sampleData} />);
      expect(getByRole('radio', { name: sampleData.selectList[0].name })).toBeChecked();
      expect(getByRole('radio', { name: sampleData.selectList[1].name })).not.toBeChecked();
      expect(getByRole('radio', { name: sampleData.selectList[2].name })).not.toBeChecked();
      expect(getByRole('radiogroup')).toHaveFormValues({ menu: '18000' });
    });

    it('라디오 버튼을 클릭하면 해당 버튼이 선택되어야 한다.', async () => {
      const user = userEvent.setup();
      const { getByRole } = render(<MenuOption {...sampleData} />);
      const radioButton = getByRole('radio', { name: sampleData.selectList[1].name });

      await user.click(radioButton);

      expect(radioButton).toBeChecked();

      expect(getByRole('radiogroup')).toHaveFormValues({ menu: '30000' });
    });
  });
});

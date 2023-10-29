import { render, screen } from '@testing-library/react';
import { MenuOption } from './MenuOption';
import { userEvent } from '@testing-library/user-event';

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

describe('MenuOption Component', () => {
  it('화면에 Ui와 Data가 정상적으로 출력이 됩니다', () => {
    const { getByText } = render(<MenuOption {...sampleData} />);
    expect(getByText(sampleData.name)).toBeInTheDocument();
    expect(getByText(sampleData.description)).toBeInTheDocument();
    expect(getByText('수량')).toBeInTheDocument();
    expect(getByText('가격')).toBeInTheDocument();
    expect(getByText('메뉴 사진은 연출된 이미지로 실제 조리된 음식과 다를 수 있습니다.')).toBeInTheDocument();
    expect(getByText('배달최소금액')).toBeInTheDocument();
    sampleData.selectList.forEach((element) => {
      expect(getByText(element.price)).toBeInTheDocument();
      expect(getByText(element.name)).toBeInTheDocument();
    });
  });

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

  it('가장 아래에는 장바구니에 담기 버튼이 있고 ${최종가격}형태로 버튼이 있습니다.', () => {
    render(<MenuOption {...sampleData} />);
    const addButton = screen.getByRole('button', { name: /.*원 담기/i });
    expect(addButton).toBeInTheDocument();
  });
  it('이미지가 존재하는지 테스트', () => {
    render(<MenuOption {...sampleData} />);

    const imgElement = screen.getByAltText(sampleData.name);
    expect(imgElement).toBeInTheDocument();
    expect(imgElement).toHaveAttribute('src', sampleData.image);
  });
  it('이미지가 없으면 baseURL 을 보여줍니다.', () => {
    const sampleDataWithoutImage = { ...sampleData, image: null };
    const { queryByRole } = render(<MenuOption {...sampleDataWithoutImage} />);
    const imgElement = queryByRole('img');

    expect(imgElement).toBeInTheDocument();
    expect(imgElement).toHaveAttribute('src', 'baseURL');
    expect(imgElement).toHaveAttribute('alt', sampleDataWithoutImage.name);
  });
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

  it('가격 옵션이 여러개인 경우', () => {
    const { getByText, getByRole } = render(<MenuOption {...sampleData} />);

    const optionList = getByRole('list');
    expect(optionList).toBeInTheDocument();

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
});

//   it('가격 옵션이 여러개인 경우', () => {}),
//   it('가격 목록 아래에 라디오 버튼으로 옵션 중 하나를 선택해야 합니다.', () => {}),
//   it('가격 옵션이 하나인 경우', () => {}),
//   it('가격만 표시합니다.', () => {}),

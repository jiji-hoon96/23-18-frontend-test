import { render } from '@testing-library/react';
import { MenuOption } from './MenuOption';
import { userEvent } from '@testing-library/user-event';
// import { userEvent } from '@testing-library/user-event';

const sampleOne = {
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

// describe('MenuOption Component', () => {
//   it('sample 1 테스트', async () => {
//
//     window.alert = jest.fn();
//     // 수량 변경 테스트

//     // 담기 버튼 클릭 테스트
//     const addButton = screen.getByText('0원 담기');
//     await user.click(addButton);

//     // alert 테스트
//     await waitFor(() => {
//       expect(window.alert).toHaveBeenCalledWith('0원을 주문하시겠습니까?');
//     });
//   });
// });

describe('MenuOption Component', () => {
  it('화면에 Ui와 Data가 정상적으로 출력이 됩니다', () => {
    const { getByText } = render(<MenuOption {...sampleOne} />);
    expect(getByText(sampleOne.name)).toBeInTheDocument();
    expect(getByText(sampleOne.description)).toBeInTheDocument();
    expect(getByText('수량')).toBeInTheDocument();
    expect(getByText('가격')).toBeInTheDocument();
    expect(getByText('메뉴 사진은 연출된 이미지로 실제 조리된 음식과 다를 수 있습니다.')).toBeInTheDocument();
    expect(getByText('배달최소금액')).toBeInTheDocument();
    sampleOne.selectList.forEach((element) => {
      expect(getByText(element.price)).toBeInTheDocument();
      expect(getByText(element.name)).toBeInTheDocument();
    });
  });

  it('수량을 선택할 수 있습니다.', async () => {
    const user = userEvent.setup();

    const { getByRole } = render(<MenuOption {...sampleOne} />);
    const decrementButton = getByRole('button', { name: 'decreaseBtn' });
    const increaseButton = getByRole('button', { name: 'increaseBtn' });
    const countSpan = getByRole('span', { name: 'countSpan' });

    await user.click(increaseButton); // 수량 증가
    expect(countSpan).toHaveValue('2');

    await user.click(decrementButton); // 수량 감소
    expect(countSpan).toHaveValue('1');
  });
});

//   it('클릭하여 숫자를 조절할 수 있으며, 최소 값은 1입니다.', () => {}),
//   it('가장 아래에는 장바구니에 담기 버튼이 있습니다.', () => {}),
//   it('${최종_가격}원 담기 형식으로 표현되어야 합니다.', () => {});
// it('위에 메뉴 이미지를 보여줍니다.', () => {}),
//   it('이미지가 없으면 안보여줍니다.', () => {}),
//   it('<인기> 표시, 메뉴 이름, 설명을 보여줍니다.', () => {}),
//   it('가격 옵션이 여러개인 경우', () => {}),
//   it('가격 목록 아래에 라디오 버튼으로 옵션 중 하나를 선택해야 합니다.', () => {}),
//   it('가격 옵션이 하나인 경우', () => {}),
//   it('가격만 표시합니다.', () => {}),

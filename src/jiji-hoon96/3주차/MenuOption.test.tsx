import { render, screen, waitFor } from '@testing-library/react';
import { MenuOption } from './MenuOption';
import { userEvent } from '@testing-library/user-event';

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

const sampleTwo = {
  name: '스팸구이',
  isPopular: false,
  description: '스팸 4조각, 밥도둑',
  review: 6,
  optionSelect: false,
  selectList: [],
  image: '음식2.jpg',
  minOrderPrice: 9900,
  defaultPrice: 5000,
};

// describe('MenuOption Component', () => {
//   it('sample 1 테스트', async () => {
//     const user = userEvent.setup();
//     window.alert = jest.fn();
//     const { getByText } = render(<MenuOption {...sampleOne} />);

//     expect(getByText('[국내산갈비] 전통 돼지갈비찜')).toBeInTheDocument();
//     expect(
//       getByText('1인분에만 밥이 포함되어있습니다 기본구성은 석박지+김+갈비찜입니다'),
//     ).toBeInTheDocument();
//     expect(getByText('수량')).toBeInTheDocument();
//     expect(getByText('가격')).toBeInTheDocument();

//     // 수량 변경 테스트
//     const decrementButton = screen.getByText('-');
//     const incrementButton = screen.getByText('+');
//     const countInput = screen.getByDisplayValue(1);

//     await user.click(incrementButton); // 수량 증가
//     expect(countInput).toHaveValue('2');

//     await user.click(decrementButton); // 수량 감소
//     expect(countInput).toHaveValue('1');

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
  it('위에 메뉴 이미지를 보여줍니다.', () => {}),
    it('이미지가 없으면 안보여줍니다.', () => {}),
    it('<인기> 표시, 메뉴 이름, 설명을 보여줍니다.', () => {}),
    it('가격 옵션이 여러개인 경우', () => {}),
    it('가격 목록 아래에 라디오 버튼으로 옵션 중 하나를 선택해야 합니다.', () => {}),
    it('가격 옵션이 하나인 경우', () => {}),
    it('가격만 표시합니다.', () => {}),
    it('수량을 선택할 수 있습니다.', () => {}),
    it('클릭하여 숫자를 조절할 수 있으며, 최소 값은 1입니다.', () => {}),
    it('가장 아래에는 장바구니에 담기 버튼이 있습니다.', () => {}),
    it('${최종_가격}원 담기 형식으로 표현되어야 합니다.', () => {});
});

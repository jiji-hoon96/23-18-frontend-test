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

// const sampleTwo = {
//   name: '스팸구이',
//   isPopular: false,
//   description: '스팸 4조각, 밥도둑',
//   review: 6,
//   optionSelect: false,
//   selectList: [],
//   image: '음식2.jpg',
//   minOrderPrice: 9900,
//   defaultPrice: 5000,
// };

describe('MenuOption Component', () => {
  it('sample 1 테스트', async () => {
    const user = userEvent.setup();
    window.alert = jest.fn();
    const { getByText } = render(<MenuOption {...sampleOne} />);

    expect(getByText('[국내산갈비] 전통 돼지갈비찜')).toBeInTheDocument();
    expect(
      getByText('1인분에만 밥이 포함되어있습니다 기본구성은 석박지+김+갈비찜입니다'),
    ).toBeInTheDocument();
    expect(getByText('수량')).toBeInTheDocument();
    expect(getByText('가격')).toBeInTheDocument();

    // 수량 변경 테스트
    const decrementButton = screen.getByText('-');
    const incrementButton = screen.getByText('+');
    const countInput = screen.getByDisplayValue(1);

    await user.click(incrementButton); // 수량 증가
    expect(countInput).toHaveValue('2');

    await user.click(decrementButton); // 수량 감소
    expect(countInput).toHaveValue('1');

    // 담기 버튼 클릭 테스트
    const addButton = screen.getByText('0원 담기');
    await user.click(addButton);

    // alert 테스트
    await waitFor(() => {
      expect(window.alert).toHaveBeenCalledWith('0원을 주문하시겠습니까?');
    });
  });
});

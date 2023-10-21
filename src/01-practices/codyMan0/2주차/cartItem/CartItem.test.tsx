import { render, screen } from '@testing-library/react';
import { CartItem } from './CartItem';
import { FoodInfoType } from '../type';

describe('CardItem Component', () => {
  const foodInfoWithoutRecommendation: FoodInfoType = {
    title: '물떡 & 어묵탕',
    subTitle: '칼칼한 국물과 탱탱한 밀가래떡과 어묵',
    price: 4900,
    img: './asset/img.jpeg',
    recommendOfOwner: false,
  };

  test('renders price with priceDetail when priceDetail is present', () => {
    render(<CartItem foodInfo={foodInfoWithoutRecommendation} />);

    const badgeElement = screen.queryByText('사장님 추천');

    // recommendOfOwner가 false인 경우, badgeElement가 null임을 확인
    expect(badgeElement).toBeNull();
  });

  const foodInfoWithRecommendation: FoodInfoType = {
    title: '물떡 & 어묵탕',
    subTitle: '칼칼한 국물과 탱탱한 밀가래떡과 어묵',
    price: 4900,
    img: './asset/img.jpeg',
    recommendOfOwner: true,
  };

  test('renders "사장님 추천" when recommendOfOwner is true', () => {
    render(<CartItem foodInfo={foodInfoWithRecommendation} />);

    const badgeElement = screen.getByText('사장님 추천');

    // recommendOfOwner가 true인 경우, badgeElement가 렌더링됨을 확인
    expect(badgeElement).toBeInTheDocument();
  });
});

import { render, screen } from '@testing-library/react';
import { Cart } from './Cart';
import { RestaurantInfo } from '../type';

describe('Example', () => {
  const restaurantList: RestaurantInfo = {
    restaurantName: '따끈한 삼첩분식 신상',
    foodInfoList: [
      {
        title: '[꼬마] 새우마요김밥',
        subTitle: '고소한 새우튀김과 특제 마요소스',
        price: 2700,
        priceDetail: 2,
        img: './asset/img.jpeg',
        recommendOfOwner: false,
      },
      {
        title: '[부산]가래떡 떡볶이',
        subTitle: '달짝지근 매콤함과 통통한 밀가래떡, 맛감자',
        price: 5900,
        img: './asset/img.jpeg',
        recommendOfOwner: true,
      },
      {
        title: '물떡 & 어묵탕',
        subTitle: '칼칼한 국물과 탱탱한 밀가래떡과 어묵',
        price: 4900,
        img: './asset/img.jpeg',
        recommendOfOwner: false,
      },
    ],
  };

  it('should render hidden', () => {
    render(<Cart restaurantList={restaurantList} />);

    const restaurantNameElement = screen.getByText(restaurantList.restaurantName);
    expect(restaurantNameElement).toBeInTheDocument();
  });
});

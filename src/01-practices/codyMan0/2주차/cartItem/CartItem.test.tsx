import { render, screen } from '@testing-library/react';
import { CartItem } from './CartItem';
import { FoodInfoType } from '../type';

describe('Example', () => {
  const foodInfoList: FoodInfoType = {
    title: '물떡 & 어묵탕',
    subTitle: '칼칼한 국물과 탱탱한 밀가래떡과 어묵',
    price: 4900,
    img: './asset/img.jpeg',
    recommendOfOwner: false,
  };

  it('should render hidden', () => {
    render(<CartItem foodInfo={foodInfoList} />);
    expect(screen.getByText('Hello, World!')).not.toBeVisible();
  });
});

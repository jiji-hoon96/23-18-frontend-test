// import styles from './Cart.module.css';
// import styles from './Cart.module.css';
import { CartItem } from '../cartItem/CartItem';
import { RestaurantInfo } from '../type';

interface CartProps {
  restaurantList: RestaurantInfo;
}

export const Cart = ({ restaurantList }: CartProps) => {
  const { restaurantName, foodInfoList } = restaurantList;
  return (
    <div className="layout">
      <h1>{restaurantName}</h1>
      {foodInfoList.map((foodInfo, index) => {
        return <CartItem key={index} foodInfo={foodInfo} />;
      })}
    </div>
  );
};

// import styles from './Cart.module.css';
import { FoodInfoType } from '../type';

interface CartProps {
  foodInfoList: FoodInfoType[];
}

export const CartItem = ({ foodInfoList }: CartProps) => {
  console.log(foodInfoList);
  return <div>dfdf</div>;
};

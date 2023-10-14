// import styles from './Cart.module.css';
import { FoodInfoType } from '../type';

interface CartProps {
  foodInfo: FoodInfoType;
}
const BADGE = '사장님 추천';

export const CartItem = ({ foodInfo }: CartProps) => {
  const { title, subTitle, price, priceDetail, recommendOfOwner, img } = foodInfo;
  return (
    <div className="card-item">
      <div>
        <h2>{title}</h2>
        <h3>{subTitle}</h3>
        <p>{priceDetail ? `${priceDetail} : ${price}` : price}</p>
        {recommendOfOwner ? <p>{BADGE}</p> : null}
      </div>
      <div>
        <img src={img} alt="foodImages" />
      </div>
    </div>
  );
};

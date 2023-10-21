export interface MenuOptionsProps {
  name: string;
  isPopular: boolean;
  description: string;
  review: number;
  optionSelect: boolean;
  selectList: { name: string; price: number }[] | [];
  count: number;
  image: string;
  minOrderPrice: number;
  totalPrice: number;
}

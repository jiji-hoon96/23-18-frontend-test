export interface CardInterface {
  id: number;
  title: string;
  imgUrl?: string;
  price: number;
  description: string;
  tag: string[];
  isPopular?: true;
}

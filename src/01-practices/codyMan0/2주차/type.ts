export interface FoodInfoType {
  title: string;
  subTitle: string;
  price: number;
  priceDetail?: number;
  img: string;
  recommendOfOwner?: boolean;
}

export interface RestaurantInfo {
  restaurantName: string;
  foodInfoList: FoodInfoType[];
}

export interface MenuOptionsProps {
  id: number;
  name: string;
  isPopular: boolean;
  description: string;
  options: {
    name?: string;
    price: number;
  }[];
  tags: string[];
  image?: string;
}

export interface MenuProps {
  id: number;
  name: string;
  image?: string;
  options: {
    name?: string;
    price: number;
  }[];
  description?: string;
  tags: string[];
  isPopular: boolean;
}

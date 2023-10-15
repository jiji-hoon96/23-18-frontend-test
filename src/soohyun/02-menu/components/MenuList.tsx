import Card from './Card';
import type { CardInterface } from '../type';

const MenuList = ({ data }: { data: CardInterface[] }) => {
  return (
    <ol>
      {data.map((item) => (
        <Card data={item} key={item.id} />
      ))}
    </ol>
  );
};

export default MenuList;

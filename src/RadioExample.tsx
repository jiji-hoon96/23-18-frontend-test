import { useState } from 'react';

interface RadioExampleProps {
  list: { name: string; price: number }[];
}

export const RadioExample = ({ list }: RadioExampleProps) => {
  const [selectedPrice, setSelectedPrice] = useState(list[0]?.price ?? 0);

  return (
    <fieldset role="radiogroup">
      {list.map(({ name, price }, index) => (
        <div key={index}>
          <div>
            <input
              aria-label={name}
              name="menu"
              type="radio"
              value={price}
              onChange={() => setSelectedPrice(price)}
              checked={price === selectedPrice}
            />
            <span>{name}</span>
          </div>
          <span>{price}</span>
        </div>
      ))}
    </fieldset>
  );
};

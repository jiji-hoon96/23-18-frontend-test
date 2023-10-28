import { MenuInterface } from '../types';
import { useState } from 'react';

const MenuOption = (props: MenuInterface) => {
  const { name, options, isPopular, description, image } = props;
  const [price, setPrice] = useState(options[0].price);
  const [amount, setAmount] = useState(1);
  const MIN_ORDER_PRICE = 9900;
  return (
    <div>
      {image && <img src={image} alt={`${name} 이미지`} />}
      <h2>
        {isPopular && <span role="badge">인기</span>}
        {name}
      </h2>
      {description && <div role="caption">{description}</div>}
      {options.length > 1 ? (
        <fieldset role="radiogroup">
          {options.map((option) => {
            const { name, price } = option;
            return (
              <div key={name}>
                <label htmlFor={name}>{name}</label>
                <input
                  type="radio"
                  id={name}
                  name="menu-option"
                  value={price}
                  onChange={(e) => {
                    setPrice(Number(e.target.value));
                  }}
                />
              </div>
            );
          })}
        </fieldset>
      ) : (
        <div>
          <div>가격</div>
          <div>
            {options[0].name && <span>{options[0].name}</span>}
            <span data-testid="priceOnly">{`${options[0].price.toLocaleString()}원`}</span>
          </div>
        </div>
      )}
      <div>
        <div>수량</div>
        <div>
          <button
            role="button"
            disabled={amount === 1}
            aria-label="수량 감소"
            onClick={() => setAmount((prev) => prev - 1)}
          >
            -
          </button>
          <span>{amount}개</span>
          <button role="button" aria-label="수량 증가" onClick={() => setAmount((prev) => prev + 1)}>
            +
          </button>
        </div>
      </div>
      <footer>
        <div>
          <span>배달최소주문금액</span>
          <span>{MIN_ORDER_PRICE.toLocaleString()}원</span>
        </div>
        <button role="button" aria-label="최종금액">
          {(amount * price).toLocaleString()}원 담기
        </button>
      </footer>
    </div>
  );
};

export default MenuOption;

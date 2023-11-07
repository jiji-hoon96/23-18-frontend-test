import { useState } from 'react';
import S from './MenuOption.module.css';
import { MenuOptionsProps } from '../../3주차/types';
import { CHANGE_AMOUNT, DEFAULT_AMOUNT, MINIMUM_VALUE } from '../../constants/amount';

export const MenuOption = ({ image, name, isPopular, options, description }: MenuOptionsProps) => {
  const [count, setCount] = useState<number>(MINIMUM_VALUE);
  const [selectPrice, setSelectPrice] = useState<number>(DEFAULT_AMOUNT);

  const changeCount = (type: string) => {
    if (type === 'increase') {
      setCount((prev) => prev + CHANGE_AMOUNT);
    } else {
      if (count > MINIMUM_VALUE) {
        setCount((prev) => prev - CHANGE_AMOUNT);
      }
    }
  };

  return (
    <>
      <div className={S.wrap}>
        <div className={S.imgBox}>
          <img src={image ?? 'baseURL'} alt={name} />
        </div>
        <div className={S.main}>
          <div className={S.mainHeader}>
            {isPopular && <span className={S.popularTag}>인기</span>}
            <h1>{name}</h1>
          </div>
          <div className={S.description}>
            <span>{description}</span>
          </div>
        </div>
        <div className={S.main}>
          <div className={S.mainHeader}>
            <p className={S.name}>가격</p>
            <span className={S.essential}>필수</span>
          </div>
          {options.length > 0 && (
            <fieldset role="radiogroup" className={S.tagList}>
              {options.every((item) => !item) ? (
                <div>
                  <div>가격</div>
                  <div>
                    {options[0].name && <span>{options[0].name}</span>}
                    <span data-testid="singleItem">{`${options[0].price.toLocaleString()}원`}</span>
                  </div>
                </div>
              ) : (
                options.map(({ name, price }, index) => (
                  <label key={index} className={S.ist} aria-label="labelList">
                    <div>
                      <input
                        aria-label={name}
                        name="menu"
                        type="radio"
                        value={price}
                        onChange={() => setSelectPrice(price)}
                        checked={price === selectPrice}
                      />
                      <span>{name}</span>
                    </div>
                    <span>{price}</span>
                  </label>
                ))
              )}
            </fieldset>
          )}
        </div>
        <div className={S.mainHeader}>
          <p className={S.name}>수량</p>
          <div className={S.amountBox}>
            <button role="button" aria-label="decreaseBtn" onClick={() => changeCount('decrease')}>
              -
            </button>
            <span role="span" aria-label="countSpan">
              {count}
            </span>
            <button role="button" aria-label="increaseBtn" onClick={() => changeCount('increase')}>
              +
            </button>
          </div>
        </div>
        <div className={S.textarea}>
          <span>메뉴 사진은 연출된 이미지로 실제 조리된 음식과 다를 수 있습니다.</span>
        </div>
        <div className={S.footer}>
          <div className={S.info}>
            <p>배달최소금액</p>
          </div>
          <div>
            <button
              onClick={() => alert('주문하시겠습니까?')}
              className={S.add}
            >{`${selectPrice}원 담기`}</button>
          </div>
        </div>
      </div>
      ))
    </>
  );
};

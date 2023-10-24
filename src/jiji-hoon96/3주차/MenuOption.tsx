import { useEffect, useState } from 'react';
import S from './MenuOption.module.css';
import { MenuOptionsProps } from './types';

export const MenuOption = (sampleData: MenuOptionsProps) => {
  const [count, setCount] = useState<number>(1);
  const [totalPrice, setTotalPrice] = useState<number>(0);

  //TODOS : selectOption 있어도 수량 체크하는 것 있음.

  useEffect(() => {
    setTotalPrice(sampleData.defaultPrice * count);
  }, [sampleData.defaultPrice, count, sampleData.optionSelect]);

  const handleOptionSelect = (price: number) => {
    setTotalPrice(price * count);
  };

  return (
    <>
      <div className={S.wrap}>
        <div className={S.imgBox}>
          <img src={sampleData.image ?? 'baseURL'} alt={sampleData.name} />
        </div>
        <div className={S.main}>
          <div className={S.mainHeader}>
            {sampleData.isPopular && <span className={S.popularTag}>인기</span>}
            <h1>{sampleData.name}</h1>
          </div>
          <div className={S.description}>
            <span>{sampleData.description}</span>
          </div>
          <div>
            <span className={S.name}>{`메뉴 리뷰 ${sampleData.review}개 {'>'}`}</span>
          </div>
        </div>
        <div className={S.main}>
          <div className={S.mainHeader}>
            <p className={S.name}>가격</p>
            {sampleData.selectList.every((item) => !item) ? (
              <span>{sampleData.defaultPrice}</span>
            ) : (
              <span className={S.essential}>필수</span>
            )}
          </div>
          {sampleData.optionSelect && (
            <ul className={S.tagList}>
              {sampleData.selectList.every((item) => !item)
                ? ''
                : sampleData.selectList.map((select, index) => (
                    <li key={index} className={S.sampleDataList}>
                      <div>
                        <input
                          name="menuSelect"
                          type="radio"
                          checked
                          value={select.price}
                          onChange={() => handleOptionSelect(select.price)}
                        />
                        <span>{select.name}</span>
                      </div>
                      <span>{select.price}</span>
                    </li>
                  ))}
            </ul>
          )}
        </div>
        <div className={S.mainHeader}>
          <p className={S.name}>수량</p>
          <div className={S.amountBox}>
            <button role="button" aria-label="decreaseBtn" onClick={() => setCount((prev) => prev - 1)}>
              -
            </button>
            <input value={count} defaultValue={count} />
            <button role="button" aria-label="increaseBtn" onClick={() => setCount((prev) => prev + 1)}>
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
            <span>{sampleData.minOrderPrice}</span>
          </div>
          <div>
            <button
              onClick={() => alert(`${totalPrice}원을 주문하시겠습니까?`)}
              className={S.add}
            >{`${totalPrice}원 담기`}</button>
          </div>
        </div>
      </div>
      ))
    </>
  );
};

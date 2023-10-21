import S from './MenuOption.module.css';

export const MenuOption = () => {
  return (
    <>
      <div className={S.wrap}>
        <div className={S.imgBox}>
          <img src="baseURL" />
        </div>
        <div className={S.main}>
          <div className={S.mainHeader}>
            {true && <span className={S.popularTag}>인기</span>}
            <h1>[국내산갈비] 전통 돼지갈비찜</h1>
          </div>
          <div className={S.description}>
            <span>설명</span>
          </div>
        </div>
        <div className={S.main}>
          <div className={S.mainHeader}>
            <p className={S.name}>가격</p>
            <span className={S.essential}>필수</span>
          </div>
          {true && <ul className={S.menuList}></ul>}
        </div>
        <div className={S.footer}>
          <div className={S.info}>
            <p>배달최소금액</p>
            <span>가격</span>
          </div>
          <div>
            <button>담기</button>
          </div>
        </div>
      </div>
    </>
  );
};

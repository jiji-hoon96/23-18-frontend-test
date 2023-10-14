import S from './MenuList.module.css';
import { MenuInfo } from './types';

interface Props {
  data: MenuInfo;
}

const MenuItem = ({ data }: Props) => {
  const { title, price, imgUrl, description, tags, isPopular } = data;

  return (
    <div className={S.wrap}>
      <div className={S.info}>
        <h3 className={S.title} data-testid="title">
          {title}
          {isPopular && <span className={S.popularTag}>인기</span>}
        </h3>
        {description && <p className={S.description}>{description}</p>}
        <p className={S.price}>{price}원</p>
        {tags && (
          <ol className={S.tagList}>
            {tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ol>
        )}
      </div>

      <div className={S.imgBox}>
        <img src={imgUrl ?? 'baseUrl'} alt={title} />
      </div>
    </div>
  );
};

export default MenuItem;

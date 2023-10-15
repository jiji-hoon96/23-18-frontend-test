import type { CardInterface } from '../type';

const Card = ({ data }: { data: CardInterface }) => {
  const { title, imgUrl, price, description, tag, isPopular } = data;
  return (
    <li className="card">
      <div className="content">
        <div className="title">
          {title}
          {isPopular && <span className="badge">인기</span>}
        </div>
        <div className="description">{description}</div>
        <div className="price">{price.toLocaleString()}원</div>
        {tag.length > 0 && (
          <div className="tags">
            {tag.map((item, index) => (
              <span key={index} className="tag">
                {item}
              </span>
            ))}
          </div>
        )}
      </div>
      {imgUrl && (
        <div className="image">
          <img src={imgUrl} alt={`${title} 이미지`} />
        </div>
      )}
    </li>
  );
};

export default Card;

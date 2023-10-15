import { OrderType } from './types';
import './Order.module.css';

interface OrderProps {
  dataList: OrderType[];
}

export const Order = ({ dataList }: OrderProps) => {
  return (
    <>
      {dataList.map((data) => {
        <div className="wrap">
          <div className="info">
            <h1 className="title">
              {data.title}
              {data.popularity && <span className="popularTag">인기</span>}
            </h1>
            {data.description && <p className="description">{data.description}</p>}
            <h1 className="price">{data.price}</h1>
            {data.tags && (
              <ul className="tagList">
                {data.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
            )}
          </div>

          <div className="imgBox">
            <img src={data.imgUrl ?? 'baseUrl'} alt={data.title} />
          </div>
        </div>;
      })}
    </>
  );
};

import { OrderType } from './types';
import styles from './Order.module.css';

interface OrderProps {
  dataList: OrderType[];
}

export const Order = ({ dataList }: OrderProps) => {
  return (
    <>
      {dataList.map((data, index) => (
        <div className={styles.wrap} key={index}>
          <div className={styles.info}>
            <h1 className={styles.title}>
              {data.title}
              {data.popularity && <span className={styles.popularTag}>인기</span>}
            </h1>
            {data.description && <p className={styles.description}>{data.description}</p>}
            <h1 className={styles.price}>{data.price}</h1>
            {data.tags && (
              <ul className={styles.tagList}>
                {data.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
            )}
          </div>

          <div className={styles.imgBox}>
            <img src={data.imgUrl ?? 'baseUrl'} alt={data.title} />
          </div>
        </div>
      ))}
    </>
  );
};

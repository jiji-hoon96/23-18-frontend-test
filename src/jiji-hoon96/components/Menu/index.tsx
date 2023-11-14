import useQueryString from 'src/jiji-hoon96/hooks/useQueryString';
import { MenuProps } from '../../types/menu';
import { useNavigate } from 'react-router-dom';

interface MenuListProps {
  storeId: number;
  title: string;
  menus: MenuProps[];
}

export const Menu = ({ menus, title, storeId }: MenuListProps) => {
  const navigate = useNavigate();
  const { queryString } = useQueryString();
  return (
    <>
      <div>{title}</div>
      {menus.map((data, index) => (
        <div key={index}>
          <div>
            <h1>
              {data.name}
              {data.isPopular && <span>인기</span>}
            </h1>
            {data.description && <p>{data.description}</p>}
            <ul>
              {data.options.map((item, i) => (
                <li
                  key={i}
                  onClick={() => {
                    navigate(`/store/${storeId}/menu/${data.id}${queryString}`);
                  }}
                >
                  <span>{`${item.name} : ${item.price}`}</span>
                </li>
              ))}
            </ul>
            {data.tags && (
              <ul>
                {data.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
            )}
          </div>

          <div>
            <img src={data.image ?? 'baseUrl'} alt={data.name} />
          </div>
        </div>
      ))}
    </>
  );
};

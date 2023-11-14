import { useNavigate, useParams } from 'react-router-dom';
import store from '../../constants/store.json';
import { Menu } from 'src/jiji-hoon96/components/Menu';

const Store = () => {
  const { storeId } = useParams();
  const navigate = useNavigate();

  const menu = store.find((item) => item.storeId === Number(storeId));

  if (!menu) return <div>메뉴를 찾을 수 없습니다.</div>;

  return (
    <div>
      <button role="button" aria-label="이전 페이지로 이동" onClick={() => navigate(-1)}>
        이전 페이지
      </button>
      <Menu storeId={menu.storeId} title={menu.title} menus={menu.menus} />
    </div>
  );
};

export default Store;

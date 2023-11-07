import { useNavigate, useParams } from 'react-router-dom';
import { MenuOption } from 'src/jiji-hoon96/components/MenuOption';
import store from '../../constants/store.json';

const Option = () => {
  const { menuId, storeId } = useParams();
  const navigate = useNavigate();

  const menu = store
    .find((item) => item.storeId === Number(storeId))
    ?.menus.find((item) => item.id === Number(menuId));

  if (!menu) return <div>메뉴를 찾을 수 없습니다.</div>;

  return (
    <div>
      <button role="button" aria-label="이전 페이지로 이동" onClick={() => navigate(-1)}>
        이전 페이지
      </button>
      <MenuOption {...menu} />
    </div>
  );
};

export default Option;

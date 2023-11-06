import { useNavigate, useParams } from 'react-router-dom';
import { MenuOption } from 'src/jiji-hoon96/components/MenuOption';
import store from '../../constants/store.json';

const Option = () => {
  const { menuId, storeId } = useParams();
  const navigate = useNavigate();

  const storeData = store.find((item) => item.storeId === Number(storeId));
  const menu = storeData?.menus.find((item) => item.id === Number(menuId));
  if (!menu) return null;
  return (
    <div>
      <button role="button" aria-label="뒤로가기" onClick={() => navigate(-1)}>
        뒤로가기
      </button>
      <MenuOption {...menu} />
    </div>
  );
};

export default Option;

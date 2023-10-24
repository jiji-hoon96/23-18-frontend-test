import { MenuList } from './components';
import { MENU_LIST } from './data/MENU_LIST';

const Page = () => {
  return <MenuList title="따끈한 삼첩분식 신상" menus={MENU_LIST} />;
};

export default Page;

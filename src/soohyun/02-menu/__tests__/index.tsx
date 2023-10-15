import { render } from '@testing-library/react';
import { MenuList } from '../components';
import { CardInterface } from '../type';

const mockData: CardInterface[] = [
  {
    id: 0,
    title: '새우마요김밥',
    imgUrl: 'image1.png',
    price: 2700,
    description: '고소한 새우튀김과 특제 마요소스',
    tag: ['사장님추천', 'BEST'],
    isPopular: true,
  },
  {
    id: 1,
    title: '가래떡 떡볶이',
    imgUrl: 'image2.png',
    price: 5900,
    description: '달짝지근 매콤함과 통통한 밀가래떡, 맛감자',
    tag: ['사장님추천'],
  },
  {
    id: 2,
    title: '물떡&어묵탕',
    price: 4900,
    description: '칼칼한 국물과 댕댕한 밀가래떡과 어묵',
    tag: [],
  },
];

describe('MenuList', () => {
  it('should render Card component', () => {
    const { getAllByRole } = render(<MenuList data={mockData} />);

    const menuListItems = getAllByRole('listitem');

    mockData.forEach(({ title, price, description, tag }, index) => {
      const menuItem = menuListItems[index];
      expect(menuItem).toHaveTextContent(title);
      expect(menuItem).toHaveTextContent(`${price.toLocaleString()}원`);
      expect(menuItem).toHaveTextContent(description);

      tag.forEach((item) => {
        expect(menuItem).toHaveTextContent(item);
      });
    });
  });
  it('should render <span class="badge">인기</span> if isPopular is true', () => {
    const { getAllByRole } = render(<MenuList data={mockData} />);

    const menuListItems = getAllByRole('listitem');
    mockData
      .filter((item) => item.isPopular)
      .forEach(({ id }) => {
        const menuItem = menuListItems[id];
        const badge = menuItem.querySelector('span.badge');
        expect(badge).toBeInTheDocument();
      });
    mockData
      .filter((item) => !item.isPopular)
      .forEach(({ id }) => {
        const menuItem = menuListItems[id];
        const badge = menuItem.querySelector('span.badge');
        expect(badge).not.toBeInTheDocument();
      });
  });

  it('should render image if data has imgUrl property', () => {
    const { getAllByRole } = render(<MenuList data={mockData} />);

    const menuListItems = getAllByRole('listitem');

    mockData
      .filter((item) => item.imgUrl)
      .forEach(({ id, title, imgUrl }) => {
        const menuItem = menuListItems[id];
        const imgElement = menuItem.querySelector('img');

        expect(imgElement).toBeInTheDocument();
        expect(imgElement).toHaveAttribute('src', imgUrl);
        expect(imgElement).toHaveAttribute('alt', `${title} 이미지`);
      });

    mockData
      .filter((item) => !item.imgUrl)
      .forEach(({ id }) => {
        const menuItem = menuListItems[id];
        const imgElement = menuItem.querySelector('img');

        expect(imgElement).not.toBeInTheDocument();
      });
  });
});

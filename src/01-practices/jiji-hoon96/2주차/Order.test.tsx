import { render } from '@testing-library/react';
import { Order } from './Order';

describe('Order 컴포넌트 테스트', () => {
  const sampleData = [
    {
      title: '만두떠보기',
      popularity: true,
      description: '개꿀맛',
      price: '10000',
      tags: ['꿀맛', 'JMT'],
      imgUrl: '음식1.jpg',
    },
    {
      title: '삼첩분식짱',
      popularity: true,
      description: '노잼',
      price: '1230000',
      tags: ['개노맛', 'DOG'],
      imgUrl: '음식2.jpg',
    },
  ];

  it('올바르게 렌더링되는지 확인', () => {
    const { getByText, getAllByRole } = render(<Order dataList={sampleData} />);

    // 각 상품의 제목이 렌더링되는지 확인
    expect(getByText('만두떠보기')).toBeInTheDocument();
    expect(getByText('삼첩분식짱')).toBeInTheDocument();

    // '인기' 태그가 있는 상품의 경우, 해당 태그가 렌더링되는지 확인
    expect(getByText('인기')).toBeInTheDocument();

    // 설명과 가격이 있는지 확인
    expect(getByText('개꿀맛')).toBeInTheDocument();
    expect(getByText('1230000')).toBeInTheDocument();

    // 태그 목록이 올바르게 렌더링되는지 확인
    const tags = getAllByRole('listitem');
    expect(tags).toHaveLength(4); // 4개의 태그가 있어야 합니다.

    // 이미지가 정상적으로 렌더링되는지 확인
    const images = document.querySelectorAll('img');
    expect(images).toHaveLength(2); // 2개의 이미지가 있어야 합니다.
  });

  it('설명이 없는 상품의 경우, 설명이 렌더링되지 않아야 함', () => {
    const { queryByText } = render(<Order dataList={sampleData} />);

    // 설명이 없는 상품의 경우, 해당 텍스트가 렌더링되지 않아야 합니다.
    expect(queryByText('이 상품은 좋아요!')).toBeNull();
  });

  it('이미지 URL이 없는 상품의 경우, 대체값이 렌더링되어야 함', () => {
    // 이미지 URL이 없는 상품의 경우, 대체값('baseUrl')이 렌더링되어야 합니다.
    const images = document.querySelectorAll('img');
    images.forEach((image) => {
      expect(image).toHaveAttribute('alt', '상품 1');
      expect(image).toHaveAttribute('src', 'baseUrl');
    });
  });
});

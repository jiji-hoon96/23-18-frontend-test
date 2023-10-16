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
      description: '하이 삼첩분식',
      price: '1230000',
      tags: ['개노맛', 'DOG'],
      imgUrl: '',
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
    expect(getByText('10000')).toBeInTheDocument();
    expect(getByText('1230000')).toBeInTheDocument();
    expect(getByText('하이 삼첩분식')).toBeInTheDocument();

    // 태그는 한개 이상 있어야 됨
    const tags = getAllByRole('listitem');
    expect(tags.length).toBeGreaterThanOrEqual(1);
  });

  it('설명이 없는 상품의 경우, 설명이 렌더링되지 않아야 함', () => {
    const { queryByText } = render(<Order dataList={sampleData} />);

    expect(queryByText('개꿀맛')).not.toBeInTheDocument();
    expect(queryByText('하이 삼첩분식')).not.toBeInTheDocument();
  });

  it('이미지 URL이 없는 상품의 경우, 대체값이 렌더링되어야 함', () => {
    const { getAllByRole } = render(<Order dataList={sampleData} />);
    const images = getAllByRole('img');
    images.forEach((image) => {
      expect(image).toHaveAttribute('alt', 'baseUrl');
    });
  });
});

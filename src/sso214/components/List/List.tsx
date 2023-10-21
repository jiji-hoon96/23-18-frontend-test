import React from 'react';

interface Props<T> {
  data: T[];
  renderItem: ({ item: T }) => React.ReactNode;
  keyExtractor: (item: T) => string | number;
  containerTag: 'ul' | 'ol' | 'div';
}

const List = <T extends Record<string, { idx: string }>>({
  data,
  renderItem,
  keyExtractor,
  containerTag,
}: Props<T>) => {
  const Container = ({
    children,
    ...props
  }: React.HTMLAttributes<HTMLUListElement | HTMLOListElement | HTMLDivElement>) =>
    React.createElement(containerTag, props, children);

  return (
    <Container>
      {data.map((item) => {
        const key = keyExtractor(item);
        const contents = renderItem({ item });

        return <React.Fragment key={key}>{contents}</React.Fragment>;
      })}
    </Container>
  );
};

export default List;

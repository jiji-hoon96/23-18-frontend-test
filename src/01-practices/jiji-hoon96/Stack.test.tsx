import { render, fireEvent } from '@testing-library/react';
import { Stack } from './Stack';

describe('Stack Component', () => {
  it('옳바르게 랜더링', () => {
    const elements = ['Item 1', 'Item 2', 'Item 3'];
    const { getByText } = render(<Stack elements={elements} />);

    elements.forEach((element) => {
      const item = getByText(element);
      expect(item).toBeInTheDocument();
    });
  });

  it('버튼클릭', () => {
    const elements = ['Item 1', 'Item 2', 'Item 3'];
    const { getByText, queryByText } = render(<Stack elements={elements} />);

    const popButton = getByText('Pop');
    fireEvent.click(popButton);

    const remainingElements = queryByText('Item 2');

    expect(remainingElements).toBeInTheDocument();
  });
});

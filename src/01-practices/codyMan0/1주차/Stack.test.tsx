import { render, screen } from '@testing-library/react';
import Stack from './Stack';

describe('Rendering', () => {
  const elements = ['a', 'b', 'c'];

  it('should render a, b, c list items', () => {
    render(<Stack elements={elements} />);
    const listItems = screen.getAllByRole('listitem');

    listItems.forEach((listItem, index) => {
      expect(listItem).toHaveTextContent(elements[index]);
    });
  });

  it('should render pop button', () => {
    render(<Stack elements={elements} />);
    expect(screen.getByRole('button', { name: 'pop' })).toBeInTheDocument();
  });
});

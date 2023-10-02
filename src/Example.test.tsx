import { render, screen } from '@testing-library/react';
import { Example } from './Example';

describe('Example', () => {
  it('should render without crashing', () => {
    render(<Example />);

    expect(screen.getByText('Hello, World!')).toBeInTheDocument();
  });
});

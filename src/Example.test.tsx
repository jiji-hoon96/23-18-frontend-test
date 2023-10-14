import { render, screen } from '@testing-library/react';
import { Example } from './Example';

describe('Example', () => {
  it('should render without crashing', () => {
    render(<Example />);

    expect(screen.getByText('Hello, World!')).toBeInTheDocument();
  });

  it('should render hidden', () => {
    render(<Example hidden />);

    expect(screen.getByText('Hello, World!')).not.toBeVisible();
  });
});

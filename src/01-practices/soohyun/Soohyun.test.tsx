import { render, screen } from '@testing-library/react';
import Soohyun from './Soohyun';

describe('Example', () => {
  it('should render without crashing', () => {
    render(<Soohyun />);

    expect(screen.getByText('Soohyun')).toBeInTheDocument();
  });
});

import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { App } from './App';

describe('App', () => {
  it('should render without crashing', () => {
    render(<App />);

    expect(screen.getByText('Hello, World!')).toBeInTheDocument();
  });
});

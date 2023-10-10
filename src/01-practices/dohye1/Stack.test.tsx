import { render, screen } from '@testing-library/react';
import Stack from './Stack';
import userEvent from '@testing-library/user-event';

describe('Stack', () => {
  it('렌더링 된다.', () => {
    const stack = ['A', 'B', 'C'];

    render(<Stack stack={stack} />);
    expect(screen.getByRole('button', { name: 'pop' })).toBeInTheDocument();
  });

  it('pop 버튼이 눌리면 A가 stack에서 빠져야한다.', async () => {
    const stack = ['A', 'B', 'C'];

    // given
    const user = userEvent.setup();
    render(<Stack stack={stack} />);

    // when
    const button = screen.getByRole('button', { name: 'pop' });
    await user.click(button);

    // then
    expect(screen.getByTestId('C')).not.toBeInTheDocument();
  });
});

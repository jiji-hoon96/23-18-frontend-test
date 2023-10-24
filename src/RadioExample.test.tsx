import { render } from '@testing-library/react';
import { RadioExample } from './RadioExample';
import userEvent from '@testing-library/user-event';

describe('RadioExample', () => {
  it('가격 목록을 라디오 버튼으로 보여줘야 한다.', () => {
    const { getByRole } = render(
      <RadioExample
        list={[
          { name: 'foo', price: 1000 },
          { name: 'bar', price: 1500 },
        ]}
      />,
    );

    expect(getByRole('radio', { name: 'foo' })).toBeInTheDocument();
    expect(getByRole('radio', { name: 'bar' })).toBeInTheDocument();
  });

  it('처음에 첫 번째 라디오 버튼이 선택되어 있어야 한다.', () => {
    const { getByRole } = render(
      <RadioExample
        list={[
          { name: 'foo', price: 1000 },
          { name: 'bar', price: 1500 },
        ]}
      />,
    );

    expect(getByRole('radio', { name: 'foo' })).toBeChecked();
    expect(getByRole('radio', { name: 'bar' })).not.toBeChecked();

    expect(getByRole('radiogroup')).toHaveFormValues({ menu: '1000' });
  });

  it('라디오 버튼을 클릭하면 해당 버튼이 선택되어야 한다.', async () => {
    const user = userEvent.setup();
    const { getByRole } = render(
      <RadioExample
        list={[
          { name: 'foo', price: 1000 },
          { name: 'bar', price: 1500 },
        ]}
      />,
    );

    const radioButton = getByRole('radio', { name: 'bar' });

    await user.click(radioButton);

    expect(radioButton).toBeChecked();

    expect(getByRole('radiogroup')).toHaveFormValues({ menu: '1500' });
  });
});

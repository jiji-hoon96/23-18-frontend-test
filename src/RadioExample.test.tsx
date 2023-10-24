import { render } from '@testing-library/react';
import { RadioExample } from './RadioExample';
import userEvent from '@testing-library/user-event';

describe('RadioExample', () => {
  it('가격 목록을 라디오 버튼으로 보여줘야 합니다.', () => {
    const { getByRole } = render(
      <RadioExample
        list={[
          { name: 'foo', price: 1000 },
          { name: 'bar', price: 1500 },
        ]}
      />,
    );

    const radiogroup = getByRole('radiogroup');

    expect(radiogroup).toHaveFormValues({
      menuSelect: '1000',
    });
  });

  it('라디오 버튼을 클릭하면 선택되어야 합니다.', async () => {
    const user = userEvent.setup();
    const { getByRole } = render(
      <RadioExample
        list={[
          { name: 'foo', price: 1000 },
          { name: 'bar', price: 1500 },
        ]}
      />,
    );

    const radiogroup = getByRole('radiogroup');

    const radioButton = getByRole('radio', { name: 'bar' });

    expect(radioButton).not.toBeChecked();

    await user.click(radioButton);

    expect(radioButton).toBeChecked();

    expect(radiogroup).toHaveFormValues({
      menuSelect: '1500',
    });
  });
});

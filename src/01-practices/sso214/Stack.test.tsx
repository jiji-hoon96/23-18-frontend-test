import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Stack from './Stack';

function renderStack() {
  const DATA = ['첫번째 손님', '두번째 손님', '세번째 손님'];

  const stack = render(<Stack elements={DATA} />);

  const PopButton = () => stack.getByTestId('button');
  const StackList = () => stack.getByTestId('list');
  const StackItems = () => stack.queryAllByTestId('item');

  const user = userEvent.setup();

  async function clickPopButton() {
    await user.click(PopButton());
  }

  return {
    DATA,
    stack,

    PopButton,
    StackList,
    StackItems,

    clickPopButton,
  };
}

describe('pop 기능이 있는 Stack 컴포넌트 구현', () => {
  it('<Stack />을 처음 렌더링했을 때 화면이 올바르게 노출된다.', () => {
    const { DATA, PopButton, StackList, StackItems } = renderStack();

    expect(PopButton()).toBeInTheDocument();
    expect(StackList()).toBeInTheDocument();
    expect(StackList()).toHaveTextContent(DATA[0]);
    expect(StackList()).toHaveTextContent(DATA[1]);
    expect(StackList()).toHaveTextContent(DATA[2]);
    expect(StackItems().length).toBe(3);
  });

  it('pop 버튼 클릭 시 리스트 마지막 순서의 item 이 제거된다.', async () => {
    const { clickPopButton, StackItems, StackList, DATA } = renderStack();

    await clickPopButton();

    expect(StackItems().length).toBe(2);
    expect(StackList()).toHaveTextContent(DATA[0]);
    expect(StackList()).toHaveTextContent(DATA[1]);
    expect(StackList()).not.toHaveTextContent(DATA[2]);
  });
});

import { useState } from 'react';

interface Props {
  elements: string[];
}

function Stack({elements}: Props) {
  const [state, setState] = useState(elements);

  const handlePop = () => {
    const list = [...state];
    list.pop();
    setState(list);
  }

  return (
    <>
      <button data-testid='button' onClick={handlePop}>pop</button>
      <ul data-testid='list'>
        {state.map((item) => (
          <li key={item} data-testid='item'>{item}</li>
        ))}
      </ul>
    </>
  )
}

export default Stack;

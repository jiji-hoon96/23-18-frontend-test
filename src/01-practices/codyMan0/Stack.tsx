import { useState } from 'react';

const Stack = ({ elements }: { elements: string[] }) => {
  const [stack, setStack] = useState(elements);

  const handleClickPop = () => {
    const newStack = [...stack];
    newStack.pop();
    setStack(newStack);
  };
  return (
    <div>
      <ul>
        {stack.map((item, index) => (
          <li key={index}>{item} </li>
        ))}
      </ul>
      <button onClick={handleClickPop}>pop</button>
    </div>
  );
};

export default Stack;

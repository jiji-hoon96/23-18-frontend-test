import { useState } from 'react';

export default function Stack({ stack: defaultStack }: { stack: string[] }) {
  const [stack, setStack] = useState(defaultStack);

  const handlePop = () => {
    // setStack(stack.toSpliced(0, 1));
    const copied = [...stack];
    copied.pop();
    setStack(copied);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <button onClick={handlePop}>pop</button>
      <ul>
        {stack.map((v) => (
          <li key={v}>{v}</li>
        ))}
      </ul>
    </div>
  );
}

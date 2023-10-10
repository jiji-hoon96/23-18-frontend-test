import { useState } from 'react';

export const Stack = ({ elements }: { elements: string[] }) => {
  const [stackData, setStackData] = useState<string[]>(elements);

  return (
    <>
      <button onClick={() => setStackData(stackData.slice(1))}>Pop</button>
      <ul>
        {elements.map((x: string) => (
          <li key={Math.random()}>{x}</li>
        ))}
      </ul>
    </>
  );
};

import { useState } from 'react';

//내가 한 것
// export const Stack = ({ elements }: any) => {
//     const [data, setDate] = useState()

//     return (
//         <div>
//             <button type="submit">
//                 pop
//             </button>
//         </div>
//     )
// };

export const Stack = ({ elements }: { elements: string[] }) => {
  const [data] = useState(elements);

  return (
    <>
      <button type="submit">
        <ul>
          {data.map((el, ind) => {
            return <li key={ind}>{el}</li>;
          })}
        </ul>
      </button>
    </>
  );
};

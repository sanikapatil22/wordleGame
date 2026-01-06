// import React from 'react';
// import { range } from '@/src/utils';
// import {checkGuess} from '../../game-helpers';

// function Cell({letter, status}) {
//   const className = status ? `cell ${status}` : 'cell';
//   return <div>
//     <span className={className}>
//       {letter}
//         </span>
//   </div>;
// }
// function Guess({value, answer}) {
//   const result = checkGuess(value, answer);;
//   return (
//     <p className='guess'>
//       {range(5).map((num) => (
//         <Cell key={num}
//         letter={result? result[num].letter : undefined}
//         status={result? result[num].status : undefined} />
//       ))}
//     </p>
//   );
// }

// export default Guess;
import React from 'react';
import { range } from '@/src/utils';
import { checkGuess } from '../../game-helpers';

function Cell({ letter, status }) {
  const className = status ? `cell ${status}` : 'cell';
  return <span className={className}>{letter}</span>;
}

function Guess({ value, answer }) {
  const result = value ? checkGuess(value, answer) : null;

  return (
    <p className="guess">
      {range(5).map((num) => {
        const cell = result ? result[num] : null;

        return (
          <Cell
            key={num}
            letter={cell ? cell.letter : ''}
            status={cell ? cell.status : ''}
          />
        );
      })}
    </p>
  );
}

export default Guess;

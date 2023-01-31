import { range } from '../../utils';
import { checkGuess } from '../../game-helpers';

function Guess({ guess, answer }) {
  let checkResults = checkGuess(guess, answer);
  return (
    <p className='guess'>
      {/* {guess
        ? guess.split('').map((char, index) => (
            <span className={`cell ${checkResults[index].status}`} key={index}>
              {char}
            </span>
          ))
        : range(5).map((num) => (
            <span className='cell' key={num}>
              {''}
            </span>
          ))} */}
      {range(5).map((num) => (
        <span className={`cell ${guess && checkResults[num].status}`} key={num}>
          {guess ? guess[num] : undefined}
        </span>
      ))}
    </p>
  );
}

export default Guess;

import { range } from '../../utils';
import { checkGuess } from '../../game-helpers';

function Guess({ guess, answer }) {
  let checkResults = checkGuess(guess, answer);
  return (
    <p className='guess'>
      {guess
        ? guess.split('').map((char, index) => (
            <span className={`cell ${checkResults[index].status}`} key={index}>
              {checkResults[index].letter}
            </span>
          ))
        : range(5).map((num) => (
            <span className='cell' key={num}>
              {''}
            </span>
          ))}
    </p>
  );
}

export default Guess;

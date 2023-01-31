import { range } from '../../utils';

function Guess({ guess }) {
  return (
    <p className='guess'>
      {guess
        ? guess.map((char, index) => (
            <span className='cell' key={index}>
              {char}
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

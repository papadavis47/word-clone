import React from 'react';
import Guess from '../Guess/Guess';
import { range } from '../../utils';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

function GuessResults({ guesses, answer }) {
  return (
    <div className='guess-results'>
      {guesses.map((guess, index) => (
        <Guess guess={guess} key={index} answer={answer} />
      ))}
      {guesses.length < NUM_OF_GUESSES_ALLOWED &&
        range(NUM_OF_GUESSES_ALLOWED - guesses.length).map((num) => <Guess key={num} />)}
    </div>
  );
}

export default GuessResults;

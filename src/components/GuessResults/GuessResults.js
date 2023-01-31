import React from 'react';
import Guess from '../Guess/Guess';

function GuessList({ guesses }) {
  return (
    <div className='guess-results'>
      {guesses.length > 0 && guesses.map((guess, index) => <Guess key={index} />)}
    </div>
  );
}

export default GuessList;

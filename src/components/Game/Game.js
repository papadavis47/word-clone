import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput/GuessInput';
import GuessList from '../GuessResults/GuessResults';
// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  console.log(guesses);

  function handleSubmitGuess(tentativeGuess) {
    const arrGuess = tentativeGuess.split('');
    setGuesses([...guesses, arrGuess]);
  }

  return (
    <>
      <GuessList guesses={guesses} />
      <GuessInput handleSubmitGuess={handleSubmitGuess} />
    </>
  );
}

export default Game;

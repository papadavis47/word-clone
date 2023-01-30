import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput/GuessInput';
// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guess, setGuess] = React.useState('');

  // function handleGuess(event) {
  //   setGuess(event.target.value.toUppercase())
  // }
  return (
    <>
      <GuessInput guess={guess} setGuess={setGuess} />
    </>
  );
}

export default Game;

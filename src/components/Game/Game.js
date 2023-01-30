import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput/GuessInput';
import GuessList from '../GuessList/GuessList';
// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guess, setGuess] = React.useState('');
  const [list, setList] = React.useState([]);

  // function handleGuess(event) {
  //   setGuess(event.target.value.toUppercase())
  // }
  return (
    <>
      <GuessList list={list} />
      <GuessInput guess={guess} setGuess={setGuess} list={list} setList={setList} />
    </>
  );
}

export default Game;

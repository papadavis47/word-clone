import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import GuessInput from '../GuessInput/GuessInput';
import GuessResults from '../GuessResults/GuessResults';
// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);

  const [win, setWin] = React.useState(false);
  const [lose, setLose] = React.useState(false);

  function handleSubmitGuess(tentativeGuess) {
    if (guesses.length < NUM_OF_GUESSES_ALLOWED) {
      setGuesses([...guesses, tentativeGuess]);
    } else {
      window.alert('Sorry. No more guess allowed 😄');
    }
    if (tentativeGuess === answer) {
      setWin(true);
    }
    if (!win && guesses.length === NUM_OF_GUESSES_ALLOWED - 1) {
      setLose(true);
    }
  }

  return (
    <>
      <GuessResults guesses={guesses} answer={answer} />
      <GuessInput
        guesses={guesses}
        lose={lose}
        win={win}
        answer={answer}
        handleSubmitGuess={handleSubmitGuess}
      />
    </>
  );
}

export default Game;

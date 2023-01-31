import React from 'react';
import EndBanner from '../EndBanner/EndBanner';

function GuessInput({ guesses, handleSubmitGuess, win, lose, answer }) {
  const [tentativeGuess, setTentativeGuess] = React.useState('');
  function handleSubmit(event) {
    event.preventDefault();
    if (tentativeGuess.length !== 5) {
      window.alert('Wrong number of letters. Try again 😃');
      return;
    }
    // setList([...list, { id: Math.random(), value: guess }]);
    handleSubmitGuess(tentativeGuess);
    setTentativeGuess('');
  }

  return (
    <form className='guess-input-wrapper' onSubmit={handleSubmit}>
      {win || lose ? <EndBanner guesses={guesses} win={win} lose={lose} answer={answer} /> : null}
      <label htmlFor='guess-input'>Enter guess:</label>
      <input
        disabled={win || lose ? true : false}
        required
        minLength={5}
        maxLength={5}
        id='guess-input'
        type='text'
        value={tentativeGuess}
        onChange={(event) => setTentativeGuess(event.target.value.toUpperCase())}
      />
    </form>
  );
}

export default GuessInput;

import React from 'react';

function GuessInput({ list, setList, guess, setGuess }) {
  function handleSubmit(event) {
    event.preventDefault();
    if (guess.length !== 5) {
      window.alert('Wrong number of letters. Try again 😃');
      return;
    }
    setList([...list, { id: Math.random(), value: guess }]);
    console.info({ guess });
    setGuess('');
  }

  return (
    <form className='guess-input-wrapper' onSubmit={handleSubmit}>
      <label htmlFor='guess-input'>Enter guess:</label>
      <input
        required
        minLength={5}
        maxLength={5}
        id='guess-input'
        type='text'
        value={guess}
        onChange={(event) => setGuess(event.target.value.toUpperCase())}
      />
    </form>
  );
}

export default GuessInput;

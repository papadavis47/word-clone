import React from 'react';

function EndBanner({ guesses, win, lose, answer }) {
  const result = win ? 'happy' : 'sad';
  return (
    <div className={`${result} banner`}>
      {lose ? (
        <p>
          Sorry, the correct answer is <strong>{answer}</strong>.
        </p>
      ) : (
        <p>
          <strong>Congratulations!</strong> Got it in <strong>{guesses.length} guesses</strong>.
        </p>
      )}
    </div>
  );
}

export default EndBanner;

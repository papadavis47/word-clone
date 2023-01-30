import React from 'react';

function GuessList({ list }) {
  return (
    <div className='guess-results'>
      {list.length > 0 &&
        list.map(({ id, value }) => (
          <p className='guess' key={id}>
            {value}
          </p>
        ))}
    </div>
  );
}

export default GuessList;

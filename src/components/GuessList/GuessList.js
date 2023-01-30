import React from 'react';

function GuessList({ list }) {
  return (
    <div className='guess-results'>
      {list.length > 0 && list.map((item) => <p className='guess'>{item}</p>)}
    </div>
  );
}

export default GuessList;

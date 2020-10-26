import React from 'react';
import PropTypes from 'prop-types';

import './Input.scss';

function Input({ secretWord }) {
  const [currentGuess, setCurrentGuess] = React.useState('');

  return (
    <div className='container'>
      <section
        data-test='input-component'
        className='input-component'>
        <form>
          <input
            data-test='input-box'
            className='input-box'
            type='text'
            placeholder='enter guess'
            value={currentGuess}
            onChange={(e) => setCurrentGuess(e.target.value)} />
          <button
            data-test='submit-button'
            className='submit-button'
            onClick={(e) => {
              e.preventDefault();
              // TODO: Update guessedWords
              // TODO: Check against secretWord and update success if needed.
              setCurrentGuess('');
            }}>
            <span>Submit</span>
          </button>
        </form>
      </section>
    </div>
  );
}

Input.propTypes = {
  secretWord: PropTypes.string.isRequired,
}

export default Input;
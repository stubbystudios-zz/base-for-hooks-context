import React from 'react';
import PropTypes from 'prop-types';

function Input({ secretWord }) {
  const [currentGuess, setCurrentGuess] = React.useState('');

  return (
    <div className='container'>
      <section data-test='input-component'>
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
            className='submit-button'>
            Submit
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
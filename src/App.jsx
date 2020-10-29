import React from 'react';
import hookActions from './actions/hookActions';
import languageContext from './contexts/languageContext';
import languageContexts from './contexts/languageContext';

import Input from './Input/Input';
import LanguagePicker from './LanguagePicker/LanguagePicker';

/**
 * Reducer to update state, called automatically by dispatch.
 * @param state {object} - Existing state.
 * @param action {object} - Contains 'type' and 'payload' properties for the state update.
 *                    for example: { type: 'setSecretWord', payload: 'party' }
 * @returns {object} - new state.
 */
function reducer(state, action) {
  switch (action.type) {
    case 'setSecretWord':
      return { ...state, secretWord: action.payload };
    case 'setLanguage':
      return { ...state, language: action.payload };
    default:
      throw new Error(`Invalid action type: ${action.type}`);
  }
}

function App() {
  const [state, dispatch] = React.useReducer(
    reducer,
    { secretWord: null, language: 'en' }
  )

  const setSecretWord = (secretWord) =>
    dispatch({ type: 'setSecretWord', payload: secretWord });
  const setLanguage = (language) =>
    dispatch({ type: 'setLanguage', payload: language })

  React.useEffect(
    () => { hookActions.getSecretWord(setSecretWord) },
    []
  )

  if (!state.secretWord) {
    return (
      <section className='container' data-test='spinner'>
        <div className='spinner-border' role='status'>
          <span className='sr-only'>Loading...</span>
        </div>
        <p>Loading secret word...</p>
      </section>
    );
  }

  return (
    <section data-test='component-app'>
      <languageContext.Provider value={state.language}>
        <section className='top-banner'>
          <LanguagePicker setLanguage={setLanguage} />
        </section>
        <div className='container'>
          <header>
            <h1>Jotto Word Game</h1>
          </header>
          <Input secretWord={state.secretWord} />
        </div>
      </languageContext.Provider>
    </section>
  );
}

export default App;

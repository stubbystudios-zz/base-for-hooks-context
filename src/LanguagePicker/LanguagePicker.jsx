import React from 'react';
import propTypes from 'prop-types';

import './LanguagePicker.scss';

function LanguagePicker({ setLanguage }) {
  const languages = [
    { code: 'en', symbol: '🇺🇸' },
    { code: 'emoji', symbol: '😀' },
  ];

  const languageIcons = languages.map(lang =>
    <li
      data-test='language-icon'
      key={lang.code}
      onClick={() => setLanguage(lang.code)}
    >
      {lang.symbol}
    </li>
  );

  return (
    <ul
      className='component-language-picker'
      data-test='component-language-picker'>
      {languageIcons}
    </ul>
  );
}

LanguagePicker.propTypes = {
  setLanguage: propTypes.func.isRequired,
}

export default LanguagePicker;
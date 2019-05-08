import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './AddWordForm.css';

const AddWordForm = props => {
  const initialWordState = {
    id: null,
    englishWord: '',
    russianTranslation: '',
    important: false,
  };
  const [word, setWord] = useState(initialWordState);

  const handleInputChange = e => {
    const { name, value } = e.currentTarget;
    setWord({ ...word, [name]: value });
  };

  const submitWord = e => {
    e.preventDefault();

    if (!word.englishWord || !word.russianTranslation) return;
    props.addWord(word);
    setWord(initialWordState);
  };
  return (
    <form className="App__form AddWordForm">
      <input
        type="text"
        placeholder="english word"
        name="englishWord"
        value={word.englishWord}
        onChange={handleInputChange}
        className="AddWordForm__input"
      />
      <input
        type="text"
        placeholder="russian translation"
        name="russianTranslation"
        value={word.russianTranslation}
        onChange={handleInputChange}
        className="AddWordForm__input"
      />
      <button
        onClick={submitWord}
        disabled={false}
        className="App__btn AddWordForm__btn-add"
      >
        Add
      </button>
    </form>
  );
};

AddWordForm.propTypes = {
  addWord: PropTypes.func.isRequired,
};

export { AddWordForm };

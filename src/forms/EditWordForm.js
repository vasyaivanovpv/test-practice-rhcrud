import React, { useState, useContext, useEffect } from 'react';
import { EditInput } from './EditWordForm/EditInput';
import { AppContext } from '../utils/context';
import PropTypes from 'prop-types';

import './EditWordForm.css';

const EditWordForm = props => {
  const { word } = props;
  const [updateWord, removeWord] = useContext(AppContext);
  const initialSelectedWord = {
    id: null,
    englishWord: '',
    russianTranslation: '',
    important: false,
  };
  const [selectedWord, setSelectedWord] = useState(initialSelectedWord);

  useEffect(() => {
    setSelectedWord({
      id: word.id,
      englishWord: word.englishWord,
      russianTranslation: word.russianTranslation,
      important: word.important,
    });
  }, [word]);

  const handleRemoveWord = () => {
    removeWord(word.id);
  };

  const handlePinWord = () => {
    const updatePinWord = selectedWord;
    updatePinWord.important = !word.important;
    setSelectedWord(updatePinWord);
    updateWord(updatePinWord);
  };

  return (
    <div
      className={
        'App__form EditWordForm ' +
        (word.important ? 'EditWordForm_important' : '')
      }
    >
      {console.log('render edit')}
      <div className="EditWordForm__form">
        <EditInput
          name="englishWord"
          wordByType={word.englishWord}
          selectedWord={selectedWord}
          updateWord={updateWord}
        />
        <EditInput
          name="russianTranslation"
          wordByType={word.russianTranslation}
          selectedWord={selectedWord}
          updateWord={updateWord}
        />
      </div>
      <button
        className="App__btn EditWordForm__btn EditWordForm__btn-del"
        onClick={handleRemoveWord}
      >
        Delete
      </button>
      <button
        className="App__btn EditWordForm__btn EditWordForm__btn-pin"
        onClick={handlePinWord}
      >
        {!word.important ? 'Pin' : 'Unpin'}
      </button>
    </div>
  );
};

EditWordForm.propTypes = {
  word: PropTypes.object.isRequired,
};

export { EditWordForm };

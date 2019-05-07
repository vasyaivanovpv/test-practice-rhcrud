import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import './EditInput.css';

const EditInput = props => {
  const [editing, setEditing] = useState(false);
  const [currentWord, setCurrentWord] = useState(props.selectedWord);

  const handleChangeInput = e => {
    const { name, value } = e.currentTarget;
    setCurrentWord({ ...currentWord, [name]: value });
  };
  const updateWord = () => {
    if (!editing) return;
    setEditing(false);
    props.updateWord(currentWord);
  };

  const handleClickUpdateWord = e => {
    e.preventDefault();
    updateWord();
  };

  const handleKeyDownUpdateWord = e => {
    if (e.key === 'Enter') {
      updateWord();
    }
  };

  const handleEditWord = () => {
    if (editing) return;
    setEditing(true);
  };

  useEffect(() => {
    setCurrentWord(props.selectedWord);
  }, [props]);

  return (
    <div className="EditInput">
      <span>{props.name.slice(0, 3)}</span>
      <input
        type="text"
        readOnly={!editing}
        name={props.name}
        value={currentWord[props.name]}
        onChange={handleChangeInput}
        onClick={handleEditWord}
        onKeyDown={handleKeyDownUpdateWord}
        className={
          'EditInput__input ' + (editing ? 'EditInput__input-edit' : '')
        }
      />
      <button hidden onClick={handleClickUpdateWord} className="App__btn">
        Save
      </button>
    </div>
  );
};

EditInput.propTypes = {
  selectedWord: PropTypes.object.isRequired,
  updateWord: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};

export { EditInput };

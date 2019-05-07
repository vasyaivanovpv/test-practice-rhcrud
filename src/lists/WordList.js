import React from 'react';
import { EditWordForm } from '../forms/EditWordForm';
import PropTypes from 'prop-types';

const WordList = props => {
  const renderDataList = () => {
    const reverseSortWords = props.words
      .slice()
      .reverse()
      .sort((a, b) => {
        return b.important - a.important;
      });
    return reverseSortWords.map(word => (
      <EditWordForm key={word.id} word={word} />
    ));
  };

  return (
    <div>
      {console.log('render list')}
      {renderDataList()}
    </div>
  );
};

WordList.propTypes = {
  words: PropTypes.array.isRequired,
};

export { WordList };

import React, { useState, useEffect } from 'react';
import { AddWordForm } from './forms/AddWordForm';
import { WordList } from './lists/WordList';
import './App.css';
import { AppContext } from './utils/context';

const App = () => {
  const dataList = [
    {
      id: 1,
      englishWord: 'dictionary',
      russianTranslation: 'словарь',
      important: true,
    },
  ];
  const [words, setWords] = useState(null);

  useEffect(() => {
    const initialWords = JSON.parse(localStorage.getItem('words')) || dataList;
    setWords(initialWords);
  }, []);

  useEffect(() => {
    localStorage.setItem('words', JSON.stringify(words));
  }, [words]);

  const addWord = word => {
    if (words.length > 0) {
      word.id = words[words.length - 1].id + 1;
    } else {
      word.id = 1;
    }
    setWords([...words, word]);
  };

  const removeWord = id => {
    setWords(words.filter(word => word.id !== id));
  };

  const updateWord = newWord => {
    setWords(words.map(word => (word.id === newWord.id ? newWord : word)));
  };

  return (
    <AppContext.Provider value={[updateWord, removeWord]}>
      <div className="App">
        <header className="App__header">
          <h1>English Dictionary</h1>
        </header>
        <AddWordForm addWord={addWord} />
        {!!words && <WordList words={words} />}
      </div>
    </AppContext.Provider>
  );
};

export default App;

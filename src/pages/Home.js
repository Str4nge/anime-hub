import React, { useState } from 'react';
import MainPageLayout from '../components/MainPageLayout';
import { getApiResult } from '../config';

const Home = () => {
  const [input, setInput] = useState('');
  const [results, setResults] = useState(null);

  const search = () => {
    getApiResult(`filter[text]=${input}`).then(result => {
      setResults(result.data);
      console.log(result.data);
    });
  };

  const keyPress = ev => {
    if (ev.keyCode === 13) {
      search();
    }
  };
  const inputChange = ev => {
    setInput(ev.target.value);
  };

  const renderResult = () => {
    if (results && results.length === 0) {
      return <div>No Results</div>;
    }
    if (results && results.length > 0) {
      return (
        <div>
          {results.map(item => {
            return (
              <div key={item.id}>
                {' '}
                {item.attributes.titles.en_jp} | {item.attributes.titles.ja_jp}
              </div>
            );
          })}
        </div>
      );
    }
    return null;
  };

  return (
    <MainPageLayout>
      <input
        type="text"
        onChange={inputChange}
        value={input}
        onKeyDown={keyPress}
      />
      <button type="button" onClick={search}>
        Search
      </button>
      {renderResult()}
    </MainPageLayout>
  );
};

export default Home;

import React, { useState } from 'react';
import MainPageLayout from '../components/MainPageLayout';
import AnimeGrid from '../components/anime/AnimeGrid';
import MangaGrid from '../components/manga/MangaGrid';
import { getApiResult } from '../config';

const Home = () => {
  const [input, setInput] = useState('');
  const [results, setResults] = useState(null);
  const [srchOpt, setSrchOpt] = useState('anime');

  const isAnimeOpted = srchOpt === 'anime';

  const search = () => {
    getApiResult(`${srchOpt}?filter[text]=${input}`).then(result => {
      setResults(result.data);
      // console.log(result.data);
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

  const radioChange = ev => {
    setSrchOpt(ev.target.value);
  };

  const renderResult = () => {
    if (results && results.length === 0) {
      return <div>No Results</div>;
    }
    if (results && results.length > 0) {
      return srchOpt === 'anime' ? (
        <AnimeGrid data={results} />
      ) : (
        <MangaGrid data={results} />
      );
    }
    return null;
  };

  return (
    <MainPageLayout>
      <input
        type="text"
        placeholder="Enter here to search"
        onChange={inputChange}
        value={input}
        onKeyDown={keyPress}
      />
      <div>
        <label htmlFor="anime">
          Anime
          <input
            type="radio"
            id="anime"
            value="anime"
            onChange={radioChange}
            checked={isAnimeOpted}
          />
        </label>
        <label htmlFor="manga">
          Manga
          <input
            type="radio"
            id="manga"
            value="manga"
            onChange={radioChange}
            checked={!isAnimeOpted}
          />
        </label>
      </div>
      <button type="button" onClick={search}>
        Search
      </button>

      {renderResult()}
    </MainPageLayout>
  );
};

export default Home;
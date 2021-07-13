import React, { useState } from 'react';
import MainPageLayout from '../components/MainPageLayout';
import AnimeGrid from '../components/anime/AnimeGrid';
import MangaGrid from '../components/manga/MangaGrid';
import { getApiResult } from '../config';
import { usePersistedQuery } from '../custom-hooks';

const Home = () => {
  const [input, setInput] = usePersistedQuery();
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
      return <div className="err-img">No Results</div>;
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
    <div className="home">
      <MainPageLayout>
        <input
          className="search"
          type="text"
          placeholder="Enter here to search"
          onChange={inputChange}
          value={input}
          onKeyDown={keyPress}
        />
        <div className="radio">
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
          </div>

          <div>
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
        </div>
        <div className="btn-wrapper">
          <button type="button" onClick={search}>
            Search
          </button>
        </div>

        {renderResult()}
      </MainPageLayout>
      <footer>
        An anime disovering website powered by <i>&copy;Kitsu</i>, handcrafted
        by Str4nge
      </footer>
    </div>
  );
};

export default Home;

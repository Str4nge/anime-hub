import React, { useState, useEffect } from 'react';
import MainPageLayout from '../components/MainPageLayout';
import { useStarred } from '../custom-hooks';
import { getApiResult } from '../config';
import AnimeGrid from '../components/anime/AnimeGrid';

const Starred = () => {
  const [starred] = useStarred();
  const [starredList, setStarredList] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (starred && starred.length > 0) {
      const promises = starred.map(({ data, type }) => {
        return getApiResult(`${type}/${data}`);
      });

      Promise.all(promises)
        .then(apidata =>
          apidata.map(spread => {
            return spread.data;
          })
        )
        .then(results => {
          setStarredList(results);
          // console.log(results);
          setIsLoading(false);
        })
        .catch(err => {
          setIsLoading(false);
          setError(err);
        });
    } else {
      setIsLoading(false);
    }
  }, [starred]);

  return (
    <MainPageLayout>
      <div className="home">
        {isLoading && <div>Data is Loading...</div>}
        {error && <div>Error Occured</div>}
        {!isLoading && !starredList && (
          <div className="err-img">No Starred shows</div>
        )}
        {!isLoading && starredList && (
          <div>
            <AnimeGrid data={starredList} />
          </div>
        )}
        <footer>
          An anime disovering website powered by <i>&copy;Kitsu</i>, handcrafted
          by Str4nge
        </footer>
      </div>
    </MainPageLayout>
  );
};

export default Starred;

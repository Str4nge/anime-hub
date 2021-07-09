/* eslint-disable no-unneeded-ternary */
import React, { useState, useEffect } from 'react';
import { getApiResult } from '../config';
import { DetailsWrapper, TagList } from './StyledDetail';

const BASE_URL = 'https://kitsu.io/api/edge';

const Details = ({ id, rating, count, status, genreString }) => {
  const [genre, setGenre] = useState(null);
  const { epsCnt, vlmCnt } = count;

  useEffect(() => {
    let isMounted = true;

    getApiResult(genreString).then(res => {
      if (isMounted) {
        setGenre(res.data);
      }
    });

    return () => {
      isMounted = false;
    };
  }, [genreString]);

  return (
    <DetailsWrapper>
      <p>Average rating: {rating}</p>
      <div>
        <p>
          Status: <span>{status}</span>
        </p>
        <p>
          Total {epsCnt ? 'Episodes' : 'Volume'}: {epsCnt ? epsCnt : vlmCnt}
        </p>
      </div>
      <div>
        Tags:
        <TagList>
          {genre &&
            genre.map(item => (
              <span key={item.id}>{item.attributes.name}</span>
            ))}
        </TagList>
      </div>
      <a href={`${BASE_URL}/anime/${id}`} rel="noreferrer" target="_blank">
        {id}
      </a>
    </DetailsWrapper>
  );
};

export default Details;

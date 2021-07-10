/* eslint-disable no-unneeded-ternary */
import React, { useState, useEffect } from 'react';
import { getApiResult } from '../config';
import { DetailsWrapper, TagList } from './StyledDetail';

const BASE_URL = 'https://kitsu.io';

const Details = ({ id, rating, count, status, genreString, ctg }) => {
  const [genre, setGenre] = useState(null);

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
          Total {ctg === 'anime' ? 'Episodes' : 'Volume'}: {count}
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
      checkout what others think{' '}
      <a href={`${BASE_URL}/${ctg}/${id}`} rel="noreferrer" target="_blank">
        here
      </a>
    </DetailsWrapper>
  );
};

export default Details;

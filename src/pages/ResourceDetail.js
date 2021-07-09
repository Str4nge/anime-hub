import React, { useReducer, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getApiResult } from '../config';
import MainData from '../components/MainData';
import Details from '../components/Details';

const reducer = (prevState, action) => {
  switch (action.type) {
    case 'FETCH-SUCCESS': {
      return { details: action.details, isLoading: false, error: null };
    }
    case 'FETCH-FAILED': {
      return { ...prevState, isLoading: false, error: action.error };
    }
    default: {
      return prevState;
    }
  }
};
const initialState = {
  details: null,
  isLoading: true,
  error: null,
};

const AnimeDetail = ({ category }) => {
  const params = useParams();
  const [{ details, isLoading, error }, dispatch] = useReducer(
    reducer,
    initialState
  );

  useEffect(() => {
    let isMounted = true;

    getApiResult(`/${category}/${params.id}`)
      .then(res => {
        if (isMounted) {
          dispatch({ type: 'FETCH-SUCCESS', details: res });
        }
      })
      .catch(err => {
        dispatch({ type: 'FETCH-FAILED', error: err.message });
      });

    return () => {
      isMounted = false;
    };
  }, [params.id, category]);

  console.log(details);

  if (isLoading) {
    return <div>Data is Loading...</div>;
  }
  if (error) {
    return <div>Error Occurred: {error}</div>;
  }

  const data = details.data.attributes;
  // console.log(data);

  return (
    <div>
      <MainData
        image={data.posterImage.small}
        title={{ eng: data.titles.en_jp, jpn: data.titles.ja_jp }}
        description={data.description}
      />
      <div>
        <h2>Details</h2>
        <Details
          id={params.id}
          rating={data.averageRating}
          count={{ epsCnt: data.episodeCount, vlmCnt: data.volumeCount }}
          status={data.status}
          genreString={`${category}/${params.id}/genres`}
        />
      </div>
    </div>
  );
};

export default AnimeDetail;
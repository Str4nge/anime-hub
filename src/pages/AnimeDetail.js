import React, { useReducer, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getApiResult } from '../config';

const BASE_URL = 'https://kitsu.io/api/edge';
const reducer = (prevState, action) => {
  switch (action.type) {
    case 'FETCH-SUCCESS': {
      return { details: action.detail, isLoading: false, error: null };
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

const AnimeDetail = () => {
  const params = useParams();
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    let isMounted = true;

    getApiResult(`/anime/${params.id}`)
      .then(res => {
        setTimeout(() => {
          if (isMounted) {
            dispatch({ type: 'FETCH-SUCCESS', detail: res });
          }
        }, 2000);
      })
      .catch(err => {
        dispatch({ type: 'FETCH-FAILED', error: err });
      });

    return () => {
      isMounted = false;
    };
  }, [params.id]);

  console.log(state);

  if (state.isLoading) {
    return <div>Data is Loading...</div>;
  }
  if (state.error) {
    return <div>Error Occurred: {state.error}</div>;
  }

  return (
    <div>
      <a
        href={`${BASE_URL}/anime/${params.id}`}
        rel="noreferrer"
        target="_blank"
      >
        {params.id}
      </a>
    </div>
  );
};

export default AnimeDetail;

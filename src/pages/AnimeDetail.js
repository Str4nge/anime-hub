import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getApiResult } from '../config';

const BASE_URL = 'https://kitsu.io/api/edge';

const AnimeDetail = () => {
  const params = useParams();
  const [details, setDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    getApiResult(`/anime/${params.id}`)
      .then(res => {
        setTimeout(() => {
          if (isMounted) {
            setDetails(res);
            setIsLoading(false);
          }
        }, 2000);
      })
      .catch(err => {
        setError(err.message);
        setIsLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, [params.id]);

  console.log(params, details);

  if (isLoading) {
    return <div>Data is Loading...</div>;
  }
  if (error) {
    return <div>Error Occurred: {error}</div>;
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

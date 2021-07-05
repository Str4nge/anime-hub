import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getApiResult } from '../config';

const BASE_URL = 'https://kitsu.io/api/edge';

const AnimeDetail = () => {
  const params = useParams();
  const [details, setDetails] = useState(null);

  useEffect(() => {
    getApiResult(`/anime/${params.id}`).then(res => {
      setDetails(res);
    });
  }, [params.id]);

  console.log(params, details);
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

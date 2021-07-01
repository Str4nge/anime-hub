import React from 'react';
import { Link } from 'react-router-dom';

const AnimeCard = ({ title, image, id, description }) => {
  const { eng, jpn } = title;
  const shortDesc = `${description.split(' ').slice(0, 10).join(' ')}...`;
  return (
    <div>
      <h4>
        {eng} | {jpn}
      </h4>
      <img src={image} alt={`${eng}_image`} />
      <p>{shortDesc}</p>
      <Link to={`/anime/${id}`}>Read more</Link>
    </div>
  );
};

export default AnimeCard;

import React from 'react';
import { Link } from 'react-router-dom';
import { StyledMangaCard } from './MangaCard.styled';

const MangaCard = ({ title, image, id, description }) => {
  const { eng, jpn } = title;
  const shortDesc = description
    ? `${description.split(' ').slice(0, 10).join(' ')}...`
    : 'No Description!';
  return (
    <StyledMangaCard>
      <div className="img-wrapper">
        <img src={image} alt={`${eng}_image`} />
      </div>
      <h4>{eng ? `${eng}` : 'No title found!'}</h4>
      <h4>{jpn}</h4>
      <p>{shortDesc}</p>
      <div className="btns">
        <Link to={`/manga/${id}`}>Read more</Link>
      </div>
    </StyledMangaCard>
  );
};

export default MangaCard;

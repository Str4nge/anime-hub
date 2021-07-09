import React from 'react';
import { Headline, MainDataWrapper } from './MainData.styled';

const MainData = ({ title, description, image }) => {
  return (
    <MainDataWrapper>
      <img src={image} alt="show-cover" />
      <div className="text-side">
        <Headline>
          <h2>{title.eng}</h2>
          <span>{title.jpn}</span>
        </Headline>

        <div className="summary">
          <p>{description}</p>
        </div>
      </div>
    </MainDataWrapper>
  );
};

export default MainData;

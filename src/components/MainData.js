import React from 'react';

const MainData = ({ title, description, image }) => {
  return (
    <div>
      <img src={image} alt="show-cover" />
      <div>
        <h1>{title.eng}</h1>
        <div>
          <p>{title.jpn}</p>
        </div>
      </div>
      <div>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default MainData;

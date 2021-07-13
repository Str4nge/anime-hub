import React from 'react';

const Title = ({ title, subtitle }) => {
  return (
    <div className="title">
      <h1>{title}</h1>
      <p>{subtitle}</p>
      <hr />
    </div>
  );
};

export default Title;

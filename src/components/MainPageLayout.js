import React from 'react';
import Navs from './Navs';
import Title from './Title';

const MainPageLayout = ({ children }) => {
  return (
    <div>
      <Title
        title="Anime Hub"
        subtitle="Platform to discover Animes and Mangas "
      />
      <Navs />
      {children}
    </div>
  );
};
export default MainPageLayout;

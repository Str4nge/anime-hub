import React from 'react';
import AnimeCard from './AnimeCard';

const AnimeGrid = ({ data }) => {
  return (
    <div className="flex-wrap">
      {data.map(item => {
        return (
          <AnimeCard
            key={item.id}
            title={{
              eng: item.attributes.titles.en_jp,
              jpn: item.attributes.titles.ja_jp,
            }}
            id={item.id}
            description={item.attributes.description}
            image={item.attributes.posterImage.small}
          />
        );
      })}
    </div>
  );
};

export default AnimeGrid;

import React from 'react';
import MangaCard from './MangaCard';

const MangaGrid = ({ data }) => {
  return (
    <div className="flex-wrap">
      {data.map(({ id, attributes }) => {
        return (
          <MangaCard
            key={id}
            title={{
              eng: attributes.titles.en_jp,
              jpn: attributes.titles.ja_jp,
            }}
            id={id}
            description={attributes.description}
            image={attributes.posterImage.small}
          />
        );
      })}
    </div>
  );
};

export default MangaGrid;

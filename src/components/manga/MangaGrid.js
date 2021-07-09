import React from 'react';
import MangaCard from './MangaCard';
import { FlexGrid } from '../Styled';

const MangaGrid = ({ data }) => {
  return (
    <FlexGrid>
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
    </FlexGrid>
  );
};

export default MangaGrid;

import React from 'react';
import MangaCard from './MangaCard';
import { FlexGrid } from '../Styled';
import { useStarred } from '../../custom-hooks';

const MangaGrid = ({ data }) => {
  const [starredShows, dispatchStarred] = useStarred();

  return (
    <FlexGrid>
      {data.map(({ id, attributes }) => {
        const isStarred = starredShows.find(element => {
          return element.data === id;
        });
        const toggleStar = () => {
          if (isStarred) {
            dispatchStarred({ type: 'REMOVE', resourceID: id });
          } else {
            dispatchStarred({ type: 'ADD', resourceID: id, val: 'manga' });
          }
        };
        return (
          <MangaCard
            key={id}
            title={{
              eng: attributes.titles.en_jp,
              jpn: attributes.titles.ja_jp,
            }}
            id={id}
            isStarred={isStarred}
            description={attributes.description}
            image={attributes.posterImage.small}
            toggleStar={toggleStar}
          />
        );
      })}
    </FlexGrid>
  );
};

export default MangaGrid;

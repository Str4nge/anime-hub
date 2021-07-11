import React from 'react';
import AnimeCard from './AnimeCard';
import { FlexGrid } from '../Styled';
import { useStarred } from '../../custom-hooks';

const AnimeGrid = ({ data }) => {
  const [starredShows, dispatchStarred] = useStarred();

  return (
    <FlexGrid>
      {data.map(item => {
        const isStarred = starredShows.find(element => {
          return element.data === item.id;
        });
        const toggleStar = () => {
          if (isStarred) {
            dispatchStarred({ type: 'REMOVE', resourceID: item.id });
          } else {
            dispatchStarred({ type: 'ADD', resourceID: item.id, val: 'anime' });
          }
        };
        return (
          <AnimeCard
            key={item.id}
            toggleStar={toggleStar}
            title={{
              eng: item.attributes.titles.en_jp,
              jpn: item.attributes.titles.ja_jp,
            }}
            id={item.id}
            isStarred={isStarred}
            description={item.attributes.description}
            image={item.attributes.posterImage.small}
          />
        );
      })}
    </FlexGrid>
  );
};

export default AnimeGrid;

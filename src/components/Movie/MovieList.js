import React from 'react';
import styled from 'styled-components';

import MovieCard from './MovieCard';
import ListViewMore from './ListViewMore';

function MovieList({ movieList, onLoadMore, alertModal, setAlertModal }) {
  return (
    <>
      <CardList>
        {movieList.map(card => {
          return (
            <li key={card.id}>
              <MovieCard data={card} alertModal={alertModal} setAlertModal={setAlertModal} />
            </li>
          );
        })}
      </CardList>
      <ListViewMore onLoadMore={onLoadMore} />
    </>
  );
}

const CardList = styled.ol`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;

  margin-left: -60px;
`;

export default MovieList;

import React from 'react';
import styled from 'styled-components';

import MovieCard from './MovieCard';

function MovieList({ movieList }) {
  return (
    <>
      <CardList>
        {movieList.map(card => {
          return (
            <li key={card.id}>
              <MovieCard />
            </li>
          );
        })}
      </CardList>
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

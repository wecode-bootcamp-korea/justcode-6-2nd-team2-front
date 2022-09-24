import React from 'react';
import styled from 'styled-components';
import { IoIosArrowDown } from 'react-icons/io';

import MovieCard from './MovieCard';

function MovieList({ movieList, onLoadMore }) {
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
      <CardListMore onClick={onLoadMore}>
        더보기 <IoIosArrowDown />
      </CardListMore>
    </>
  );
}

const CardList = styled.ol`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;

  margin-left: -60px;
`;

const CardListMore = styled.button`
  width: 100%;
  height: 40px;

  margin-top: 20px;

  border: 1px solid #eaeaea;
  background-color: transparent;
  color: #666;

  &:hover {
    cursor: pointer;
    border: 1px solid #666;
  }
`;

export default MovieList;

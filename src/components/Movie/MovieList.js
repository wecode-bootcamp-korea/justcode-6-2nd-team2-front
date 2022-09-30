import React from 'react';
import styled from 'styled-components';

import MovieCard from './MovieCard';
import ListViewMore from './ListViewMore';
import DataNull from './DataNull';

function MovieList({ movieList, onLoadMore, likeLoader, alertModal, setAlertModal }) {
  return (
    <>
      {Array.isArray(movieList) && movieList.length > 0 ? (
        <>
          <CardList>
            {movieList.map(card => {
              return (
                <li key={card.id}>
                  <MovieCard
                    data={card}
                    likeLoader={likeLoader}
                    alertModal={alertModal}
                    setAlertModal={setAlertModal}
                  />
                </li>
              );
            })}
          </CardList>
          <ListViewMore onLoadMore={onLoadMore} text='더보기' />
        </>
      ) : (
        <DataNull />
      )}
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

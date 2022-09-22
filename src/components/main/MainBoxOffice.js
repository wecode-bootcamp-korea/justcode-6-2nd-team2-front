import React from 'react';
import styled from 'styled-components';

import MoviePoster from '../Movie/MoviePoster';
import MovieLike from '../Movie/MovieLike';
import MovieBook from '../Movie/MovieBook';

function MainBoxOffice({ cardList }) {
  return (
    <BoxOffice>
      {cardList.map(card => {
        return (
          <li key={card.id}>
            <List>
              <MoviePoster />
              <Button>
                <MovieLike />
                <MovieBook />
              </Button>
            </List>
          </li>
        );
      })}
    </BoxOffice>
  );
}

const BoxOffice = styled.ol`
  display: flex;
  flex-direction: row;
`;

const List = styled.li`
  margin: 0 20px;
  padding: 0;
`;

const Button = styled.div`
  display: flex;
  justify-content: space-between;

  width: 100%;
  height: 36px;
`;

export default MainBoxOffice;

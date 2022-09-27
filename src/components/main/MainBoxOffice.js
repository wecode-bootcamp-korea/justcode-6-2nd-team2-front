import React from 'react';
import styled from 'styled-components';

import MoviePoster from '../Movie/MoviePoster';
import MovieLike from '../Movie/MovieLike';
import MovieBook from '../Movie/MovieBook';

function MainBoxOffice({ movieList }) {
  return (
    <BoxOffice>
      {movieList.map(card => {
        return (
          <List key={card.id}>
            <MoviePoster data={card} />
            <Button>
              <MovieLike
                data={card}
                background='rgba(0,0,0,0.2)'
                color='#fff'
                fontSize='15px'
                fontWeight='400'
                hoverBackground='#ebebeb'
                iconColor='#006633'
              />
              <MovieBook />
            </Button>
          </List>
        );
      })}
    </BoxOffice>
  );
}

const BoxOffice = styled.ol`
  display: flex;
  align-items: center;
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

  margin-top: 10px;
`;

export default MainBoxOffice;

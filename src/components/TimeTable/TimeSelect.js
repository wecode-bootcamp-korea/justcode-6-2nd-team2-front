import React, { useContext } from 'react';
import styled from 'styled-components';

import Nav from './Nav/Nav';
import BoxTitle from './BoxTitle';
import Schedule from './Schedule/Schedule';
import MovieOption from './MovieOption';
import TheaterList from './TheaterList/TheaterList';
import MovieList from './TheaterList/MovieList';

import { OnOffContext } from '../../pages/TimeTable/TimeTable';

const ContainerWrapper = styled.div`
  width: 1100px;
  margin: 0 auto;
  padding: 0;
`;

function TimeSelect() {
  const { navOn, setNavOn } = useContext(OnOffContext);

  return (
    <>
      <div>
        <ContainerWrapper>
          <div>
            <Nav />
            <BoxTitle />
            <Schedule />
            <MovieOption />
            {navOn === 'movie' && <TheaterList />}
            {navOn === 'theater' && <MovieList />}
          </div>
        </ContainerWrapper>
      </div>
    </>
  );
}

export default TimeSelect;

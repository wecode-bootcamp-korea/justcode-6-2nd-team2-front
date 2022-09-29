import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

import MovieCategory from '../../components/Movie/MovieCategory';

function Movie() {
  return (
    <MV>
      <MoviePage>
        <div>
          {/* 전체영화 */}
          <AllMovie>전체영화</AllMovie>
          <MovieCategory />
          {/* 영화 리스트 */}
          <Outlet />
        </div>
      </MoviePage>
    </MV>
  );
}

const MV = styled.div`
  width: 100%;
  margin: 0;
  padding: 40px 0;
`;

const MoviePage = styled.div`
  width: 1100px;
  margin: 0 auto;
`;

const AllMovie = styled.h2`
  padding: 0 0 26px 0;
  font-size: 1.8666em;
  font-weight: 400;
  letter-spacing: -1px;
  line-height: 1.1;
  color: #222;
`;

export default Movie;

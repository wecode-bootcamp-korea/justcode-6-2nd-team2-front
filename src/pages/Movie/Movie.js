import React from 'react';
import styled from 'styled-components';
import { IoIosArrowDown } from 'react-icons/io';
import MovieCategory from '../../components/Movie/MovieCategory';
// import MovieContent from '../../components/MovieContent/MovieContent';
import { Outlet } from 'react-router-dom';

function Movie() {
  return (
    <MV>
      <MoviePage>
        <div>
          {/* 전체영화 */}
          <AllMovie>전체영화</AllMovie>
          <MovieCategory />
          {/* 영화 리스트 */}
          {/* <MovieContent /> */}
          <Outlet />
        </div>
        {/* 더보기 */}
        <MoreButton>
          더보기 <IoIosArrowDown />
        </MoreButton>
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

const MoreButton = styled.button`
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

export default Movie;

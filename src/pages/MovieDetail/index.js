import React from 'react';
import MovieDetailTab from '../../components/moviedetail/MovieDetailTab';
import MovieDetailContent from './MovieDetailContent';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 1100px;
  margin: 0 auto;
`;

function MovieDetail() {
  return (
    <>
      <MovieDetailContent />
      <Wrapper>
        <MovieDetailTab />
        <Outlet />
      </Wrapper>
    </>
  );
}

export default MovieDetail;

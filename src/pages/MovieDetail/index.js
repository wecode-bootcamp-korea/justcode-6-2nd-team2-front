import React, { useState, useEffect } from 'react';
import MovieDetailTab from '../../components/Moviedetail/MovieDetailTab';
import MovieDetailContent from './MovieDetailContent';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 1100px;
  margin: 0 auto;
`;

function MovieDetail() {
  const [movieList, setMovieList] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:10010/movie/detail/1`)
      .then(res => res.json())
      .then(res => setMovieList(res.data));
    console.log(setMovieList.data);
  }, []);
  return (
    <>
      <MovieDetailContent movieList={movieList} />
      <Wrapper>
        <MovieDetailTab />
        <Outlet movieList={movieList} setMovieList={setMovieList} />
      </Wrapper>
    </>
  );
}

export default MovieDetail;

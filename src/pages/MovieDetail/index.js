import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';

import MovieDetailTabs from '../../components/moviedetail/MovieDetailTabs';
import MovieDetailContent from './MovieDetailContent';
import styled from 'styled-components';
import MovieDetailTabContent from '../../components/moviedetail/MovieDetailTabContent/MovieDetailTabContent';

const Wrapper = styled.div`
  width: 1100px;
  margin: 0 auto;
`;

function MovieDetail() {
  // const location = useLocation();
  const [movieList, setMovieList] = useState([]);
  // const params = useParams();
  // const { movieId } = useParams();
  // console.log('index params:', movieId);
  // useEffect(() => {
  //   fetch(`http://localhost:10010/movie/detail/${movieId}`)
  //     .then(res => res.json())
  //     .then(res => setMovieList(res.data));
  //   console.log(setMovieList.data);
  // }, [movieId]);
  const movieGetLoader = () => {
    fetch(`http://localhost:10010/movie/detail/1`)
      .then(res => res.json())
      .then(res => setMovieList(res.data));
  };
  useEffect(() => {
    movieGetLoader();
    // console.log(setMovieList.data);
  }, []);

  // useEffect(() => {
  //   fetch(`http://localhost:10010/movie/detail/1`)
  //     .then(res => res.json())
  //     .then(res => setMovieList(res.data));
  // }, []);
  return (
    <>
      <MovieDetailContent movieList={movieList} />
      <Wrapper movieList={movieList}>
        <MovieDetailTabs />
        {/* 탭 아래 내용들 주요정보 4개 */}
        <MovieDetailTabContent movieList={movieList} />
      </Wrapper>
    </>
  );
}

export default MovieDetail;

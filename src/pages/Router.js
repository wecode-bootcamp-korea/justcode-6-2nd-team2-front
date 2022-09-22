import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import theme from '../styles/Theme';
import GlobalStyle from '../styles/GlobalStyle';

import Main from './Main/Main';
import Booking from './Booking/Booking';
import Movie from './Movie/Movie';
import MovieContent from '../components/Movie/MovieContent';
import Header from '../components/Header/Header';
import UserFind from './Find/UserFind';
import PassFind from './Find/PassFind';
import SignUp from './SignUp/SignUp';
import MovieDetail from './MovieDetail';
import MovieInfo from './MovieDetail/MovieInfo';
import MovieComment from './MovieDetail/MovieComment';
import MoviePost from './MovieDetail/MoviePost';
import MovieTrailer from './MovieDetail/MovieTrailer';

function Router() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/Booking/*' element={<Booking />} />
          <Route path='/movie' element={<Movie />}>
            <Route index element={<MovieContent />} />
            <Route path='b' element={<MovieContent />} />
            <Route path='c' element={<MovieContent />} />
          </Route>
          {/* 영화 상세페이지 */}
          <Route path='/moviedetail' end element={<MovieDetail />}>
            {/* <Route index element={<MovieInfo />} /> */}
            <Route path='movieinfo' element={<MovieInfo />} />
            <Route path='comment' element={<MovieComment />} />
            <Route path='moviepost' element={<MoviePost />} />
            <Route path='trailer' element={<MovieTrailer />} />
          </Route>

          <Route path='/user-find' element={<UserFind />} />
          <Route path='/pass-find' element={<PassFind />} />
          <Route path='/signup' element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default Router;

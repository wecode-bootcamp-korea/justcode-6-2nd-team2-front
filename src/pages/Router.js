import React, { useState, createContext } from 'react';
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
import Cinema from './Cinema/Cinema';
import MovieDetail from './MovieDetail';
import MovieInfo from '../components/moviedetail/MovieDetailTabContent/MovieInfo';
// import MovieComment from './MovieDetail/MovieComment';
import MoviePost from './MovieDetail/MoviePost';
import MovieTrailers from './MovieDetail/MovieTrailers';
import Consent from './SignUp/Consent';
import Info from './SignUp/Info';
import Complete from './SignUp/Complete';
import Footer from '../components/Footer/Footer';
import TimeTable from './TimeTable/TimeTable';

const Context10 = createContext({
  scheduleId: '',
  setScheduleId: () => {},
});
import ListTheater from '../components/Booking/Theater/ListTheater';
import MovieComment from '../components/moviedetail/MovieDetailTabContent/MovieComment';

function Router() {
  const [scheduleId, setScheduleId] = useState();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/Booking/*' element={<Booking />} />
          <Route path='/TimeTable/*' element={<TimeTable />} />
          {/* 영화페이지 */}
          <Route path='/movie' element={<Movie />}>
            <Route index element={<MovieContent />} />
            <Route path='now' element={<MovieContent />} />
            <Route path='upcoming' element={<MovieContent />} />
            <Route path='domestic' element={<MovieContent />} />
            <Route path='abroad' element={<MovieContent />} />
          </Route>

          {/* 영화 상세페이지 */}
          <Route path='/moviedetail/1' end element={<MovieDetail />}>
            {/* <Route index element={<MovieInfo />} /> */}
            <Route path='movieinfo' index element={<MovieInfo />} />
            <Route path='comment' element={<MovieComment />} />
            <Route path='moviepost' element={<MoviePost />} />
            <Route path='trailers' element={<MovieTrailers />} />
          </Route>
          {/* <Route path='/theater' element={<ListTheater />} /> */}

            <Route path='/user-find' element={<UserFind />} />
            <Route path='/pass-find' element={<PassFind />} />
            <Route path='/signup' element={<SignUp />}>
              <Route path='consent' element={<Consent />} />
              <Route path='info' element={<Info />} />
              <Route path='complete' element={<Complete />} />
            </Route>
            <Route path='/cinema' element={<Cinema />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </ThemeProvider>
    </Context10.Provider>
  );
}

export default Router;
export const ScheduleContext = Context10;

import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import theme from '../styles/Theme';
import GlobalStyle from '../styles/GlobalStyle';

import Main from './Main/Main';
import Header from '../components/Header/Header';
import UserFind from './Find/UserFind';
import PassFind from './Find/PassFind';
import SignUp from './SignUp/SignUp';

function Router() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Main />} />

          <Route path='/user-find' element={<UserFind />} />
          <Route path='/pass-find' element={<PassFind />} />
          <Route path='/signup' element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default Router;

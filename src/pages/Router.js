import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import theme from '../styles/Theme';
import GlobalStyle from '../styles/GlobalStyle';

import Main from './Main/Main';
import Header from '../components/Header/Header';

function Router() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default Router;

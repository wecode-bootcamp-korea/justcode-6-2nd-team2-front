import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import theme from '../styles/Theme';
import GlobalStyle from '../styles/GlobalStyle';

import Main from './Main/Main';

function Router() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default Router;

/* eslint-disable */

import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from './pages/Router';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import 'lazysizes/plugins/blur-up/ls.blur-up';

import './styles/reset.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Router />
  </>,
);

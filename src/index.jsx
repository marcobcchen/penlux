import ReactDOM from 'react-dom';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '@/utils/theme';
import App from './App';

import '@/assets/styles/reset.css';
import '@/assets/styles/global.css';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById('app'),
);

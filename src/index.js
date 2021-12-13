import { GlobalStyle } from 'assets/styles/GlobalStyle';
import React from 'react';
import ReactDOM from 'react-dom';
import App from 'views/App/App';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

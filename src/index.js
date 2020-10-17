import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyle from '../src/Component/Style/globalStyle';
import App from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
      <GlobalStyle />
      <App />
  </React.StrictMode>,
  document.getElementById('root')
);

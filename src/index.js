import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
// import { transitions, positions, Provider as AlertProvider } from 'react-alert';
// import AlertTemplate from 'react-alert-template-basic';
// import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <BrowserRouter>
    <App />,
  </BrowserRouter>,
  document.getElementById('root'),
);

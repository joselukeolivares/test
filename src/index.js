import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { HomeProvider } from './context';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import MainRouter from './MainRouter';


ReactDOM.render(
  <React.StrictMode>
    <HomeProvider>
    <BrowserRouter>
              <MainRouter></MainRouter>
                  <App />                
              </BrowserRouter>
    </HomeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import {Button} from 'carbon-components-react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import MainRouter from './MainRouter';
import {hot} from 'react-hot-loader'
import React from 'react';
import Login from './Login';
import Home from './pages/home/Home'


function App() {
  return (
      <React.Fragment>              
              <BrowserRouter>              
                <MainRouter></MainRouter>
              </BrowserRouter>
      </React.Fragment>

  );
}

export default hot(module)(App);

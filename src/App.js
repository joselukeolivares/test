import {Button} from 'carbon-components-react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import MainRouter from './MainRouter';
import {hot} from 'react-hot-loader'
import React from 'react';
import Login from './Login';
import Home from './pages/home/Home'
import { HomeContext } from './context';
import TopBarLogged from './components/TopBarLogged';
import { Footer } from './components/Footer';
import Buscador from './components/buscador/buscadorIBM';

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

/*
                  <HomeContext.Consumer>
                  {({
                      topBar,
                      buscador,
                      footer

                  })=>{
                      return (
                          <React.Fragment>
                          {
                            topBar && 
                            <div id="topBarLooged-container_home">
                              <TopBarLogged />
                            </div>
                          }
                          {
                            buscador && 
                            <div id="Buscador_container-Home">
                              <Buscador ></Buscador>                    
                            </div> 
                          }                         
                          <MainRouter></MainRouter>
                          {footer &&
                            <Footer></Footer>
                          }
                          </React.Fragment>
                      )
                  }}
                  </HomeContext.Consumer> 
*/

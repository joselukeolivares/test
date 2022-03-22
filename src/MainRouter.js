import React from "react";
import {Route,Routes} from 'react-router-dom'
import App from "./App";
import Home from "./pages/home/Home";
import Login from "./Login"
import { DashboardCarbon } from "./components/DashboardCarbon";
import Resultados from './pages/Resultados'
import {MigracionApp} from './components/visualization'
import {MigracionD3} from './components/MigracionD3'
import {Rendicion} from './pages/Rendicion'


const MainRouter=()=>{


    return (
        <React.Fragment>
            <Routes>
               
            <Route path="/" element={<Login />}/>
            <Route path="/home" element={<Home></Home>}></Route>
            <Route path="/dashboardCarbon" element={<DashboardCarbon></DashboardCarbon>}></Route>
            <Route path="/resultados" element={<Resultados></Resultados>}></Route>
            <Route path="/rendicion" element={<Rendicion/>}></Route>
              
               
            </Routes>
        </React.Fragment>
    )

}

export default MainRouter
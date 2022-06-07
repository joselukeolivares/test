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
               
            <Route path="/test/" element={<Login />}/>
            <Route path="/test/home" element={<Home></Home>}></Route>
            <Route path="/test/dashboardCarbon" element={<DashboardCarbon></DashboardCarbon>}></Route>
            <Route path="/test/resultados" element={<Resultados></Resultados>}></Route>
            <Route path="/test/rendicion" element={<Rendicion/>}></Route>
            <Route path="/test/vizualization" element={<MigracionApp/>}></Route>
              
               
            </Routes>
        </React.Fragment>
    )

}

export default MainRouter
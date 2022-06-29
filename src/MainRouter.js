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
import {CarbonChart} from './components/CarbonChart'
import {BoxLineBarCarbon} from './components/BoxLineBarCarbon'
import {StackedAreaTS} from './components/StackedAreaTS'
import {TreeMap} from './components/Treemap'
import { PieChartDC } from "./components/Pie";
<<<<<<< HEAD
import { DonutDC } from "./components/Donut";
=======
import {GaugeDC} from './components/Gauge'
>>>>>>> dc5540f62b58d20d2ee005eeb823ca6716a0cb55

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
            <Route path="/test/carbon" element={<CarbonChart/>}></Route>
            <Route path="/test/carbon/combo" element={<BoxLineBarCarbon/>}></Route>
            <Route path="/test/carbon/stacked" element={<StackedAreaTS/>}></Route>
            <Route path="/test/carbon/treemap" element={<TreeMap/>}></Route>
            <Route path="/test/carbon/pie" element={<PieChartDC/>}></Route>
            <Route path='/test/carbon/donut' element={<DonutDC/>}></Route>
            <Route path="/test/carbon/gauge" element={<GaugeDC/>}  ></Route>
              
               
            </Routes>
        </React.Fragment>
    )

}

export default MainRouter
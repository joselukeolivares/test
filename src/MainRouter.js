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
import { DonutDC } from "./components/Donut";
import {GaugeDC} from './components/Gauge'
import { ScatterDC } from "./components/Scatter/index";
import {HeatMapChartDC} from "./components/HeatMap"
import { Sankey } from "./components/Sankey";
import {DashboardBI} from "./components/DasboardBI"
import {RendicionIMG} from "./components/RendicionIMG"

const MainRouter=()=>{


    return (
        <React.Fragment>
            <Routes>
               
            <Route path="/test/" element={<Login />}/>
            <Route path="/test/home" element={<Home></Home>}></Route>
            <Route path="/test/dashboardCarbon" element={<DashboardCarbon></DashboardCarbon>}></Route>
            <Route path="/test/resultados" element={<Resultados></Resultados>}></Route>
            <Route path="/test/rendicion" element={<Rendicion/>}></Route>
            <Route path="/test/d3/migracion" element={<MigracionApp/>}></Route>
            <Route path="/test/carbon" element={<CarbonChart/>}></Route>
            <Route path="/test/carbon/combo" element={<BoxLineBarCarbon/>}></Route>
            <Route path="/test/carbon/stacked" element={<StackedAreaTS/>}></Route>
            <Route path="/test/carbon/treemap" element={<TreeMap/>}></Route>
            <Route path="/test/carbon/pie" element={<PieChartDC/>}></Route>
            <Route path='/test/carbon/donut' element={<DonutDC/>}></Route>
            <Route path="/test/carbon/gauge" element={<GaugeDC/>}  ></Route>
            <Route path="/test/carbon/scatter" element={<ScatterDC/>}/>
            <Route path="/test/carbon/headmap" element={<HeatMapChartDC/>}/>
            <Route path="/test/d3/proyectosCoppel" element={<Sankey/>}/>
            <Route path="/test/dasboard_bi" element={<DashboardBI/>} />
            <Route path="/test/rendicionimg" element={<RendicionIMG/>} />
            
              
               
            </Routes>
        </React.Fragment>
    )

}

export default MainRouter
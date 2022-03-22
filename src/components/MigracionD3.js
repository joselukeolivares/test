import React from "react";
import TopBarLogged from "./TopBarLogged";
import { MigracionApp } from "./visualization";
import {Footer} from './Footer'

 function MigracionD3(){

    return (
        <React.Fragment>
        <div id="topBarLooged-container_home">
            {/*<TopBarLogged />*/}
            <TopBarLogged />
        </div>            
            <MigracionApp></MigracionApp>
            
            <Footer></Footer>
        </React.Fragment>
        
    )

 }

 export {MigracionD3}
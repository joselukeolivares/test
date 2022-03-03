import React from "react";
import Buscador from "../components/buscador/buscadorIBM";
import { Footer } from "../components/Footer";
import TopBarLogged from "../components/TopBarLogged";
import { HomeContext } from "../context"

function Home(){
    return (
        
            <React.Fragment>
                <HomeContext.Consumer>
                {({
                    homeVisible
                })=>{
                    return (
                        <React.Fragment>
                        <div id="topBarLooged-container_home">
                            <TopBarLogged />
                        </div>
                        <div id="Buscador_container-Home">
                            <Buscador ></Buscador>                    
                        </div>
                        {homeVisible && <Home></Home>}
                        <Footer></Footer>
                        </React.Fragment>
                    )
                }}
                </HomeContext.Consumer>
            </React.Fragment>
        
    )

}   

export default Home
import React from "react";
import Buscador from "../../components/buscador/buscadorIBM";
//import '../../css/pages/home.css'
import TopBarLogged from "../../components/TopBarLogged";
import HistoryCards from "../../components/HistoryCards";
import Categories from '../../components/Categories'
import { Footer } from "../../components/Footer";
import data from '../../data/data.json'
import Resultados from "../Resultados";




function Home (){
    console.log("hello there")
    console.log(data)
    let [resultados,setResultados]=React.useState(false)
    let [homeVisible,setHomeVisible]=React.useState(true)
    let [catFilter,setcatFilter]=React.useState(0)
    
    function setComponent(komponent,properties){
        
        setHomeVisible(false)
        setResultados(false)


        switch(komponent){
            case 'resultados':
                setResultados(true)
                setcatFilter(properties)
                break;
            default:
                console.log("option not defined: setComponent at Home")
        }
    }



        return (
            <div id="container_Home">
                <div id="topBarLooged-container_home">
                    <TopBarLogged />
                </div>
                <div id="Buscador_container-Home">
                    <Buscador resultados={resultados} setComponent={setComponent}></Buscador>                    
                </div>

                { homeVisible &&
                    <React.Fragment>
                        <div id="historyCards_container">
                        <HistoryCards history={data.history}></HistoryCards>
                                </div>
                        <div id="categories_container-Home">
                        <Categories categories={data.categories}></Categories>
                    </div>
                    </React.Fragment>    
                }
                { resultados &&
                    <div id="categories_container-Home">
                        <Resultados catFilter={catFilter}></Resultados>
                    </div>}                     
                    <Footer></Footer>                      
                </div>
            )
}

export default Home
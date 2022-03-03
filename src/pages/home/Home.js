import React,{useEffect} from "react";
import Buscador from "../../components/buscador/buscadorIBM";
//import '../../css/pages/home.css'
import TopBarLogged from "../../components/TopBarLogged";
import HistoryCards from "../../components/HistoryCards";
import Categories from '../../components/Categories'
import { Footer } from "../../components/Footer";
import data from '../../data/data.json'
import Resultados from "../Resultados";
import {HomeContext} from '../../context/'




function Home (){
    console.log("hello there")
    console.log(data)

    
    function setComponent(komponent,properties){


            switch(komponent){
                case 'resultados':
                    //setResultados(true)
                    //setcatFilter(properties)
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
                    <Buscador ></Buscador>                    
                </div>

                    <HomeContext.Consumer>
                        {(
                          {
                              homeVisible,
                              resultados
                        }
                        )=>{
                            return(
                                    <React.Fragment>
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
                                                <Resultados ></Resultados>
                                            </div>
                                        } 
                                    </React.Fragment>
                                )

                           }
                        }

                        </HomeContext.Consumer>                    
                    <Footer></Footer>                      
                </div>
            )
}

export default Home
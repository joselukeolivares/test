import React,{useContext, useEffect} from "react";
import Buscador from "../../components/buscador/buscadorIBM";
import '../../css/pages/home.css'
import TopBarLogged from "../../components/TopBarLogged";
import HistoryCards from "../../components/HistoryCards";
import Categories from '../../components/Categories'
import { Footer } from "../../components/Footer";
import data from '../../data/data.json'
import Resultados from "../Resultados";
import {HomeContext} from '../../context/'
import {getDataIndicador} from '../../fetchHelper/getData'
import auxData from '../../data/auxData'




function Home (){
    //console.log("hello there")
    //console.log(data)

    const [indicatorsData,setIndicatorsData]=React.useState([])
    
    React.useEffect(()=>{
        let promise=getDataIndicador([],4)
        //
        promise.promiseData.then(data=>{

            try{
                localStorage.setItem('indicatorsMetaData',JSON.stringify(data))
            }catch(err){
                console.log(err)
            }
            let aux=data.slice(-5)
            //console.log("*************DATA*****************")
            //console.log(JSON.stringify(aux))
            //localStorage.setItem('auxMetaData',JSON.stringify(aux))
            
            
            setIndicatorsData(aux)
        }).catch(err=>{
            //
            console.log("Los datos no pudieron obtenerse de la BD. Buscando de manera local...")
            const localData=auxData()
            const test=JSON.parse(localData.indicatorsList)            
            setIndicatorsData(test)

            localStorage.setItem('indicatorsMetaData',localData.indicatorsList)

            localData.indicatorsData.forEach(indicator=>{
                const id=indicator.id
                if(indicator.data)
                localStorage.setItem(`${id}d`,indicator.data)
                if(indicator.forecast)
                localStorage.setItem(`${id}f`,indicator.forecast)
                if(indicator.meta)
                localStorage.setItem(`${id}m`,indicator.meta)
                //
            })
        
            })
    },[])

    
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

    const values=useContext(HomeContext)
    //values.setTopBar(true)
    //values.setFooter(true)
    //values.setBuscador(true)

        return (
            <div id="container_Home">


                    <HomeContext.Consumer>
                        {(
                          {
                              setFooter,
                              setTopBar,
                              subtitle
                        }
                        )=>{
                            return(
                                    <React.Fragment>
                                                                                {
                                            true && 
                                            <div id="topBarLooged-container_home">
                                            <TopBarLogged />
                                            </div>
                                        }
                                        <div className="subTitle-container">
                                            <h1 className="subTitle">{subtitle}</h1>
                                        </div>
                                        {
                                            true && 
                                            <div id="Buscador_container-Home">
                                            <Buscador ></Buscador>                    
                                            </div> 
                                        } 
                                        { true &&
                                            <React.Fragment>
                       
                                                <div id="historyCards_container">
                                                <HistoryCards history={data.history}></HistoryCards>
                                                        </div>
                                                <div id="categories_container-Home">
                                                <Categories categories={data.categories} indicatorsData={indicatorsData}></Categories>
                                            </div>
                                               </React.Fragment>    
                                        }
                                        
                                    </React.Fragment>
                                )

                           }
                        }

                        </HomeContext.Consumer>                    
                                          
                </div>
            )
}

export default Home
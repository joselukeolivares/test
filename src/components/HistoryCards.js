import React from "react";
import Card from "./Card"
import '../css/components/historyCards.css'
import ReactAnime from 'react-animejs'
const {Anime, stagger} = ReactAnime



function HistoryCards({history}){

        let maxTranslateX=(history.length)*250
        let actualX=0  


        
          

    

    return    (
                <React.Fragment>
                <div id="cardsContainer">
                    <div className="homeTitle">
                        <h3>¿Qué es Data Coppel?</h3>
                        <p>Data Coppel es una plataforma que ordena y resume la informarción más importante de la empresa desde un mismo lugar. Además facilita la integración, visualización y análisis de datos para fortalecer la productividad y el conocimiento del negocio.</p>
                    </div>
                    <h3>Volver a ver</h3>
                    <Anime
                         initial=
                         {[
                             {

                             }
                         ]}

                         _onClick={
                             [
                                 {
                                    targets:"#carrousel",
                                    translateX:-250,
                                    easing:"linear"
                                 }

                             ]
                         }
                    
                    >
                    <div className="triangulo">

                    </div>
                    </Anime>
                    <div id="carrousel" className="CardsHist-Carrusel">
                            {history.map((element,i)=>{
                                return (<Card key={`${i}`} cardInfo={element}></Card>)
                            })}
                            
                        </div>
                </div>
                </React.Fragment>
            )

}

export default HistoryCards
import React from "react";
import Card from "./Card"
import '../css/components/historyCards.css'



function HistoryCards({history}){

        let cardsHistory=[1,2,3,4,5]    

    

    return    (
                <React.Fragment>
                <div id="cardsContainer">
                    <div className="homeTitle">
                        <h3>¿Qué es Data Coppel?</h3>
                        <p>Data Coppel es una plataforma que ordena y resume la informarción más importante de la empresa desde un mismo lugar. Además facilita la integración, visualización y análisis de datos para fortalecer la productividad y el conocimiento del negocio.</p>
                    </div>
                    <h3>Volver a ver</h3>
                    <div className="CardsHist-Carrusel">
                        {history.map((element,i)=>{
                            return (<Card key={`${i}`} cardInfo={element}></Card>)
                        })}
                        <div className="triangulo">

                        </div>
                    </div>
                </div>
                </React.Fragment>
            )

}

export default HistoryCards
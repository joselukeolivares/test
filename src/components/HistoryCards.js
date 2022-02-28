import React from "react";
import Card from "./Card"
import '../css/components/historyCards.css'



function HistoryCards({history}){

        let cardsHistory=[1,2,3,4,5]    

    

    return    (
                <React.Fragment>
                <div id="cardsContainer">
                    <h3>Últimas búsquedas</h3>
                    <div className="CardsHist-Carrusel">
                        {history.map((element,i)=>{
                            return (<Card key={`${i}`} cardInfo={element}></Card>)
                        })}
                    </div>
                </div>
                </React.Fragment>
            )

}

export default HistoryCards
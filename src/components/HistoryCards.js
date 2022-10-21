import React, { useRef } from "react";
import Card from "./Card"
import '../css/components/historyCards.css'
import { gsap } from "gsap";
import { local } from "d3";



function HistoryCards({history}){


    let localHistory=[]
    //debugger
    if(JSON.parse(localStorage.getItem("viwed_history"))!==null){
        //debugger
        localHistory=(JSON.parse(localStorage.getItem("viwed_history"))).concat(history)
    }else{
        localHistory=history
    }

        let maxTranslateX=(history.length-3)*250
        let actualX=0
         

        const currentTaget=useRef()
        
        function translateLeft(){
            actualX=actualX-250
            gsap.to(('.card-history'),{x:`${actualX}px`,onComplete:leftTranslated})
        }

        function translateRigth(){           
            actualX=actualX+250
            gsap.to(('.card-history'),{x:`${actualX}px`,onComplete:rightTranslated})
        }

        function leftTranslated(){
            if((actualX*-1)>=maxTranslateX){
                actualX=0
                gsap.to(('.card-history'),{x:`${actualX}px`})                
            }
            showLeftControl()            
        }

        function rightTranslated(){
                         
            showLeftControl()
        }

        function showLeftControl(){
            
            if(actualX>=0){
                gsap.to(('.leftTriangulo'),{display:`none`})
                gsap.to(('.card-history'),{translate:`${0}px`})
            }else {
                gsap.to(('.leftTriangulo'),{display:`block`})
            }

        }


        
          

    

    return    (
                <React.Fragment>
                <div id="cardsContainer">
                    <div className="homeTitle">
                        <h3>¿Qué es Data Coppel?</h3>
                        <p>Data Coppel es una plataforma que ordena y resume la informarción más importante de la empresa desde un mismo lugar. Además facilita la integración, visualización y análisis de datos para fortalecer la productividad y el conocimiento del negocio.</p>
                    </div>
                    <h3>Volver a ver</h3>


                    
                    <div id="carrousel" ref={currentTaget} className="CardsHist-Carrusel">
                            {localHistory.map((element,i)=>{
                                return (<Card key={`${i}`} cardInfo={element}></Card>)
                            })}

                        <div className="triangulo" onClick={translateLeft}></div>
                        <div className="triangulo leftTriangulo" onClick={translateRigth}></div>    
                        
                        
                            
                        </div>
                </div>
                </React.Fragment>
            )

}

export default HistoryCards

/*
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
                        </Anime>
                        */
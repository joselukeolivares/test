import React from "react";
import {Favorite32,ArrowDown32} from '@carbon/icons-react'
import '../css/components/MetaDataDashboard.css'
import RopaImg from "../pictures/ropa.png"

function MetaDataDashboad(){
    return(
        <section className="metadataSection">
            <img className="background_dashboardCarbon" src={RopaImg}></img>
            <div className="title-Section">
                <h1 className="titleKPI">Ventas Ropa y Zapatos</h1>
                <div>
                    <Favorite32 />
                    <p>AGREGAR A FAVORITOS</p>
                </div>
            </div>
            <div className="metadata">
                <div className="row_metada">
                    <div className="tdRow">
                        <h5 className="name_metada">Producto</h5>
                        <h3 className="data_metada">Pronostico</h3>
                    </div>
                    <div className="tdRow">
                        <h5 className="name_metada">Sección</h5>
                        <h3 className="data_metada">Resumen Coppel</h3>
                    </div>
                    <div className="tdRow">
                        <h5 className="name_metada">Sub-sección</h5>
                        <h3 className="data_metada" >Principal</h3>
                    </div>
                </div>
                <div className="row_metada">
                    <div className="tdRow">
                        <h5 className="name_metada">Fecha de Corte</h5>
                        <h3 className="data_metada">03 / 02 / 2021</h3>
                    </div>
                    <div className="tdRow">
                        <h5 className="name_metada">Último Dato</h5>
                        <h3 className="data_metada">Pronostico</h3>
                    </div>
                    <div className="tdRow">
                        <h5 className="name_metada">Año</h5>
                        <h3 className="data_metada">30 / 01 / 2121</h3>
                    </div>
                </div>
                <div className="row_metada">
                    <div className="tdRow">
                        <h5 className="name_metada">Cargado</h5>
                        <h3 className="data_metada">30 / 01 / 2121</h3>
                    </div>
                    <div className="tdRow">
                        <h5 className="name_metada">Més Periodo</h5>
                        <h3 className="data_metada">2021</h3>
                    </div>
                    <div className="tdRow">
                        <h5 className="name_metada">Responsable</h5>
                        <h3 className="data_metada">Ivan de la O.</h3>
                    </div>
                </div>                
            </div>
            <div className="arrowDown">
                <ArrowDown32 />
            </div>
            
        </section>           



        
    )
}

export {MetaDataDashboad}
import React from 'react'
import {SankeyD3} from './app'
import "./style.css";

 export class Sankey extends React.Component{
    constructor(props){
        super(props)
        
    }

    componentDidMount(){
        SankeyD3()
        
    }



    render(){
        return (
            <React.Fragment>
            <div className="sankeySVG">
                <p className='overview'>El área de análisis y visualización de datos cuenta con <span className="bold">14</span> tipos de productos los cuales se desarrollan internamente. Nuestro cliente principal al cual le otorgamos servicio es <span className="bold">Ivan de la O.</span> y la herramienta más utilizada es <span className="bold">Excel</span> para proyectos de Análisis.</p>
                <div className="titles">
                    <h2>Herramientas</h2>
                    <h2>Productos</h2>
                    <h2>Clientes</h2>
                </div>
            </div>     
            </React.Fragment>
        )
    }
}
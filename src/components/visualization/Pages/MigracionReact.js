import React from "react";
import * as d3 from 'd3'
import data from './data/agenda.json'
import './styles/migracion.css'

class MigracionReact extends  React.Component{
    
    _setRef(component){

    }
    
    render(){
        return (
            <div>
                <h1>Hola mundo!</h1>
                
            </div>
        )
    }

    componentDidMount(){

        if(!document.getElementById("migracionSVG")){
            this.loadData()
        }else{
            console.log("ComponentDidMount: MigracionSVG ya existe, no se renderiza de nuevo")
        }    
        
    }

    componentDidUpdate(){
        console.log("DidUpdate: Hello")
    }


    loadData (){
    
    console.log("ComponentDidMount: Hola")
        
    }

    buildChart(){

        


    }

}

export default MigracionReact
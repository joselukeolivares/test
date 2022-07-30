import React from 'react'
import '@carbon/charts/styles.css'
//import '@carbon/styles/css/styles.css'
import {LineChart} from '@carbon/charts-react'
import { json } from 'd3'
import { Router } from 'react-router-dom'

function LinesResultForescast({idIndicador}){
    const [dataKpi,setDataKPI]=React.useState([])    
    const [stateOptions,setStateOptions]=React.useState({})
    
 let optionsChart={
    "title":`${idIndicador}`,
    "axes":{
        "bottom":{
            "title":"Titulo del eje inferior",
            "mapsTo":"fechaCorte",
            "scaleType":"time"
        },
        "left":{
            "title":"Titulo del eje izquierdo",
            "mapsTo":"resultado",
            "scaleType":"linear"
        }
    },
    "curve":"curveMonotoneX",
    "height":"400px",
    "points":{
        "enabled":true
    }
  }



    React.useEffect(()=>{

        const resultado=
        fetch(`http://localhost:3001/kpi_result?idkpi1=${encodeURIComponent(`${idIndicador}`)}`)
        .then(data=>data.json())

        const pronostico=
        fetch(`http://localhost:3001/kpi_forecast?id1=${encodeURIComponent(`${idIndicador}`)}`)
        .then(data=>data.json())

        Promise.all([
            resultado
            ,pronostico          
        ])
        .then((res)=>{       
            //console.log(res)
            let resultado=res[0].map(row=>({...row,group:"Resultado"}))
            let pronostico=res[1].map(row=>{
                let newRow=row
                newRow.group="Pronostico"
                newRow.resultado=row.pronostico

                return newRow 
            })
            //debugger
            setDataKPI(resultado.concat(pronostico))
            
        }).catch(reason=>console.log(reason))               
        
    },[])


    const groupData=(data,groupLabel)=>{
        
        let addGroup=data.map(row=>({row,group:groupLabel}))
    }

    return(
        <React.Fragment>     
            <LineChart
                data={dataKpi}
                options={optionsChart}
                >
            </LineChart>
        </React.Fragment>
    )
}

export {LinesResultForescast}
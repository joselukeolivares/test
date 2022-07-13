import React from 'react'
import '@carbon/charts/styles.css'
//import '@carbon/styles/css/styles.css'
import {ComboChart} from '@carbon/charts-react'
import { json } from 'd3'
import { Router } from 'react-router-dom'

function BoxLineBarCarbon({idIndicador}){
    const [dataKpi,setDataKPI]=React.useState([])    
    const [stateOptions,setStateOptions]=React.useState({})


    let optionsChart={
        "title":`Titulo de Grafico Combo Line+Bar`,
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
            },
            "right":{
                "title":"Titulo del eje derecho",
                "mapsTo":"pronostico",
                "scaleType":"linear",
                "correspondingDatasets":[
                    "forecast"
                ]


            }
        },
        "comboChartTypes":[
            {
                "type":"simple-bar",
                "correspondingDatasets":[
                    "kpi"
                ]
            },
            {
                "type":"line",
                "options":{
                    "points":{
                        radius:5
                    }
                },
                "correspondingDatasets":[
                    "forecast"
                ]
            }
        ]
        ,
        "curve":"curveMonotoneX",
        "height":"400px"
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
            let resultado=res[0].map(row=>({...row,group:"kpi"}))
            let pronostico=res[1].map(row=>({...row,group:"forecast"}))
            setDataKPI(resultado.concat(pronostico))
        }).catch(reason=>console.log(reason))               
        
    },[])


    const groupData=(data,groupLabel)=>{
        
        let addGroup=data.map(row=>({row,group:groupLabel}))
    }

    return(
        <React.Fragment>
            <h1>Carbon Chart: Combo line+bar</h1>
            <ComboChart
            data={dataKpi}
            options={optionsChart}
            ></ComboChart>
        </React.Fragment>
    )
}

export {BoxLineBarCarbon}
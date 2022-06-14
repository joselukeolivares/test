import React from 'react'
import {LineChart} from '@carbon/charts-react'
import "@carbon/charts/styles.css"
import './carbonChart.css'


function CarbonChart(){

    const [dataKpi,setDataKPI]=React.useState([])    
    const [stateOptions,setStateOptions]=React.useState({})


    
    React.useEffect(()=>{
        fetch('http://localhost:3001/dcoppel/ci')        
        .then(response=>response.json())
        .then(data=>{
            //console.log(data)
            debugger

            let optionsChart={
                "title":`${data.idIndicador}`,
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
                "height":"400px"
            }
        
            setStateOptions(optionsChart)

            

            
            let groupData=data.map(row=>({...row,group:"grupo 1","resultado":parseInt(row.resultado)}))        
            let test=groupData[0]

            setDataKPI(groupData)
        })
        .catch(err=>{
            console.log(err)
        })
    },[])

    return(
        <React.Fragment>
            <p>Este es un componente para CarbonChart</p>
            <p>{/*dataKpi*/}</p>
            <div className="lineChart_container">
            {(dataKpi.length>0) &&
                            <LineChart
                            data={dataKpi}
                            options={stateOptions}
                            >
                            </LineChart>
            }
            </div>
        </React.Fragment>
    )
}

export {CarbonChart}
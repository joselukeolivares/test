import React from 'react'
import {LineChart} from '@carbon/charts-react'
import "@carbon/charts/styles.css"
import './carbonChart.css'
import { MeterChartDC } from '../Meter'


function CarbonChart({idIndicador,meta,setMeta}){

    const [stateOptions,setStateOptions]=React.useState({})
    const isMounted=React.useRef(false)
    
    const [dataKpi,setDataKPI]=React.useState([])
    const [dataKpiMeta,setDataKpiMeta]=React.useState([])
    const [dataKpiPron,setDataKpiPron]=React.useState([])
    const [dataGlobal,setDataGlobal]=React.useState({})
    const [lastResult,setLastResult]=React.useState(0)
    const [acomplished,setAcomplished]=React.useState(0)

    let optionsChart={
        "title":`Waiting title`,
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
            "enabled":false
        }
    }

    //setStateOptions(optionsChart)

    function getResultado(id){

    }

    function getPronostico(id){
        
    }

    React.useEffect(()=>{

        if(isMounted.current){
                    console.log("meta.loaded:")
                if(meta.loaded){
                    console.log("True")
                    if(!meta.show){
                        let filterMeta=dataKpi.filter(row=>{
                            return row.type!=2
                            
                        })
                        setDataKPI(filterMeta)                                                
                        //console.log(filterMeta)
                    }else{
                        let plus=dataKpi.concat(dataKpiMeta)
                        //debugger
                        setDataKPI(plus)
                        console.log(dataKpi)
                        console.log(dataKpiMeta)
                    
                    }

                }else{
                    getMeta([idIndicador])
                    console.log("False")
                    
                }
        }else{
            isMounted.current=true
        }
      

    },[meta.show])

    function getMeta(ids){
        let uriBase=`http://localhost:3001/metaIndicador?`
        let uriToFetch=uriMaker(uriBase,ids)
//debugger
        
        fetch(uriToFetch)
            .then(resultado=>resultado.json())
            .then(data=>{
                let dataMeta=data.map(row=>({fechaCorte:row.fechaCorte,group:"meta","resultado":row.metaAcumulado,type:2}))
                //setDataKPI(meta)                
                //debugger                
                //console.log(dataKpi.concat(meta))
                setMeta(({...meta,loaded:true}))

                setDataKPI(dataKpi.concat(dataMeta))
                let metas=dataKpiMeta.concat(dataMeta)
                setDataKpiMeta(metas)

                let lastMeta=metas[metas.length-1].resultado
                let aux=((lastResult/lastMeta)*100).toFixed(2)
                
                setAcomplished(aux)//debugger
                debugger
                
            })
        

    }

    function uriMaker(uriBase,ids){

        ids.forEach((element,index) => {
            uriBase+=`idkpi${index}=${encodeURIComponent(`${element}`)}`
        });       
        return uriBase
    }

    React.useEffect(()=>{
        

        fetch(`http://localhost:3001/kpi_result?idkpi1=${encodeURIComponent(`${idIndicador}`)}`)        
        .then(response=>response.json())
        .then(data=>{
            
            //debugger
            let groupData=data.map(row=>({fechaCorte:row.fechaCorte,group:"grupo 1","resultado":parseFloat(row.resultado),type:1}))                                  

            setDataKPI(groupData)
            setLastResult(data[data.length-1].resultado)
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
                        <React.Fragment>
                            <div className="meterCumplimiento">
                                {meta.show &&(
                                    <MeterChartDC className="meter"
                             
                                    value={acomplished
                                                                                                                    
                                }
                                    lowLimit={0}
                                    hightLimit={1000}
                                    ></MeterChartDC>
                                    
                                )}
                            </div>
                            <LineChart
                            data={dataKpi}
                            options={optionsChart}
                            >
                            </LineChart>
                            </React.Fragment>
            }
            </div>
        </React.Fragment>
    )
}

export {CarbonChart}
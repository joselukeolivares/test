import React from 'react'
import {LineChart} from '@carbon/charts-react'
import "@carbon/charts/styles.css"
import './carbonChart.css'
import { MeterChartDC } from '../Meter'


function CarbonChart({idIndicador,meta,setMeta,idKpiData,points}){
    
    const [stateOptions,setStateOptions]=React.useState({})
    const isMounted=React.useRef(false)
    
    const [dataKpi,setDataKPI]=React.useState([])
    const [dataKpiMeta,setDataKpiMeta]=React.useState([])
    const [dataKpiForec,setDataKpiForec]=React.useState([])
    const [dataGlobal,setDataGlobal]=React.useState({})
    const [lastResult,setLastResult]=React.useState(0)
    const [acomplished,setAcomplished]=React.useState(0)
    const [options,setOptions]=React.useState({
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
            "enabled":points
        }
    }    )
    
    


/*
    function getForecast(ids){
        let uriBase=`http://localhost:3001/kpi_forecast?`
        let uriToFetch=uriMaker(uriBase,ids)

        fetch(uriToFetch)
            .then(result=>result.json())
            .then(data=>{
                let groupData=data.map(row=>({fechaCorte:row.fechaCorte,group:"pronostico",resultado:row.pronostico,type:3}))
                //
                setMeta(({...meta,forecastLoaded:true}))
                setDataKPI(dataKpi.concat(groupData))
                setDataKpiForec(dataKpiForec)
            })
    }
*/
    React.useEffect(()=>{
        /*
        let optionsChart=options
        optionsChart["points"]["enabled"]=points
        console.log(optionsChart["points"]["enabled"])
        setOptions({})
        setOptions(optionsChart)
        */
        
    },[idKpiData])
/*
    React.useEffect(()=>{
        console.log(options["points"]["enabled"])
    },[options])
    React.useEffect(()=>{
        if(isMounted.current){
            if(meta.forecastLoaded){
                if(!meta.forecastShow){
                    let filterForecast=dataKpi.filter(row=>row.type!=3) 
                    setDataKPI(filterForecast)
                }else{
                    let plus=dataKpi.concat(dataKpiForec)
                    setDataKPI(plus)
                }         
            }else{
                getForecast([idIndicador])
            }
        }else{
            //isMounted.current=true
        }
    },[meta.forecastShow])
    
    React.useEffect(()=>{
        
        if(isMounted.current){
            //console.log("meta.loaded:")
            if(meta.loaded){
                //console.log("True")
                if(!meta.show){
                    let filterMeta=dataKpi.filter(row=>{
                        return row.type!=2
                        
                    })
                    setDataKPI(filterMeta)                                                
                    //console.log(filterMeta)
                }else{
                    let plus=dataKpi.concat(dataKpiMeta)
                    //
                    setDataKPI(plus)
                    //console.log(dataKpi)
                    //console.log(dataKpiMeta)
                    
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
        //
        
        fetch(uriToFetch)
        .then(resultado=>resultado.json())
        .then(data=>{
            let dataMeta=data.map(row=>({fechaCorte:row.fechaCorte,group:"meta","resultado":row.metaAcumulado,type:2}))
            //setDataKPI(meta)                
            //                
            //console.log(dataKpi.concat(meta))
            setMeta(({...meta,loaded:true}))
            
            setDataKPI(dataKpi.concat(dataMeta))
            let metas=dataKpiMeta.concat(dataMeta)
            setDataKpiMeta(metas)
            
            let lastMeta=metas[metas.length-1].resultado
            let aux=((lastResult/lastMeta)*100).toFixed(2)
            
            setAcomplished(aux)//
            
            //
            
        })
        
        
    }
    
    function uriMaker(uriBase,ids){
        
        ids.forEach((element,index) => {
            uriBase+=`idkpi${index}=${encodeURIComponent(`${element}`)}`
        });       
        return uriBase
    }
    */
    
    React.useEffect(()=>{
        
        /*
        fetch(`http://localhost:3001/kpi_result?idkpi1=${encodeURIComponent(`${idIndicador}`)}`)        
        .then(response=>response.json())
        .then(data=>{
            
            //
        })
        .catch(err=>{
            console.log(err)
        })
        */
        
        //console.log(idKpiData)
        let groupData=idKpiData.map(row=>({fechaCorte:row.fechaCorte,group:row.group?row.group:"grupo 1","resultado":parseFloat(row.resultado),type:1}))                                  
        
        //
        if(idKpiData.length>0){
            setDataKPI(groupData)
            let result=idKpiData[idKpiData.length-1].resultado        
            setLastResult(result)   
        }
    },[idKpiData])

    return(
        <React.Fragment>
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
                            options={options}
                            >
                            </LineChart>
                            </React.Fragment>
            }
            </div>
        </React.Fragment>
    )
}

export {CarbonChart}
/*



*/
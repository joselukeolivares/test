import React, { useContext } from "react";
import 'carbon-components/css/carbon-components.min.css';
import { DataTable, TableContainer, Table, TableHead, TableRow, TableHeader, TableBody, TableCell } from 'carbon-components-react';
import { headerData, rowData } from '../data/resultadosData'
import Buscador from "../components/buscador/buscadorIBM";
import {Dashboard20,ChartLine20,View20,TableSplit20,ReportData20,ReplyAll32} from '@carbon/icons-react'
import TopBarLogged from "../components/TopBarLogged";
import { useLocation } from "react-router-dom";
import '../css/pages/resultados.css'
import TableA from "../components/TableA";
import { HomeContext } from "../context";
import HistoryFilter from "../components/HistoryFilter";
import { Footer } from "../components/Footer";





function Resultados(){


let values=useContext(HomeContext)
let [dataTableRows,setDataTableRows]=React.useState([])
let filter=[]

React.useEffect(()=>{
    let data=values.searchDataTable.map((r,i)=>({...r,id:`${i+1}`,like:r.like||false}))
    //debuggerdbo
    //debuggerdbo





    
    console.log(`Datos vacios, se cargaran: ${dataTableRows.length} elementos`)
    setDataTableRows(data)
    debugger

},[])

if(dataTableRows.length==0){
    console.log(`No hay elementos`)
}else{

    console.log(`Total de datos ${dataTableRows.length} actualmente`)
    console.log(dataTableRows[0].like)
}

//let dataRows=dataTableRows
    
    //setDataTableRows(values.searchDataTable)
function updateDataRows(id){
    
    let newData=dataTableRows.map((element,i)=>{
        if(id==element.id){
            return {...element,like:!element.like}
        }else{
            return element
        }
    })
    
    setDataTableRows([...newData])
}

/*
let filterCat=cat.state.cat.id
setDataTableRows(dataTableRows.filter(row=>row.icon==filterCat.substring(7)))
*/

    let header=["","Activos","Resultados"]
    let body=[
        ['1',"Tablero de Control",55],
        ['2',"Indicadores",1164],
        ['3',"Dasborads",255],
        ['4',"Proyectos de Visualización",48],
        ['5',"Rendición de Cuentas",55],
        ['6',"Mostrar todos",999],

    ]


    function getIcons(icon){

        switch(icon){
            case '3':
                return (<div className="dashIcon_container dashboardsCat"><Dashboard20 /></div>)
            case '2':
                return (<div className="dashIcon_container indicadoresCat"><ChartLine20 /></div>)
            case '5':
                return (<div className="dashIcon_container rendicionCat"><ReportData20 /></div>)
            case '4':
                return (<div className="dashIcon_container proyectos_vCat"><View20 /></div>)                    
            case '1':
                return (<div className="dashIcon_container TablerosCat"><TableSplit20 /></div>)            
            default:
                
                return (<div className="dashIcon_container rendicionCat"><ReplyAll32 /></div>)

        }

    }


    return (
        <React.Fragment>
            <HomeContext.Consumer>
                
                {
                    ({
                        catFilter,
                        setcatFilter,
                        favorite,
                        history, 
                        subtitle
                    })=>
                    {
                        //
                        if(catFilter>0){
                            //debugger
                            filter=dataTableRows.filter(item=>item.icon==catFilter)
                            if(catFilter==2){
                                console.log("Icon 2")
                                
                            }
                            console.log(filter)
                            
                        }else if(catFilter==0 ||!catFilter){
                            filter=[]
                        }
                        /*
                        if(favorite&&headerData.length==5){
                            headerData.push(    {
                             key: 'like',
                             header: 'Favorito',
                           })
                           dataTableRows=rowData
                         }else if(!favorite&&headerData.length==6){
                             headerData.pop()
                             dataTableRows=dataTableRows.map(row=>{
                                 let newRow={}
                                 newRow.id=row.id
                                 newRow.icon=row.icon
                                 newRow.name=row.name
                                 newRow.type=row.type
                                 newRow.format=row.format
                                 newRow.updated=row.updated
                                 newRow.like=row.like
                                 return newRow
                                }
                                
                            )
                             console.log(headerData)
                         }
                            */
                    return (
                        <React.Fragment>
                                                      {
                            true && 
                            <div id="topBarLooged-container_home">
                              <TopBarLogged />
                            </div>
                          }
                            <div className="subTitle-container">
                                            <h1 className="subTitle">{subtitle}</h1>
                                        </div>    
                            

                    <div className="content-res">
                        {!history &&                         <div className="actives">
                        <Table >
                            <thead>
                                <tr>
                                    {header.map((head,i)=><td key={`i${i}`}>{head}</td>)}
                                </tr>
                            </thead>
                            <tbody>
                                {body.map((singleRow,j)=><tr onClick={()=>{
                                        if(j!=5){
                                            let aux=rowData.filter((element)=>element.icon==(j+1))
                                            //setDataTableRows(aux)
                                            setcatFilter(j+1)
                                            
                                        }else{
                                            setcatFilter(0)
                                        }                               
        

                                }}key={`j${j}`}>
                                    {singleRow.map((td,k)=><td key={`j${j}k${k}${td}`}>
                                        {k!=0 && td
                                        
                                        }
                                        {
                                        k==0 && getIcons(td?td:2)   
                                        }
                                    </td>)}
                                </tr>)}
                            </tbody>
                        </Table>
                        </div>}
                        {history && <HistoryFilter></HistoryFilter>}
                        <div className="dataTable-res">
                            
    
                                        <React.Fragment>
                                    
                                                <TableA
                                                headerData={headerData}
                                                rowData={filter.length==0?dataTableRows:filter}
                                                updateDataRows={updateDataRows}
                                                ></TableA> 
                                        </React.Fragment>
                                    
                        </div>
                        
                            
                    </div>
               
                    
                        </React.Fragment>
                    )
                    }
                }
                
            </HomeContext.Consumer> 

        </React.Fragment>
    )
}

export default Resultados
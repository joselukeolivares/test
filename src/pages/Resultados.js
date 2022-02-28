import React from "react";
import 'carbon-components/css/carbon-components.min.css';
import { DataTable, TableContainer, Table, TableHead, TableRow, TableHeader, TableBody, TableCell } from 'carbon-components-react';
import { headerData, rowData } from '../data/resultadosData'
import Buscador from "../components/buscador/buscadorIBM";
import {Dashboard20,ChartLine20,View20,TableSplit20,ReportData20,ReplyAll32} from '@carbon/icons-react'
import TopBarLogged from "../components/TopBarLogged";
import { useLocation } from "react-router-dom";
import '../css/pages/resultados.css'
import TableA from "../components/TableA";




function Resultados(){


let [dataTableRows,setDataTableRows]=React.useState(rowData)
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
                <div id="topBarLooged-container_home">
                    <TopBarLogged />
                </div>
            <div id="Buscador_container-Home">
                <Buscador></Buscador>
            </div>
            <div className="content-res">
                <div className="actives">
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
                                    setDataTableRows(aux  
                                    )
                                }else{
                                    setDataTableRows(rowData)
                                }                               
 

                        }}key={`j${j}`}>
                            {singleRow.map((td,k)=><td key={`j${j}k${k}${td}`}>
                                {k!=0 && td
                                   
                                }
                                {
                                 k==0 && getIcons(td)   
                                }
                            </td>)}
                        </tr>)}
                    </tbody>
                </Table>
                </div>
                <div className="dataTable-res">
                     <TableA
                     headerData={headerData}
                     rowData={dataTableRows}
                     ></TableA>               
                </div>
                
                    
            </div>
            

        </React.Fragment>
    )
}

export default Resultados
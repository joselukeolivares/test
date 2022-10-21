import React from 'react'
import { DataTable, TableContainer, Table, TableHead, TableRow, TableHeader, TableBody, TableCell } from 'carbon-components-react';
import {CheckmarkFilled20,AddAlt20 } from '@carbon/icons-react'
import '../css/components/tableRendicion.css'




function getIcons(icon){

    
        if(icon){
            return (<CheckmarkFilled20 className='favIcon'/>)
            }
        else{ 
            return (<AddAlt20 />)
            }
        
    

}

function variationStyle(index,cell){
        let value=cell.value.value
        let variation=cell.value.variation
    //console.log(cell.value)
    //console.log("*************")

  
            return (
                <React.Fragment>
                    
                                    
                {value}
                {variation>0 && 
                <p className="positiveVar">
                    {`+${variation}`}
                </p>}
                {variation<=0 && 
                <p className="negativeVar">
                    {variation}
                </p>}
                    
                </React.Fragment>
            )

    

}

function updateFavIndicator(index){

    
}

function TableRendicion({headerData,rowData,updateRowsData}){

    

    function updateContent(index){
        updateRowsData(index)

    }
    return (
        <div className='tableRendicion-Container'>
                    <div className='titlesContainer'>
                        <h4 className='header20'></h4>
                        <h4 className='header20'>Resultado Mensual</h4>
                        <h4 className='header20'>Resultado Acumulado</h4>
                        <h4 className='header40'>Resultado Anual</h4>
                    </div>
                    <DataTable  rows={rowData} headers={headerData}>
                    {({ rows, headers, getHeaderProps, getTableProps }) => (
                        <TableContainer title="">
                        <Table {...getTableProps()}>
                            <TableHead>
                            <TableRow>
                                {headers.map((header) => (
                                <TableHeader {...getHeaderProps({ header })}>
                                    {header.header}
                                </TableHeader>
                                ))}
                            </TableRow>
                            </TableHead>
                            <TableBody>
                            {rows.map((row,index) => (
                                <TableRow key={row.id}>
                                {row.cells.map((cell,i) => (
                                    <TableCell key={cell.id}                                 
                                    >   {
                                        i>1 && variationStyle(i,cell)
                                        }
                                        {
                                        i==1 && <div>{cell.value}<div className='subTitleIndicator' onClick={()=>{}}>Metadatos del KPI</div> </div>
                                        }
                                        {
                                        i==0 && <div onClick={()=>{
                                            updateContent(index)
                                            //console.log(rowData)
                                            return "Hello"
                                            
                                            }

                                            }>{getIcons(cell.value)}</div>}
                                        
                                        </TableCell>
                                ))}
                                </TableRow>
                            ))}
                            </TableBody>
                        </Table>
                        </TableContainer>
                    )}
                    </DataTable>
        </div>
    )
}

export {TableRendicion}
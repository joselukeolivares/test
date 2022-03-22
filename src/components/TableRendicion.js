import React from 'react'
import { DataTable, TableContainer, Table, TableHead, TableRow, TableHeader, TableBody, TableCell } from 'carbon-components-react';
import {CheckmarkFilled20,AddAlt20 } from '@carbon/icons-react'
import '../css/components/tableRendicion.css'

function getIcons(icon){

    switch(icon){
        case "fav":
            return (<CheckmarkFilled20 className='favIcon'/>)
            break;
        case "addFav":
            return (<AddAlt20 />)
            break;
        default:
            console.log("icon")
            console.log(icon)
            return <p>not icon</p>

    }

}

function variationStyle(index,cell){
        let value=cell.value.value
        let variation=cell.value.variation
    console.log(cell.value)
    console.log("*************")

  
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

function TableRendicion({headerData,rowData}){
    return (
        <div className='tableRendicion-Container'>
                    <DataTable  rows={rowData} headers={headerData}>
                    {({ rows, headers, getHeaderProps, getTableProps }) => (
                        <TableContainer title="DataTable">
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
                            {rows.map((row) => (
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
                                        i==0 && getIcons(cell.value)}
                                        
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
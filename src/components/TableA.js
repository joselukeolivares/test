import { DataTable, TableContainer, Table, TableHead, TableRow, TableHeader, TableBody, TableCell } from 'carbon-components-react';
import {Dashboard20,ChartLine20,View20,TableSplit20,ReportData20,CheckmarkFilled32,AlarmAdd32} from '@carbon/icons-react'

function TableA({
    rowData,
    headerData
}){
    localStorage.setItem("ToElasticData",JSON.stringify(rowData))
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
            case 'fav':
                return (<div className="dashIcon_container "><CheckmarkFilled32 className='favIcon'/></div>)
            case 'unfav':
                return (<div className="dashIcon_container "><AlarmAdd32 /></div>)                                  
            default:
                return <p>not icon</p>

        }

    }

    return (
        <DataTable  rows={rowData} headers={headerData}>
        {({ rows, headers, getHeaderProps, getTableProps }) => (
            <TableContainer title="DataTable">
            <Table {...getTableProps()} size='xs'>
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
                        <TableCell key={cell.id}>{
                            i>0 && i<5 && cell.value
                            }
                            {
                            i==0 && getIcons(cell.value)  }
                            {i==5 && getIcons(cell.value)
                            }
                            </TableCell>
                    ))}
                    </TableRow>
                ))}
                </TableBody>
            </Table>
            </TableContainer>
        )}
        </DataTable>
    )
}

export default TableA
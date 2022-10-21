import React from 'react'
import { DataTable, TableContainer, Table, TableHead, TableRow, TableHeader, TableBody, TableCell } from 'carbon-components-react';
import {Dashboard20,ChartLine20,View20,TableSplit20,ReportData20,CheckmarkFilled32,AddAlt20} from '@carbon/icons-react'
import {Link} from 'react-router-dom'

function TableA({
    rowData,
    headerData,
    updateDataRows
}){

    //const [dataUpdate,setDataUpdate]=React.useState(rowData)
    //localStorage.setItem("ToElasticData",JSON.stringify(rowData))
    //console.log(`TablaA ${rowData[0].like}`)
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
                return (<div onClick={(e)=>{
                    let element=e.target.classList
                    if(element.contains('fav')){
                        element.remove('fav')
                        element.add('unfav')
                    }else{
                        element.remove('unfav')
                        element.add('fav')
                    }
                }}className="dashIcon_container "><AddAlt20 /></div>)                                  
            default:
                return <p>not icon</p>

        }

    }

    function favIcon(flag){
    
        if(flag){
            
            return <CheckmarkFilled32 className='favIcon'/>
        }else{
            
            return <AddAlt20 />
        }
    }

    function redirectURL(result){
        //debugger
        //console.log(`TableA type of row ${result.type}`)
        let to=""
        if(result)
          switch(result.icon){              
              case "3":
                to=result.route
                break;
              case "4":
                to=result.route
              break;
              case "5":
                to=result.route
              break;
              case "2":
              to=`/test/dashboardCarbon?idIndicador=${result.idIndicador}`
                break;
              default:
              to=`/test`
          }

          return to
      }

      function stateValue(result){
        let stateValue={}
        if(result)
          switch(result.icon){
              case "3":
              stateValue={routeBI:result.src}            
                break;
              case "2":              
              stateValue={indicator:result.idIndicador}
                default:
              stateValue={indicator:"use the force Luke!"}              
                break;
          }

          return stateValue
      }


    return (
        <React.Fragment>
            
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
                {rows.map((row,index) => (
                    
                    <TableRow key={row.id}>
                    {row.cells.map((cell,i) => (
                        
                        <TableCell key={cell.id} >{
                            i>0 && i<5 && cell.value
                            }
                            
                            {i==0 && (
                                <Link
                                    to={redirectURL(rowData[index])}
                                    state={stateValue(rowData[index])}
                                >
                                    {getIcons(cell.value)}
                                </Link>
                            )  }
                            {i==5 && (
                                <div onClick={()=>{
                            
                                    updateDataRows(index)
                                }}>{favIcon(cell.value)}</div>
                            )}
                            
                            
                            </TableCell>
                    )
                    )}
                    </TableRow>
                ))}
                </TableBody>
            </Table>
            </TableContainer>
        )}
        </DataTable>
    
        </React.Fragment>
    )
}

export default TableA
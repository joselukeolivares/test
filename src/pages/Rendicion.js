import React, { useContext } from 'react'
import { Footer } from '../components/Footer'
import { TableRendicion } from '../components/TableRendicion'
import TopBarLogged from '../components/TopBarLogged'
import data from '../data/rendicion.json'
import {filtersDropdown} from '../data/rendicionFilters'
import {Dropdown,TextInput} from 'carbon-components-react'
import { HomeContext } from '../context'

function Rendicion(){
    let   items = [
        {
          id: 'option-2',
          text: 'Dashboards',
        },
        {
          id: 'option-1',
          text: 'Indicadores',
        },
        {
          id: 'option-4',
          text: 'Rendición de Cuentas',
        },
        {
          id: 'option-3',
          text: 'Proyectos Vizualización',
         
        },
        {
          id: 'option-0',
          text: 'Tableros Control',
        },
        {
          id: 'option-5',
          text: 'Tableros Data Studio',
          disabled: true,
        },
      ];
//console.log(filtersDropdown)
 //let values=useContext(HomeContext)
 let [rowsData,setRowsData]=React.useState(data.rowData)
 

 function updateRowsData(index){
     
     let aux=[]

     rowsData.forEach((row,i)=>{
         if(i==index){
             row.favorite=!row.favorite
         }
         aux.push(row)
     })

                   
     setRowsData([])
     
     setTimeout(function(){
       setRowsData(aux)
     },1)
     
     //aux.pop()
     //console.log(aux)
     //this.forceUpdate()
     
 }


    return (
        <React.Fragment>
            <div id="topBarLooged-container_home">
                    <TopBarLogged />
            </div>
            <div className='subTitle-container'>                
                <h1 className='subTitle'>Tablero de Rendición de Cuentas</h1>
            </div>
            <div className='filtersContainer'>
            
                <Dropdown
                ariaLabel="Dropdown"
                id="carbon-dropdown-TypeTable"
                items={items}
                label="Rendición de Cuentas"
                titleText="Tipo de Tablero"
                itemToString={(item) => (item ? item.text : '')}
                />

                <Dropdown
                ariaLabel="Dropdown"
                id="carbon-dropdown-section"
                items={filtersDropdown.typeTable}
                label="Resumen Coppel"
                titleText="Sección"
                itemToString={(item) => (item ? item.text : '')}
                />

                <Dropdown
                ariaLabel="Dropdown"
                id="carbon-dropdown-subSection"
                items={filtersDropdown.typeTable}
                label="Principal"
                titleText="Subsección"
                itemToString={(item) => (item ? item.text : '')}
                />

                <Dropdown
                ariaLabel="Dropdown"
                id="carbon-dropdown-example"
                items={filtersDropdown.typeTable}
                label="Diciembre 2021"
                titleText="Fecha"
                itemToString={(item) => (item ? item.text : '')}
                />

                <Dropdown
                ariaLabel="Dropdown"
                id="carbon-dropdown-example"
                items={filtersDropdown.typeTable}
                label="5 Selecciones"
                titleText="Indicador"
                itemToString={(item) => (item ? item.text : '')}
                />

                <Dropdown
                ariaLabel="Dropdown"
                id="carbon-dropdown-example"
                items={filtersDropdown.typeTable}
                label="1 Selección"
                titleText="Tablero"
                itemToString={(item) => (item ? item.text : '')}
                /> 
            </div>                              
                    {<TableRendicion headerData={data.headerData} rowData={rowsData} updateRowsData={updateRowsData}></TableRendicion>            
                  }
            <HomeContext.Consumer>
              {
                (
                  {
                    rowRendicion,
                    setRowRendicion
                  }
                )=>{
                  if(rowRendicion.length==0){
                     //setRowRendicion(data.rowData)
                  }
                  return (
       
                  <React.Fragment>
                    <div>{rowRendicion}</div>
                  </React.Fragment>
                  )
                }
              }
            </HomeContext.Consumer>

            <Footer></Footer>

        </React.Fragment>
    )
}

export {Rendicion}
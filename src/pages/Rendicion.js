import React from 'react'
import { Footer } from '../components/Footer'
import { TableRendicion } from '../components/TableRendicion'
import TopBarLogged from '../components/TopBarLogged'
import data from '../data/rendicion.json'

function Rendicion(){
console.log(data.headerData)
console.log(data.rowData)
    return (
        <React.Fragment>
               <div id="topBarLooged-container_home">
                    <TopBarLogged />
               </div>               
            <h1>Hello World</h1>
            {<TableRendicion headerData={data.headerData} rowData={data.rowData}></TableRendicion>}
            <Footer></Footer>

        </React.Fragment>
    )
}

export {Rendicion}
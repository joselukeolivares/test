import React from 'react'
import {useLocation} from 'react-router-dom'
import '../../css/components/dashboard_bi.css'
import TopBarLogged from '../TopBarLogged'

 function TablerosBI(){
    const {routeBI}=useLocation().state
    return(
        <React.Fragment>
            <TopBarLogged/>
            {routeBI && (
                <iframe className="dashboard_bi" src={routeBI}/>
            )||(<h1>Dashboard developed by ClickView</h1>)
            }
            
        </React.Fragment>
        
    )
}

export {DashboardBI}
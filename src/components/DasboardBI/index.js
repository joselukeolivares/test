import React from 'react'
import {useLocation} from 'react-router-dom'
import '../../css/components/dashboard_bi.css'
import TopBarLogged from '../TopBarLogged'

 function DashboardBI(){
    const {routeBI}=useLocation().state
    return(
        <React.Fragment>
            <TopBarLogged/>
            {routeBI && (
                <iframe className="dashboard_bi" src={routeBI}/>
            )||(<h1>Dashboard developed by BI Tools</h1>)
            }
            
        </React.Fragment>
        
    )
}

export {DashboardBI}
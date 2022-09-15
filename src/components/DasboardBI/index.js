import React from 'react'
import {useLocation} from 'react-router-dom'
import '../../css/components/dashboard_bi.css'

 function DashboardBI(){
    const {routeBI}=useLocation().state
    return(
        <iframe className="dashboard_bi" src={routeBI}/>

        
    )
}

export {DashboardBI}
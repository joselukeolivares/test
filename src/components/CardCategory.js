import React from 'react'
import '../css/components/cardCategory.css'
import {Dashboard20,ChartTreemap20,Linux20,ChartLine20,TableSplit20,Carbon20} from '@carbon/icons-react'
import {Link} from 'react-router-dom'
import dashboard from '../pictures/dashboard.jpg'
import { useNavigate } from 'react-router-dom'

const clasesIconsCard={
    dashIcon_container:true,
    dashboardIcon:true,
    chartD3:false

}


    function CardCategory({metadata,idIndicador}){

        const name=metadata.name
        const type=metadata.type
        const typeCode=metadata.typeCode
        const typeIcons=metadata.typeIcons
        const route=metadata.route
        console.log(type)

        const navigate=useNavigate()
    function handleClick(){
        navigate("/test/home",{replace:true})
    }

    function iconComponent(name){
        switch(name){
            case 'dashboard':
                    return <Dashboard20 />
            case 'carbon':
                    return <Carbon20 />
            case 'chart':
                return <ChartTreemap20 />
            case 'coppelBoard':
                return <TableSplit20 />                    
            case 'indicator':
                return <ChartLine20 />
            case 'tableauIcon':
                return <br/>   
            default:
                return <Linux20 />       
        }
    }


    return   (
        <div className="Card-container">
            <div className={`top_CardCategory-container ${typeCode}Type`}>

            </div>
            <div className="bottom_CardCategory-container">
                <div id="typeTitle-topSection_Card">
                    <p id="typeTitle_typeTitle" className='typesText_card-Container'>{type}</p>
          
                    <Link
                        to={{
                            pathname:type=='indicator'?`${route}`:`/test/dashboardCarbon?idIndicador=${idIndicador}`,
                        }
                            }       
                            /*
                            state={
                                {idIndicador:idIndicador}
                            }
                            */
                            
                    >   
                        {name}
                    </Link>
                    
                </div>                               
                <div className="iconSection-Category">                    
                    {typeIcons.map((type,i)=>{
                            return(
                                <div key={`${type}.${i}`} className={`dashIcon_container ${type}`}>
                                    {
                                        iconComponent(type) 
                                    }
                                </div>
                            )
                        })}                    
                    
                </div>
                
            </div>
            
        </div>
    ) 

    }


export default CardCategory
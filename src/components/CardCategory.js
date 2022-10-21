import React from 'react'
import '../css/components/cardCategory.css'
import {Code20,Dashboard20,ReportData20,Linux20,ChartLine20,TableSplit20,Carbon20,View20} from '@carbon/icons-react'
import {Link} from 'react-router-dom'
import dashboard from '../pictures/dashboard.jpg'
import { useNavigate } from 'react-router-dom'

const clasesIconsCard={
    dashIcon_container:true,
    dashboardIcon:true,
    chartD3:false

}


    function CardCategory({metadata,idIndicador,indicator,idCategory}){
        //debugger
        const indicatorShortName=indicator===undefined?"":indicator.indicadorNC
        const name=idCategory==2?indicatorShortName:metadata.name
        const type=metadata.type
        const typeCode=metadata.typeCode
        const typeIcons=metadata.typeIcons
        const route=metadata.route
        //console.log(type)

        const navigate=useNavigate()
    function handleClick(){
        let viewedHistory=JSON.parse(localStorage.getItem('viwed_history'))
        if( viewedHistory == null){
            viewedHistory=[]
        }
        
        viewedHistory.unshift({...metadata,idCategory:idCategory})
        localStorage.setItem("viwed_history",JSON.stringify(viewedHistory))


    }

    function iconComponent(name){
        switch(name){
            case 'dashboard':
                    return <Dashboard20 />
            case 'carbon':
                    return <Carbon20 />
            case 'report':
                return <ReportData20 />
            case 'dashcat':
                return <TableSplit20 />                    
            case 'indicator':
                return <ChartLine20 />
            case 'dataviz':
                return <View20/>
            case 'developed':
                return <Code20 />       
            default:
                return <Linux20 />       
        }
    }

    
        let stateValue={}
        let pathnameValue="/test/"
        switch(idCategory){
            
                case 1:
                //debugger
                stateValue={routeBI:metadata.src}
                pathnameValue=metadata.route
                break
                case 2:
                stateValue={indicator:indicator}
                pathnameValue=`/test/dashboardCarbon?idIndicador=${idIndicador}`
                break
                case 3:
                pathnameValue=route
                break
                case 4:
                pathnameValue=metadata.route
                break
                case 5:
                break
                default:
                break
            }
/*
console.log("PathNameValue & Categgory")
console.log(pathnameValue)
console.log(idCategory)    
*/

    return   (
        <Link onClick={handleClick}
        to={{
            pathname:pathnameValue,
        }
            }       
            
            state={
                stateValue
            }
            
            
    > 
        <div className="Card-container">
            <div className={`top_CardCategory-container ${typeCode}Type`}>

            </div>
            <div className="bottom_CardCategory-container">
                <div id="typeTitle-topSection_Card">
                    <p id="typeTitle_typeTitle" className='typesText_card-Container'>{name}</p>
          
  
                        
                   
                    
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
        </Link>
    ) 

    }


export default CardCategory
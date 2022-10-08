import React from 'react'
import '../css/components/card.css'
import {Dashboard20,ChartTreemap20,Linux20,ChartLine20,TableSplit20,Carbon20} from '@carbon/icons-react'
import {Link} from 'react-router-dom'



function Card({cardInfo}){
    let title=cardInfo.title||cardInfo.indicadorNC
    let type=cardInfo.type
    let typeIcons=cardInfo.typeIcons

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

    let stateValue={}
    let pathnameValue="/test/"
    debugger
    switch(cardInfo.idCategory){
        
            case 1:
            //debugger
            stateValue={routeBI:cardInfo.src}
            pathnameValue=cardInfo.route
            break
            case 2:
            stateValue={indicator:cardInfo.indicator}
            pathnameValue=`/test/dashboardCarbon?idIndicador=${cardInfo.idIndicador}`
            break
            case 3:
            break
            case 4:
            pathnameValue=cardInfo.route
            break
            case 5:
            break
            default :

            break
        }
    

    return   (
        <Link 
            
            to={{
                pathname:pathnameValue,
            }
                }       
                
                state={
                    stateValue
                }
        
        >
                <div className="card-history">
            <div className="topSection_HistoryCard-container">
                <div id="typeTitle-topSection_Card">
                    <p id="typeTitle_typeTitle" className='typesText_card-Container'>{type}</p>
                    <p id="nameTitle_typeTitle" className='nameText_card-Container'>{title}</p>
                </div>
                <div className="iconsSection_container">                    
                    <div className="iconSection">
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
            <div className='linkCotainer'>
                <div className="link_container">
                    {/*<Link to="/" className='linkCard'>Ver de nuevo</Link>*/}
                </div>
            </div>
        </div>
        </Link>
    ) 

    
}

export default Card
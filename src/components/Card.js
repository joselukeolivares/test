import React from 'react'
import '../css/components/card.css'
import {Code20,Dashboard20,ChartTreemap20,Linux20,ChartLine20,TableSplit20,Carbon20,View20} from '@carbon/icons-react'
import {Link} from 'react-router-dom'



function Card({cardInfo}){
    let title=cardInfo.title||cardInfo.indicadorNC||cardInfo.name
    let type=cardInfo.type
    let typeIcons=cardInfo.typeIcons

    function iconComponent(name){
        switch(name){
            case 'dashboard':
                    return <Dashboard20 />
                    break
            case 'tableauIcon':
                return <div />
                    break
            case 'carbon':
                    return <Carbon20 />
                    break
            case 'chart':
                return <ChartTreemap20 />
                break
            case 'coppelBoard':
                return <TableSplit20 />                    
                break
            case 'indicator':
                return <ChartLine20 />
                break
            case 'dataviz':
                return <View20/> 
                break
            case 'developed':
                return <Code20 />       
                break
            default:   
            debugger             
                return <Linux20 />
                break
        }
    }

    let stateValue={}
    let pathnameValue="/test/"
    
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
                <div className="typeTitle-topSection_Card">
                    <p className="typeTitle_typeTitle" >{type}</p>
                    <p className="nameTitle_typeTitle" >{title}</p>
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
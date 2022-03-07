import React from "react";
import CardCategory from './CardCategory'
import '../css/components/category.css'
import { Link } from "carbon-components-react";
import {Dashboard20,ChartLine20,View20,TableSplit20,ReportData20} from '@carbon/icons-react'



let categoriesKeyList=[]
const cardsCategory=[1,2,3,4,5]
function Category({categories}){
    categoriesKeyList=Object.keys(categories)

    function iconComponent(name){
        switch(name){
            case 'dashboard':
                    return <Dashboard20 />
            case 'indicator':
                    return <ChartLine20 />
            case 'report':
                return <ReportData20 />
            case 'dataviz':
                return <View20 />                    
            case 'dashcat':
                return <TableSplit20 />            
            default:
                return <p>not icon</p>       
        }
    }



    return (
        <React.Fragment>
            
            {categoriesKeyList.map((categoryKey)=>{

                    const categoryObj=categories[categoryKey]
   
                    return (
                        <div key={`${categoryKey}`} className="categoryColumn">
                        <div className="headerCategory">
                            <div className={`dashIcon_container ${categoryKey}`} >
                                {iconComponent(categoryObj.typeIcon)}                                
                            </div>
                            <div className="nameCategory">                                
                                <h4>{categoryObj.name}</h4>
                            </div>
                        </div>
                        <div className="cardsCategory">
                            {categoryObj.bag.map((element,i)=>{
                                return (
                                    <CardCategory key={`${i}`} metadata={element}></CardCategory>
                                )
                            })}
                        </div>
                        <div className="linkMore">
                            <Link>{`${categoryObj.total} más`}</Link>
                        </div>
                        </div>
                    )
                })
            }



        </React.Fragment>
    )
}

export {Category}
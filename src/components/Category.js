import React from "react";
import CardCategory from './CardCategory'
import '../css/components/category.css'
import { Link } from "carbon-components-react";
import {Dashboard20,ChartLine20,View20,TableSplit20,ReportData20} from '@carbon/icons-react'
import {Loading} from './Loading'


let categoriesKeyList=[]
const cardsCategory=[1,2,3,4,5]
const idIndicadores=[
    "VTSM0023",
    "GSTO0004",    
    "VSVG01",
    "CLTS0023",
    "MGCM01"
    ]

function Category({categories,indicatorsData}){
    //debugger
    categoriesKeyList=Object.keys(categories)
    if(typeof indicatorsData==='undefined'){
        indicatorsData=[]
    }

    React.useEffect(() => {
        console.log(`upate Indicators data ${indicatorsData.length}`)
    }, [indicatorsData])

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

    const loadingList=[1,2,3,4,5]


    return (
        <React.Fragment>
            
            {categoriesKeyList.map((categoryKey,indexCategory)=>{
                    //debugger
                    const categoryObj=categories[categoryKey]
   
                    return (
                        <div key={`${categoryKey}_${indexCategory}`} className="categoryColumn">
                        <div className="headerCategory">
                            <div className={`dashIcon_container ${categoryKey}`} >
                                {iconComponent(categoryObj.typeIcon)}                                
                            </div>
                            <div className="nameCategory">                                
                                <h4>{categoryObj.name}</h4>
                            </div>
                        </div>
                        <div className="cardsCategory">
                            {indexCategory==0 && categoryObj.bag.map((element,i)=>{
                                return (
                                    <CardCategory key={`c${indexCategory}_${i}`} metadata={element} idCategory={categoryObj.idCategory}></CardCategory>
                                )
                            })}
                            {indexCategory>1 && categoryObj.bag.map((element,i)=>{
                                return (
                                    <CardCategory key={`c${indexCategory}_${i}`} metadata={element} idIndicador={indexCategory==1?idIndicadores[i]:0} idCategory={categoryObj.idCategory}></CardCategory>
                                )
                            })}
                            {(indexCategory==1 && indicatorsData.length==0) && loadingList.map((l,index)=>{return <Loading key={`LoadingHomeCol${index}`}/>})

                            }
                            {
                                (indexCategory==1  && indicatorsData.length>0 ) && indicatorsData.map((element,i)=>{
                                    //debugger
                                return (
                                    
                                    <CardCategory key={`c${indexCategory}_${i}`} metadata={{"type":"Carbon Design","typeCode":"CarbonDesign","typeIcons":["carbon"]}} indicator={element} idIndicador={element.idIndicador} idCategory={categoryObj.idCategory}></CardCategory>
                                    
                                    
                                )
                            })
                            }
                            
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
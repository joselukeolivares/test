import React from "react";
import { ReactDOM } from "react-dom";
import {StackedAreaChart} from "@carbon/charts-react"
//import { options } from "@carbon/charts/configuration";
import '@carbon/charts/styles.css'

class StackedAreaTS extends React.Component{
//CLTS0012
//CLTS0002
    constructor(props){
        super(props)
        /*
        311636 css160330cp7
        311938 css160330cp7
        */
        let data=[]
            //debugger
            
            if(props.idKpiData.length>0)
            data=props.idKpiData.map(row=>{
                
                return {...row,group:row.type?row.type:1}
            })
            

            console.log(data)
        this.state={
            data:data,
            options: {
                "title": "Stacked area (time series)",
                "axes": {
                    "left": {
                        "stacked": true,
                        "scaleType": "linear",
                        "mapsTo": "resultado"
                    },
                    "bottom": {
                        "scaleType": "time",
                        "mapsTo": "fechaCorte"
                    }
                },
                "curve": "curveMonotoneX",
                "height": "400px"
            }
                
        }
    }

    componentDidMount(){

        /*
        fetch(`http://localhost:3001/kpi_result?idkpi1=${encodeURIComponent('CLTS0012')}&idkpi2=${encodeURIComponent('CLTS0002')}`)
        .then(result=>result.json())
        .then(data=>{
            
            let aux=data[0]
            //debugger
            
            let grouped=data.map(row=>{
                let id=row.idIndicador
                if(aux!=id)aux=id

                return {...row,group:aux}
            })


            this.setState({...this.state,data:grouped})
            //debugger
        })
        */
        
    }


    render=()=>(
        <React.Fragment>
            {this.state.data.length>0 && (
                <StackedAreaChart
                data={this.state.data}
                options={this.state.options}
                >
                </StackedAreaChart>            
            )
            }
            </React.Fragment>
    )
       

}

export {StackedAreaTS}
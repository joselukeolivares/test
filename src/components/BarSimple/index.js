import React from "react";
import { SimpleBarChart } from "@carbon/charts-react";

export class BarSimpleDC extends React.Component{
    constructor(props){
        super(props)
        let data=[]
        console.log("Simple Bar")
        console.log(props.idKpiData)
        if(props.idKpiData.length>0){
            let groupData=props.idKpiData.map(row=>({...row,group:row.type?row.type:1,"resultado":parseInt(row.resultado)}))        
            
            data=groupData
        

        }else{
            console.log(this.state.idIndicador)
        }
        
        this.state={
            idIndicador:props.idIndicador,
            data:data,
            options:{
                "title": "Vertical simple bar (time series)",
                "axes": {
                  "left": {
                    "mapsTo": "resultado"
                  },
                  "bottom": {
                    "mapsTo": "fechaCorte",
                    "scaleType": "time"
                  }
                },
                "height": "400px"
              }
        }



        
    }

    componentDidUpdate(){
        //debugger

        
    }

    render(){
        return(
            <React.Fragment>
                {
                
                this.state.data && (
                    <SimpleBarChart
                    options={this.state.options}
                    data={this.state.data}
                    ></SimpleBarChart>
                )
                
                }
            </React.Fragment>
        )
    }
}
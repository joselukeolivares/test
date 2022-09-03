import React from "react";
import { GroupedBarChart } from "@carbon/charts-react";
import "@carbon/charts/styles.css"
         

export class GroupedBarDC extends React.Component{
    constructor(props){
        super(props)
        let data= []
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
                    "mapsTo": "value"
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
        debugger

        
    }

    render(){
        return(
            <React.Fragment>
                
                {
                
                this.state.data.length>0 && (
                    <GroupedBarChart
                    options={this.state.options}
                    data={this.state.data}
                    ></GroupedBarChart>
                )
                
                }
            </React.Fragment>
        )
    }
}
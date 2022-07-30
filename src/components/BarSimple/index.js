import React from "react";
import { SimpleBarChart } from "@carbon/charts-react";

export class BarSimpleDC extends React.Component{
    constructor(props){
        super(props)
        this.state={
            idIndicador:props.idIndicador,
            data:[],
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

    componentDidMount(){

        if(this.state.idIndicador!=null){
            fetch(`http://localhost:3001/kpi_result?idkpi1=${encodeURIComponent(`${this.state.idIndicador}`)}`)
            .then(data=>data.json())
            .then(data=>{
                let groupData=data.map(row=>({...row,group:this.state.idIndicador,"value":parseInt(row.resultado)}))        
            
                this.setState({...this.state,data:groupData})
                //debugger
            })

        }else{
            console.log(this.state.idIndicador)
        }
    }

    render(){
        return(
            <React.Fragment>
                {
                
                this.state.data.length>0 && (
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
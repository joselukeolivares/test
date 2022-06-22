import React from "react";
import { ReactDOM } from "react-dom";
import {AreaChart} from "@carbon/charts-react"
import { options } from "@carbon/charts/configuration";

class StackedAreaTS extends React.Component{
//CLTS0012
//CLTS0002
    constructor(props){
        super(props)
        this.state={
            data:[],
            options:{}
        }
    }

    componentDidMount(){
        fetch(`http://localhost;3001/kpi_result?idkpi1=$`)
    }


    render=()=>(
        <React.Fragment>
            <AreaChart
            data={this.state.data}
            options={this.state.options}
            >
            </AreaChart>
        </React.Fragment>
    )
       

}
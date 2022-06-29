import React from 'react'
import {GaugeChart} from '@carbon/charts-react'
import '@carbon/charts/styles.css'

export class GaugeDC extends React.Component{
    constructor(props){
        super(props)
        this.state={
            data:[],
            options: {
                "title": "Gauge semicircular -- danger status",
                "resizable": true,
                "height": "250px",
                "width": "100%",
                "gauge": {
                    "type": "semi",
                    "status": "success"
                }
            }
        }
    }

    componentDidMount(){
        fetch(`http://localhost:3001/gauge?id=${encodeURIComponent('MGCM01')}`)
        .then(result=>result.json())
        .then(data=>{
            debugger
            let grouped=[
                {
                    "group": "value",
                    "value": data[0].resultado
                },
                {
                    "group": "delta",
                    "value": data[0].meta
                }
            ]          
            
            this.setState({...this.state,data:grouped})
            //debugger
        })
    }

    render(){
        return(
            <React.Fragment>
                   {this.state.data.length>0 && <GaugeChart
                   options={this.state.options}
                   data={this.state.data}
                   > 
                   </GaugeChart>
                   }
            </React.Fragment>
        )
    }


}

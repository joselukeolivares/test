import React from "react";
import { DonutChart } from "@carbon/charts-react";
import '@carbon/charts/styles.css'

const ids=[
    'VTSR0005',
    'VTSR0005',
    'VTSR0010',
    'VTSR0012',
    'VTSR0012',
    'CLTS0012',
    'CLTS0002',
    'CRTC0002',
    'SRVF0001',
    'VTSR0001',
    'VTSR0008',
    'VTSR0003',
    'VTSR0032',
    'VTSM0001',
    'VTSM0003',
    'VTSM0004',
    'VTSM0005',
    'VTSM0006',
    'VTSM0007',
    'VTSM0008',
    'VTSM0014',

]

export class DonutDC extends React.Component{
    constructor(props){
        super(props)
        this.state={
            data:[],
            options:{
                'title':'Donut Data Coppel',
                "resizable":true,
                'donut':{
                    'center':{
                        'label':'Indicadores'
                    }
                },
                "height":'400px'
            }
        }
    }

    componentDidMount(){
        let fetchIds=`http://localhost:3001/lastResultadoById?`

        ids.forEach((row,index)=>{
            fetchIds+=`idkpi${index}=${encodeURIComponent(row)}`
            if(index<=ids.length-1){
                fetchIds+=`&`
            }
        })

        fetch(fetchIds)
            .then(result=>result.json())
            .then(data=>{

                let grouped=data.map(row=>{
                    return ({...row,group:row.idIndicador,value:parseInt(row.resultado)})
                })

                this.setState({...this.state,data:grouped})
                debugger
            })

    }

    render(){
        return(
            <React.Fragment>
                {this.state.data.length!=0 &&
                <DonutChart
                options={this.state.options}
                data={this.state.data}
                >

                </DonutChart>
                }
            </React.Fragment>
        )
    }
}
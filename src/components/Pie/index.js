import React from 'react'
import {PieChart} from '@carbon/charts-react'
import '@carbon/charts/styles.css'

const ids=[
    "CRTC0002",
    "SRVF0001",
    "VTSM0001",
    "VTSM0002",
    "VTSM0003",
    "VTSM0004",
    "VTSM0005",
    "VTSM0006",
    "VTSM0007",
    "VTSM0008",
]

export class PieChartDC extends React.Component{

    constructor(props){
        super(props)
        this.state={
            data:[],
            options: {
                "title": "Pie",
                "resizable": true,
                "height": "400px"
            }
        }
    }

    componentDidMount(){
        let fetchIds=`http://localhost:3001/lastResultadoById?idkpi0=${encodeURIComponent(`${ids[0]}`)}`
        ids.forEach((id,index)=>fetchIds+=`&idkpi${index+1}=${id}`)
        
        fetch(fetchIds)
        .then(result=>result.json())
        .then(data=>{
            let aux=''
            let grouped=data.map(row=>{
                if(aux!==row.idIndicador)aux=row.idIndicador
                
                return {...row,group:aux,value:row.resultado}
                
            })
            
            
            this.setState({...this.state,data:grouped})
            
            //console.log(this.state.data)

        })
    }

    render(){
        return(
            <React.Fragment>
                <p>{"hello"}</p>
            {
                <PieChart
                options={this.state.options}
                data={this.state.data}
                >
                </PieChart>
            }
            </React.Fragment>
        )
    }
}
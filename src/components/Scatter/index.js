import React from 'react'
import {ScatterChart} from '@carbon/charts-react'
import '@carbon/charts/styles.css'


const ids=[
    'VTSR0005',
    'VTSR0005',
    'VTSR0010',
    'VTSR0012',
    'VTSR0012' 
]

export class ScatterDC extends React.Component{
    constructor(props){
        super(props)
        this.state={
            data:[],
            options:{
                "title":"Scatter for Data Coppel",
                "axes":{
                    "bottom":{
                        "title":"Resultado Indicadores 2021",
                        "scaleType":"time",
                        "mapsTo":"fechaCorte"
                    },
                    "left":{
                        "mapsTo":"resultado"
                    }
                },
                "height":"400px"
            }
        }
    }

    componentDidMount(){
        let fetchAPI='http://localhost:3001/kpi_result?'
        ids.forEach((row,index)=>{
            fetchAPI+=`idkpi${index}=${row}`
            if(index<ids.length-1){
                fetchAPI+='&'
            }
        })

        console.log(fetchAPI)

        
        fetch(fetchAPI)
            .then(result=>result.json())
            .then(data=>{

                let grouped=data.map(row=>{
                    return {...row,value:row.resultado,group:row.idIndicador}
                })

                this.setState({...this.state,data:grouped})
            })
            
    }

    render(){
        return(
            <React.Fragment>
                {this.state.data.length>0 && 
                
                    <ScatterChart
                        options={this.state.options}
                        data={this.state.data}
                        >                    
                    </ScatterChart>
                }
            </React.Fragment>
        )
    }
}
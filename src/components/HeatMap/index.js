import React from 'react'
import {HeatmapChart} from '@carbon/charts-react'
import '@carbon/charts/styles.css'

export class HeatMapChartDC extends React.Component{
        
        constructor(props){
            super(props)
            let data=props.idKpiData
            //debugger
            if(data.length>0){
                let transform=data.map(row=>{
                    return {...row,value:row.resultado,year:(row.fechaCorte).substring(0,4),month:(row.fechaCorte).substring(5,7)}
                })

                data=transform
               
            }

            this.state={
                data:data,
                options:{
                    "title":"HeatMap for DataCoppel",
                    "axes":{
                        "bottom":{
                            "title":"IdIndicadores",
                            "mapsTo":"month",
                            "scaleType":"labels"
                        },
                        "left":{
                            "title":"Fecha Corte",
                            "mapsTo":"year",
                            "scaleType":"labels"
                        }
                    },
                    "heatmap":{
                        "colorLegend":{
                            "title":"Legend Title"
                        }
                    },
                    
                }
            }
        }

        componentDidUpdate(){
            let transform=this.state.data.map(row=>{
                return {...row,value:row.resultado,year:(row.fechaCorte).substring(0,4),month:(row.fechaCorte).substring(5,7)}
            })

            this.setState({...this.state,data:transform})
        
        }

        componentDidMount(){
        /*
            //let fetchAPI=`http://localhost:3001/kpi_result?idkpi0=${encodeURIComponent('VTSR0005')}&dateMin=${encodeURIComponent("2021-01-01")}&dateMax=${encodeURIComponent("2021-12-01")}`
            let fetchAPI=`http://localhost:3001/kpi_result?idkpi0=${encodeURIComponent('VTSR0005')}`


            fetch(fetchAPI)
                .then(result=>result.json())
                .then(data=>{

                    let transform=data.map(row=>{
                        return {...row,value:row.resultado,year:(row.fechaCorte).substring(0,4),month:(row.fechaCorte).substring(5,7)}
                    })

                    console.log(transform)
                    this.setState({...this.state,data:transform})
                })

                

            //
            */
        }


        render (){
            return (
                <React.Fragment>                    
                    {this.state.data.length>0 &&
                    <HeatmapChart
                        options={this.state.options}
                        data={this.state.data}
                        >                        
                    </HeatmapChart>                    
                    }
                    </React.Fragment>
            )
        }
}
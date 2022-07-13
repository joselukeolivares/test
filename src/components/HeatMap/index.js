import React from 'react'
import {HeatmapChart} from '@carbon/charts-react'
import '@carbon/charts/styles.css'

export class HeatMapChartDC extends React.Component{
        
        constructor(props){
            super(props)
            this.state={
                data:[       
                ],
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

        componentDidMount(){

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
        }


        render (){
            return (
                <React.Fragment>
                    <h1>Hola mundo</h1>
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
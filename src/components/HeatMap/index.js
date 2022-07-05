import React from 'react'
import {HeatChart} from '@carbon/charts-react'
import '@carbon/charts/styles.css'

export class HeatChartDC extends React.Component{
        
        constructor(props){
            super(props)
            this.state={
                data:[],
                options:{
                    "title":"HeatMap for DataCoppel",
                    "axes":{
                        "bottom":{
                            "title":"IdIndicadores",
                            "mapsTo":"idIndicador",
                            "scaleType":"labels"
                        },
                        "left":{
                            "title":"Fecha Corte",
                            "mapsTo":"FechaCorte",
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
            //
        }


        render (){
            return (
                <React.Fragment>
                    {this.state.data.length>0 &&
                    <HeatChart
                        options={this.state.options}
                        data={this.state.data}
                        >                        
                    </HeatChart>                    
                    }
                    </React.Fragment>
            )
        }
}
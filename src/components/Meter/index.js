import React from 'react'
import { MeterChart } from '@carbon/charts-react'
import '@carbon/charts/styles.css'

function MeterChartDC ({value,lowLimit,hightLimit}){

    let data=[{
        "group":"data 1",
        "value":value
    }]
    let options={
        "title":"Cumplimiento",
        "meter":{
            "peak":90,
            "status":{
                "ranges":[
                    {
                        "range":[
                            0,
                            100
                        ],
                        "status":"succes"

                    }
                ]
            }
        },
        "height":"100px"
    }

    return (
        <React.Fragment>
            {value!=null && lowLimit!=null && hightLimit!=null && (

                <MeterChart
                data={data}
                options={options}
                >
                </MeterChart>
            )}

        </React.Fragment>
    )
}

export {MeterChartDC}


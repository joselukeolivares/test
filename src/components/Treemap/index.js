import React from 'react'
import {TreemapChart} from '@carbon/charts-react'
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

export class TreeMap extends React.Component{
    constructor(props){
        super(props)
        this.state={
            data:[],
            options :{
                "title": "Treemap",
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
            let newData=[]
            
            let grouped=data.map(row=>{
                if(aux!==row.idIndicador){
                    aux=row.idIndicador
                }
                
                return {...row,name:aux,value:row.resultado}
                
            })
            let parent=''
            grouped.forEach(row=>{
                if(parent!=row.areaFuenteDato){
                    parent=row.areaFuenteDato
                    if(parent=='NULL')parent="Desconocido"
                    newData[newData.length]={
                        name:parent.replace('.',''),
                        children:[]
                    }
                }

                newData[newData.length-1].children.push(row)
                
                
            })
            
            
            this.setState({...this.state,data:newData})
            
            // console.log(newData)
            

            })
    }

    render(){
        return (
            <React.Fragment>
                <p>Treemap for Data Coppel</p>
                <TreemapChart
                options={this.state.options}
                data={this.state.data}
                ></TreemapChart>
            </React.Fragment>    
        )
    }
}


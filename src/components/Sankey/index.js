import React from 'react'
import {SankeyD3} from './app'

 export class Sankey extends React.Component{
    constructor(props){
        super(props)
        
    }

    componentDidMount(){
        SankeyD3()
        
    }



    render(){
        return (
            <React.Fragment>
            <h1>Diagrama Sankey</h1>
            <div className="sankeySVG"></div>     
            </React.Fragment>
        )
    }
}
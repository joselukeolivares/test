import React from 'react'
import D3dfMigracion from './D3charts/CrudDf'
import vega from './data/vega.json'
import * as d3 from 'd3'
import {Button} from 'carbon-components-react'
import {Play32,Pause32,SkipForwardFilled32,SkipBackFilled32} from '@carbon/icons-react'
import '../App.css'


class MigracionPage extends React.Component{


    static defaultProps={
        chart:D3dfMigracion,
        control:{play:true,pause:false,forward:false,backward:false}        
    }

     
     

    componentDidMount(){
       const {height,width,margin} =this.props;
       const configuration={height,width,margin}
       let data=[]
  

       
   

    this._chart= this.props.chart.create(
        this._rootNode,
        this.props.data,
        configuration
    )
    

    }
    
    onHandlePlay=props=>(event)=>{    
        //debugger        
        this._chart=props.chart.controls(
            this._chart,
            {trigger:event.currentTarget.id}
        )
        
       //console.log(props)
        
    }

    componentDidUpdate(){
        const {height,width,margin} =this.props;
        const configuration={height,width,margin}
 
        this._chart=this.props.chart.update(
            this._rootNode,
            this.props.data,
            configuration,
            this._chart
        )
    }

    componentWillUnmount(){
        this.props.chart.destroy(this._rootNode)
    }

    _setRef(componentNode){
        this._rootNode=componentNode
    }



    render(){
        return(
            <React.Fragment>
                    
                    <div>
                    <div id="migracionSVG"></div>                        
                    <div className="migracion-re-container" ref={this._setRef.bind(this)}></div>
                    <div className='buttonsPlayer'>
                    <Button id="playBtnMigracion"  onClick={this.onHandlePlay(this.props)}>Play <Play32  /></Button>                    
                    <Button id="pauseBtnMigracion"    onClick={this.onHandlePlay(this.props)}>Pause<Pause32 /></Button>                    
                    {/*<Button >Skip Back<SkipBackFilled32 /></Button>*/}
                    </div>
                    

            </div>
            </React.Fragment>

        )
    }

}

export default MigracionPage
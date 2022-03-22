import React from 'react'
import D3df from './D3charts/D3df'

class MigracionR extends React.Component{

    static defaultProps={
        chart:D3df
    }

    componentDidMount(){
       const {height,width,margin} =this.props;
       const configuration={height,width,margin}

       this._chart=this.props.chart.create(
           this._rootNode,
           this.props.data,
           configuration
       )
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
            <div className="bar-container" ref={this._setRef.bind(this)}></div>
        )
    }

}

export default MigracionR
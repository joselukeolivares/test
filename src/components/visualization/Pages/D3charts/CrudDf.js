import * as d3 from 'd3'
import DfMigracion from './MigracionRe'

const setChartProperty=(chart,configuration,key)=>{
    if(configuration[key]||typeof configuration[key]==='string'){
        chart[key](configuration[key])
    }

}


const applyConfiguration=(chart,configuration)=>{
    Object.keys(configuration).forEach(
        setChartProperty.bind(null,chart,configuration)
    )
    return chart
}

const crudDf={}

crudDf.create=(el,data,configuration={})=>{
    const container=d3.select(el)
    const chart=DfMigracion()
    

    container.datum(data).call(applyConfiguration(chart,configuration))
    
    return chart
}

crudDf.update=(el,data,configuration={},chart)=>{
    const container=d3.select(el)

    if(data){
        container.datum(data).call(applyConfiguration(chart,configuration))
    }else{
        container.call(applyConfiguration(chart,configuration))
    }

    return chart
}

crudDf.destroy=()=>{}

crudDf.controls=(chart,control)=>{
    
    //debugger
    //return chart.idTimeInterval(control,chart)
}

export default crudDf



import React from 'react'


function CarbonChart(){

    const [dataKpi,setDataKpi]=React.useState({})


    useEffect(()=>{
        fetch('localhost:3001/dcoppel/ci')
        .then(response=>response.json())
        .then(data=>setDataKPI(data))
    },[])

    return(
        <React.Fragment>
            <p>Este es un componente para CarbonChart</p>
            <p>data.idIndicador</p>
        </React.Fragment>
    )
}
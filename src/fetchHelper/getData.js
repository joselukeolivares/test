 function getDataIndicador(ids,typeRequest){
    
    let uriBase;
        switch(typeRequest){
            case 1:{                
                uriBase=`http://localhost:3001/kpi_result?`  
                return {case:1,promiseData:dataResultado(ids,uriBase),loaded:true}
            }
            break;
            case 2:{                
                uriBase=`http://localhost:3001/kpi_forecast?`                  
                return {case:2,promiseData:dataResultado(ids,uriBase),loaded:true}
            }
            break;
            case 3:{                
                uriBase=`http://localhost:3001/metaIndicador?`                  
                return {case:3,promiseData:dataResultado(ids,uriBase),loaded:true}
            }
            break;
            case 4:{                
                uriBase=`http://localhost:3001/metaDataIndicador?`                  
                return {case:4,promiseData:dataResultado(ids,uriBase),loaded:true}
            }
            break;
            default: return {loaded:false,case:typeRequest}
        }
    }
    
    function uriMaker(uriBase,ids){
        
        ids.forEach((element,index) => {
            uriBase+=`idkpi${index}=${encodeURIComponent(`${element}`)}`
        });       
        return uriBase
    }
    
  async  function fetchingData(uriToFetch){
        console.log("Fetching")
    const response=await fetch(uriToFetch)
    const dataJson=await response.json()    
    return dataJson
}

 function  dataResultado(ids,uriBase){
    //debugger    
    let uriToFetch=uriMaker(uriBase,ids)
    return fetchingData(uriToFetch)
}

export {getDataIndicador}
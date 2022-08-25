 function getDataIndicador(ids,typeRequest){
    
        
        switch(typeRequest){
            case 1:{                
                
                return {case:1,promiseData:dataResultado(ids),loaded:true}
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

 function  dataResultado(ids){
    //debugger
    let uriBase=`http://localhost:3001/kpi_result?`
    let uriToFetch=uriMaker(uriBase,ids)
    return fetchingData(uriToFetch)
    
     

		

}

export {getDataIndicador}
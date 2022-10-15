import React from "react";
import {Dropdown,TextInput,OrderedList,ListItem} from 'carbon-components-react'
import {Search32} from '@carbon/icons-react'
import '../../css/components/buscador.css'
import { useNavigate } from "react-router-dom";
import { HomeContext } from "../../context";
import {Link} from 'react-router-dom'


function Buscador(){
  
  let   items = [
        {
          id: 'option-2',
          text: 'Dashboards',
        },
        {
          id: 'option-1',
          text: 'Indicadores',
        },
        {
          id: 'option-4',
          text: 'Rendición de Cuentas',
        },
        {
          id: 'option-3',
          text: 'Proyectos Vizualización',
         
        },
        {
          id: 'option-0',
          text: 'Tableros Control',
        },
        {
          id: 'option-5',
          text: 'Tableros Data Studio',
          disabled: true,
        },
      ];

      let [category,setCategory]=React.useState({})
      let [redirect,setRedirect]=React.useState(false)
      const [searchText,setSearchText]=React.useState('')
      const [searchResults,setSearchResults]=React.useState([])
      let navigate=useNavigate()

      function searchTo(flag) {
        if(!flag)
        navigate("/test/resultados")
        //setRedirect(true)
      }

        if(redirect){
          navigate("/test/resultados")
          //setComponent('resultados',{message:category})
          
        }

      function handleChange(e){
        //console.log()
         
        let value=e.target.value
        let search={
          "query": { "match": { "name": `${value}` } }
        }
          if(typeof value!=undefined && value.length>=0){
              fetch('http://localhost:9200/datacoppel/_search',{
                method:'POST',
                headers:{
                "Content-Type":"application/json"
                },
                mode:'cors',
                body:JSON.stringify(search)
              })
              .then(response=>response.json())
              .then(data=>{
                  //console.log(data)
                  let results=data.hits.hits.map(hits=>hits["_source"])
                  setSearchResults(results)
                  //debugger
              })
              .catch(err=>console.log(err))
          }
         
      }
      
      function redirectURL(result){
        debugger
        let to=""
          switch(result.type){
              case 1:
                to=result.route                
                break;
              case 3:
                break;
              case 4:
                to=result.route
              break;
                default:
                to=`/test/dashboardCarbon?idIndicador=${result.idIndicador}`
                break;
          }

          return to
      }

      function stateValue(result){
        let stateValue={}
          switch(result.type){
              case 1:
              stateValue={routeBI:result.src}            
                break;
              case 3:
                break;
              case 4:
              stateValue={indicator:"Homer Simpson"}              
                break;
              default:
              stateValue={indicator:result.indicator}
                break;
          }

          return stateValue
      }
        return (
            <div id="contenedor_Buscador" >
                    
                <HomeContext.Consumer>
                  {({
                    setcatFilter,
                    setHomeVisible,
                    setResultados,
                    setFavorite,
                    resultados,
                    setSubtitle,
                    setTopSearch
                    })=>{

                    let path=""

                    return (
                      <React.Fragment>
                    <div id="Dropdown_Buscador" >
                        <Dropdown
                            id="DropdownCarbon_buscador"                                                
                            label="Selecciona Tipo de Visualización"
                            items={items}
                            itemToString={(item) => (item ? item.text : '')}
                            onChange={({selectedItem})=>{
                              console.log(selectedItem)
                              let id=parseInt((selectedItem.id).substring(7))
                              setCategory(id+1)
                    

                              
                            }}
                            />
                        </div>
                        <div id="TextInput_Buscador">
                            <TextInput
                            id="what_looking"
                            labelText=""
                            placeholder={"What are you looking for today?"}
                            onChange={handleChange}
                            ></TextInput>
                            <OrderedList>
                                {searchResults.map((result,i)=>{



                                  return(                                   
                                    <ListItem key={`searchListItem${i}`}>
                                      <Link
                                      to={result.route||`/test/dashboardCarbon?idIndicador=${result.idIndicador}`}
                                      state={{"id":2}}
                                      >{result.name}</Link>
                                      
                                    </ListItem>  
                                  )
                                })}
                            </OrderedList>
                        </div>
                        <div className="searchIcon" onClick={()=>{
                                    setHomeVisible(false)
                                    setResultados(true)
                                    setFavorite(false)
                                    setSubtitle("Data Coppel")
                                    setTopSearch(true)                                  
                                    setcatFilter(category)

                        }} >
                                <Search32 onClick={()=>{
                                    setFavorite(false)
                                    searchTo(resultados)
                                  
                                }} className="search_icon"/>
                        </div> 
                      </React.Fragment>
                    )
                  }}
                </HomeContext.Consumer>
  
            </div>
        )
    


}

export default Buscador
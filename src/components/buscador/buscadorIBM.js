import React from "react";
import {Dropdown,TextInput} from 'carbon-components-react'
import {Search32} from '@carbon/icons-react'
import '../../css/components/buscador.css'
import { useNavigate } from "react-router-dom";
import { HomeContext } from "../../context";


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
                            ></TextInput>
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
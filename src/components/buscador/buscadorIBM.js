import React from "react";
import {Dropdown,TextInput} from 'carbon-components-react'
import {Search32} from '@carbon/icons-react'
import '../../css/components/buscador.css'
import { useNavigate } from "react-router-dom";


function Buscador(){
  
  let   items = [
        {
          id: 'option-0',
          text: 'Dashboards',
        },
        {
          id: 'option-1',
          text: 'Indicadores',
        },
        {
          id: 'option-2',
          text: 'Rendición de Cuentas',
        },
        {
          id: 'option-3',
          text: 'Proyectos Vizualización',
         
        },
        {
          id: 'option-4',
          text: 'Tableros Tableau',
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

      function searchTo() {
        
        setRedirect(true)
      }

        if(redirect){
          navigate("/resultados",{state:{cat:category}})
          //setResultados(true)
          
        }
        return (
            <div id="contenedor_Buscador" >
                    
                    <div id="Dropdown_Buscador" >
                    <Dropdown
                        id="DropdownCarbon_buscador"                                                
                        label="Selecciona Tipo de Visualización"
                        items={items}
                        itemToString={(item) => (item ? item.text : '')}
                        onChange={({selectedItem})=>{
                          console.log(selectedItem)
                          setCategory(selectedItem)
                          
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
                    <div className="searchIcon" onClick={searchTo} >
                            <Search32  className="search_icon"/>
                    </div>    
  
            </div>
        )
    


}

export default Buscador
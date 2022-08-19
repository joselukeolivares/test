import React from 'react'
import {ModalWrapper,ModalFooter,Select,SelectItem,SelectGroup} from 'carbon-components-react'
import {Bot20} from '@carbon/icons-react'


export function AddIndicador({children,getData,setIdSelected}){
   
    return (
        <ModalWrapper
            buttonTriggerText="Agregar Indicador"
            modalHeading="Selecciona un indicador para agregar"
            modalLabel="Domo!"
            size='lg'            
            handleSubmit={()=>{
                getData()
                return true
            }}
            shouldCloseAfterSubmit

            >
            
            
            <Select
                defaultValue={"Indicadores"}
                helperText={"Selecciona un indicador"}                
                id='select-ids-lista'
                labelText="Selecciona"
                onChange={(e)=>{                    
                    setIdSelected(e.nativeEvent.target.value)
                    console.log(e)

                }}
            >

                {children}                      
                                         
            </Select>
        </ModalWrapper>
        
    )
}
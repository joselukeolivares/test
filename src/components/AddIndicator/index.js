import React from 'react'
import {ModalWrapper,Select,SelectItem,SelectGroup} from 'carbon-components-react'


export function AddIndicador({children,items}){
    
    return (
        <ModalWrapper
            buttonTriggerText="Agregar Indicador"
            modalHeading="Selecciona un indicador para agregar"
            modalLabel="Domo!"
            size='lg'
            secondaryText='Añadir Indicador'
            >
            {children}
            <Select
                defaultValue={"Indicadores"}
                helperText={"Selecciona un indicador"}                
                id='select-ids-lista'
                labelText="Selecciona"

                >

                {
                    items.map((element,index) => {
                        //debugger
                    return (                        
                        
                        <SelectItem 
                             text={`${element.label}`}
                             value={`${element.label}`}
                         /> 
                    )
                })
                }                         
            </Select>
        </ModalWrapper>
        
    )
}
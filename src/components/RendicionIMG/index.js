import React from 'react'
import TopBarLogged from '../TopBarLogged'
import Rendicion from '../../assets/Tablero.png'

function RendicionIMG(){
    return (
        <React.Fragment>
                <TopBarLogged />
                <h1>Rendición De Cuentas</h1>
                <img style={{width:"100%"}}src={Rendicion} alt="Rendicion"/>
            </React.Fragment>
    )
}

export {RendicionIMG}
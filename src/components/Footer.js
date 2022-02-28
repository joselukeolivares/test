import React from 'react'
import coppelLogo_png from '../pictures/Coppel.png'
import cienciaD_png from '../pictures/CD.png'
import '../css/components/footer.css'

function Footer(){
    return (
        <div className='footerContainer'>
            <div className='leftSide'>
                <p>Condiciones de uso</p>
                <p>Aviso de privacidad</p>
                <p>Fuentes de datos</p>
                <p>Grupo Coppel SA. de CV. y afiliados. Todos los derechos reservados.</p>
            </div>
            <div className='rightSide'>
                <img className='coppelLogo' src={coppelLogo_png}></img>
                <img className='CDLogo' src={cienciaD_png}></img>
            </div>

        </div>
    )

}

export {Footer}
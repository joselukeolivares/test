import {slide  as Menu} from 'react-burger-menu'
import {Menu32} from '@carbon/icons-react'

function BurguerMenu(){
    var styles = {
        bmBurgerButton: {
          position: 'fixed',
          width: '36px',
          height: '30px',
          left: '36px',
          top: '36px'
        },
        bmBurgerBars: {
          background: '#373a47'
        },
        bmBurgerBarsHover: {
          background: '#a90000'
        },
        bmCrossButton: {
          height: '24px',
          width: '24px'
        },
        bmCross: {
          background: '#bdc3c7'
        },
        bmMenuWrap: {
          position: 'fixed',
          height: '100%'
        },
        bmMenu: {
          background: '#161616',
          padding: '2.5em 1.5em 0',
          fontSize: '1.15em'
        },
        bmMorphShape: {
          fill: '#373a47'
        },
        bmItemList: {
          color: '#b8b7ad',
          padding: '0.8em'
        },
        bmItem: {
          display: 'block',
          textDecoration:'none',
          color:'white',
          marginTop:'1rem'
        },
        bmOverlay: {
          background: 'rgba(0, 0, 0, 0.3)'
        }
      }

      function showSettings(event) {
        
    }

    return (
        <Menu customBurgerIcon={<Menu32 className="carbon_icon"/>} styles={styles}>
                    <a id="home" className="menu-item" href="/">Home</a>
                    <a id="favoritos" className="menu-item" href="/favoritos">Favoritos</a>
                    <a id="historial" className="menu-item" href="/historial">Historial</a>
                    <a id="rendicion" className="menu-item--small" href="">Rendición de Cuentas</a>
                    </Menu>
    )
}

export default BurguerMenu
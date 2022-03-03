import {slide  as Menu} from 'react-burger-menu'
import {Menu32} from '@carbon/icons-react'
import { HomeContext } from '../context'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'


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
        },
        buttonM:{
          cursor:'pointer'
        }
      }
    const values=useContext(HomeContext)
    const navigate=useNavigate()

    function swithContent(code){
      switch(code){
        case 1:
              values.setHomeVisible(true)
              values.setResultados(false)
              values.setFavorite(false)
              values.setHistory(false)
              break;
        case 2:
          console.log("option 2 burguer menu")
          values.setFavorite(true)
          values.setHistory(false)
          navigate("/resultados",{replace:true})
              break;
        case 3:
          values.setFavorite(false)
          values.setHistory(true)
          navigate("/resultados")
              break;
        case 4:

              break;
        default:
          console.log("option invalid in burguer menu")
        
      }
      
      
    }



    return (
        <Menu customBurgerIcon={<Menu32 className="carbon_icon"/>} styles={styles}>
                    <a id="home" className="menu-item" href="/home" >Home</a>
                    <div id="favoritos" className="menu-item buttonM" styles={styles} onClick={()=>swithContent(2)}>Favoritos</div>
                    <div id="historial" className="menu-item buttonM" styles={styles} onClick={()=>swithContent(3)}>Historial</div>
                    <div id="rendicion" className="menu-item--small buttonM" styles={styles} href="/home" >Rendición de Cuentas</div>
                    </Menu>
    )
}

export default BurguerMenu
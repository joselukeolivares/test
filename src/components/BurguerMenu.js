import {slide  as Menu} from 'react-burger-menu'
import {Menu32,Home20,Explore20,Add20,RecentlyViewed20,Gamification20,Dashboard20,ChartLine20,ReportData20,View20,TableSplit20,Bot20} from '@carbon/icons-react'
import { HomeContext } from '../context'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import '../css/components/burguerMenu.css'


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
          display: 'flex',
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
              values.setTopSearch(false)
              values.setBuscador(true)
              break;
        case 2:
          //console.log("option 2 burguer menu")
          values.setFavorite(true)
          values.setHistory(false)
          values.setTopSearch(true)
          values.setBuscador(false)
          values.setSubtitle("Mis Favoritos")
          navigate("/test/resultados",{replace:true})
              break;
        case 3:
          values.setFavorite(false)
          values.setHistory(true)
          values.setTopSearch(true)
          values.setBuscador(false)
          values.setSubtitle("Historial")
          navigate("/test/resultados")
              break;
        case 4:
          navigate("/test/resultados",{replace:true})
              break;
        case 5:
          navigate("/test/rendicion",{replace:true})
              break;
        default:
          console.log("option invalid in burguer menu")
        
      }
      
      
    }



    return (
        <Menu customBurgerIcon={<Menu32 className="carbon_icon"/>} styles={styles}>
                    <div className='burguer-cursor'>
                      
                      <a id="home" className="menu-item menu-subItem" href="/test/home" > <Home20/><p className='burguer-titles'>Home</p> </a>
                    </div>
                    
                    <div id="Explorar" className="menu-item buttonM burguer-cursor" styles={styles} onClick={()=>swithContent(2)}>
                        
                        <Explore20 />
                        <p className='burguer-titles'>Explorar</p></div>
                    <div className='burguer-cursor' onClick={()=>{
                      values.setcatFilter(3)
                      swithContent(4)
                    }}>
                          <div className="dashIcon_container dashboardsCat">
                            <Dashboard20 /></div>
                          <p className='burguer-titles'>Dasboards</p>
                    </div>
                    <div className='burguer-cursor' onClick={()=>{
                      values.setcatFilter(2)
                      swithContent(4)
                    }}>
                          <div className="dashIcon_container indicadoresCat">
                              <ChartLine20 /></div>
                          <p className='burguer-titles'>Indicadores</p>
                    </div>
                    <div className='burguer-cursor' onClick={()=>{
                      values.setcatFilter(5)
                      swithContent(4)
                    }}>
                          <div className="dashIcon_container rendicionCat">
                            <ReportData20 /></div>
                          <p className='burguer-titles'>Reportes</p>
                    </div>
                    <div className='burguer-cursor' onClick={()=>{
                      values.setcatFilter(4)
                      swithContent(4)
                    }}>
                          <div className="dashIcon_container proyectos_vCat">
                            <View20 /></div>
                          <p className='burguer-titles'>Visualización de Datos</p>
                    </div>
                    <div className='burguer-cursor' onClick={()=>{
                      values.setcatFilter(1)
                      swithContent(4)
                    }}>
                          <div className="dashIcon_container TablerosCat">
                            <TableSplit20 /></div>
                          <p className='burguer-titles'>Tableros</p>
                    </div>

                    <div id="favoritos" className="menu-item buttonM burguer-cursor" styles={styles} onClick={()=>swithContent(5)}>
                    <Bot20 /><p className='burguer-titles'>Rendición de Cuentas</p> 
                    </div>
                    <div id="favoritos" className="menu-item buttonM burguer-cursor" styles={styles} onClick={()=>swithContent(2)}>
                    <Add20/><p className='burguer-titles'>Favoritos</p> 
                    </div>  
                    <div id="historial" className="menu-item buttonM burguer-cursor" styles={styles} onClick={()=>swithContent(3)}>
                      <RecentlyViewed20 />
                      <p className='burguer-titles'>Historial</p>
                      </div>
                    <div>
                      
                      <a id="about" className="menu-item menu-subItem" href="/test/home" > <Gamification20 /><p className='burguer-titles'>About</p> About</a>
                    </div>
                    </Menu>
                    
    )
}

export default BurguerMenu
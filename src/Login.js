import logo from './assets/logo.png';
import './index.scss';
import { Button, Tile,TextInput,Checkbox, Link } from 'carbon-components-react';
import {ArrowRight32} from '@carbon/icons-react'
import { useNavigate } from 'react-router-dom';
import { HomeContext } from './context';



function Login() {
  let navigate=useNavigate()

  function handleLogin(){    
    navigate("/test/home",{replace:true})
  }
  

  return (
      <div className="Background">
  
        <div className='blackBanner'>
          <p>Data Coppel</p>
        </div>
            <div id="AppLoginContainer" className="App">
      <div className='login'>
        <img className='App-logo' src={logo}/>
        <br/>
        <h2 className="title">Inciar sesión en Data Coppel</h2>
      </div>
      <div className='form'>
      <br/>
        <div>Iniciar sesión</div>
        <br/>
        <div className="inputs">
        <TextInput id="emailInput" type="email"placeholder="Correo electrónico"  labelText=""></TextInput>
         <br/>
         <br/>
        <TextInput id="passwordInput" type="password" placeholder="Contraseña" labelText=""></TextInput>
          </div>  
          <br/>
          <br/>
      </div>
      <div>
        <HomeContext.Consumer>
            {({
              setTopBar,
              setBuscador,
              setFooter,
            })=>{
              return (
                <Button onClick={()=>{
                  setTopBar(true)
                  setBuscador(true)
                  setFooter(true)
                  handleLogin()
                }}>Continuar <ArrowRight32 /></Button>
              )
            }}       
        </HomeContext.Consumer> 
      </div>
      
          <br/>
          <br/>
      <Checkbox className="checkBs" labelText="Recordarme" id="check1"></Checkbox>      
    </div>
      </div>
  );
}

export default Login;

import './App.css';
import MigracionR from './Pages/MigracionR'
import MigracionPage from './Pages/MigracionPage'
import TopBarLogged from '../TopBarLogged';
import React from 'react';
import './index.css'
import { gsap } from "gsap";


function MigracionApp() {

  let flag=true
  
  function showHideTooltip(){
    if(flag){
      gsap.to(('.tooltip_element'),{left:"100%",opacity:'.1',delay:'.5',display:'none'})
    }else{
      gsap.to(('.tooltip_element'),{left:"0%",opacity:'1',delay:'.5',display:'flex'})
    }

    flag=!flag

  }



  
  return (
    <React.Fragment>
      
    <div className="App">
        <div className='segmentDesc'>
        <h1>MIGRACIÓN DE CLIENTES</h1>
        <p>En Coppel el activo más importante son los Clientes, pues son ellos quienes conforman y dan vida a la organización.
           Es imprescindible estudiar y entender su comportamiento dentro de la cartera de crédito para ofrecer nuevas oportunidades y estrategias de negocio que ayuden a incrementar el número de Clientes activos.
           Con base el Estado de Resultados de Clientes que conforman hoy nuestra cartera (Clientes Generados, Nunca 0-15, Nunca +15, Activos sin Vencido, Saldado 0-15, Saldado +15, Vencido 1, Vencido 2, Vencido 3, vencido 4+, Clientes Z y Quebrantados), analizamos el comportamiento de cada segmento durante un año respecto al crédito.
           En esta visualización se muestra el comportamiento de los Clientes en 2016, 2017 y 2018.</p>
        </div>  
        <MigracionPage 
                data={[]}
                width={800}
                height={400}
                margin={{
                  top: 50,
                  left: 50,
                  right: 50,
                  bottom: 50
                }}>
        

        </MigracionPage>
        <div className='quickHelp_tooltip'>
          <div className='tooltip_minimizer'>
            <div className='minimizer__tooltip_minimizer' onClick={showHideTooltip}></div>
            </div>
          <div className='tooltip_element'>
            <div className='circle_tooltip-element Ctes_Generados'>                
              </div>
            <div className='name_tooltip-element'>Clientes Generados</div>  
            </div>
            <div className='tooltip_element'>
            <div className='circle_tooltip-element Nunca0_15'>                
              </div>
            <div className='name_tooltip-element'>Nunca 0-15</div>  
            </div>
            <div className='tooltip_element'>
            <div className='circle_tooltip-element NuncaMas15'>                
              </div>
            <div className='name_tooltip-element'>Nunca +15</div>  
            </div>
            <div className='tooltip_element'>
            <div className='circle_tooltip-element ASV'>                
              </div>
            <div className='name_tooltip-element'>Activos Sin Vencido</div>  
            </div>
            <div className='tooltip_element'>
            <div className='circle_tooltip-element Saldados015'>                
              </div>
            <div className='name_tooltip-element'>Saldados 0-15</div>  
            </div>
            <div className='tooltip_element'>
            <div className='circle_tooltip-element SaldadosMas15'>                
              </div>
            <div className='name_tooltip-element'>Saldados +15</div>  
            </div>
            <div className='tooltip_element'>
            <div className='circle_tooltip-element Vencidos1'>                
              </div>
            <div className='name_tooltip-element'>Vencidos 1</div>  
            </div>
            <div className='tooltip_element'>
            <div className='circle_tooltip-element Vencidos2'>                
              </div>
            <div className='name_tooltip-element'>Vencidos 2</div>  
            </div>
            <div className='tooltip_element'>
            <div className='circle_tooltip-element Vencidos3'>                
              </div>
            <div className='name_tooltip-element'>Vencidos 3</div>  
            </div>
            <div className='tooltip_element'>
            <div className='circle_tooltip-element Vencidos4'>                
              </div>
            <div className='name_tooltip-element'>Vencidos 4</div>  
            </div>
            <div className='tooltip_element'>
            <div className='circle_tooltip-element CtesZ'>                
              </div>
            <div className='name_tooltip-element'>Clientes Z</div>  
            </div>
            <div className='tooltip_element'>
            <div className='circle_tooltip-element Quebrantados'>                
              </div>
            <div className='name_tooltip-element '>Quebrantados</div>  
            </div>
        </div>
        <div className='segmentDesc'>
          <h2>Sobre la Migración</h2>
          <p>Esta visualización nos brinda la posibilidad de observar insights e identificar tendencias sobre el comportamiento de nuestros Clientes.
              A continuación te presentamos ejercicios comparando tres años de estudio. El color corresponde al segmento al que pertenece. (En los análisis no se contempla Clientes Quebrantados, para estos habrá un análisis al final del ejercicio)
          </p>
        </div>
        <div className='segmentDesc'>
          <h3>Nunca 0-15</h3>
          <p>El crecimiento de este perfil depende en gran medida de la activación de los Clientes Generados. A continuación, se observa el número de Clientes Nunca 0-15 y el porcentaje de Activación.</p>
          <br></br>
          <p>El porcentaje de Clientes Nunca 0-15 que logra activarse ha disminuido en los últimos 3 años.</p>
        </div>
        <div className='segmentDesc'>
          <h3>Nunca +15</h3>
          <p>A este perfil migran los Clientes que no lograron activarse en un periodo de más de 15 meses. A continuación, se observa el número de Clientes Nunca +15 y el porcentaje de Activación.</p>
          <br></br>
          <p>El promedio anual que logra activarse en este perfil es de 8.5%. </p>        
        </div>
        <div className='segmentDesc'>
          <h3>Activos sin Vencido</h3>
          <p>Este perfil es el segundo con mayor número de Clientes y el más importante en relación a las ventas que generan. En esta visualización observamos el porcentaje de retención y la migración hacia otros perfiles. (La migración hacia Vencidos en los 3 años contempla los Vencidos totales: 1,2,3 y 4+)</p>
          <br></br>
          <p>En los últimos 3 años el porcentaje de retención de estos Clientes ha aumentado de un 59.6% en 2016 a 62.2% en 2018. La migración a vencidos ha disminuido de 24.8% a 22.2% y saldado se mantiene flat. </p>        
        </div>
        <div className='segmentDesc'>
          <h3>Saldado 0-15</h3>
          <p>Clientes que tuvieron la experiencia de compra y saldaron su cuenta migran a este perfil. En el ejercicio se muestra que porcentaje migra a Activos Sin Vencido, Vencidos, los que se mantienen en mismo perfil y que porcentaje migra ha Saldado +15 respectivamente.</p>
          <br></br>
          <p>El porcentaje de Clientes que migran a Activos sin Vencidos se mantiene flat en el tiempo y el porcentaje de clientes que migra a vencidos ha disminuido.</p>        
        </div>
        <div className='segmentDesc'>
          <h3>Saldado +15</h3>
          <p>A este perfil migran los Clientes que no lograron reactivarse en un periodo de más de 15 meses y su probabilidad de compra disminuye.
            En el ejercicio se muestra que porcentaje migra a Activos Sin Vencido, Vencidos, Saldado 0-15 y los que se mantienen en el mismo perfil.</p>
          <br></br>
          <p>El promedio anual solo el 10.5% se reactiva. </p>        
        </div>
        <div className='segmentDesc'>
          <h3>Vencidos</h3>
          <p>Los vencidos se dividen en Vencido 1, Vencido 2, Vencido 3 y vencido 4+, estos perfiles hacen referencia al número de abonos vencidos, independientemente de la cartera que se encuentra la deuda.
          En este ejercicio se observa el número de Clientes Vencidos y el porcentaje de migración. (La pertenencia o migración hacia Vencidos en los 4 ejercicios contempla los Vencidos totales: 1,2,3 y 4+) </p>
          <br></br>
          <p>Se observa que a menor número de vencidos es mayor la probabilidad de reactivar al Cliente, y entre mayor sea el número de vencidos se tiene mayor probabilidad de que estos Clientes migren a Cliente Z.  </p>        
        </div>
        <div className='segmentDesc'>
          <h3>Clientes Z</h3>
          <p>El comportamiento natural de este perfil es a incrementar año tras año, esto porque contiene los Clientes históricos de Coppel.
             En el ejercicio se muestra el número de Clientes que recuperamos durante los tres años de estudio.  </p>
          <br></br>
          <p>El número de clientes que logramos hacer que migren a otro perfil se ha mantenido constante. </p>        
        </div>
        <div className='segmentDesc'>
          <h3>Quebrantados</h3>
          <p>En este ejercicio se aprecia el porcentaje de clientes que migra a quebrantado por cada perfil de Clientes. (No contempla Clientes Generados).</p>
          <br></br>
          <p>En promedio la migración a Quebrantado de todos los perfiles se mantiene flat durante los 3 años.Número de Clientes Generados por Quebranto:
          <br></br>
            2016: 94,651
            <br></br>
            2017: 68,595
            <br></br>
            2018: 81,293
            </p>        
        </div>


    </div>
    </React.Fragment>

  );
}

export {MigracionApp};

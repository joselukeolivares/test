import * as d3 from 'd3'
import '../styles/migracion.css'
import agenda from '../data/agenda.json'
import {BarChart_Re} from './BarChart_Re'


function MigracionRe(){

    let data=[]
    let svg
    let nodesData
    let margin={
        top:50,
        bottom:50,
        right:50,
        left:50
    }
    let width=0
    let height=0
    let chartWidth
    let chartHeight
    let simulation
    let cluster=[
      {id:0,name:'Clientes Generados',color:'#6ea863',opacity:.5,containerNodes:[],quantity:0 },
      {id:1,name: 'Nunca 0-15',color:'#778baf',opacity:.5,containerNodes:[],quantity:0},
      {id:2,name: 'Nunca +15',color:'#778baf',opacity:1,containerNodes:[],quantity:0} ,
      {id:3,name:'Activos Sin Vencido',color:'#6ea863',opacity:1,containerNodes:[],quantity:0},
      {id:4,name:'Saldados 0-15',color:'#d6ba34',opacity:.5,containerNodes:[],quantity:0}, 
      {id:5,name:'Saldados +15',color:'#d6ba34',opacity:1,containerNodes:[],quantity:0}, 
      {id:6,name:'Vencidos 1',color:'#e0bad9',opacity:1,containerNodes:[],quantity:0},
      {id:7,name:'Vencidos 2',color:'#bc82b1',opacity:.4,containerNodes:[],quantity:0}, 
      {id:8,name:'Vencidos 3',color:'#84346f',opacity:.7,containerNodes:[],quantity:0}, 
      {id:9,name:'Vencidos +4',color:'#540437',opacity:1,containerNodes:[],quantity:0},
      {id:10,name:'Clientes Z',color:'var(--color_CtesZ)',opacity:1,containerNodes:[],quantity:0}, 
      {id:11,name:'Quebrantados',color:'#ffa15a',opacity:1,containerNodes:[],quantity:0}
      ]
    let timer={
      year_counter:0,            
      year_list:Object.keys(agenda),     
      day:"day",
      day_counter:1
    }
    let playSimulation=true

    


    //Annio Control
    timer.year=Object.keys(agenda)[timer.year_counter]
    //Mes control
    timer.month=Object.keys(agenda[timer.year])[0]
    timer.month_counter=0
    timer.month_list=Object.keys(timer.year)
    //Id setInterval
    let idTimeInterval=999

 
    


    function exports(_seletion){

      d3.select("#playBtnMigracion")
      .on('click',()=>{
        if(!playSimulation){
          playSimulation=true
          alert("Simulación en reproducción!")
          timeManager()
        }
        console.log(playSimulation)
        
      })
      

    d3.select("#pauseBtnMigracion")
    .on('click',()=>{
      if(playSimulation){
        playSimulation=false
        alert("Simulación en pausa!")
      }
      console.log(playSimulation)
    }) 

      console.log("Creando chart ")
          if(_seletion)
        _seletion.each(function(_data){
            //data=_data
            //console.log(data)
            chartHeight=height-margin.top-margin.bottom
            chartWidth=width-margin.right-margin.left
            //console.log(agenda)


            buildSVG(this)
           


        })



        function buildSVG(container){
            if(!svg){
               svg=d3.select("#migracionSVG")
                    .append('svg')
                    .classed('migracion_re',true)
                
                buildContainerGroups()
            }

            svg.attr("width",width).attr("height",height)

        }

        function buildContainerGroups(){

          let segmentos=Object.keys(agenda[Object.keys(agenda)[0]]["ene"])
          
          let tau=Math.PI*2,
              xRadius=150,
              yRadius=xRadius,
              increment=tau/segmentos.length,
              angle=0,
              //Corroborar con original estas variables
              centerX=width/2,
              centerY=height/2,
              _cos,
              _sen,
              tagFactor=1.2


          
          for(var i=0;i<segmentos.length;i++){
            angle=((increment*i)-90)+increment
            _cos=Math.cos(angle)
            _sen=Math.sin(angle)
            

            cluster[i].x=centerX+(_cos*xRadius)
            cluster[i].y=centerY+(_sen*yRadius)
            cluster[i].id=i
            cluster[i].name=segmentos[i]
            
            

           
            svg.append('text')
               .text("Hello World")
               .attr("id",`clusterTag${i}`)
               .style("fill",cluster[i].color)              
               //.attr("x",cluster[i].x)
               .attr("x",i<7?(cluster[i].x+40):(cluster[i].x-100))
               .attr("y",i==6?cluster[i].y+25:cluster[i].y)
               //.attr("y",cluster[i].y>cluster[0].y?cluster[i].y+50:cluster[i].y-50)
               
            
          }
          
          //console.log(segementos)
          //timeManager()
          buildData(cluster)

        }

        function buildData(segments){
          //Se inicia una nueva simulación desde el primer mes del año          
        
        
        if(data.length==0){

          for(var i=0;i<segments.length;i++){
          //Se crean todos los nuevamente
          buildNodes(agenda[timer.year][timer.month][segments[i].name],i)
          svg.select(`#clusterTag${i}`).text(agenda[timer.year][timer.month][segments[i].name]["Total Clientes"])
          cluster[i].quantity=parseInt((agenda[timer.year][timer.month][segments[i].name]["Total Clientes"]).replace(/,/g, ''))
          //console.log(agenda[timer.year][timer.month][segments[i].name]["Total Clientes"])
          
          }
          
          
        }else{
          //Se crean solo los nodos nuevos en Clientes Generados
          //buildNodes(agenda[timer.year_counter][timer.month]["Clientes Generados"],0)  
        }

        nodesData=d3.select(".migracion_re")
          .selectAll('.circle')
          .data(data)            
          .join("circle")                   
          .attr("class","circle")
          .attr("r",d=>d.radius)
          .attr("cy",d=>d.y)
          .attr("cx",d=>d.x)
          .attr("id",d=>d.id)                   
          .attr('fill',d=>d.color)
          .attr('opacity',d=>d.opacity)
          .on('mouseover',handlerMouseoverNode
          )
          .on('mouseout',handlerMouseoutNode)

          d3.select("#calendarMigracion").remove()
          
          svg          
          .append("text")
          .attr("id","calendarMigracion")
          .attr("x",`${width/3}px`)
          .attr("y","10px")
          .text(`${timer.month} /20${timer.year} `)

          console.log(svg.select("#calendarMigracions"))
  
        
        
        if(!simulation){
                buildSimulation()
                BarChart_Re(cluster)
                //idTimeInterval= timeManager()
                

              }   
     
  
              
        //buildSimulation()


        }

        function handlerMouseoverNode(d,i){
            
            d3.select(this)
            .attr("fill","orange")
            .attr("r",20)

            svg.append("text")
            .attr("id",`mouseOver${i.id}`)
            .text(cluster[i.clusterId].name)
            .attr("fill",cluster[i.clusterId].color)
            .attr("x",i.x-50)
            .attr("y",i.y-50) 
            

        }

        function handlerMouseoutNode(d,i){
          d3.select(this)
          .attr("fill",cluster[i.clusterId].color)
          .attr("r",i.radius)

          svg.select(`#mouseOver${i.id}`).remove()
      }

        function buildNodes(clusterElement, k){
          //k: id o posición del Cluster en la lista de segmentos
          cluster[k].indexBegin=data.length+1
          var nodes=parseInt(clusterElement["Total General"])
          for(var i=0;i<nodes;i++){
            let node={
                            id:data.length,
                            cluster:cluster.name,                           
                            value:.1,
                            clusterId:k,
                            radius:2,
                            //cx:cluster[k].x,
                            //cy:cluster[k].y,
                            x:cluster[k].x,
                            y:cluster[k].y,
                            vy:.1,
                            vx:.01,
                            color:cluster[k].color,
                            opacity:cluster[k].opacity,
                            moved:false,
                            guide:[]
                            
                            
            }
            
            cluster[k].containerNodes.push(node)
          }

          cluster[k].indexEnd=data.length
          data=data.concat(cluster[k].containerNodes)
         
          
          
          
        }

        function nodesMigration(){
          d3.select("#calendarMigracion").text(`${timer.month} /20${timer.year} `)              
          //console.log(`ID: ${idTimeInterval}`)
          let agendaN2_keys
          data=[]

          //console.log(`timer.year_counter ${timer.year_list[timer.year_counter]}`)
          //console.log(`timer.month ${timer.month}`)
          //console.log(agenda[timer.year_list[timer.year_counter]][timer.month])
          
          try{
            agendaN2_keys=Object.keys(agenda[timer.year_list[timer.year_counter]][timer.month]);
          }catch(err){
            console.log("Timer tiene los atributos inadecuados para agenda o agenda necesita ser revisada.")
          }
          
          /*
          //console.log(`agenda`)
          //console.log(agenda[timer.year_list[timer.year_counter]][timer.month])
          //console.log(agendaN2_keys)
          */
          console.log(`Date: ${timer.month} ${timer.year_list[timer.year_counter]}`)
          if(agendaN2_keys){
          agendaN2_keys.forEach(function(segmentDestiny,i){
                let agendaN3_values=agenda[timer.year_list[timer.year_counter]][timer.month][segmentDestiny]
                svg.select(`#clusterTag${i}`).text(agenda[timer.year_list[timer.year_counter]][timer.month][segmentDestiny]["Total Clientes"])
                cluster[i].quantity=parseInt((agenda[timer.year_list[timer.year_counter]][timer.month][segmentDestiny]["Total Clientes"]).replace(/,/g, ''))
                //console.log("Updating")
                //console.log(agenda[timer.year_list[timer.year_counter]][timer.month][segmentDestiny]["Total Clientes"])
                
                let agendaN4_keys=Object.keys(agendaN3_values)
                
                let sourceCluster=findcluster(agendaN3_values.name)
                
                
                    
                agendaN4_keys.forEach(function(destiny,j){
                      let migrationNumber=agendaN3_values[destiny]
                      let destinyCluster=findcluster(destiny)                      
                      /*
                      //console.log(sourceCluster)
                      //console.log(destinyCluster)
                      //console.log("*************************")
                      */
                      if(sourceCluster && destinyCluster){

                        if(sourceCluster.name!==destinyCluster.name){
                          //debugger  
                          updateNodeAtCluster(sourceCluster,destinyCluster,migrationNumber)                        
                        }
                        
                      }


  
                        
                    })      

            })}else{
              console.log("Error al intentar actualizar los nodos")
              console.log(`${timer.year_list[timer.year_counter]} ${[timer.month]}`)
            }
             //buildSimulation()
        }

        function findcluster(name){

          var segment=cluster.find(element=>element.name===name)

          return segment
        }

        function updateNodeAtCluster(sourceC,destinyC,migrationNumber){
           let counter=0
          //console.log(`${sourceC.containerNodes.length}`) 
          if(cluster[sourceC.id].containerNodes.length>0)
          for(let i=0;i<migrationNumber;i++){ 
              
              let node=cluster[sourceC.id].containerNodes.shift()  
              if(node){                              
              node.cluster=destinyC.name
              node.clusterId=destinyC.id            
              cluster[destinyC.id].containerNodes.push(node)
              counter++
              }else{
                //console.log("Error al obtener nodo del contenedor en cluster")                
              }                         
          }    
          //console.log(`${sourceC.name} ----->${destinyC.name}: ${counter} vs ${migrationNumber}`)       
        }

        function timeManager(){
         //console.log(`timeManager runing with: ${data.length}`) 
          
         idTimeInterval=0
         
         setTimeout(() => {
           console.log(`timeManager ${idTimeInterval}`)

            if(timer.month_counter<12){
               timer.month_counter++
               timer.month=Object.keys(agenda[timer.year])[(timer.month_counter-1)]              

              nodesMigration()
              data=[]
              cluster.forEach(element => {
                data=data.concat(element.containerNodes)
              });
              simulation.alpha(1).alphaTarget(0).restart()

              
            }else{
              console.log("Happy new year")              
              timer.month_counter=1
              timer.month=Object.keys(agenda[timer.year])[(timer.month_counter-1)] 

                if(timer.year_counter<timer.year_list.length){
                  timer.year_counter++
                  data=[]
                  cluster.forEach(element => {
                    element.containerNodes=[]
                  });
                  simulation=undefined
                  buildData(cluster)
                }else{
                  timer.year_counter=1
                }
                
            }

            
            
          }, 5000);

          return idTimeInterval

        }

        function buildSimulation(){

                  simulation = d3.forceSimulation(data)
                  /*	
                  //Las fuerza de atracción a cada cluster, deshabilitadas para apreciar el traslado de nodos.
                  .force('x', d3.forceX().x(function(d) {
                    
                    return d.x;
                  }))
                  .force('y', d3.forceY().y(function(d) {
                    return d.y
                  }))
                  */
                 .alpha(1)
                 .alphaTarget(0)
                  .force('collision', d3.forceCollide().radius(function(d) {
                    return d.radius;
                  }))
                  .on('tick', tick)
                  .on("end",()=>{
                    nodesData
                    .transition().duration(1000)
                    .attr("fill",d=>cluster[d.clusterId].color)
                    .attr("opacity",d=>cluster[d.clusterId].opacity)
                    if(playSimulation){
                      timeManager()
                      BarChart_Re(cluster)
                      
                    }
                  })
             
                  ;
                  
                  simulation.restart()
        
        }

        function tick(e){
        
          data.forEach(function(d){
            let alpha=simulation.alpha();

            
           try{
            d.x+=(cluster[d.clusterId].x-d.x)*simulation.alpha()*.07;
            d.y+=(cluster[d.clusterId].y-d.y)*simulation.alpha()*.07;
           }catch(err){
            
           }

            //cluster[d.cluster].value+=d.value
      })


     
      nodesData
      .attr("cx",function(d){return d.x})
      .attr("cy",function(d){return d.y})         
      }

        return timeManager

    }



    exports.fireEventControl=(control)=>{
            
      //debugger
      console.log("Button was clicked")
      console.log(exports.idTimeInterval)
      return this
      
    }

      // API
  exports.height = function(_x) {
    if (!arguments.length) {
      return height;
    }
    height = _x;

    return this;
  };

  exports.margin = function(_x) {
    if (!arguments.length) {
      return margin;
    }
    margin = {
      ...margin,
      ..._x
    };

    return this;
  };

  exports.on = function() {
      /*
    let value = dispatcher.on.apply(dispatcher, arguments);

    return value === dispatcher ? exports : value;
    */
  };

  exports.width = function(_x) {
    if (!arguments.length) {
      return width;
    }
    width = _x;

    return this;
  };

  exports.idTimeInterval=async function(control,chart){  
    //console.log(`idTimeInterval ${idTimeInterval}`) 
     // debugger
     /*
      if(control.trigger)
      switch(control.trigger){      
        case "playBtn": console.log("playBtnClicked")
                        if(!idTimeInterval){
                           //debugger                          
                           idTimeInterval=chart()()
                           console.log("play: "+idTimeInterval)                          }
                        break
        case 'pauseBtn':           
                        if(idTimeInterval){
                          new Promise((resolve,reject)=>{
                            clearInterval(idTimeInterval)
                            resolve()
                          }).then(()=>{
                            console.log("Pause: "+idTimeInterval)
                            idTimeInterval=123456789
                          })
                          
                        }
                        break
        case "fWBtn": break
        case "bWBtn": break
        default: break
      } 
      */





    return this
  }

    return exports
}
 export default MigracionRe

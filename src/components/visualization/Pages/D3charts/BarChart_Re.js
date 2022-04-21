import * as d3 from 'd3'

function BarChart_Re(data){
 let margin={top:20,right:20,bottom:30,left:40}
 let width=250
 let height=250
 let barWidth=15
 let svg;

 console.log(data[0].quantity)


 //Set Ranges and Scales 
 var x=d3.scaleBand()
         .range([0,width])
         .padding(.1)
         .domain(data.map(function(d){return d.name}))
 var y=d3.scaleLinear()
         .range([height,0])
         .domain([0,d3.max(data,function(d){return d.quantity})])

if(!document.getElementById("barchartMigracion")){
    
    svg=d3.select("#migracionSVG")
            .append("svg")
            .attr("id","barchartMigracion")
            .attr("width",width+margin.left+margin.right)
            .attr("height",height+margin.top+margin.bottom)

            console.log("Creating SVG")

}else{
    svg=d3.select("#barchartMigracion")    
    console.log("Reasigning SVG")
}

let bars=svg.selectAll(".bar")
    .data(data)

    bars.enter()
    .append("rect")
    .merge(bars)
    .attr("class","bar")
    .attr("fill","steelblue")
    .attr("x",(d)=>x(d.name))
    .attr("y",(d)=>y(0))
    .attr("width",barWidth)
    .attr("height",d=>height-y(0))
    .attr("fill",d=>d.color) 
    .on('mouseover',mouseOverRect)   
    .transition().duration(1000)
    .attr("y",(d)=>y(d.quantity))
    .attr("height",(d=>height-y(d.quantity)))
    
    

         
         
    function mouseOverRect(d,i){
            debugger
        let x_=i.x
        let y_=i.y
        
        svg.append("text")
                .text(`${i.quantity}`)
                .attr("x",()=>x(i.quantity))
                .attr("y",y(200))
                .attr("fill",i.color)
        }
        
        function mouseOutRect(d,i,svg){

        }    

}



export {BarChart_Re}
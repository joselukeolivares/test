import * as d3 from 'd3'

function BarChart_Re(data){
 let margin={top:20,right:20,bottom:30,left:40}
 let width=500
 let height=250
 let barWidth=15
 let svg;

 console.log(data)


 //Set Ranges and Scales 
 var y=d3.scaleBand()
         .range([0,height])
         .padding(.1)
         .domain(data.map(function(d){return d.name}))
 var x=d3.scaleLinear()
         .range([0,width-150])
         .domain([0,(d3.max(data,function(d){return d.quantity})*1.2)])

let axisX,axisY         

if(!document.getElementById("barchartMigracion")){
    
    svg=d3.select("#migracionSVG")
            .append("svg")
            .attr("id","barchartMigracion")
            .attr("width",width+margin.left+margin.right)
            .attr("height",height+margin.top+margin.bottom)
            .append("g")
            .attr("transform","translate(100,0)")

            console.log("Creating SVG")

           axisY=svg.append('g')                
                .attr("transform","translate(0,00)")
                .call(d3.axisLeft(y))

            axisX=svg.append("g")
                .attr("id","axisXBar")               
                .attr("transform",`translate(0,${height})`)
                

}else{
    svg=d3.select("#barchartMigracion")
    
    svg=svg.select("g")
    console.log("Reasigning SVG")
}

d3.select("#axisXBar").transition().duration(1000).call(d3.axisBottom(x)).selectAll("text")
.attr("transform","rotate(-45) translate(-10,10)")

let bars=svg.selectAll(".bar")
    .data(data)

    bars.enter()
    .append("rect")
    .merge(bars)
    .attr("class","bar")
    .attr("fill","steelblue")    
    .attr("y",(d)=>y(d.name))
    .attr("height",barWidth)
    .attr("fill",d=>d.color)
    .attr("x",(d)=>x(0)) 
    //.on('mouseover',mouseOverRect)   
    .transition().duration(1000)    
    .attr("width",(d=>x(d.quantity)))
    

let textBars=svg.selectAll(".textBars")
        .data(data)

        textBars.enter()
        .append("text")
        .merge(textBars)
        .attr("class","textBars")
        .text(d=>(d.quantity).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','))
        .attr("text-anchor", "end")
        .attr("x",(d)=>width-50)
        .attr("y",(d,i)=>y(d.name)+15)
        .attr("fill",(d)=>d.color)

        



        



    
    

         
         
    function mouseOverRect(d,i){
            //debugger
        let x_=i.x
        let y_=i.y
        
        svg.append("text")
                .text(`${i.quantity}`)
                .attr("id",`textRect${i.id}`)
                .attr("x",x(i.name))
                .attr("y",y(i.quantity))
                .attr("fill",i.color)
        }
        
        function mouseOutRect(d,i){

         svg.selectAll(`#textRect${i.id}`).remove()       

        }    

}



export {BarChart_Re}
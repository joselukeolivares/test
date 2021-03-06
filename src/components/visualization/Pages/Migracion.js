import React from "react";
import * as d3 from 'd3'
import data from './data/data.csv'
import './styles/migracion.css'

class Migracion extends  React.Component{
    render(){
        return (
            <div>
                <h1>Hola mundo!</h1>
            </div>
        )
    }

    componentDidMount(){

        if(!document.getElementById("migracionSVG")){
            this.showChart()
        }else{
            console.log("ComponentDidMount: MigracionSVG ya existe, no se renderiza de nuevo")
        }    
        
    }

    componentDidUpdate(){
        console.log("DidUpdate: Hello")
    }


    showChart (){
    
    console.log("ComponentDidMount: Hola")

    
    var margin = {top: 20, right: 20, bottom: 70, left: 40},
        width = 600 - margin.left - margin.right,
        height = 300 - margin.top - margin.bottom;

    // Parse the date / time
    const parseDate = d3.timeParse("%Y-%m");

    var x = d3.scaleBand().rangeRound([0, width], .05);

    var y = d3.scaleLinear().range([height, 0]);

    var xAxis = d3.axisBottom()
        .scale(x)
        .tickFormat(d3.timeFormat("%Y-%m"));

    var yAxis = d3.axisLeft()
        .scale(y)
        .ticks(10);

    var svg = d3.select("migracionSVG").append("svg").attr("id","migracionChart")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
    .append("g")
        .attr("transform", 
            "translate(" + margin.left + "," + margin.top + ")");
        
        d3.csv(data).then(function(data){
            if(!data){
                console.log("Error in loader")
            }
            data.forEach(function(d) {
                
                d.date = parseDate(d.date);
                d.value = +d.value;
            });
            
          x.domain(data.map(function(d) { return d.date; }));
          y.domain([0, d3.max(data, function(d) { return d.value; })]);
        
          svg.append("g")
              .attr("class", "x axis")
              .attr("transform", "translate(0," + height + ")")
              .call(xAxis)
            .selectAll("text")
              .style("text-anchor", "end")
              .attr("dx", "-.8em")
              .attr("dy", "-.55em")
              .attr("transform", "rotate(-90)" );
        
          svg.append("g")
              .attr("class", "y axis")
              .call(yAxis)
            .append("text")
              .attr("transform", "rotate(-90)")
              .attr("y", 6)
              .attr("dy", ".71em")
              .style("text-anchor", "end")
              .text("Value ($)");
        
          svg.selectAll("bar")
              .data(data)
            .enter().append("rect")
              .style("fill", "steelblue")
              .attr("x", function(d) { return x(d.date); })
              .attr("width", 10)
              .attr("y", function(d) { return y(d.value); })
              .attr("height", function(d) { return height - y(d.value); });
        })
            

            

        
        
            
            
        
 
    }

}

export default Migracion
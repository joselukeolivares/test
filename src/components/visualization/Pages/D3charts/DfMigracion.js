import * as d3 from 'd3'
import '../styles/migracion.css'


function DfMigracion(){

    let data
    let svg
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
    let xScale
    let yScale
    let xAxis
    let yAxis
    const parseDate = d3.timeParse("%Y-%m");


    function exports(_seletion){

        _seletion.each(function(_data){
            data=_data
            console.log(data)
            chartHeight=height-margin.top-margin.bottom
            chartWidth=width-margin.right-margin.left
            buildScales()
            buildAxes()
            buildSVG(this)
            drawAxes()
            buildBars()

        })

        function buildScales(){
            xScale = d3.scaleBand().rangeRound([0, width], .05);
            yScale = d3.scaleLinear().range([height-margin.top-margin.bottom, 0]);
        }

        function buildAxes(){
            xAxis = d3.axisBottom()
                .scale(xScale)
                .tickFormat(d3.timeFormat("%Y-%m"));

            yAxis = d3.axisLeft()
                .scale(yScale)
                .ticks(10);    
        }

        function buildSVG(container){
            if(!svg){
               svg=d3.select(container)
                    .append('svg')
                    .classed('migracion',true)
                
                buildContainerGroups()
            }

            svg.attr("width",width).attr("height",height)
        }

        function buildContainerGroups(){
            let container=svg
                .append("g")
                .classed("container-group",true)
            .attr("transform",`translate(${margin.left},${margin.top})`)

            //container.append("g").classed("container-group",true)
            container.append("g").classed("x-axis-group axis",true)
            container.append("g").classed("y-axis-group axis",true)

                

        }

        function drawAxes(){
            xScale.domain(data.map(function(d) { return parseDate(d.date); }));
            yScale.domain([0, d3.max(data, function(d) { return (d.value); })]);

            svg
                .select(".x-axis-group.axis")
                .attr("transform",`translate(0,${chartHeight})`)
                .call(xAxis)
                .selectAll("text")
                .style("text-anchor", "end")
                .attr("dx", "-.8em")
                .attr("dy", "-.55em")
                .attr("transform", "rotate(-90)" );
            
            svg
                .select(".y-axis-group.axis")
                .attr("transform",`rotate(0) translate(0,0)`)
                .attr("y",`${0}px`)                
                .attr("text-anchor","end")
                .text("Frecuency")
                .call(yAxis)
        }

        function buildBars(){
            let bars = svg
            .select(".container-group")
            .selectAll(".bar")
            .data(data);

    // Enter
        
    
    
      bars
          .enter()
          .append("rect")
          .style("fill", "steelblue")
          .attr("x", function(d) { 
            console.log(parseDate(d.date))  
            return xScale(parseDate(d.date)); })
          .attr("width", 10)
          .attr("y", function(d) { return yScale(d.value); })
          .attr("height", function(d) { return height-margin.top-margin.bottom - yScale(d.value); });
    

    // Exit
    bars
      .exit()
      .style("opacity", 0)
      .remove();
        }

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

    return exports
}
 export default DfMigracion

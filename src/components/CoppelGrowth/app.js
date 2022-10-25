import define1 from "./scrubber.js";

function _1(md){return(
md`# Crecimiento Coppel
Esta animación muestra la expanción de Coppel durante los últimos cincuenta años. El 1 de enero de 1956 en <a href="https://es.wikipedia.org/wiki/Culiac%C3%A1n" target="_blank">Culiacan, Sinaloa</a>, la primer tienda Coppel <svg width=8 height=16><circle cx=4 cy=10 r=4 fill=blue></circle></svg> fue abierta. Este dataset incluye más de 1600 locaciones <svg width=8 height=16><circle cx=4 cy=10 r=3.5 fill=none stroke=black></circle></svg> a lo largo del Pais de México.`
)}

function _date(Scrubber,d3,data){return(
  Scrubber(d3.utcWeek.every(2).range(...d3.extent(data, d => d.date)), {format: d3.utcFormat("%Y %b %-d"), loop: false})
)}

function _chart(d3,DOM,topojson,mx,data)
{
  const width = 960;
  const height = 640;
  
  const projection = d3.geoMercator()
      .scale(1500)
      .center([-102, 26])

  const path = d3.geoPath()
      .projection(projection)
  
  const svg = d3.select(DOM.svg(width, height))
      .style("width", "50%")
      .style("height", "auto");

  svg.append('path')
      .datum(topojson.feature(mx, mx.objects.MEX_adm1))
      .attr('fill', d => '#ddd')
      .attr("stroke", "white")
      .attr("d", path);

  const g = svg.append("g")
      .attr("fill", "none")
      .attr("stroke", "black");

  const dot = g.selectAll("circle")
    .data(data)
    .join("circle")
      .attr("transform", d => `translate(${d})`);
      // .attr("stroke", d => {
      //   return "TIENDA COPPEL" == d.formato ? "blue" : 
      //   "ZAPATERIA" == d.formato ? "red" : 
      //   "FASHION MARKET" == d.formato ? "green" : "black";
      // });

  svg.append("circle")
      .attr("fill", "blue")
      .attr("transform", `translate(${data[0]})`)
      .attr("r", 3);

  let previousDate = -Infinity;
  
  //return svg.node();
  return Object.assign(svg.node(), {
    update(date) {
      dot // enter
        .filter(d => d.date > previousDate && d.date <= date)
        .transition().attr("r", 3);
      dot // exit
        .filter(d => d.date <= previousDate && d.date > date)
        .transition().attr("r", 0);
      previousDate = date;
    }
  });
}


function _update(chart,date){return(
  chart.update(date)
)}

async function _data(FileAttachment,projection,parseDate){return(
(await FileAttachment("coppel-tsv-v2.tsv").tsv())
  .map(d => {
    const p = projection(d);
    p.date = parseDate(d.date);
    p.formato = d.formato;
    return p;
  })
  .sort((a, b) => a.date - b.date)
)}

function _parseDate(d3){return(
d3.utcParse("%Y-%m-%d")
)}

function _projection(d3){return(
d3.geoMercator().scale(1500).center([-102, 26])
)}

function _mx(d3){return(
d3.json("https://gist.githubusercontent.com/leenoah1/535b386ec5f5abdb2142258af395c388/raw/a045778d28609abc036f95702d6a44045ae7ca99/geo-data.json")
)}

function _topojson(require){return(
require("topojson-client@3")
)}

function _d3(require){return(
require("d3@5")
)}

function _12(d3){return(
d3.geoMercator
)}

export default function define(runtime, observer) {
  const main = runtime.module();
  function toString() { return this.url; }
  const fileAttachments = new Map([
    ["coppel-tsv-v2.tsv", {url: new URL("./files/coppel-tsv-v2.tsv", import.meta.url), mimeType: "text/tab-separated-values", toString}]
  ]);
  main.builtin("FileAttachment", runtime.fileAttachments(name => fileAttachments.get(name)));
  // main.variable(observer()).define(["md"], _1);
  main.variable(observer("viewof date")).define("viewof date", ["Scrubber","d3","data"], _date);
  main.variable(observer("date")).define("date", ["Generators", "viewof date"], (G, _) => G.input(_));
  main.variable(observer("chart")).define("chart", ["d3","DOM","topojson","mx","data"], _chart);
  main.variable(observer("update")).define("update", ["chart","date"], _update);
  main.variable(observer("data")).define("data", ["FileAttachment","projection","parseDate"], _data);
  main.variable(observer("parseDate")).define("parseDate", ["d3"], _parseDate);
  main.variable(observer("projection")).define("projection", ["d3"], _projection);
  main.variable(observer("mx")).define("mx", ["d3"], _mx);
  main.variable(observer("topojson")).define("topojson", ["require"], _topojson);
  main.variable(observer("d3")).define("d3", ["require"], _d3);
  main.variable(observer()).define(["d3"], _12);
  const child1 = runtime.module(define1);
  main.import("Scrubber", child1);
  return main;
}

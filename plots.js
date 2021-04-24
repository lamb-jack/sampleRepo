// Create an array of each country's numbers
var us = Object.values(data.us);
var uk = Object.values(data.uk);
var canada = Object.values(data.canada);
let labels = Object.keys(data.us);
// @ADD YOUR CODE HERE
function init(){
    let trace = {
        values: us,
        labels: labels,
        type: "pie"
    };
    let data = [trace]
    let layout = {
        height: 600,
        width: 800
    };
    Plotly.newPlot("pie", data, layout);
}
d3.select("#seldata").on("change", getData);
function getData(){
    let drop = d3.select("#seldata");
    let val = drop.property("value");
    if (val == "us"){
        Plotly.restyle("pie", "values", [us])
    } else if (val == "uk"){
        Plotly.restyle("pie", "values", [uk])
    } else if (val == "canada"){
        Plotly.restyle("pie", "values", [canada])
    }
}
init();
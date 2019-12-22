// List of words
var myWords = [{word: "Bella", size: "100"}, {word: "Max", size: "95"}, {word: "Charlie", size: "85"}, {word: "Rocky", size: "80"}, 
{word: "Lola", size: "75"}, {word: "Coco", size: "70"}, {word: "Lucy", size: "65"}, {word: "Buddy", size: "60"}, 
{word: "Lucky", size: "55"}, {word: "Daisy", size: "50"}, {word: "Luna", size: "45"}, {word: "Princess", size: "40"},
{word: "Bailey", size: "35"}, {word: "Chloe", size: "30"}, {word: "Teddy", size: "25"}, {word: "Toby", size: "20"}, {word: "Molly", size: "15"},
{word: "Milo", size: "10"}, {word: "Jack", size: "10"}, {word: "Sophie", size: "10"} ]

// set the dimensions and margins of the graph
var margin = {top: 10, right: 10, bottom: 10, left: 10},
    width = 650 - margin.left - margin.right,
    height = 450 - margin.top - margin.bottom;

// append the svg object to the body of the page
var svg = d3.select("#chartdiv").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");

// Constructs a new cloud layout instance. It run an algorithm to find the position of words that suits your requirements
// Wordcloud features that are different from one word to the other must be here
var layout = d3.layout.cloud()
  .size([width, height])
  .words(myWords.map(function(d) { return {text: d.word, size:d.size}; }))
  .padding(5)        //space between words
  .rotate(function() { return ~~(Math.random() * 2) * 90; })
  .fontSize(function(d) { return d.size; })      // font size of words
  .on("end", draw);
layout.start();

// This function takes the output of 'layout' above and draw the words
// Wordcloud features that are THE SAME from one word to the other can be here
function draw(words) {
  svg
    .append("g")
      .attr("transform", "translate(" + layout.size()[0] / 2 + "," + layout.size()[1] / 2 + ")")
      .selectAll("text")
        .data(words)
      .enter().append("text")
        .style("font-size", function(d) { return d.size; })
        .style("fill", "#69b3a2")
        .attr("text-anchor", "middle")
        .style("font-family", "Helvetica")
        .attr("transform", function(d) {
          return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
        })
        .text(function(d) { return d.text; });
}

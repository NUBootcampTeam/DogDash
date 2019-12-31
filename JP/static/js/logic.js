// Creating map object, need geo nyc
var myMap = L.map("map", {
  center: [40.6782, -73.9442],
  zoom: 8
});

// Adding tile layer
L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.streets",
  accessToken: API_KEY
}).addTo(myMap);

// Load in geojson data
var geoData = "static/data/totaldogs2.geojson";

var geojson



d3.json(geoData, function(data) {
 

  // Create a new choropleth layer
  geojson = L.choropleth(data, {

    // Define what  property in the features to use, it is dog count by zip code
   // 
    valueDog: "count",

    // Set color scale
    scale: ["#ffffb2", "#b10026"],

    // Number of breaks in step range
    steps: 10,

    // q for quartile, e for equidistant, k for k-means
    mode: "q",
    style: {
      // Border color
      color: "#fff",
      weight: 1,
      fillOpacity: 0.8
    },

    // Binding a pop-up to each layer, almost works like this
  //   onEachFeature: function(feature, layer) {
  //     layer.bindPopup("Zip Code: " + feature.properties.zip + "<br>Dog Count:<br>" +
  //       "$" + feature.properties.count);
  //   }
  // }).addTo(myMap);


// Binding a pop-up to each layer, killing $
onEachFeature: function(feature, layer) {
  layer.bindPopup("Zip Code: " + feature.properties.zip + "<br>Dog Count:<br>" +
     feature.properties.count);
}
}).addTo(myMap);


  //  Set up the legend
  //  var legend = L.control({ position: "bottomright" });
  //  legend.onAdd = function() {
  //    var div = L.DomUtil.create("div", "info legend");
  //    var limits = geojson.options.limits;
  //   var colors = geojson.options.colors;
  //    var labels = [];

  //   // Add min & max
  //    var legendInfo = "<h1>Dogs</h1>" +
  //      "<div class=\"labels\">" +
  //        "<div class=\"min\">" + limits[0] + "</div>" +
  //       "<div class=\"max\">" + limits[limits.length - 1] + "</div>" +
  //      "</div>";

  //   div.innerHTML = legendInfo;

  //   limits.forEach(function(limit, index) {
  //     labels.push("<li style=\"background-color: " + colors[index] + "\"></li>");
  //   });

  //   div.innerHTML += "<ul>" + labels.join("") + "</ul>";
  //   return div;
  // };

 //  Adding legend to the map
  //  legend.addTo(myMap);

});

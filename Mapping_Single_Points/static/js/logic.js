// Add console.log to check to see if our code is working.
console.log("working");
let map = L.map("mapid", {
    center: [
      34.0522, -118.2437
    ],
    zoom: 14
  });

  // We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    tileSize: 512,
    zoomOffset: -1,
    accessToken: API_KEY
    });

streets.addTo(map);

//  Add a marker to the map for Los Angeles, California.
let marker = L.circle([34.0522, -118.2437],{
  radius: 100,
  color: 'black',
  fillColor: '#e8eb34',
  fillOpacity: 0.2,
}).addTo(map);
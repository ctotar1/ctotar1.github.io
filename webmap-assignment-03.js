let mymap = L.map('mymap').setView([15, -15], 7);
L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png').addTo(mymap);
let mymarker = L.marker([40, -40]).addTo(mymap);
let mypolygon = L.polygon([
  [10, 20],
  [20, 40],
  [30, 60]
]).addTo(mymap);
mypolygon.bindPopup('this is my poly');
mymarker.bindPopup('this is my point');
function logMouse (event) {
  console.log('your mouse is at: ' + event.latlng)
};
mymap.on('Click.', logMouse);
var basePolyline = [
    [13, 100],
    [12, 91],
    [6, 121]
];
var myline = L.polyline(basePolyline, {color: 'blue'}).addTo(mymap);
mymap.fitBounds(myline.getBounds());

let myGreenIcon = L.icon({
  iconURL: 'tigerss.png',
  iconSize: [38, 95],
  iconAnchor: [22, 94],
  popupAnchr: [-3, -76]
})

let myMarker = L.marker([51.5, -0.09], {icon: myGreenIcon}).addTo(map);

let myStyle = {
  color: 'blue'
  fillColor: 'purple'
}

let myPolygon = L.polygon(myCoords, myStyle).addTo(mymap)

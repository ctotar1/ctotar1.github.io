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

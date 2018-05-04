let chrismap = L.map('chrismap').setView([58.665032419466684, -161.34946898219835], 58.703652797126836);
let chrislayer = L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}.png').addTo(chrismap);
let chrislayer2 = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png');
let chrislayer3 = L.tileLayer('https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png');
let layers = {
  'World': chrislayer,
  'Topo': chrislayer2,
  'Street': chrislayer3,
}

L.control.layers(layers).addTo(chrismap)
L.geoJSON(chrisdata)

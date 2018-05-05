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
L.geoJSON(chrisdata).addTo(chrismap)
function getColor(d) {return d > 472568 ? '#fbb4ae' :
       d > 164992 ? '#b3cde3' :
       d > 143439 ? '#ccebc5' :
       d > 118532 ? '#decbe4' :
       d > 112688 ? '#fed9a6' :
       d > 94395 ? '#ffffcc' :
       d > 78496 ? 'e5d8bd' :
                   'FFEDA0';
}
function myStyle (feature) {
    return {
        fillColor: getColor(feature.properties.Shape_Length),
        weight: 1,
        opacity: 0.5,
        color: 'white',
        dashArray: '3',
        fillOpacity: 0.2
    };
}
let myOptions = {
      style: myStyle,
      onEachFeature:myPopup
}

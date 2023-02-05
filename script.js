const mymap = L.map(
  'map',
  { center: [49.1744092, 16.5795631],
    zoom: 12,},
);

const mapyCz = L.tileLayer(
  'http://m{s}.mapserver.mapy.cz/turist-m/{z}-{x}-{y}',
  { maxZoom: 19,
    minZoom: 5,
    attribution: '© <a href="//www.seznam.cz" target="_blank">Seznam.cz, a.s.</a>',
    subdomains: ['1', '2', '3', '4'],
  },
).addTo(mymap);

const leaflet = L.tileLayer(
  'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw',
  { maxZoom: 18,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors,',
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
  },
);

const google = L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}', {
  maxZoom: 21,
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors,',
  subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
});

const tradickaIcon = new L.icon({iconUrl: 'tradicka.png',iconSize: [20, 20]}),
    mysteryIcon = new L.icon({iconUrl: 'mystery.png',iconSize: [20, 20]}),
    wherigoIcon = new L.icon({iconUrl: 'wherigo.png',iconSize: [20, 20]}),
    multiIcon = new L.icon({iconUrl: 'multi.png',iconSize: [20, 20]}),
    letterboxIcon = new L.icon({iconUrl: 'letterbox.png',iconSize: [20, 20]}),
    virtualIcon = new L.icon({iconUrl: 'virtual.png',iconSize: [20, 20]}),
    webcamIcon = new L.icon({iconUrl: 'webcam.png',iconSize: [20, 20]}),
    earthIcon = new L.icon({iconUrl: 'earth.png',iconSize: [20, 20]});

// const tradicni = L.layerGroup(),
//     mystery = L.layerGroup(),
//     multi = L.layerGroup(),
//     letterbox = L.layerGroup(),
//     wherigo = L.layerGroup(),
//     virtual = L.layerGroup(),
//     webcam = L.layerGroup(),
//     earth = L.layerGroup();

const baseLayers = {
  'Turistická': mapyCz,
  'Základní': leaflet,
  'Letecká': google,
}
const tradicni = L.markerClusterGroup();
const multi = L.markerClusterGroup();
const mystery = L.markerClusterGroup();
const letterbox = L.markerClusterGroup();
const wherigo = L.markerClusterGroup();
const virtual = L.markerClusterGroup();
const webcam = L.markerClusterGroup();
const earth = L.markerClusterGroup();


const overlays = {
  "<img src='tradicka.png' height=20> Tradiční": tradicni,
  "<img src='multi.png' height=20> Multi": multi,
  "<img src='mystery.png' height=20> Mystery": mystery,
  "<img src='letterbox.png' height=20> Letterbox": letterbox,
  "<img src='wherigo.png' height=20> Wherigo": wherigo,
  "<img src='virtual.png' height=20> Virtual": virtual,
  "<img src='webcam.png' height=20> WebCam": webcam,
  "<img src='earth.png' height=20> Earth": earth,
}


//L.control.layers(baseLayers, overlays,/*{collapsed:false}*/).addTo(mymap);
L.control.layers(baseLayers, overlays).addTo(mymap);
 
/*
var lcontrol = L.control.locate().addTo(mymap);

function onLocationError(e) {
  alert(e.message);
}


mymap.once('locationerror', onLocationError);
mymap.locate({setView: true, watch: false, maxZoom: 18});
*/




var id = 0;

	for (var i=0; i < tradickaList.length; i++) {
    id = id + 1;
	  var marker = L.marker(tradickaList[i].coords, {icon: tradickaIcon}).addTo(tradicni)
    .bindPopup(tradickaList[i].nazev + "<br>" + tradickaList[i].GC + "<br>" + tradickaList[i].coords)
    .on("click", onClick);
    // vrstveni.addLayer(marker);
  }

for (var i=0; i < mysteryList.length; i++) {
    id = id + 1;
    L.marker(mysteryList[i].coords, {icon: mysteryIcon}).addTo(mystery)
    .bindPopup(mysteryList[i].nazev + "<br>" + mysteryList[i].GC + "<br>" + mysteryList[i].coords)
    .on("click", onClick);
  }
  
for (var i=0; i < multiList.length; i++) {
    id = id + 1;
    L.marker(multiList[i].coords, {icon: multiIcon}).addTo(multi)
    .bindPopup(multiList[i].nazev + "<br>" + multiList[i].GC + "<br>" + multiList[i].coords)
    .on("click", onClick);
  }  

for (var i=0; i < wherigoList.length; i++) {
    id = id + 1;
    L.marker(wherigoList[i].coords, {icon: wherigoIcon}).addTo(wherigo)
    .bindPopup(wherigoList[i].nazev + "<br>" + wherigoList[i].GC + "<br>" + wherigoList[i].coords)
    .on("click", onClick);
  }

for (var i=0; i < letterboxList.length; i++) {
    id = id + 1;
    L.marker(letterboxList[i].coords, {icon: letterboxIcon}).addTo(letterbox)
    .bindPopup(letterboxList[i].nazev + "<br>" + letterboxList[i].GC + "<br>" + letterboxList[i].coords)
    .on("click", onClick);
  }

for (var i=0; i < virtualList.length; i++) {
    id = id + 1;
    L.marker(virtualList[i].coords, {icon: virtualIcon}).addTo(virtual)
    .bindPopup(virtualList[i].nazev + "<br>" + virtualList[i].GC + "<br>" + virtualList[i].coords)
    .on("click", onClick);
  }

for (var i=0; i < webcamList.length; i++) {
    id = id + 1;
    L.marker(webcamList[i].coords, {icon: webcamIcon}).addTo(webcam)
    .bindPopup(webcamList[i].nazev + "<br>" + webcamList[i].GC + "<br>" + webcamList[i].coords)
    .on("click", onClick);
  }

for (var i=0; i < earthList.length; i++) {
    id = id + 1;
    L.marker(earthList[i].coords, {icon: earthIcon}).addTo(earth)
    .bindPopup(earthList[i].nazev + "<br>" + earthList[i].GC + "<br>" + earthList[i].coords)
    .on("click", onClick);
  }

  

function onClick(e) {
   var popup = e.target.getPopup();
   var obsah_bubliny = popup.getContent();
   var rozdelObsahBubliny = obsah_bubliny.split("<br>");

   var www = "https://coord.info/"  + rozdelObsahBubliny[1];

   var souradniceZBubliny = rozdelObsahBubliny[2].split(",");

   //prevod decimal na dd° mm.mmm
   var Ndd = parseInt(souradniceZBubliny[0]);
   var Edd = parseInt(souradniceZBubliny[1]);

   var Nzbytek = parseFloat(souradniceZBubliny[0]) - (Ndd * 1.0);
   var Ezbytek = parseFloat(souradniceZBubliny[1]) - (Edd * 1.0);

   var Nmm = Nzbytek * 60.0;
   var Emm = Ezbytek * 60.0;

   Nmm = Math.round (Nmm * 1000.0) / 1000.0;
   var Nmm3desmista = Nmm.toFixed(3);
   Emm = Math.round (Emm * 1000.0) / 1000.0;
   var Emm3desmista = Emm.toFixed(3);

   var Nsouradky = "N " + Ndd + "° " + Nmm3desmista;
   var Esouradky = "E " + Edd + "° " + Emm3desmista;


   document.getElementById("nazev_kese_zde").innerHTML = rozdelObsahBubliny[0];
   document.getElementById("souradnice_zde").innerHTML = rozdelObsahBubliny[2];
   document.getElementById("gc_kod_zde").innerHTML = rozdelObsahBubliny[1];
   document.getElementById("gc_kod_zde").setAttribute("href",www);
   document.getElementById("souradniceDDMMmm").innerHTML = Nsouradky + ", " + Esouradky;

};
 
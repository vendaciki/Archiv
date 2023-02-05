const mymap = L.map(
    'map',
    { center: [49.1744092, 16.5795631],
      zoom: 12,},
);
  
    /* TURISTICKÁ MAPA */
const mapyCz = L.tileLayer(
    'http://m{s}.mapserver.mapy.cz/turist-m/{z}-{x}-{y}',{ 
        maxZoom: 19,
        minZoom: 5,
        attribution: '© <a href="//www.seznam.cz" target="_blank">Seznam.cz, a.s.</a>',
        icon: '../vrstvy/turisticka.png',
        name: 'Turistická',
        subdomains: ['1', '2', '3', '4'],
    });


    /* ZÁKLADNÍ MAPA */
const openStreet = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        icon: '../vrstvy/zakladni.png',
        name: 'Základní',
    }).addTo(mymap);


    /* LETECKÁ MAPA */
const google = L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}', {
    maxZoom: 21,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors,',
    icon: '../vrstvy/letecka.png',
    name: 'Letecká',
    subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
});

  
const tradickaIcon = new L.icon({iconUrl: 'img/tradicka.png',iconSize: [20, 20]}),
    mysteryIcon = new L.icon({iconUrl: 'img/mystery.png',iconSize: [20, 20]}),
    wherigoIcon = new L.icon({iconUrl: 'img/wherigo.png',iconSize: [20, 20]}),
    multiIcon = new L.icon({iconUrl: 'img/multi.png',iconSize: [20, 20]}),
    letterboxIcon = new L.icon({iconUrl: 'img/letterbox.png',iconSize: [20, 20]}),
    virtualIcon = new L.icon({iconUrl: 'img/virtual.png',iconSize: [20, 20]}),
    webcamIcon = new L.icon({iconUrl: 'img/webcam.png',iconSize: [20, 20]}),
    earthIcon = new L.icon({iconUrl: 'img/earth.png',iconSize: [20, 20]});
  
// const tradicni = L.layerGroup(),
//     mystery = L.layerGroup(),
//     multi = L.layerGroup(),
//     letterbox = L.layerGroup(),
//     wherigo = L.layerGroup(),
//     virtual = L.layerGroup(),
//     webcam = L.layerGroup(),
//     earth = L.layerGroup();

const baseLayers = {
    'Základní': openStreet,    
    'Turistická': mapyCz,
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
    "<img src='img/tradicka.png' height=20> Tradiční": tradicni,
    "<img src='img/multi.png' height=20> Multi": multi,
    "<img src='img/mystery.png' height=20> Mystery": mystery,
    "<img src='img/letterbox.png' height=20> Letterbox": letterbox,
    "<img src='img/wherigo.png' height=20> Wherigo": wherigo,
    "<img src='img/virtual.png' height=20> Virtual": virtual,
    "<img src='img/webcam.png' height=20> WebCam": webcam,
    "<img src='img/earth.png' height=20> Earth": earth,
}
    
    L.control.layers(baseLayers, overlays).addTo(mymap);
    
    var lcontrol = L.control.locate().addTo(mymap);  /* ikona polohy */

  
    var id = 0;
  
    for (var i=0; i < tradickaList.length; i++) {
        id = id + 1;
        L.marker(tradickaList[i].coords, {icon: tradickaIcon}).addTo(tradicni)
        .bindPopup(tradickaList[i].nazev + "<br>" + tradickaList[i].GC + "<br>" + tradickaList[i].coords)
        .on("click", onClick);
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



/*******************************************/
/*     PŘEVOD DECIMAL NA dd° mm.mmm        */
/*******************************************/

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
    const icon = document.createElement('i');
    icon.className = 'fa fa-fw fa-angle-double-right';

    document.getElementById("souradniceDDMMmm").innerHTML = Nsouradky + ", " + Esouradky;



};
   
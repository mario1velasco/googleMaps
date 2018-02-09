const mapsAPI = new APIMaps();
// const handlerAPI = new APIHandler("http://localhost:3000");

function startMap() {
  mapsAPI.startMap();
}

$(document).ready(() => {
  $('#form-routes').on('submit', (event) => {
    event.preventDefault();
    
    const terminalCoordinates = {
      terminal1: {
        lat: 40.462832,
        lng: -3.571883
      },
      terminal2: {
        lat: 40.466766,
        lng: -3.572055
      },
      terminal3: {
        lat: 40.468686,
        lng: -3.569172
      },
      terminal4: {
        lat: 40.491820,
        lng: -3.593276
      },
    };
    const numTerminal = $('#start').val();
    // terminalCoordinates[numTerminal];
    mapsAPI.myRoute(terminalCoordinates[numTerminal]);
  });
});


















// function startMap() {
//   let map;
//   let currentMarker;
//   let ironhackBCN = {
//     lat: 41.3977381,
//     lng: 2.190471916
//   };
//   map = new google.maps.Map(
//     document.getElementById('map'), {
//       zoom: 15,
//       center: ironhackBCN
//     }
//   );
//   currentMarker= myMarker(map);
//   getPosition(map, currentMarker);
// }

// function myMarker(map) {
//   return new google.maps.Marker({
//     position: {
//       lat: 41.3977381,
//       lng: 2.190471916
//     },
//     map: map,
//     title: "I'm here"
//   });
// };

// function getPosition(map, currentMarker) {
//   google.maps.event.addListener(map, "click", function (e) {
//     currentMarker.setMap(null);
//     currentMarker = new google.maps.Marker({
//       position: e.latLng,
//       map: map,
//       title: "I'm here"
//     });
//     $('#lat').val(e.latLng.lat);
//     $('#lng').val(e.latLng.lng);
//   });
// }
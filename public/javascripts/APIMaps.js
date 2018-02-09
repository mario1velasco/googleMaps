class APIMaps {
  constructor() {
    this.map;
    this.currentMarker;
    this.directionsService;
    this.directionsDisplay;
  }
  startMap() {
    this.map = new google.maps.Map(
      document.getElementById('map'), {
        zoom: 15,
        center: {
          lat: 41.3977381,
          lng: 2.190471916
        }
      }
    );
    // this.myMarker(ironhackBCN.lat, ironhackBCN.lng);
    // this.getPosition(this.map, this.currentMarker);

    this.directionsService = new google.maps.DirectionsService;
    this.directionsDisplay = new google.maps.DirectionsRenderer;
    // this.myRoute();
  }
  

  myRoute(origin) {
    var directionRequest = {
      origin: origin,// { lat: 41.3977381, lng: 2.190471916},
      destination: 'Madrid, es',
      travelMode: 'DRIVING'
    };

    this.directionsService.route(
      directionRequest,
       (response, status)=> {
        if (status === 'OK') {
          // everything is ok
          this.directionsDisplay.setDirections(response);
          this.directionsDisplay.setMap(this.map);
        } else {
          // something went wrong
          window.alert('Directions request failed due to ' + status);
        }
      }//.bind(this)
    );
  }

      
    //t1 40.462832, -3.571883
    //t2 40.466766, -3.572055
    //t3 40.468686, -3.569172
    //t4 40.491820, -3.5932760

  // getPosition(map, currentMarker) {
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

  // showInMap(lat, lng) {
  //   return new google.maps.Marker({
  //     position: {
  //       lat: lat,
  //       lng: lng
  //     },
  //     map: map,
  //     title: "I'm here"
  //   });
  // }

  // myMarker(lat, lng) {
  //   (this.currentMarker) ? this.currentMarker.setMap(null): "";
  //   this.currentMarker = new google.maps.Marker({
  //     position: {
  //       lat: lat,
  //       lng: lng
  //     },
  //     map: this.map,
  //     title: "I'm here"
  //   });
  // };
}
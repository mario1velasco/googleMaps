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
        zoom: 12,
        center: {
          lat: 40.39254,
          lng: -3.698624
        }
      }
    );
    this.directionsService = new google.maps.DirectionsService;
    this.directionsDisplay = new google.maps.DirectionsRenderer;

    // this.myMarker(ironhackBCN.lat, ironhackBCN.lng);
    // this.getPosition(this.map, this.currentMarker);
    // this.myRoute();
  }


  myRoute(origin, travelMode) {
    var directionRequest = {
      origin: origin,
      destination: {
        lat: 40.417115,
        lng: -3.7032147
      },
      travelMode: travelMode
    };


    this.directionsService.route(
      directionRequest,
      (response, status) => {
        if (status === 'OK') {
          // everything is ok
          this.directionsDisplay.setDirections(response);
          this.showTimeAndDistance(response);
          this.directionsDisplay.setMap(this.map);
        } else {
          // something went wrong
          window.alert('Directions request failed due to ' + status);
        }
      } //.bind(this)
    );
  }

  showTimeAndDistance(response) {
    $('#show-Time-Duration').empty();
    $('#show-Time-Duration').append(`
    <label for="destination" class="col-sm-2 control-label">Distance</label>
    <div class="col-sm-4">
      <input type="text" class="form-control" id="destination" value="${response.routes[0].legs[0].distance.text}" readonly>
    </div>
    <label for="destination" class="col-sm-2 control-label">Duration</label>
    <div class="col-sm-4">
      <input type="text" class="form-control" id="destination" value="${response.routes[0].legs[0].duration.text}" readonly>
    </div>`);
  }
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
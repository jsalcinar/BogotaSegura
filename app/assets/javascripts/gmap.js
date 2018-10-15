function initMap() {

  var directionsService = new google.maps.DirectionsService;
  var directionsDisplay = new google.maps.DirectionsRenderer;
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 4.6371933, lng: -74.0826976},
    zoom: 16
  });

  directionsDisplay.setMap(map);

  var route = [];

  var markers = [];

  var state = "Inicial"

  var geocoder = new google.maps.Geocoder();

  // Create the search box and link it to the UI element.
  var input = document.getElementById('pac-input');
  var searchBox = new google.maps.places.SearchBox(input);
  map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

  $( "#01" ).click(function() {
    state = "route"
  });

  //Onclick event
  map.addListener('click', function(e) {
    if (state == "route"){
      if(route.length<2){
        route.push(placeMarker(e.latLng, map,0));

        geocoder.geocode({
        'latLng': e.latLng
        }, function(results, status) {
          if (status == google.maps.GeocoderStatus.OK) {
            if (results[0]) {
              if(route.length==1){
                $('#Origen').attr('placeholder',results[0].formatted_address);
              }else{
                $('#Destino').attr('placeholder',results[0].formatted_address);

                  $( "#Send" ).click(function() {
                    calculateAndDisplayRoute(directionsService, directionsDisplay,route);
                      for (var i = 0; i < route.length; i++) {
                        route[i].setMap(null);
                      }
                  });
              }
            }
          }
        });
      }
    }
  });

  // Bias the SearchBox results towards current map's viewport.
  map.addListener('bounds_changed', function() {
    searchBox.setBounds(map.getBounds());
  });

  // Listen for the event fired when the user selects a prediction and retrieve
  // more details for that place.
  searchBox.addListener('places_changed', function() {
    var places = searchBox.getPlaces();
    if (places.length == 0) {
      return;
    }
    // Clear out the old markers.
    markers.forEach(function(marker) {
      marker.setMap(null);
    });
    markers = [];
    // For each place, get the icon, name and location.
    var bounds = new google.maps.LatLngBounds();
    places.forEach(function(place) {
      if (!place.geometry) {
        console.log("Returned place contains no geometry");
        return;
      }
      var icon = {
        url: place.icon,
        size: new google.maps.Size(71, 71),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(17, 34),
        scaledSize: new google.maps.Size(25, 25)
      };
      // Create a marker for each place.
      markers.push(new google.maps.Marker({
        map: map,
        icon: icon,
        title: place.name,
        position: place.geometry.location
      }));
      if (place.geometry.viewport) {
        // Only geocodes have viewport.
        bounds.union(place.geometry.viewport);
      } else {
        bounds.extend(place.geometry.location);
      }
    });
    map.fitBounds(bounds);
  });

}

function placeMarker(latLng, map,type) {
  var marker = new google.maps.Marker({
    position: latLng,
    map: map
  });
  return marker;
}

function calculateAndDisplayRoute(directionsService, directionsDisplay, points) {
        directionsService.route({
          //origin: document.getElementById('Origen').placeholder,
          //destination: document.getElementById('Destino').placeholder,
          origin: points[0].getPosition(),
          destination: points[1].getPosition(),
          travelMode: 'DRIVING'
        }, function(response, status) {
          if (status === 'OK') {
            directionsDisplay.setDirections(response);
          } else {
            window.alert('Directions request failed due to ' + status);
          }
        });
    }
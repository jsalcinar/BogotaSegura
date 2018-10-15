var map;
var originPos = null;
var destinationPos = null;

function initMap() {

  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 4.6371933, lng: -74.0826976},
    zoom: 16
  });

  var smarkers = [];
  // Create the search box and link it to the UI element.
  var input = document.getElementById('pac-input');
  var searchBox = new google.maps.places.SearchBox(input);
  map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

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
    smarkers.forEach(function(marker) {
      marker.setMap(null);
    });
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
      smarkers.push(new google.maps.Marker({
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

  var directionsService = new google.maps.DirectionsService;
  var directionsDisplay = new google.maps.DirectionsRenderer;
  directionsDisplay.setMap(map);

  var geocoder = new google.maps.Geocoder();

    //Onclick event
  map.addListener('click', function(e) {
    var state = document.getElementById("RouteLink").getAttribute("class");
    if(state == "tablinks active"){
      if( (originPos==null || destinationPos == null) ){
        geocoder.geocode({
        'latLng': e.latLng
        }, function(results, status) {
          if (status == google.maps.GeocoderStatus.OK) {
            if (results[0]) {
              if(originPos==null){
                $('#Origen').attr('placeholder',results[0].formatted_address);
                originPos = placeMarker(e.latLng, map);
              }else if(destinationPos==null){
                $('#Destino').attr('placeholder',results[0].formatted_address);
                destinationPos = placeMarker(e.latLng, map);
              }
            }
          }
        }
      )}
    }
  })

  document.getElementById("Send").addEventListener('click',function(){
    if(originPos!=null && destinationPos != null){
      calculateAndDisplayRoute(directionsService, directionsDisplay);
      originPos.setMap(null);
      destinationPos.setMap(null);
    }
  })

  document.getElementById("btnrt").addEventListener('click',function(){
    try {
      directionsDisplay.setMap(null);
      directionsService = null;
      directionsDisplay = null;
      geocoder = null;
      directionsService = new google.maps.DirectionsService;
      directionsDisplay = new google.maps.DirectionsRenderer;
      directionsDisplay.setMap(map);
      geocoder = new google.maps.Geocoder();
      originPos.setMap(null);
      destinationPos.setMap(null);
    }catch(error){

    }

    originPos = null;
    destinationPos = null;
    $('#Origen').attr('placeholder',"Origen");
    $('#Destino').attr('placeholder',"Destino");
  })

}             

function placeMarker(latLng, map) {
  var marker = new google.maps.Marker({
    position: latLng,
    map: map
  });
  return marker;
}

function calculateAndDisplayRoute(directionsService, directionsDisplay) {
  directionsService.route({
    //origin: document.getElementById('Origen').placeholder,
    //destination: document.getElementById('Destino').placeholder,
    origin: originPos.getPosition(),
    destination: destinationPos.getPosition(),
    travelMode: 'DRIVING'
  }, function(response, status) {
    if (status === 'OK') {
      directionsDisplay.setDirections(response);
    } else {
      window.alert('Directions request failed due to ' + status);
    }
  });
}


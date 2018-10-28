var map = null;
var originPos = null;
var destinationPos = null;
var transportMode = 'DRIVING';
var mapCenter = {lat: 4.6371933, lng: -74.0826976};
var readState = "none";

var directionsService = null;
var directionsDisplay = null;
var geocoder = null;


function initMap() {

  map = new google.maps.Map(document.getElementById('map'), {
    center: mapCenter,
    zoom: 16
  });

//SearchBox--------------------------------------------------------------------------
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


  $( '#RouteLink' ).click( function(e){
    initMapService();
  } );

  $( '#Origen' ).click( function(e){
    $( '#Destino' ).removeClass( 'active' );
    $( this ).addClass( 'active' );
    readState = "start";
  } );

  $( '#Destino' ).click( function(e){
    $( '#Origen' ).removeClass( 'active' );
    $( this ).addClass( 'active' );
    readState = "end";
  } );

  $( '#delOrigen' ).click( function(e){
    $( '#Origen' ).removeClass( 'active' );
    clearMarker(originPos);
    originPos = null;
    $('#Origen').text("Origen");
    readState = "none";
  } );

  $( '#delDestino' ).click( function(e){
    $( '#Destino' ).removeClass( 'active' );
    clearMarker(destinationPos);
    destinationPos = null;
    $('#Destino').text("Destino");
    readState = "none";
  });
} 

function initMapService(){

  map.setCenter(mapCenter);
  $( '#Origen,#Destino' ).removeClass( 'active' );
  readState = "none";


//Directions-------------------------------------------------------------------------
  directionsService = new google.maps.DirectionsService;
  directionsDisplay = new google.maps.DirectionsRenderer;
  geocoder = new google.maps.Geocoder();
  directionsDisplay.setMap(map);

  //Put markers on map
  map.addListener('click', function(e) {
    var state = document.getElementById("RouteLink").getAttribute("class");
    if(state == "tablinks active"){
      switch(readState){
        case "start":
          geocoder.geocode({
            'latLng': e.latLng
            }, function(results, status) {
              if (status == google.maps.GeocoderStatus.OK) {
                if (results[0]) {
                  clearMarker(originPos);
                  originPos = placeMarker(e.latLng, map);
                  $('#Origen').text(results[0].formatted_address);
                  $( '#Origen' ).removeClass( 'active' );
                  readState = "none";
                }
              }
            }
          )
          break;
        case "end":
          geocoder.geocode({
            'latLng': e.latLng
            }, function(results, status) {
              if (status == google.maps.GeocoderStatus.OK) {
                if (results[0]) {
                  clearMarker(destinationPos);
                  destinationPos = placeMarker(e.latLng, map);
                  $('#Destino').text(results[0].formatted_address);
                  $( '#Destino' ).removeClass( 'active' );
                  readState = "none";
                }
              }
            }
          )
          break;
        default:
          //None
          break;
      }
    }
  })

  //Send Button
  $( '#Send' ).click( function(e){
    if (originPos==null) {
      alert("Debes de seleccionar una ubicacion de origen.");
    }else if (destinationPos==null) {
      alert("Debes de seleccionar una ubicacion de destino.");
    }else{
      calculateAndDisplayRoute(directionsService, directionsDisplay);
      originPos.setMap(null);
      destinationPos.setMap(null);
      $( '#menu_div' ).addClass("disabledbutton");
      $( '#Send' ).addClass("disabledbutton");
    }
  });

  //Return Button
  $( '#btnrt' ).click( function(e){
    try {
      directionsDisplay.setMap(null);
    }catch(error){}

    clearMarker(originPos);
    clearMarker(destinationPos);
    directionsService = null;
    directionsDisplay = null;
    geocoder = null;
    originPos = null;
    destinationPos = null;

    $('#Origen').text("Origen");
    $('#Destino').text("Destino");

    map.setCenter(mapCenter);
    map.setZoom(16);

    $( '#menu_div' ).addClass("disabledbutton");
    $( '#Send' ).addClass("disabledbutton");
  })

  originPos = placeMarker({lat: 4.63786, lng: -74.086341},map);
  destinationPos = placeMarker({lat: 4.6343095, lng: -74.0854674},map);

}       

//Create marker
function placeMarker(latLng, map) {
  var marker = new google.maps.Marker({
    position: latLng,
    map: map
  });
  return marker;
}

//Create directions route
function calculateAndDisplayRoute(directionsService, directionsDisplay) {
  directionsService.route({
    //origin: document.getElementById('Origen').placeholder,
    //destination: document.getElementById('Destino').placeholder,
    origin: originPos.getPosition(),
    destination: destinationPos.getPosition(),
    travelMode: transportMode
  }, function(response, status) {
    if (status === 'OK') {
      directionsDisplay.setDirections(response);
    } else {
      window.alert('Directions request failed due to ' + status);
    }
  });
}

function setMode(mode){
  transportMode = mode;
}

function clearMarker(markerObj){
    try{
      markerObj.setMap(null);
    }catch(error){}
}
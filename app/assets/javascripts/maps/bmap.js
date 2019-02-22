var transportMode = 'DRIVING';
var readState = "none";
var mapCenter, defaultStartPoint, defaultEndPoint = null;
var map, originPos, destinationPos = null;

var searchManager = null;

function getMap(){
    
    mapCenter = new Microsoft.Maps.Location(4.6371933, -74.0826976);
    defaultStartPoint = new Microsoft.Maps.Location(4.6371933, -74.0826976);
    defaultEndPoint = new Microsoft.Maps.Location(4.615695, -74.0697733);
    
    //Inicializa el mapa.
    map = new Microsoft.Maps.Map('#myMap', {
        credentials: 'As532WY9PqmwymM6Hh5eS5HydCGrZZFXE8DouAnheKH6m1KljTfOLcvq1r_JmY4p',
        center: mapCenter,
        mapTypeId: Microsoft.Maps.MapTypeId.road,
        zoom: 16
    });
    
    Microsoft.Maps.loadModule('Microsoft.Maps.Search', function () {
        searchManager = new Microsoft.Maps.Search.SearchManager(map);
    });
    
    function getLatlng(e) { 
        if (e.targetType == "map") {
            var point = new Microsoft.Maps.Point(e.getX(), e.getY());
            var locTemp = e.target.tryPixelToLocation(point);
            var location = new Microsoft.Maps.Location(locTemp.latitude, locTemp.longitude);
            return location;
            
        }              
    }
    
    //Botones  ------------------------------------------------------------
    //Click en la opcion "Planear ruta"
    $( '#RouteLink' ).click( function(e){
        initMapService();
    } );
    //Se presiona la opcion de origen.
    $( '#Origen' ).click( function(e){
        $( '#Destino' ).removeClass( 'active' );
        $( this ).addClass( 'active' );
        readState = "origin";
    } );
    //Se presiona la opcion de destino
    $( '#Destino' ).click( function(e){
        $( '#Origen' ).removeClass( 'active' );
        $( this ).addClass( 'active' );
        readState = "destination";
    } );
    //Se borra el marcador de origen
    $( '#delOrigen' ).click( function(e){
        $( '#Origen' ).removeClass( 'active' );
        clearPin(originPos);
        originPos = null;
        $('#Origen').text("Origen");
        readState = "none";
    } );
    //Se borra el marcador de destino
    $( '#delDestino' ).click( function(e){
        $( '#Destino' ).removeClass( 'active' );
        clearPin(destinationPos);
        destinationPos = null;
        $('#Destino').text("Destino");
        readState = "none";
    });
  
    $( '#map_resetBtn' ).click( function(e){
    resetmap();
    initMapService();
    })
}


//Inizializal las funciones extras del mapa.
function initMapService(){
    map.setView({
        center: mapCenter,
        zoom: 16
    });
    readState = "none";
    $( '#Origen,#Destino' ).removeClass( 'active' );
    $( '.mapControl_body' ).removeClass("disabled");
    
    Microsoft.Maps.Events.addHandler(map, 'click',function(e){
        
        var location = null;
        var address = null;
        
        if (e.targetType == "map") {
            
            var point = new Microsoft.Maps.Point(e.getX(), e.getY());
            var locTemp = e.target.tryPixelToLocation(point);
            location = new Microsoft.Maps.Location(locTemp.latitude, locTemp.longitude);
            
        
            switch(readState){
                case "origin":
                    clearPin(originPos);
                    originPos = addPushPin(location, "Origen", "Green");
                    
                    var searchRequest = {
                        location: location,
                        callback: function (r) {
                            //Tell the user the name of the result.
                            console.log(r.name);
                            $('#Origen').text(r.name.split(",")[0]);
                        },
                        errorCallback: function (e) {
                            //If there is an error, alert the user about it.
                            console.log("Unable to reverse geocode location.");
                            $('#Origen').text(location.Latitude+", "+location.Longitude);
                        }
                    };
                    //Make the reverse geocode request.
                    searchManager.reverseGeocode(searchRequest);
                    
                    $( '#Origen' ).removeClass( 'active' );
                    readState = "none";
                    
                break;
                case "destination":
                    clearPin(destinationPos);
                    destinationPos = addPushPin(location, "Destino", "Red");
                    
                    var searchRequest = {
                        location: location,
                        callback: function (r) {
                            //Tell the user the name of the result.
                            $('#Destino').text(r.name.split(",")[0]);
                            console.log(r.name);
                        },
                        errorCallback: function (e) {
                            //If there is an error, alert the user about it.
                            console.log("Unable to reverse geocode location.");
                            $('#Destino').text(location.Latitude+", "+location.Longitude);
                        }
                    };
                    //Make the reverse geocode request.
                    searchManager.reverseGeocode(searchRequest);
                    
                    $( '#Destino' ).removeClass( 'active' );
                    readState = "none";
                break;
                default:
                //None
                break;
            } 
        }
    });
    
      
      


}       

function addPushPin(location, text, color){
    var pin = new Microsoft.Maps.Pushpin(location,{title: text, color: color}, {'draggable': false});
    map.entities.push(pin);
    return pin;
}

function clearPin(pinObj){
    try{
      map.entities.remove(pinObj);
    }catch(error){}
}

function setMode(mode){
  transportMode = mode;
}

function resetmap(){

    $('#Origen').text("Origen");
    $('#Destino').text("Destino");

    map.entities.clear();
    map.setView({
        center: mapCenter,
        zoom: 16
    });
}
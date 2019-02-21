var map;
var mapCenter = {lat: 4.6371933, lng: -74.0826976};

function getMap(){
    var map = new Microsoft.Maps.Map('#myMap', {
        credentials: 'As532WY9PqmwymM6Hh5eS5HydCGrZZFXE8DouAnheKH6m1KljTfOLcvq1r_JmY4p',
        center: new Microsoft.Maps.Location(mapCenter.lat, mapCenter.lng),
        mapTypeId: Microsoft.Maps.MapTypeId.road,
        zoom: 16
    });
}

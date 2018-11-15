var cai,station,police_inspection = null;

function datasets(){
    load_all_datasets();
}

function load_all_datasets(){
    $.getJSON('/dataset/'+ 'cai' +'.json', function(result){
        cai = result
        console.log(cai);
    });
    $.getJSON('/dataset/'+ 'estacion-de-policia' +'.json', function(result){
        station = result
        console.log(station);
    });
    $.getJSON('/dataset/'+ 'inspeccion-de-policia' +'.json', function(result){
        police_inspection = result
        console.log(police_inspection);
    });
}

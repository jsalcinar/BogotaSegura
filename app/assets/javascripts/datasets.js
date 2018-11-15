
$(document).ready(function(){
    $.ajax({
        url: 'dataset/cai.json',
        dataType: 'json',
        success: function(json) {
            // Rates are in `json.rates`
            // Base currency (USD) is `json.base`
            // UNIX Timestamp when rates were collected is in `json.timestamp`        
            console.log(json);
        }
    });
    
});

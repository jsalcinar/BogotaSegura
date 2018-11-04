function setSection(section){
    showPanel(section);   
}

function showPanel(section) {
    $( '#control_div' ).find( '.control.active' ).animate(
        {width: "0%"},
        500,
        function(){
            $( '#control_div' ).find( '.control.active' ).removeClass( 'active' );
            $( '.'+section+'Control' ).addClass( 'active' );
            $( '.'+section+'Control' ).animate( 
                {width: "100%"}, 
                500 
            );
        }
    );
    $( '#panel_div' ).find( '.panel.active' ).animate(
        { width: "0%" },
        500, 
        function(){
            $( '#panel_div' ).find( '.panel.active' ).removeClass( 'active' );
            $( '.'+section+'Panel' ).addClass( 'active' );
            $( '.'+section+'Panel' ).animate( 
                {width: "100%"}, 
                500 
            );
        } 
    );
    panelAnimation(section);
}

function panelAnimation(section){
    if(section=="index"){
        $( '#control_div' ).delay( 500 ).animate(
            { width: "0%"},
            500, 
        )
    }else{
        $( '#control_div' ).animate(
            { width: "33%"},
            500
        )
    }
}
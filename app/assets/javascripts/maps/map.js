var sitesList = null;


function mapService_init(){
    button_mode_active();
}

function setSection(section){
    showPanel(section);  
}

function button_mode_active(){
    $( '.btn_mode_group button' ).click( function(){
      $( '.btn_mode_group' ).find( 'button.active' ).removeClass('active');
      $( this ).addClass('active');
    })
}

function showPanel(section) {
    $( '#control_div' ).find( '.control.active' ).animate(
        {width: "0%"},
        300,
        function(){
            $( '#control_div' ).find( '.control.active' ).removeClass( 'active' );
            $( '.'+section+'Control' ).addClass( 'active' );
            $( '.'+section+'Control' ).animate( 
                {width: "100%"}, 
                300 
            );
        }
    );
    $( '#panel_div' ).find( '.panel.active' ).animate(
        { width: "0%" },
        300, 
        function(){
            $( '#panel_div' ).find( '.panel.active' ).removeClass( 'active' );
            $( '.'+section+'Panel' ).addClass( 'active' );
            $( '.'+section+'Panel' ).animate( 
                {width: "100%"}, 
                300 
            );
        } 
    );
    panelAnimation(section);
}

function panelAnimation(section){
    if(section=="index"){
        $( '#control_div' ).delay( 300 ).animate(
            { width: "0%"},
            300, 
        )
        $( '#top_navbar' ).delay(600).css('display', 'flex');
    }else if(section=="news"){
        $( '#control_div' ).delay(300).animate(
            { width: "33%"},
            300
        )
        $( '#top_navbar' ).delay(600).css('display', 'none');
    }else{
        $( '#control_div' ).delay(300).animate(
            { width: "33%"},
            300
        )
    }
}


function setSource(source){
    $( '.newsPanel' ).find( '.twitterFeed.active' ).removeClass('active').addClass('hidden');
    $( '.newsPanel' ).find( '.twitterFeed.'+source ).removeClass('hidden').addClass('active');
}

function showSites(){
    console.log(sitesList);
}
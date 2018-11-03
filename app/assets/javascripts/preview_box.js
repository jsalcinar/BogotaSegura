function preview_box(){
    preview_picture();
    preview_button();
    detect_window_resize();
}

function preview_picture(){
    $(function() {
      function readURL(input) {
        if (input.files && input.files[0]) {
          var reader = new FileReader();
    
          reader.onload = function (e) {
            $('#preview_picture').attr('src', e.target.result);
            preview_aspect();
          }
          reader.readAsDataURL(input.files[0]);
        }
      }
      $("#preview_upload_file_btn").change(function(){
        readURL(this);
      });
    });
}

function preview_button(){
    $( "#preview_picture" ).click(function() {
        $( "#preview_upload_file_btn" ).trigger( "click" );
    });
}

function detect_window_resize(){
  $(window).on('resize', function(){
    preview_aspect();
  });  
}

function preview_aspect(){
  var square_width = $('#preview_picture').width();
  $('#preview_picture').css({'height':square_width+'px'});
}
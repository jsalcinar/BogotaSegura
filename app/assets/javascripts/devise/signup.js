function signup_init(){
    pic_preview();
    pic_as_button();
    detect_resize_window();
}

function pic_preview(){
    $(function() {
      function readURL(input) {
        if (input.files && input.files[0]) {
          var reader = new FileReader();
    
          reader.onload = function (e) {
            $('#pic_preview').attr('src', e.target.result);
            square_always_square();
          }
          reader.readAsDataURL(input.files[0]);
        }
      }
      $("#avatar_upload_btn").change(function(){
        readURL(this);
      });
    });
}

function pic_as_button(){
    $( "#pic_preview" ).click(function() {
        $( "#avatar_upload_btn" ).trigger( "click" );
    });
}

function detect_resize_window(){
  $(window).on('resize', function(){
    square_always_square();
  });  
}

function square_always_square(){
  var square_width = $('#pic_preview').width();
  $('#pic_preview').css({'height':square_width+'px'});
}
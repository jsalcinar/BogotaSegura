function users_init(){
    user_pic_preview();
    user_pic_as_button();
    user_detect_resize_window();
}

function user_pic_preview(){
    $(function() {
      function readURL(input) {
        if (input.files && input.files[0]) {
          var reader = new FileReader();
    
          reader.onload = function (e) {
            $('#crud_preview').attr('src', e.target.result);
            user_square_always_square();
          }
          reader.readAsDataURL(input.files[0]);
        }
      }
      $("#crud_avatar_upload_btn").change(function(){
        readURL(this);
      });
    });
}

function user_pic_as_button(){
    $( "#crud_preview" ).click(function() {
        $( "#crud_avatar_upload_btn" ).trigger( "click" );
    });
}

function user_detect_resize_window(){
  $(window).on('resize', function(){
    user_square_always_square();
  });  
}

function user_square_always_square(){
  var square_width = $('#crud_preview').width();
  $('#crud_preview').css({'height':square_width+'px'});
}
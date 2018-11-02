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
            $('#img_prev').attr('src', e.target.result);
          }
          reader.readAsDataURL(input.files[0]);
        }
      }
      $("#avatar-upload").change(function(){
        $('#img_prev').removeClass('hidden');
        readURL(this);
      });
    });
}

function pic_as_button(){
    $( "#img_prev" ).click(function() {
        $( "#avatar-upload" ).trigger( "click" );
    });
}

function detect_resize_window(){
  square_always_square();
  $(window).on('resize', function(){
    square_always_square();
  });  
}

function square_always_square(){
  var square_width = $('#img_prev').width();
  $('#img_prev').css({'height':square_width+'px'});
}
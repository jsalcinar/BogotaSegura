function edit_init(){
    edit_pic();
    change_preview();
}

function edit_pic(){
    $( "#user_avatar" ).click(function() {
        $( "#avatar-upload" ).trigger( "click" );
    });
}

function change_preview(){
    $(function() {
      function readURL(input) {
        if (input.files && input.files[0]) {
          var reader = new FileReader();
    
          reader.onload = function (e) {
            $('#user_avatar').attr('src', e.target.result);
          }
          reader.readAsDataURL(input.files[0]);
        }
      }
    
      $("#avatar-upload").change(function(){
        $('#user_avatar').removeClass('hidden');
        readURL(this);
      });
    });
}
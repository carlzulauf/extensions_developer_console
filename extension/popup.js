document.addEventListener('DOMContentLoaded', function () {
  $("#input-form").submit(function(e){
    e.preventDefault();
    result = eval( $("#input").val() );
    if (Object.isObject( result )) {
      tmp = "{\n"
      Object.extended(result).each(function(key, value){
        tmp = tmp + "  " + key + ": " + value + "\n"
      })
      result = tmp + "}"
    }
    if (Object.isArray( result )) {
      result = "[" + result + "]"
    }
    $output = $("#output")
    $output.text( result )
  });
});

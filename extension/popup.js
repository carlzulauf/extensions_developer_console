document.addEventListener('DOMContentLoaded', function () {

  var inspectObject = function(o, padding) {
    var result = "{\n";
    padding = padding || "  ";
    Object.extended(o).each(function(key, value) {
      result = result + padding + key + ": " + value + "\n";
    });
    return result + "}";
  }

  var inspectArray = function(a) {
    return "[" + a + "]";
  }

  $("#input-form").submit(function(e){
    e.preventDefault();

    var result = eval( $("#input").val() );

    if (Object.isObject( result )) result = inspectObject( result );
    if (Object.isArray(  result )) result = inspectArray(  result );

    $("#output").text( result );
  });
});

$(document).ready(function(){
  $("#formOne").submit(function(event) {
    var inputText = $("input#inputText").val();

    alert(inputText.toUpperCase());

  })
})
$(document).ready(function() {
  $("p").click(function(event){
    var flavours = ["mint", "chocolate", "strawberry"];

    flavours.forEach(function(flavour) {
      $("ul").append("<li>" + flavour + "</li>");

      event.preventDefault();

});
});
});





//
// var tags = ["h1", "p", "img"];
//
// tags.forEach(function(tag) {
//
//   $(tag).click(function(){
//   alert("This is a " + tag)}
//
//
// );
// });
// });
//
//

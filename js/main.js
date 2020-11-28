$( document ).ready(function() {
   $(".burger-button").click(function(){
     $(".burger-button").toggleClass("active");
     $(".burger-menu").toggleClass("active");
   });

});

$('#about-read-more-button').click(function(){
  $(this).fadeOut();
  $('#about-read-more').fadeIn();
});

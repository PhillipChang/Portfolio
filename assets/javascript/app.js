$(document).ready(function(){
    $(".sidenav").sidenav();
    $('.carousel').carousel();
    loadAbout();
  });

  $("#about").on("click", loadAbout);
  $("#portfolio").on("click", loadPortfolio);
  $("#contact").on("click", loadContact);

// ***Transition Pages***
function loadAbout(){
  $(".portfolio").css("display","none");
  $(".portfolio").delay(1000).fadeOut();
  $(".contact").delay(1000).fadeOut();
  $(".about").delay(1500).fadeIn();
}  
function loadPortfolio(){
    $(".about").delay(1000).fadeOut();
    $(".contact").delay(1000).fadeOut();
    $(".portfolio").delay(1500).fadeIn();
  }
function loadContact(){
    $(".about").delay(1000).fadeOut();
    $(".portfolio").delay(1000).fadeOut();
    $(".contact").delay(2000).fadeIn();
  }
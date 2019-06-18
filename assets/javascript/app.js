$(document).ready(function(){
    $(".sidenav").sidenav();
    $('.carousel.carousel-slider').carousel({
      fullWidth: true,
      fullHeight:true,
      indicators: true
    });
  });

  $("#about").on("click", loadAbout);
  $("#portfolio").on("click", loadPortfolio);
  $("#contact").on("click", loadContact);

// ***Transition Pages***
function loadAbout(){
  $(".portfolio").css("display","none");
  $(".portfolio").delay(1000).fadeOut();
  $(".contact").delay(1000).fadeOut();
  $(".about").addClass("animated lightSpeedIn delay-1s");
  $(".about").delay(1500).fadeIn();
}  
function loadPortfolio(){
    $(".about").delay(1000).fadeOut();
    $(".contact").delay(1000).fadeOut();
    $(".portfolio").addClass("animated fadeInDownBig delay-1s");
    $(".portfolio").delay(1500).fadeIn();
  }
function loadContact(){
    $(".about").delay(1000).fadeOut();
    $(".portfolio").delay(1000).fadeOut();
    $(".contact").delay(2000).fadeIn();
  }

    // Anime.js Animations
    var tl = anime.timeline({
      easing: 'easeOutExpo',
      duration: 750
    })
  
    tl.add ({
      targets: '.div',
      width:'100%',
      opacity:'0.8',
      delay:anime.stagger(100)
    })
    
    tl.add ({
      targets: '.c3, .c4, .c5, .c6, .c7, .c8, .c9',
      width: '75%',
      opacity: '0.8',
    })
  
    tl.add ({
      targets: '.c0, .c1, .c2',
      width: '0%',
      opacity: '0.8',
    })
    tl.add ({
      targets: '#line-0',
      top:'4%',
      opacity: 1,
      delay:anime.stagger(500)
    })
    for (i=0; i<9;i++){
    tl.add ({
      targets: '#line-1, #line-2, #line-3, #line-4, #line-5,#line-6,#line-7,#line-8,#line-9',
      top:'20%',
      opacity: 1,
      delay:anime.stagger(500)
    })
  }
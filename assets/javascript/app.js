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

  // Dynamically Creating Bars for Anime.js animation
  function funBackground(){
    $("body").addClass('uk-animation-fade');
    $("body").css("background", "url('assets/Images/background.PNG')");
    }
    function loadMain(){
    $("#intro").addClass('animated lightSpeedOut delay-1s').delay(2500).fadeOut();
    setTimeout(funBackground,3000);
    $(".main-web").delay(3000).fadeIn();
    }
    
    $(document).ready(function(){
    setTimeout(loadMain,10000);
    $(".sidenav").sidenav();
    $('.carousel.carousel-slider').carousel({
      fullWidth: true,
      fullHeight:true,
      indicators: true
    });
    });

    function gradientChange(){
      for(i=0; i<10; i++){
      var newDiv = $("<div>");
      newDiv.addClass('div');
      newDiv.addClass('c'+i);
      $(".color").append(newDiv);
    }
    }
    gradientChange();
    
    var count = 0;
    var step = 1;
    
    //   Change Color to create a gradient wave flow of colors
    function dynoColor(){
      for(i=0; i<10; i++){
        var red = 25*i + count;
        var green = 25*i + count;
        var blue = 25 * i + count;
        $(".c"+i).css("backgroundColor", "rgb(" + red + "," + green + "," + blue + ")");
      }
      count=count+step*1.5;
    }
    var dyno = setInterval(dynoColor,150);

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
      delay:anime.stagger(200)
    })
  }


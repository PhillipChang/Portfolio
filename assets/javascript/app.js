  $("#about").on("click", loadAbout);
  $("#portfolio").on("click", loadPortfolio);
  $("#contact").on("click", loadContact);

  $("#port").on("click", loadPortfolio);
  $("#cont").on("click", loadContact);


      
// ***Transition Pages***
function loadAbout(){
  $(".portfolio").css("display","none");
  $(".portfolio").delay(1000).fadeOut();
  $(".contact").delay(1000).fadeOut();
  $(".about").addClass("animated lightSpeedIn delay-1s");
  $(".about").delay(1500).fadeIn();
}  
function loadPortfolio(){
  $(".portfolio-cards").empty();
  var portfolioArr = [
    pinme = {
      name:"PinME",
      href:"https://phillipchang.github.io/PinMe",
      image:"assets/images/pinme.png",
      description: "PinME is a website that looks up events based on the type of genre the user picks. Geolocation is used to get the user's location. The inputs are presented as drop-down menus, and the user can choose between many different genres, as well as when the event will be and whether or not the event is paid or free. The website searches within a 100 mile radius of the user if the geolocation request is allowed, and results are limited to 10. The search results will also appear as pins on the Google Map below the results. Four Spotify playlists related to the genre searched will appear above the results."
    },
    savant= {
      name:"Savant",
      href:"https://savant-pc.herokuapp.com/",
      image:"assets/images/savant.gif",
      description:"Savant is a free user content generated portal for tutorials and online classes. Our motto is 'Education through observation'.Knowledge is something that should be shared and this platform enables instructors to broadcast their expertise with the world via YouTube livestream."
    },
    nbaFreeAgency= {
      name:"NBA-Free-Agency",
      href:"https://free-agency-nba.herokuapp.com/",
      image:"assets/images/nba-free.jpg",
      description: "It is the hottest time of the year! That's right it is NBA Free Agency where major strategic shifts can alter the outcome of the next NBA season. Use the NBA Free Agency app and be on the top of your game to add new free agents, trade current players and agents to and from your roster or retire players from the league. The power is in your hands..."
    },
    friendFinder= {
      name:"Friend Finder",
      href:"https://toy-story-friend-finder.herokuapp.com/",
      image:"assets/images/toy-story.jpg",
      description: "As Randy Newman famous song sings 'You got a friend in me'. Wherever, whenever there is someone who has the same personality traits as you. With this Toy Story Friend Finder, you can find which Toy Story character has the same personality as you."
    },
    pokemart= {
      name:"PokeMart MySQL",
      href:"https://github.com/PhillipChang/PokeMart-MySQL",
      image:"assets/images/customer.gif",
      description:"PokeMart MySQL is a database built using MySQL. This database tracks the inventory of the PokeMart store. Whether you are the pokemon traveller,manager or supervisor there is a functionality that suits you."
    },
    giphyTv= {
      name:"GiphyTv",
      href:"https://phillipchang.github.io/Giphy-TvShows",
      image:"assets/images/giphy.gif",
      description:"Ever wonder how to relive your favorite tv show moments? It can all be done now on Giphy Tv. Giphy Tv incorporates the Giphy API into a user friendly experience that gives you 10 gifs of your favorite tv show with the click of a button."
    },
    trivia= {
      name:"Trivia Game",
      href:"https://phillipchang.github.io/Trivia-Game",
      image:"assets/images/trivia.gif",
      description:"Are you smarter than a 5th grader? Test your true knowledge in this trivia game. Questions range from science, math, geography and common sense."
    }
  ];
    $(".about").delay(1000).fadeOut();
    $(".contact").delay(1000).fadeOut();
    $(".portfolio").addClass("animated fadeInDownBig delay-1s");
    $(".portfolio").delay(1500).fadeIn();
    for(i=0; i<portfolioArr.length; i++){
      var newCard = 
      $(`<div class='card'>
    <div class="card-image waves-effect waves-block waves-light">
      <img class="activator" src="${portfolioArr[i].image}">
    </div>
    <div class="card-content">
      <span class="card-title activator grey-text text-darken-4">${portfolioArr[i].name}<i class="material-icons right">more_vert</i></span>
      <p><a href="${portfolioArr[i].href}">Live Link</a></p>
    </div>
    <div class="card-reveal">
      <span class="card-title grey-text text-darken-4">${portfolioArr[i].name}<i class="material-icons right">close</i></span>
      <p>${portfolioArr[i].description}</p>
    </div>
  </div>`);
  $(".portfolio-cards").append(newCard);
    }
  }
function loadContact(){
    $(".about").delay(1000).fadeOut();
    $(".portfolio").delay(1000).fadeOut();
    $(".contact").delay(2000).fadeIn();
  }

  // Dynamically Creating Bars for Anime.js animation
  function funBackground(){
    $("html").addClass('uk-animation-fade');
    $("html").css("background", "url('assets/images/background.png') no-repeat center center fixed");
    }
    function loadMain(){
    $("#intro").addClass('animated lightSpeedOut delay-1s').delay(2500).fadeOut();
    setTimeout(funBackground,3000);
    $(".main-web").delay(3000).fadeIn();
    }

    $(document).ready(function(){
    setTimeout(loadMain,10000);
    $(".sidenav").sidenav();
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
    tl.add ({
      targets: '#line-1',
      top:'20%',
      opacity: 1,
      delay:anime.stagger(200)
    })


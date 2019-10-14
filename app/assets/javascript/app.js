// Executes upon page loading

$(document).ready(function(){
  loadIntro();
  // UIkit.tooltip(element).show();
  // UIkit.tooltip(element).hide();
  loadPortfolio();
  });    


function loadIntro(){
  $("#intro").show('slow');
  $("#intro-enter").on("click",loadMain);
}

// *** Loads Main web Page ***
  function loadMain(){
    location.href = "/about";
    }
    
// On-click event listeners for NavBar

// $("#about").on("click", loadAbout);
$("#portfolio").on("click", loadPortfolio);
console.log("we clicked")
// $("#contact").on("click", loadContact);

$("#port").on("click", loadPortfolio);
// $("#cont").on("click", loadContact);


      
// ***Transition Pages***

// *** About Page ***
// function loadAbout(){
//   $(".portfolio").css("display","none");
//   $(".portfolio").delay(1000).fadeOut();
//   $(".contact").delay(1000).fadeOut();
//   $(".about").addClass("animated lightSpeedIn delay-1s");
//   $(".about").delay(1500).fadeIn();
// }  

// *** Portfolio Page ***

function loadPortfolio(){
  $(".portfolio-cards").empty();
  console.log("we got here")
  var portfolioArr = [
    pinme = {
      name:"PinME",
      href:"https://phillipchang.github.io/PinMe",
      github:"https://github.com/PhillipChang/PinMe",
      image:"assets/images/pinme.gif",
      description: "PinME is a website that looks up events based on the type of genre the user picks. Geolocation is used to get the user's location. The inputs are presented as drop-down menus, and the user can choose between many different genres, as well as when the event will be and whether or not the event is paid or free. The website searches within a 100 mile radius of the user if the geolocation request is allowed, and results are limited to 10. The search results will also appear as pins on the Google Map below the results. Four Spotify playlists related to the genre searched will appear above the results.",
      tech:"HTML, CSS, JavaScript, jQuery, Eventbrite API, Google Maps API, animate.css, Bootstrap, anime.js, Firebase, Spotify API, HTML5 Geolocation"
    },
    savant= {
      name:"Savant",
      href:"https://savant-pc.herokuapp.com/",
      github:"https://github.com/PhillipChang/Savant",
      image:"assets/images/savant.gif",
      description:"Savant is a free user content generated portal for tutorials and online classes. Our motto is 'Education through observation'.Knowledge is something that should be shared and this platform enables instructors to broadcast their expertise with the world via YouTube livestream.",
      tech:"HTML, CSS, JavaScript, jQuery, Node.js, Express, Bootstrap, animate.css, MySQL, Sequelize, AJAX, Firebase, Moment.js, YouTube API, Google Calendar API, AWS S3 Buckets, Font Awesome"
    },
    venvi= {
      name:"Venvi",
      href:"https://phillipchang.github.io/venvi-fe",
      github:"https://github.com/PhillipChang/venvi-fe",
      image:"assets/images/venvi.gif",
      description: "Venvi is a website developed for prospective car buyers to indulge themselves in trusted peer reviews and ratings before making a decision to purchase a car. A user can also sell their car through the marketplace. Car specifications are decoded through a VIN decoder for reliable information.",
      tech:"HTML, CSS, JavaScript, React.js, Node.js,Three.js,Passport.js,React Materialize,Material UI,Ant Design,Axios,gh-pages"
    },
    nbaFreeAgency= {
      name:"NBA-Free-Agency",
      href:"https://free-agency-nba.herokuapp.com/",
      github:"https://github.com/PhillipChang/NBA-Free-Agency",
      image:"assets/images/nba-free.jpg",
      description: "It is the hottest time of the year! That's right it is NBA Free Agency where major strategic shifts can alter the outcome of the next NBA season. Use the NBA Free Agency app and be on the top of your game to add new free agents, trade current players and agents to and from your roster or retire players from the league. The power is in your hands...",
      tech:"HTML, CSS, Materialize CSS, animate.css, JavaScript, jQuery, Express, MySQL, Node.js, NPM Package --> body-parser"
    },
    googleBooks= {
      name:"Google Books Library",
      href:"https://googlebooks-search-pc.herokuapp.com",
      github:"https://github.com/PhillipChang/googlebooks-search",
      image:"assets/images/googlebook.gif",
      description: "Easily search your favorite books online through the GoogleBooks Search app. The app features a minimalistic design which serves the sole purpose for users to search books. The app is powered by the Google Books API. Like one of the books you searched? Just save it. Like it so much that you want to buy it? Just simply click the view button to see more information on where to purchase. Bored of the book? Just delete it. GoogleBooks Search, where all your favorite books are easily found.",
      tech:"React, GoogleBooks API, HTML, CSS, Bootstrap, JSX, Express, MongoDB(mLabs), Node.js"
    },
    nbaClickyGame= {
      name:"NBA Clicky Game",
      href:"https://github.com/PhillipChang/nba-clicky-game",
      github:"https://phillipchang.github.io/nba-clicky-game/",
      image:"assets/images/nbaclicky.jpg",
      description: "Think you are a true NBA fanatic? Test your memory by challenging yourself to remember NBA team logos. Don't click on one team more than once or else it will all be over.",
      tech:"React, HTML, CSS, Bootstrap, JSX, Express, Shuffle-array"
    },
    friendFinder= {
      name:"Friend Finder",
      href:"https://toy-story-friend-finder.herokuapp.com/",
      github:"https://github.com/PhillipChang/Toy-Story-Friend_Finder",
      image:"assets/images/toy-story.jpg",
      description: "As Randy Newman famous song sings 'You got a friend in me'. Wherever, whenever there is someone who has the same personality traits as you. With this Toy Story Friend Finder, you can find which Toy Story character has the same personality as you.",
      tech:"HTML, CSS, Bootstrap, JavaScript, jQuery, Express, Node.js, NPM Packages --> express, body-parser,path"
    },
    pokemart= {
      name:"PokeMart MySQL",
      href:"https://github.com/PhillipChang/PokeMart-MySQL",
      github:"https://github.com/PhillipChang/PokeMart-MySQL",
      image:"assets/images/customer.gif",
      description:"PokeMart MySQL is a database built using MySQL. This database tracks the inventory of the PokeMart store. Whether you are the pokemon traveller,manager or supervisor there is a functionality that suits you.",
      tech: "JavaScript, Node.js, MySQL, NPM packages --> cli-table2, Inquirer"
    },
    trivia= {
      name:"Trivia Game",
      href:"https://phillipchang.github.io/Trivia-Game",
      github:"https://github.com/PhillipChang/Trivia-Game",
      image:"assets/images/trivia.gif",
      description:"Are you smarter than a 5th grader? Test your true knowledge in this trivia game. Questions range from science, math, geography and common sense.",
      tech: "HMTL, CSS, Bootstrap, Javascript, jQuery"
    }
  ];
    $(".portfolio").addClass("animated fadeInDownBig delay-1s");
    $(".portfolio").delay(1500).fadeIn();
    for(i=0; i<portfolioArr.length; i++){
      var newCard = 
      $(`<div class='card' id='card'>
    <div class="card-image waves-effect waves-block waves-light" id="image-container">
      <img id="image" src="${portfolioArr[i].image}">  
      <div id="title-overlay"> ${portfolioArr[i].name} 
        <a href="${portfolioArr[i].href}"><i class="fas fa-link card-icon" uk-tooltip="title: Website Link; pos: bottom"></i></a>
        <a href="${portfolioArr[i].github}"><i class="fab fa-github card-icon" uk-tooltip="title: Github Repo; pos: bottom"></i></a>
      </div>
        <div class="overlay">
          <div id="overlay-text">
          <br><br>
            <p id="project-description">${portfolioArr[i].description}</p>
            <p id="project-description"> <i class="fas fa-hammer"></i> Built with: ${portfolioArr[i].tech}</p>
          <br><br>
          </div>
        </div>
      </div>
    </div>
  </div>`);
  $(".portfolio-cards").append(newCard);
  console.log("we are here")
    }
  }

// *** Contact Page ***

function loadContact(){
    $(".about").delay(1000).fadeOut();
    $(".portfolio").delay(1000).fadeOut();
    $(".contact").delay(2000).fadeIn();
  }

  // Form Submission Email

  $("#submit").on("click", function(event) {
  event.preventDefault();
  console.log("click workd")
  var check = true;
  
  // Form Validation
  if (
      $(".name").val() === undefined || $(".email").val() === "" || $(".subject").val() === ""|| $(".message").val() === "")
      {
      check = false;
      }
  else if (check == true) {
          var userInput = {
              name: $(".name").val(),
              email: $(".email").val(),
              subject: $(".subject").val(),
              message: $(".message").val(),
              };
          console.log(userInput);
          $.post("/api/email", userInput,function(data){
              $("#name").text(data.name);
              $("#email").text(data.email);
              $("#subject").text(data.subject);
              $("#message").text(data.message);
          });
      }
  else {
      UIkit.modal.confirm('UIkit confirm!')
      alert("not all fields filled out");
  }
  });



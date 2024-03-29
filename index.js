      // owl carousel
      $(document).ready(function () {
        $(".owl-carousel").owlCarousel({
          items: 1,
          margin: 50,
          loop: true,
          stagePadding: 100,
          dots: false,
          autoplay: true,
          center: true,
          responsive: {
            0: {
              items: 1,
              stagePadding: 0,
            },
            800: {
              items: 1,
              margin: 50,
              stagePadding: 100,
            },
          },
        });
      });

// NavBar
function toggleNavbar() {
    document.getElementsByClassName("navbar-links")[0].classList.toggle("active");
  }

  // TypeWriter Effect
var container = document.getElementById("changeText");

var things = ["Passion for UI/UX Design", "Gamer", "Sports Fanatic"];
var t = -1;
var thing = "";
var message = container.innerHTML;
var mode = "write";
var delay = 1000;

function updateText(txt) {
  container.innerHTML = txt;
}

function tick() {
  if (container.innerHTML.length == 0) {
    t++;
    thing = things[t];
    message = "";
    mode = "write";
  }

  switch (mode) {
    case "write":
      message += thing.slice(0, 1);
      thing = thing.substr(1);

      updateText(message);

      if (thing.length === 0 && t === things.length - 1) {
        window.clearTimeout(timeout);
        return;
      }

      if (thing.length == 0) {
        mode = "delete";
        delay = 1500;
      } else {
        delay = 32 + Math.round(Math.random() * 40);
      }

      break;

    case "delete":
      message = message.slice(0, -1);
      updateText(message);

      if (message.length == 0) {
        mode = "write";
        delay = 1500;
      } else {
        delay = 32 + Math.round(Math.random() * 100);
      }
      break;
  }

  timeout = window.setTimeout(tick, delay);
}

var timeout = window.setTimeout(tick, delay);

// button effect on about section

function showTab(elementId) {
    let tabs = document.getElementsByClassName("cards-content");
    for (let i = 0; i < tabs.length; i++) {
      tabs[i].classList.remove("active");
    }
  
    document.getElementById(elementId).classList.add("active");
  }

  // loader 
  function removeLoader(){
      $( ".loader-container" ).fadeOut(500, function() {
        // fadeOut complete. Remove the loading div
        $( ".loader-container" ).remove(); //makes page more lightweight 
    });  
  }

  $(window).on('load', function(){
    setTimeout(removeLoader, 1500); //wait for page load PLUS two seconds.
  });

  // project cards
  let projects = [
    {
      imgURL: "",
      imgALT: "My Project 1",
      title: "Contact Form",
      techStack: "HTML/CSS",
      description: "HTML/CSS Contact Form",
      githubURL: "https://github.com/K3nsei-dev/contact-form",
      liveProjectURL: "https://lca-contact-form.netlify.app/"
    },
    {
      imgURL: "",
      imgALT: "My Project 2",
      title: "Timeline",
      techStack: "HTML/CSS",
      description: "HTML/CSS Timeline",
      githubURL: "https://github.com/K3nsei-dev/timeline",
      liveProjectURL: "https://lca-timeline.netlify.app/"
    },
    {
      imgURL: "https://picsum.photos/300?random=3",
      imgALT: "My Project 3",
      title: "Project Cards",
      techStack: "HTML/CSS",
      description: "HTML/CSS Project Cards",
      githubURL: "https://github.com/K3nsei-dev/my-project-cards",
      liveProjectURL: "https://lca-projects.netlify.app/"
    },
    {
      imgURL: "https://picsum.photos/300?random=23",
      imgALT: "Project 4",
      title: "Slider",
      techStack: "HTML/CSS",
      description: "HTML/CSS Slider",
      githubURL: "https://github.com/K3nsei-dev/slider",
      liveProjectURL: "https://lca-testimonials.netlify.app/"
    },
    {
      imgURL: "https://picsum.photos/300?random=4",
      imgALT: "My Project 5",
      title: "Sneaker Website",
      techStack: "HTML/CSS",
      description: "HTML/CSS Sneaker Website",
      githubURL: "https://github.com/K3nsei-dev/sneaker-website",
      liveProjectURL: "https://sneaker-website.netlify.app/"
    },
    {
      imgURL: "https://picsum.photos/300?random=5",
      imgALT: "My Project 6",
      title: "Adding 2 Numbers",
      techStack: "Python",
      description: "Python/Tkinter Adding 2 Numbers",
      githubURL: "https://github.com/K3nsei-dev/tkinter-adding-numbers",
      liveProjectURL: "https://replit.com/@K3nsei/Tkinter-Exercise"
    },
    {
      imgURL: "https://picsum.photos/300?random=6",
      imgALT: "My Project 7",
      title: "BMI Convertor",
      techStack: "Python",
      description: "Python/Tkinter BMI Convertor",
      githubURL: "https://github.com/K3nsei-dev/BMI-Converter",
      liveProjectURL: "https://replit.com/@K3nsei/BMI-Converter#main.py"
    },
    {
      imgURL: "https://picsum.photos/300?random=7",
      imgALT: "My Project 8",
      title: "Item Lister",
      techStack: "JavaScript",
      description: "HTML/BOOTSTRAP/JS Item Lister",
      githubURL: "https://github.com/K3nsei-dev/item-lister",
      liveProjectURL: "https://lca-itemlister.netlify.app/"
    },
      {
      imgURL: "https://picsum.photos/300?random=7",
      imgALT: "My Project 9",
      title: "Error Handling",
      techStack: "Python",
      description: "Python/Tkinter Error Handling",
      githubURL: "https://github.com/K3nsei-dev/error-handling",
      liveProjectURL: "https://replit.com/@K3nsei/error-handling#main.py"
    },
      {
      imgURL: "https://picsum.photos/300?random=7",
      imgALT: "My Project 10",
      title: "Temp Convertor",
      techStack: "Python",
      description: "Python/Tkinter Temp Convertor",
      githubURL: "https://github.com/K3nsei-dev/temperature-converter",
      liveProjectURL: "https://replit.com/@K3nsei/temperature-converter#main.py"
    },
    {
      imgURL: "https://picsum.photos/300?random=7",
      imgALT: "My Project 11",
      title: "Weather App",
      techStack: "Python",
      description: "Python/Tkinter Weather App",
      githubURL: "https://github.com/K3nsei-dev/weather-app",
      liveProjectURL: "https://replit.com/@K3nsei/weather-app#main.py"
    },
    {
      imgURL: "https://picsum.photos/300?random=7",
      imgALT: "My Project 12",
      title: "Sick Form",
      techStack: "Python",
      description: "Python/Tkinter Sick Form",
      githubURL: "https://github.com/K3nsei-dev/sick-form",
      liveProjectURL: "https://replit.com/@K3nsei/Sick-Form#main.py"
    },
    {
      imgURL: "https://picsum.photos/300?random=7",
      imgALT: "My Project 13",
      title: "Lotto Program",
      techStack: "Python",
      description: "Python/Tkinter Lotto Program",
      githubURL: "https://github.com/K3nsei-dev/new-lotto-program",
      liveProjectURL: "https://replit.com/@K3nsei/new-lotto-program#main.py"
    },
    // {
    //   imgURL: "https://picsum.photos/300?random=7",
    //   imgALT: "My Project 14",
    //   title: "Database",
    //   techStack: "MySQL",
    //   description: "Python/MySQL Online App",
    //   githubURL: "https://github.com/K3nsei-dev/new-mysql-eomp",
    //   liveProjectURL: "https://replit.com/@K3nsei/new-mysql-eomp"
    // },
    {
      imgURL: "https://picsum.photos/300?random=7",
      imgALT: "My Project 15",
      title: "Counter",
      techStack: "JavaScript",
      description: "JavaScript Counter",
      githubURL: "https://github.com/K3nsei-dev/javascript-counter",
      liveProjectURL: "https://lca-javascript-counter.netlify.app/"
    },
    {
      imgURL: "https://picsum.photos/300?random=7",
      imgALT: "My Project 16",
      title: "Chuck Norris Jokes",
      techStack: "Flask",
      description: "Flask Chuck Norris Jokes",
      githubURL: "https://github.com/K3nsei-dev/react-tic-tac-toe",
      liveProjectURL: "https://lca-chuck-norris-jokes.herokuapp.com/"
    },
    {
      imgURL: "https://picsum.photos/300?random=7",
      imgALT: "My Project 17",
      title: "Tic Tac Toe",
      techStack: "React",
      description: "React Tic Tac Toe Game",
      githubURL: "https://github.com/K3nsei-dev/chuck-norris-jokes",
      liveProjectURL: "https://jra-tic-tac-toe.netlify.app/"
    }
  ];
  
  function createCard(card) {
    let createdCard = `<div class="panel" techStack=${card.techStack} >
        <p class="text top-left">${card.description}</p>
        <div class="text bottom-left effect"><a href="${card.githubURL}" target="_blank">Code Base</a></div>
        <div class="text bottom-right effect"><a href="${card.liveProjectURL}" target="_blank">Live</a></div>
      </div>
    `;
    return createdCard;
  }

  // function pickUpRandomClass() {
  //   let randomClass =  Math.round(Math.random() * 2) + 1

  //   return `box${ randomClass }`
  // }
  
  function renderCards() {
    let projectContainer = document.querySelector(".comic");
    for (project of projects) {
      let card = createCard(project);
      projectContainer.innerHTML += card;
    }
  }
  
  renderCards();
  
  function filterCards(category) {
    let cards = document.getElementsByClassName("panel");
    
    if (category === "All") {
    for (card of cards) {
      card.style.display = "block";
     }
    return;
    }
    
    for (card of cards) {
      console.log(card);
      card.style.display = "none";
    }
  
    let selectedCards = document.querySelectorAll(`[techStack='${category}']`);
  
    for (card of selectedCards) {
      card.style.display = "block";
    }
  }
  
  //  cat 
  function init() { 
    const catWrapper = document.querySelector('.cat_wrapper')
    const wrapper = document.querySelector('.wrapper')
    const cat = document.querySelector('.cat')
    const head = document.querySelector('.cat_head')
    const legs = document.querySelectorAll('.leg')
    const pos = {
      x: null,
      y: null
    }
  
    const walk = () =>{
      cat.classList.remove('first_pose')
      legs.forEach(leg=>leg.classList.add('walk'))
    }
  
    const handleMouseMotion = e =>{
      pos.x = e.clientX
      pos.y = e.clientY
      walk()
    }
  
    const handleTouchMotion = e =>{
      if (e.targetTouches) return
      
      pos.x = e.targetTouches[0].offsetX
      pos.y = e.targetTouches[0].offsetY
      walk()
    }
  
    const turnRight = () =>{
      cat.style.left = `${pos.x - 90}px`
      cat.classList.remove('face_left')
      cat.classList.add('face_right')
    }
  
    const turnLeft = () =>{
      cat.style.left = `${pos.x + 10}px`
      cat.classList.remove('face_right')
      cat.classList.add('face_left')
    }
  
    const decideTurnDirection = () =>{
      cat.getBoundingClientRect().x < pos.x ?
        turnRight()
        :
        turnLeft()
    }
  
    const headMotion = () =>{
      pos.y > (wrapper.clientHeight - 100) ?
        head.style.top = '-15px'
        :
        head.style.top = '-30px'
    }
  
    const jump = () =>{
      catWrapper.classList.remove('jump')
      if (pos.y < (wrapper.clientHeight - 250)) {
        setTimeout(()=>{
          catWrapper.classList.add('jump')
        },100)
      } 
    }
  
    const decideStop = ()=>{
      if (cat.classList.contains('face_right') && pos.x - 90 === cat.offsetLeft ||
          cat.classList.contains('face_left') && pos.x + 10 === cat.offsetLeft) {
        legs.forEach(leg=>leg.classList.remove('walk'))    
      }
    }
    
    setInterval(()=>{
      if (!pos.x || !pos.y) return
      decideTurnDirection()
      headMotion()
      decideStop()
    },100)
  
    setInterval(()=>{
      if (!pos.x || !pos.y) return
      jump()
    },1000)
  
    document.addEventListener('mousemove', handleMouseMotion)
    document.addEventListener('mousemove', handleTouchMotion)
  }
  
  window.addEventListener('DOMContentLoaded', init)
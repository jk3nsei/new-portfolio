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
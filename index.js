// cat
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
const containerMenu = document.querySelector(".container-menu");
const menuShow = document.querySelector(".menu-show");

const divMove = document.querySelectorAll("main .gallery-wrapper div");
const websmove = document.querySelectorAll(".other-websites-gallery a div");


let once = false;
let twice = false;

containerMenu.addEventListener("click", function (e) {
  e.currentTarget.classList.toggle("change");
  menuShow.classList.toggle("toggle-nav");
});


window.addEventListener('scroll', function (e) {
  console.log("called", window.scrollY);
  if (window.scrollY > 1000 && !once) {
    divMove.forEach(function (current) {
      current.classList.toggle("moveimage");
    });
    once = true;
  }

  if (window.scrollY > 3491 && !twice) {
    websmove.forEach(function (current) {
      current.classList.toggle("moveimage");
    });
    twice = true;
  }
})

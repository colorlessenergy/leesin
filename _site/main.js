const containerMenu = document.querySelector(".container-menu");
const menuShow = document.querySelector(".menu-show");

containerMenu.addEventListener("click", function (e) {
  e.currentTarget.classList.toggle("change");
  menuShow.classList.toggle("toggle-nav");
});

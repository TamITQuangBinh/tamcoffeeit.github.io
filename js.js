var menu = document.getElementById("header");

window.addEventListener("scroll", function() {
  if (window.pageYOffset > 0) {
    menu.style.top = "0";
  } else {
    menu.style.top = "42px";
  }
});
// menu doc 
window.addEventListener('scroll', function () {
  var menu = document.querySelector('.menu');
  if (window.scrollY > 0) {
      menu.classList.add('scrolled');
  } else {
      menu.classList.remove('scrolled');
  }

  if (window.scrollY > 1350) {
      menu.classList.add('scrolled1');
  } else {
      menu.classList.remove('scrolled1');
}
});



const icon_menu = document.querySelector('.menu11');
const menu_an = document.querySelector('.menu_an');
const icon_close = document.querySelector('.icon_close');

icon_close.addEventListener('click', () => {
  menu_an.classList.remove('active');
});

icon_menu.addEventListener('click', () => {
  menu_an.classList.add('active');
});
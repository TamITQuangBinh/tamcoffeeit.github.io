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
});


let list = document.querySelector('.slider .list');
let items = document.querySelectorAll('.slider .list .item');
let dots = document.querySelectorAll('.slider .dots li');
let prev = document.getElementById('prev');
let next = document.getElementById('next');

let active = 0;
let lengthItems = items.length - 1 ;
next.onclick = function(){
  if(active + 1 > lengthItems){
    active = 0;
  }else{
    active = active + 1;
  }
  reloadSlider();
}
prev.onclick = function(){
  if(active - 1 < 0){
    active = lengthItems;
  }else{
    active = active - 1;
  }
  reloadSlider();
}
let refreshSlider = setInterval(() => {next.click()}, 4000);
function reloadSlider() {
  let checkLeft = items[active].offsetLeft;
  list.style.left = -checkLeft + 'px';
  let lastActiveDot = document.querySelector('.slider .dots li.active');
  lastActiveDot.classList.remove('active');
  dots[active].classList.add('active');
  clearInterval(refreshSlider);
  refreshSlider = setInterval(() => {next.click()}, 4000);
  
}
dots.forEach((li,key) => {
  li.addEventListener('click', function(){
    active = key;
    reloadSlider();
  })
})
// slide 2
let list1 = document.querySelector('.slider1 .list1');
let items1 = document.querySelectorAll('.slider1 .list1 .item1');
let dots1 = document.querySelectorAll('.slider1 .dots1 li');
let prev1 = document.getElementById('prev1');
let next1 = document.getElementById('next1');

let active1 = 0;
let lengthItems1 = items1.length - 1;
next1.onclick = function(){
  if(active1 + 1 > lengthItems1){
    active1 = 0;
  }else{
    active1 = active1 + 1;
  }
  reloadSlider1();
}
prev1.onclick = function(){
  if(active1 - 1 < 0){
    active1 = lengthItems1;
  }else{
  active1 = active1 - 1;
  }
  reloadSlider1();
}
let refreshSlider1 = setInterval(()=> {next1.click()}, 4000);
function reloadSlider1(){
  let checkLeft1 = items1[active1].offsetLeft;
  list1.style.left = -checkLeft1 + 'px';
  let lastAcliveDot1 = document.querySelector('.slider1 .dots1 li.active1');
  lastAcliveDot1.classList.remove('active1');
  dots1[active1].classList.add('active1');
  clearInterval(refreshSlider1);
  refreshSlider1 = setInterval(()=> {next1.click()}, 4000);

}
dots1.forEach((li, key) => {
  li.addEventListener('click', function(){
    active1 = key;
    reloadSlider1();
  })
})
const icon_menu = document.querySelector('.menu11');
const menu_an = document.querySelector('.menu_an');
const icon_close = document.querySelector('.icon_close');

icon_close.addEventListener('click', () => {
  menu_an.classList.remove('active');
});

icon_menu.addEventListener('click', () => {
  menu_an.classList.add('active');
});
var menuIcon = document.querySelector(".menu-icon");
var sidebar = document.querySelector(".sidebar");
var tabicons = document.querySelector(".topic-tabs-container");
var maincontainer = document.querySelector(".main-container-section");

menuIcon.onclick = function(){
  sidebar.classList.toggle("small-sidebar");
  tabicons.classList.toggle("tab-links");
  maincontainer.classList.toggle("mainsection-toggle");
}


// Enable hidden nav bar

const header = document.querySelector(".header");
const topictabs = document.querySelector(".topic-tabs-container");
const topicTabsSlider = document.getElementById('topicTabsSlider');
let lastScrollY = window.scrollY;
let startX, scrollLeft;
let isDown = false;

window.addEventListener("scroll", () => {
 if (window.scrollY>lastScrollY) {
     header.classList.add("header-hidden")
     topictabs.classList.add("topictabs-hidden");
  } else {
    header.classList.remove("header-hidden")
    topictabs.classList.remove("topictabs-hidden");
  }

  lastScrollY = window.scrollY;
});

topicTabsSlider.addEventListener('mousedown', (e)=>{
  startX = e.clientX - topicTabsSlider.offsetLeft;
  console.log(e.clientX,topicTabsSlider.offsetLeft,startX);
  isDown = true;
  scrollLeft = topicTabsSlider.scrollLeft;
})
topicTabsSlider.addEventListener('mouseup', ()=>{
  isDown = false;
})
topicTabsSlider.addEventListener('mouseleave', ()=>{
  isDown = false;
})

topicTabsSlider.addEventListener('mousemove', (e)=>{
  if(!isDown){
    return;
  }
  e.preventDefault();
  const moveX = e.clientX - topicTabsSlider.offsetLeft;
  const walk = startX - moveX;
  topicTabsSlider.scrollLeft = walk + scrollLeft;
})
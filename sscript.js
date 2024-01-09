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
let lastScrollY = window.scrollY;

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



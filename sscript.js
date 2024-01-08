var menuIcon = document.querySelector(".menu-icon");
var sidebar = document.querySelector(".sidebar");
var tabicons = document.querySelector(".topic-tabs-container");
var maincontainer = document.querySelector(".main-container-section");

menuIcon.onclick = function(){
  sidebar.classList.toggle("small-sidebar");
  tabicons.classList.toggle("tab-links");
  maincontainer.classList.toggle("mainsection-toggle");
}


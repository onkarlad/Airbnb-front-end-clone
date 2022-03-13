/* 
====================
on-scroll part
==================== 
*/
let getlinks = document.querySelector(".links");
let getnavb = document.querySelector(".navb");
let getlogo = document.querySelector(".fa-airbnb");
let getlogo_txt = document.querySelector(".logo_text");
let get_om = document.querySelector(".om");
let get_globe = document.querySelector(".fa-globe");
let get_profile = document.querySelector(".profile_icon");
let get_bars_icon = document.querySelector(".fa-bars");
let get_profile_icon = document.querySelector(".fa-user-circle");
var get_nextrow = document.querySelector(".next_row");
window.onscroll = function () {
  if (document.documentElement.scrollTop > 30) {
    getlinks.innerHTML =
      '<div class="after_scroll"><button>Start your search <i class="fa fa-search"></i></button></div>';

    getnavb.style.height = "100px";
    getnavb.style.backgroundColor ="white";
    getlogo.style.color = "#dc3545";
    getlogo_txt.style.color = "#dc3545";
    get_om.style.color = "black";
    get_globe.style.color = "black";
    get_profile.style.backgroundColor = "black";
    get_bars_icon.style.color = "white";
    get_profile_icon.style.color = "white";
    get_nextrow.style.display = "none";
  } else {
    getlinks.innerHTML =
      '<ul><li><a href="#">places to stay</a></li><li><a href="#">Experiences</a></li><li><a href="#">Online Experiences</a></li></ul>';

    getnavb.style.height = "150px";
    getnavb.style.backgroundColor = "black";
    getlogo.style.color = "white";
    getlogo_txt.style.color = "white";
    get_om.style.color = "white";
    get_globe.style.color = "white";
    get_profile.style.backgroundColor = "white";
    get_bars_icon.style.color = "black";
    get_profile_icon.style.color = "black";
    get_nextrow.style.display = "";
  }
};

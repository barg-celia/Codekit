"use strict";

const menuToggle = document.querySelector(".menu__toggle");
const menu = document.querySelector(".menu");
const menuLinks = document.querySelectorAll(".menu__el a");

if(menuToggle){
    // click sur le bouton
    menuToggle.addEventListener("click", menuOpen);

    // click sur les liens 
    for(let menuLink of menuLinks){
        menuLink.addEventListener("click", menuOpen);
    }
}
// function pour ouvrir et fermer le menu
function menuOpen(){
    menu.classList.toggle("menu--open");
}

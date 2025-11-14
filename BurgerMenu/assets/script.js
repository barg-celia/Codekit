"use strict";

const menuToggle = document.querySelector(".menu__toggle");
const menu = document.querySelector(".menu");

if(menuToggle){
    menuToggle.addEventListener("click", menuOpen);
}

function menuOpen(){
    menu.classList.toggle("menu--open");
}

// quand on clique sur un des liens le menu se ferme 
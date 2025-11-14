"use strict";

const progressBar = document.querySelector(".scrollBar__progress");

if(progressBar){
    window.addEventListener("scroll", updateScrollProgress);
}

function updateScrollProgress(){

    /*
        calcul
        document.body.scrollWeight valeur de scroll totale 
        window.innerHeight hauteur du vieuwport
        window.scrollY votre valeur de scroll
    */ 

    const maxScroll = document.body.scrollHeight - window.innerHeight;
    const currentScroll = window.scrollY;
    const readPercentage = (currentScroll / maxScroll) * 100 ; // mon pourcentage de scroll
    if(currentScroll >= 0){
        progressBar.style.setProperty("--scrollBar-width", readPercentage + "%");
    }
}
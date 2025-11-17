"use strict";

// Const pour sélectionner les liens de ma .tab__nav 

// boucler sur ma const  
// ajouter un eventlistener sur les liens pour le click
// je lance une fonction 

// je déclare ma fonction 
// Etape 1 la class de la nav 

// selectionner tab__el--active
// supprimer les class tab__el--active 

// ajouter la class tab__el--active qui est cliqué
// currentTarget?

// Etape 2 
// selectionner tab__content--active
// supprimer tab__content--active

// ajouter la class tab__content--active sur le bon div 
// recuperer le contenu de l'attribut href sur le currentTarget
// selectionner le div qui a comme attribut la valeur d'href
// sur cet élément ajouter la class tab__content--active


const tabLinks = document.querySelectorAll(".tab__el a");
if(tabLinks){
    for(let tablink of tabLinks){
        tablink.addEventListener("click", tabTrigger);
    }
}

function tabTrigger(event){
    event.preventDefault();

    const parentTab = event.currentTarget.closest(".tab");

    const activeLink = parentTab.querySelector(".tab__el--active");
    activeLink.classList.remove("tab__el--active");
    event.currentTarget.parentNode.classList.add("tab__el--active");

    const activeTab = parentTab.querySelector(".tab__content--active");
    activeTab.classList.remove("tab__content--active");

    const tabSelectId = event.currentTarget.getAttribute("href");
    const tabSelect = parentTab.querySelector(tabSelectId);
    tabSelect.classList.add("tab__content--active");
}
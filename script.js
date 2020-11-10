window.addEventListener('load', main);

/* start of the i like things loop */
function main() {
    startThingsLoop();
    activateHamburger();
    console.log('kjasföa');
}

function activateHamburger() {
    const ham = document.querySelector(".navButton");
    ham.addEventListener('click', toggleHamburger);

}

function toggleHamburger() {

    const navbar = document.querySelector(".navBar");

    navbar.classList.toggle(".navShow");
    
    /*
    navbar.classList.toggle(".navClose"); */

}




/* navbar functions

function activateNavbar() {
let navBar = document.querySelector(".navBar");
let navButton = document.querySelector(".navButton");

navBar.addEventListener("click", toggleHamburger);
navButton.addEventListener("click", toggleHamburger);
}

// toggles hamburger menu in and out when clicking on the hamburger
function toggleHamburger() {
  navBar.classList.toggle("navShow");
  navButton.classList.toggle("navClose");
}

*/

/** Start the animation with a set interval */
function startThingsLoop() {
   setInterval(changeCurrentItem, 1000);
}

/** Presents the next image by checking which image is currently presented */
function changeCurrentItem() {
    const itemLoop = document.querySelectorAll('.iLikeThingsContainer > h2');


    for (let i = 0; i < itemLoop.length; i++) {
        
        if (itemLoop[i].classList.contains('iLikeItem')) {

            // 1. ta bort klassen från aktuellt index
            itemLoop[i].classList.remove('iLikeItem');

            let nextIndex = (i + 1) % itemLoop.length;

            // 2. lägg till show klassen på nästa index
            itemLoop[nextIndex].classList.add('iLikeItem');

            break;
        }

    }
}

/*

let iLikeLoop = {
    "Digital things",
    "Cute cats",
    "Smooth Ui",
    "Tuscan wine",
    "Design systems",
}

function iLikeLoop() {

    document.getElementById("thingsLoop").classList.toggle("hidden");
}

*/
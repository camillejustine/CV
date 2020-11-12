window.addEventListener('load', main);

/**
 * functions on site */
function main() {
    startThingsLoop();
    openMenu();
}

/**
 * open and close menu */
function openMenu() {
    const navigationButton = document.querySelector(".navButton");
    navigationButton.addEventListener('click', closeMenu);
}

function closeMenu() {
    const navigationBar = document.querySelector(".navBar");
    navigationBar.classList.toggle("navShow");
}

/**
 * loop animation with set interval */
function startThingsLoop() {
   setInterval(changeCurrentItem, 500);
}

/**
 * gives next item iLikeItem class
 * so the loop shows different things i like */
function changeCurrentItem() {
    const itemLoop = document.querySelectorAll('.iLikeThingsContainer > h2');
    for (let i = 0; i < itemLoop.length; i++) {
        
        if (itemLoop[i].classList.contains('iLikeItem')) {
            itemLoop[i].classList.remove('iLikeItem');

         let nextIndex = (i + 1) % itemLoop.length;
            itemLoop[nextIndex].classList.add('iLikeItem');

            break;
        }

    }
}
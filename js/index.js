burger = document.querySelector('.burger');
header = document.querySelector('header');
nav = document.querySelector('nav');

// height and nav visiblity
burger.addEventListener('click', () => {
    header.classList.toggle('headerheight');
    nav.classList.toggle('navvisible');
});

//burger animation
let showMenu = false;
burger.addEventListener("click", toggleMenu);
function toggleMenu() {
    if (!showMenu) {
        burger.classList.add("close");
        // Reset the menu state
        showMenu = true;
    } else {
        burger.classList.remove("close");
        // Reset the menu state
        showMenu = false;
    }
}


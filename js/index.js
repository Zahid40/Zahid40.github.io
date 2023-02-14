burger = document.querySelector('.burger');
header = document.querySelector('header');
nav = document.querySelector('nav');


burger.addEventListener('click', () => {
    header.classList.toggle('headerheight');
    nav.classList.toggle('navvisible');
});


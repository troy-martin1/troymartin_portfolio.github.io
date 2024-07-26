const hamburger = document.querySelector('.hamburger-menu')
const navMenu = document.querySelector('.navMenu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('hide');
});
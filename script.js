const hamburger = document.querySelector('.hamburger-menu')
const navMenu = document.querySelector('.navMenu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('hide');
});

let slideIndex = 1;
showSlides(slideIndex);

/*controls*/
function advanceSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n)
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides")
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for(i=0; i < dots.length; i++) {
        slides[i].computedStyleMap.display = "none";
    } for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}
let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.querySelectorAll('.mySlides');
    let dots = document.querySelectorAll(".dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active-slide", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active-slide";
    setTimeout(showSlides, 3000); // Change image every 2 seconds
}
let slideIndex = 0;

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    if (slideIndex > 1) {
        slideIndex = 0;
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
    slideIndex++;
    slides[slideIndex-1].style.display = "block";  
    setTimeout(showSlides, 2000); // Change image every 3 seconds
}

showSlides();
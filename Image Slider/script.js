let currentIndex = 0;
const slides = document.querySelector('.slides');
const totalImages = document.querySelectorAll('.slides img').length;
const nextbutton = document.getElementsByClassName("next");
const prevbutton = document.getElementsByClassName("prev");

function updateSlider(index){
    slides.style.transform = `translateX(${-currentIndex * 100}%)`;

    nextbutton = (currentIndex === totalImages - 1);
    prevbutton = (currentIndex === 0);
}

function nextSlide(){
    if(currentIndex < totalImages - 1){
        currentIndex++;
        updateSlider(currentIndex);
    }
}

function prevSlide(){
    if(currentIndex > 0){
        currentIndex--;
        updateSlider(currentIndex);
    }
}

updateSlider();
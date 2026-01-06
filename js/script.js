const slides = document.querySelectorAll('.slide');
const nextBtn = document.getElementsByClassName('next');
const prevBtn = document.getElementsByClassName('prev');
let currentIndex = 0;
let timer;
const slideInterval = 3000;

function showSlides(index){
    slides.forEach(slide => slide.classList.remove('active'));

    slides[index].classList.add('active');
}

function autoSlide(){
    timer = setInterval(nextSlide, slideInterval);
}

function prevSlide(){
    console.log('prev');
    clearInterval(timer);

    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlides(currentIndex);

    autoSlide();
}
function nextSlide(){
    console.log('next');
    clearInterval(timer);

    currentIndex = (currentIndex + 1) % slides.length;
    showSlides(currentIndex);

    autoSlide();
}

autoSlide();
prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);
showSlides(currentIndex);



const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide img');

const prevBtn = document.querySelector('.prevBtn');
const nextBtn = document.querySelector('.nextBtn');

let counter = 0;
const size = carouselImages[0].clientWidth;

carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

nextBtn.addEventListener('click',()=>{
    carouselImages[counter].classList.remove('active'); 
    counter++ ; 
    if (counter > 2) {
        counter = 0;   
    }
    carouselImages[counter].classList.add('active');
  
//    carouselSlide.style.transition = "transform 0.4s ease-in-out";
//    counter++; 
//    console.log(counter);
//    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});
prevBtn.addEventListener('click',()=>{
    carouselImages[counter].classList.remove('active'); 
    counter-- ; 
    if (counter < 0 ) {
        counter = 2;   
    }
    carouselImages[counter].classList.add('active');
});

carouselSlide.addEventListener("transitionend", ()=> {
   if (carouselImages[counter].class ==='lastClone'){
       carouselSlide.style.transition = 'none';
       counter = carouselImages.length -2; 
       carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
   }
   if (carouselImages[counter].class ==='firstClone'){
       carouselSlide.style.transition = 'none';
       counter = carouselImages.length - counter; 
       carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
   }    
});






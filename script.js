//Richiamo elementi del Dom
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const carouselGallery = document.querySelector('.gallery');
const thumbnailsContainer = document.querySelector('.thumbnails');

//Richiamo sorgenti immagine
const sources = ['img/01.webp', 'img/02.webp' , 'img/03.webp' , 
    'img/04.webp', 'img/05.webp'];


// Genero le immagini col ciclo for
let imgs = '';
let thumbnails = '';
for(let i = 0; i < sources.length; i++) {
   imgs += `<img alt="videogame-${i+1}" src="${sources[i]}">`;
   thumbnails += `<img alt="thumbnail-${i + 1}" src="${sources[i]}">`;
}
//inserisco le immagini e miniature nel DOM
carouselGallery.innerHTML = imgs;
thumbnailsContainer.innerHTML = thumbnails;

const images = document.querySelectorAll('.gallery img');
const thumbnailsImages = document.querySelectorAll('.thumbnails img');



//Mostro la prima immagine e la sua miniatura
let currentActiveIndex = 0;
images[currentActiveIndex].classList.add('active');
thumbnailsImages[currentActiveIndex].classList.add('active');


//Aggiungo gli eventi per i pusanti
nextButton.addEventListener('click',  function() {
    images[currentActiveIndex].classList.remove('active');
    thumbnailsImages[currentActiveIndex].classList.remove('active');

currentActiveIndex++;

if (currentActiveIndex >= images.length) {
    currentActiveIndex = 0;
}
images[currentActiveIndex].classList.add('active');
thumbnailsImages[currentActiveIndex].classList.add('active');
});

prevButton.addEventListener('click', function() {
    images[currentActiveIndex].classList.remove('active');
    thumbnailsImages[currentActiveIndex].classList.remove('active');

    currentActiveIndex--;
    
    if (currentActiveIndex < 0) {
        currentActiveIndex = images.length - 1;
    }
    images[currentActiveIndex].classList.add('active');
    thumbnailsImages[currentActiveIndex].classList.add('active');
});

    for (let i = 0; i < thumbnailsImages.length; i++) {
        const thumbnail = thumbnailsImages[i];

        thumbnail.addEventListener('click', function() {

        images[currentActiveIndex].classList.remove('active');
        thumbnailsImages[currentActiveIndex].classList.remove('active');

        currentActiveIndex = i;
        
        images[currentActiveIndex].classList.add('active');
        thumbnailsImages[currentActiveIndex].classList.add('active');
    });
}
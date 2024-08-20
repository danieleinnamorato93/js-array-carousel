//Richiamo elementi del Dom
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const carouselGallery = document.querySelector('.gallery');

//Richiamo sorgenti immagine
const sources = ['img/01.webp', 'img/02.webp' , 'img/03.webp' , 
    'img/04.webp', 'img/05.webp'];


// Genero le immagini col ciclo for
let imgs = '';
for(let i = 0; i < sources.length; i++) {
   imgs += `<img alt="videogame-${i+1}" src="${sources[i]}">`;
}
//inserisco le immagini nel DOM
carouselGallery.innerHTML = imgs;
const images = document.querySelectorAll('#carousel img')

//Mostro la prima immagine
let currentActiveIndex = 0;
images[currentActiveIndex].classList.add('active');

//Aggiungo gli eventi per i pusanti
nextButton.addEventListener('click',  function() {
images[currentActiveIndex].classList.remove('active');
currentActiveIndex++;
if (currentActiveIndex >= images.length) {
    currentActiveIndex = 0;
}
images[currentActiveIndex].classList.add('active');
});
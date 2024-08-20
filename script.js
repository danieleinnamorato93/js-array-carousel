//Preparazione: Richiamo elementi del Dom
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const carouselGallery = document.querySelectorAll ('.gallery');

//Richiamo sorgenti immagine
const sources = ['img/01.webp', 'img/02.webp' , 'img/03.webp' , 
    'img/04.webp', 'img/05.webp'];


// Genero le immagini col ciclo for
for(let i = 0; i < sources.length; i++){
    const image = document.createElement('img');
    image.src = sources[i];
    carouselGallery.appendChild(image);
}
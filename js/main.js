// Array che contiene gli indirizzi alle foto delle città
const items = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];

// Array che contiene i nomi delle città
const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
]

// Array che contiene le descrizioni delle città
const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
]


let newCarouselElement = '';
let newCarouselImgThub = '';

// Creo i singoli elementi del carousel
for (let i = 0 ; i < items.length ; i++){
    newCarouselElement += `
    <div class="carousel-element">
        <img src="${items[i]}" class="my-img-carousel" alt="${title[i]}">
        <div class="carousel-img-description position-absolute bottom-0 end-0 text-end text-white p-4">
            <h3>${title[i]}</h3>
            <p>${text[i]}</p>
        </div>
    </div>`;

    newCarouselImgThub += `
    <div class="img-thub position-relative">
        <div class="layover position-absolute top-0"></div>
        <img src="${items[i]}" class="my-img-thub" alt="thubnails photo">
    </div>`;
}

// Inserisco dinamicamente i singoli elementi all'interno del contenitore generale 'my-carousel'
const carouselWrapper = document.querySelector('.my-carousel');
carouselWrapper.innerHTML += newCarouselElement;

// Inserisco dinamicamente le immagini di thubnails all'interndo del wrapper 'carousel-thubnails'
const thubnailsWrapper = document.querySelector('.carousel-thubnails');
thubnailsWrapper.innerHTML += newCarouselImgThub;


// Recupero tutti gli elementi appena creati, per far si di poter aggiungere la classe active
const carouselElements = document.getElementsByClassName('carousel-element');
const thubnailsImg = document.getElementsByClassName('my-img-thub');

// Richiamo il div 'layover' per poterlo rimuovere sull'immagine attiva
const layover = document.getElementsByClassName('layover');
console.log(layover);


let activeElement = 1;
// carouselElements è un array a tutti gli effetti, con gli indici possiamo aggiungere la classe active al primo elemento
carouselElements[activeElement].classList.add('active');
thubnailsImg[activeElement].classList.add('active');

// Aggiungo la classe per rimuovere il layover
layover[activeElement].classList.add('d-none');

const nextButton = document.getElementById('next');
nextButton.addEventListener('click', function(){
    carouselElements[activeElement].classList.remove('active');
    thubnailsImg[activeElement].classList.remove('active');
    layover[activeElement].classList.remove('d-none');

    if (activeElement === items.length - 1){
        activeElement = 0;
    } else {
        activeElement ++;
    }

    carouselElements[activeElement].classList.add('active');
    thubnailsImg[activeElement].classList.add('active');
    layover[activeElement].classList.add('d-none');
});

const previousButton = document.getElementById('previous');
previousButton.addEventListener('click', function(){
    carouselElements[activeElement].classList.remove('active');
    thubnailsImg[activeElement].classList.remove('active');
    layover[activeElement].classList.remove('d-none');

    if (activeElement === 0){
        activeElement = items.length - 1;
    } else {
        activeElement --;
    }

    carouselElements[activeElement].classList.add('active');
    thubnailsImg[activeElement].classList.add('active');
    layover[activeElement].classList.add('d-none');
});
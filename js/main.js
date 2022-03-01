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

    newCarouselImgThub += `<img src="${items[i]}" class="my-img-thub" alt="thubnails photo">`;
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

// carouselElements è un array a tutti gli effetti, con gli indici possiamo aggiungere la classe active al primo elemento
carouselElements[0].classList.add('active');
thubnailsImg[0].classList.add('active');

let count = 0;
const nextButton = document.getElementById('next');
nextButton.addEventListener('click', function(){
    carouselElements[count].classList.remove('active');
    thubnailsImg[count].classList.remove('active');

    count ++;
    carouselElements[count].classList.add('active');
    thubnailsImg[count].classList.add('active');
});

const previousButton = document.getElementById('previous');
previousButton.addEventListener('click', function(){
    carouselElements[count].classList.remove('active');
    thubnailsImg[count].classList.remove('active');

    count --;
    carouselElements[count].classList.add('active');
    thubnailsImg[count].classList.add('active');
});
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

// Creo i singoli elementi del carousel
for (let i = 0 ; i < items.length ; i++){
    newCarouselElement += `
    <div class="carousel-element">
    <img src="${items[i]}" class="my-img-carousel" alt="${title[i]}">
    </div>`
}

// Inserisco dinamicamente i singoli elementi all'interno del contenitore generale 'my-carousel'
const carouselWrapper = document.querySelector('.my-carousel');
carouselWrapper.innerHTML += newCarouselElement;


// Recupero tutti gli elementi appena creati, per far si di poter aggiungere la classe active
const carouselElements = document.getElementsByClassName('carousel-element');

// carouselElements è un array a tutti gli effetti, con gli indici possiamo aggiungere la classe active al primo elemento
carouselElements[1].classList.add('active');
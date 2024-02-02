let image = document.querySelector('#image-slideshow');
let images = [
    '../Images/About.img',
    '../Images/Background.jpg',
    '../Images/BackgroundFull.png',
    '../Images/Bakground1.jpg'
];
let currentImageIndex = 0;

function slideShow() {
    let newImage = document.createElement('img');
    newImage.src = images[currentImageIndex];
    newImage.alt = '';
    image.classList.add('fade');
    newImage.classList.add('fade');
    image.appendChild(newImage);
    setTimeout(function() {
        while (image.childNodes.length > 1) {
            image.removeChild(image.firstChild);
        }
        image.style.transform = 'translateX(0)';
    }, 800); 
    currentImageIndex = (currentImageIndex + 1) % images.length;
    image.offsetWidth;
    image.style.transform = `translateX(-${currentImageIndex * 100}%)`;
}
let intervalId = setInterval(slideShow, 7000);


let text_container = document.querySelector('.text');
let text = [
    `Lorem ipsum dolor sit amet consectetur, adipisicing elit.
    Fugit deserunt modi magni rerum earum atque voluptatum, ut
    ab sit itaque alias nam laudantium culpa, eum, consectetur
    nisi soluta ratione. Et commodi sunt nam aliquam voluptate
    nemo, esse dolores a quia alias reprehenderit? Velit, corporis
    magni illo quisquam iusto voluptate blanditiis magnam in unde
    nesciunt.(1)`,
    `Lorem ipsum dolor sit amet consectetur, adipisicing elit.
    Fugit deserunt modi magni rerum earum atque voluptatum, ut
    ab sit itaque alias nam laudantium culpa, eum, consectetur
    nisi soluta ratione. Et commodi sunt nam aliquam voluptate
    nemo, esse dolores a quia alias reprehenderit? Velit, corporis
    magni illo quisquam iusto voluptate blanditiis magnam in unde
    nesciunt.(2)`,
    `Lorem ipsum dolor sit amet consectetur, adipisicing elit.
    Fugit deserunt modi magni rerum earum atque voluptatum, ut
    ab sit itaque alias nam laudantium culpa, eum, consectetur
    nisi soluta ratione. Et commodi sunt nam aliquam voluptate
    nemo, esse dolores a quia alias reprehenderit? Velit, corporis
    magni illo quisquam iusto voluptate blanditiis magnam in unde
    nesciunt.(3)`
]

let lastIndex = -1; 
function randomText() {
    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * text.length);
    } while (randomIndex === lastIndex);
    lastIndex = randomIndex;
    text_container.innerHTML = text[randomIndex];
}


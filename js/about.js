let image = document.querySelector('#image-slideshow');
let images = [
    '../Images/IMG_9921.JPG',
    '../Images/IMG_9922.JPG',
    '../Images/IMG_9923.JPG',
    '../Images/IMG_9924.JPG',
    '../Images/IMG_9925.JPG',
    '../Images/IMG_9930.JPG',


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
let intervalId = setInterval(slideShow, 6000);


let text_container = document.querySelector('.text');
let text = [
    `Welcome to FightBaza, where strength meets community in the heart of Ungheni. Established in 2016, FightBaza has been a cornerstone of fitness and wellness, providing a dynamic space for individuals to embark on their transformative fitness journeys. From its inception, our gym has aimed to redefine the conventional fitness experience, blending state-of-the-art facilities with a vibrant and inclusive atmosphere.`,
    `At FightBaza, we believe that everyone has the potential to unlock their inner warrior, regardless of age, fitness level, or background. Our passionate team of experienced trainers is dedicated to guiding you through personalized workout routines, ensuring you reach your fitness goals in an environment that fosters growth and camaraderie. We take pride in offering a diverse range of classes and training programs, catering to various interests and skill levels.`,
    `Beyond the weights and the mats, FightBaza is more than just a gym – it's a community. Our members form lasting connections, supporting and motivating each other on their fitness journeys. We host regular events, workshops, and challenges to keep the energy high and the spirits higher. As we continue to evolve, our commitment to providing a holistic fitness experience remains unwavering, making FightBaza not just a gym, but a destination for those seeking empowerment, vitality, and a sense of belonging. Join us at FightBaza and discover the strength within you.`
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


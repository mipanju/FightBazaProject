let image = document.querySelector('#image-slideshow');
let images = [
    '../Images/About.img',
    '../Images/Background.jpg',
    '../Images/BackgroundFull.png',
    '../Images/Bakground1.jpg'
];
let currentImageIndex = 0;

function slideShow() {
    // Create a new image element
    let newImage = document.createElement('img');
    newImage.src = images[currentImageIndex];
    newImage.alt = '';

    // Add the 'fade' class to the container for sliding transition
    image.classList.add('fade');

    // Add the 'fade' class to the new image for smooth opacity transition
    newImage.classList.add('fade');

    // Append the new image to the container
    image.appendChild(newImage);

    // Remove the previous image(s) after a short delay
    setTimeout(function() {
        while (image.childNodes.length > 1) {
            image.removeChild(image.firstChild);
        }
        // Reset the transform property after removing the previous image(s)
        image.style.transform = 'translateX(0)';
    }, 1000);  // Delay removal for the duration of the transition

    // Increment the index for the next image
    currentImageIndex = (currentImageIndex + 1) % images.length;

    // Trigger reflow (read/write cycle) to ensure the sliding transition works
    image.offsetWidth;

    // Apply the sliding effect by translating the container to the left
    image.style.transform = `translateX(-${currentImageIndex * 100}%)`;
}

// Set an interval to change the image every 5 seconds (5000 milliseconds)
let intervalId = setInterval(slideShow, 7000);

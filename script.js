// Array of photos for the Valentine's card
const photos = [
    "photo1.jpg",
    "photo2.jpg",
    "photo3.jpg",  // Add more photos as needed
    "photo4.jpg"
];

// Array of quotes corresponding to each photo
const quotes = [
    "\"You are my sunshine, my only sunshine.\" 💫",
    "\"Love is composed of a single soul inhabiting two bodies.\" - Aristotle",
    "\"You are my heart, my life, my one and only thought.\" - Arthur Conan Doyle",
    "\"Every love story is beautiful, but ours is my favorite.\" 💖"
];

let currentPhotoIndex = 0;  // Start at the first photo

// Function to change the image and quote to the next one in the array
function changePhoto() {
    currentPhotoIndex = (currentPhotoIndex + 1) % photos.length;
    document.getElementById('photo').src = photos[currentPhotoIndex];
    document.getElementById('quote').innerText = quotes[currentPhotoIndex];
}

// Attach event listeners to the buttons
document.getElementById('next-btn').addEventListener('click', changePhoto);

document.getElementById('yes-btn').onclick = function() {
    alert('Yay! You said yes! 💖');
};

document.getElementById('no-btn').onclick = function() {
    alert('Oh no! Maybe next year. 😅');
};

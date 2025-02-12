// Array of photos for the Valentine's card
const photos = [
    "photo1.jpg",
    "photo2.jpg",
    "photo3.jpg",  // Add more photos as needed
    "photo4.jpg"
];

// Array of quotes corresponding to each photo
const quotes = [
    "\"You are the most amazing boyfriend, you are mine.\" 💫",
    "\"Love is composed of a single soul inhabiting two bodies.\" - Aristotle",
    "\"You are my heart, my life, my one and only thought.\" - love forever",
    "\"Every love story is beautiful, but ours is my favorite.\" 💖"
];

let currentPhotoIndex = 0;  // Start at the first photo

let music = document.getElementById('background-music');

// Trigger audio play on first user interaction (e.g., clicking "Start" or tapping anywhere)
document.addEventListener('touchstart', function () {
    if (music.paused) {
        music.play();
    }
});

// Function to change the image and quote to the next one in the array
function changePhoto() {
    currentPhotoIndex = (currentPhotoIndex + 1) % photos.length;
    document.getElementById('photo').src = photos[currentPhotoIndex];
    document.getElementById('quote').innerText = quotes[currentPhotoIndex];

    // Play music when switching to the next photo if not already playing
    if (music.paused) {
        music.play();
    }
}

// Attach event listeners to the buttons
document.getElementById('next-btn').addEventListener('click', changePhoto);

document.getElementById('yes-btn').onclick = function() {
    alert('Yay! You said yes! 💖');
};

document.getElementById('no-btn').onclick = function() {
    alert('Oh no! Maybe next year. 😅');
};

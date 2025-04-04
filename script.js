// Array of titles to cycle through
const titles = [
    ":3", // default title
    "testing site",
    "your text here",
    "yo",
    "x3z",
];

// Index to keep track of the current title
let titleIndex = 0;

// Function to change the title every 2 seconds
setInterval(() => {
    // Set the title to the next title in the array
    document.title = titles[titleIndex];
    
    // Update the index to cycle through the titles
    titleIndex = (titleIndex + 1) % titles.length; // Resets to 0 when it reaches the end
}, 2000); // Change the title every 2 seconds

// Function to open the image and change the page title
function openImage(imageSrc, text) {
    const modal = document.getElementById('modal');
    const modalImage = document.getElementById('modal-image');
    const modalText = document.getElementById('modal-text');
    
    // Change the page title to match the image or text description
    document.title = text;  // Change the title dynamically based on the image clicked
    
    modalImage.src = imageSrc;
    modalText.textContent = text;
    
    modal.classList.add('show');
}

// Function to close the modal and reset the title
function closeModal() {
    const modal = document.getElementById('modal');
    
    // Reset the title back to default when the modal is closed
    document.title = "Image and GIF Gallery";  // Reset the title to the default
    
    modal.classList.remove('show');
}

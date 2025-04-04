const images = document.querySelectorAll('.image');
const modal = document.getElementById('modal');
const modalImage = document.getElementById('modal-image');
const modalText = document.getElementById('modal-text');
const modalExtraText = document.getElementById('modal-extra-text'); // New text element
const closeModal = document.getElementById('close-modal');

let currentLink = ""; // Store the link of the clicked image

// Event listener for each image
images.forEach(image => {
    image.addEventListener('click', () => {
        modalImage.src = image.src;
        modalText.textContent = image.dataset.text;
        modalExtraText.textContent = image.dataset.extraText; // Set the extra text
        modal.style.display = 'block';
    });
});

// Clicking the modal image redirects
modalImage.addEventListener('click', function () {
    if (currentLink) {
        window.location.href = currentLink;
    }
});

// Close the modal when clicking outside modal content
modal.addEventListener('click', function (e) {
    if (e.target === modal) {
        modal.classList.remove('show');
    }
});

// Close the modal when clicking the close button
closeModal.addEventListener('click', function () {
    modal.classList.remove('show');
});

window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});
});
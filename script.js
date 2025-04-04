// Select all images
const images = document.querySelectorAll('.image');

// Get modal and modal components
const modal = document.getElementById('modal');
const modalImage = document.getElementById('modal-image');
const modalText = document.getElementById('modal-text');
const closeModal = document.getElementById('close-modal');

// Loop through each image to add click event listeners
images.forEach(image => {
    let isImageClicked = false; // To track if the image was clicked for the first time

    image.addEventListener('click', function () {
        if (!isImageClicked) {
            // Show modal with text on first click
            modalImage.src = image.src;
            modalText.textContent = image.getAttribute('data-text');
            modal.classList.add('show');
            isImageClicked = true;
        } else {
            // Redirect to link on second click
            window.location.href = image.getAttribute('data-link');
        }
    });
});

// Close the modal when clicking outside the modal content
modal.addEventListener('click', function (e) {
    if (e.target === modal) {
        modal.classList.remove('show');
    }
});

// Close the modal when clicking the "X" button
closeModal.addEventListener('click', function () {
    modal.classList.remove('show');
});

const images = document.querySelectorAll('.image');
const modal = document.getElementById('modal');
const modalImage = document.getElementById('modal-image');
const modalText = document.getElementById('modal-text');
const closeModal = document.getElementById('close-modal');

// Event listener for each image
images.forEach(image => {
    let isImageClicked = false;

    // When an image is clicked
    image.addEventListener('click', function () {
        // If the image has not been clicked before, open the modal
        if (!isImageClicked) {
            modalImage.src = image.src;  // Set the modal image to the clicked image
            modalText.textContent = image.getAttribute('data-text');  // Set the text in the modal
            modal.classList.add('show');  // Show the modal
            isImageClicked = true;  // Mark the image as clicked to show text
        } else {
            // If the image has already been clicked, redirect to the link
            window.location.href = image.getAttribute('data-link');
        }
    });
});

modal.addEventListener('click', function (e) {
    if (e.target === modal) {
        modal.classList.remove('show');
        images.forEach(image => {
            image.isImageClicked = false; // Reset state
        });
    }
});

closeModal.addEventListener('click', function () {
    modal.classList.remove('show');
    images.forEach(image => {
        image.isImageClicked = false; // Reset state
    });
});

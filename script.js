const images = document.querySelectorAll('.image');
const modal = document.getElementById('modal');
const modalImage = document.getElementById('modal-image');
const modalText = document.getElementById('modal-text');
const modalExtra = document.getElementById('modal-extra-text');
const closeModal = document.getElementById('close-modal');

let currentLink = '';

// When an image is clicked
images.forEach(image => {
    image.addEventListener('click', function () {
        modalImage.src = image.src;
        modalText.textContent = image.getAttribute('data-text');
        modalExtra.textContent = image.getAttribute('data-extra') || '';
        currentLink = image.getAttribute('data-link') || '';
        modal.classList.add('show');
    });
});

// Make modal image clickable
modalImage.addEventListener('click', function () {
    if (currentLink) {
        window.open(currentLink, '_blank');
    }
});

// Close modal when background or close button is clicked
modal.addEventListener('click', function (e) {
    if (e.target === modal) {
        modal.classList.remove('show');
        currentLink = '';
    }
});

closeModal.addEventListener('click', function () {
    modal.classList.remove('show');
    currentLink = '';
});

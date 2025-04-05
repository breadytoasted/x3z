const images = document.querySelectorAll('.image');
const modal = document.getElementById('modal');
const modalImage = document.getElementById('modal-image');
const modalText = document.getElementById('modal-text');
const modalExtra = document.getElementById('modal-extra-text');
const closeModal = document.getElementById('close-modal');

// Track clicked images using a Map
const clickedMap = new Map();

images.forEach(image => {
    image.addEventListener('click', function () {
        const isClicked = clickedMap.get(image) || false;

        if (!isClicked) {
            modalImage.src = image.src;
            modalText.textContent = image.getAttribute('data-text');
            modalExtra.textContent = image.getAttribute('data-extra') || '';
            modal.classList.add('show');
            clickedMap.set(image, true);
        } else {
            window.location.href = image.getAttribute('data-link');
        }
    });
});

modal.addEventListener('click', function (e) {
    if (e.target === modal) {
        modal.classList.remove('show');
        clickedMap.clear(); // Reset all click states
    }
});

closeModal.addEventListener('click', function () {
    modal.classList.remove('show');
    clickedMap.clear(); // Reset all click states
});

const images = document.querySelectorAll('.image');
const modal = document.getElementById('modal');
const modalImage = document.getElementById('modal-image');
const modalText = document.getElementById('modal-text');
const modalExtra = document.getElementById('modal-extra-text');
const closeModal = document.getElementById('close-modal');

images.forEach(image => {
    let isImageClicked = false;

    image.addEventListener('click', function () {
        if (!isImageClicked) {
            modalImage.src = image.src;
            modalText.textContent = image.getAttribute('data-text');

            const extraText = image.getAttribute('data-extra');
            modalExtra.textContent = extraText || '';

            modal.classList.add('show');
            isImageClicked = true;
        } else {
            window.location.href = image.getAttribute('data-link');
        }
    });
});

modal.addEventListener('click', function (e) {
    if (e.target === modal) {
        modal.classList.remove('show');
        images.forEach(image => {
            image.isImageClicked = false;
        });
    }
});

closeModal.addEventListener('click', function () {
    modal.classList.remove('show');
    images.forEach(image => {
        image.isImageClicked = false

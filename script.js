document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.image');
    const modal = document.getElementById('modal');
    const modalImage = document.getElementById('modal-image');
    const modalText = document.getElementById('modal-text');
    const modalExtraText = document.getElementById('modal-extra-text'); // Select the extra text element
    const closeModal = document.getElementById('close-modal');

    images.forEach(image => {
        image.addEventListener('click', () => {
            modalImage.src = image.src;
            modalText.textContent = image.dataset.text;
            modalExtraText.textContent = image.dataset.extraText; // Set the extra text
            modal.style.display = 'block';
        });
    });

    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});

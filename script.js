function openImage(imageSrc, text) {
    const modal = document.getElementById('modal');
    const modalImage = document.getElementById('modal-image');
    const modalText = document.getElementById('modal-text');
    
    modalImage.src = imageSrc;
    modalText.textContent = text;
    
    modal.classList.add('show');
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.classList.remove('show');
}

// Function to hide the logo after 1.5 seconds
window.onload = function() {
    setTimeout(function() {
        document.getElementById('logo-container').style.opacity = '0';
    }, 1500);
};

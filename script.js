const images = document.querySelectorAll('.image');
const modal = document.getElementById('modal');
const modalImage = document.getElementById('modal-image');
const modalText = document.getElementById('modal-text');
const closeModal = document.getElementById('close-modal');

let currentLink = ""; // Store the link of the clicked image

// Create click-to-open text dynamically
const clickToOpen = document.createElement('p');
clickToOpen.textContent = "Click image to visit link";
clickToOpen.style.color = "#bbb";
clickToOpen.style.fontSize = "16px";
clickToOpen.style.marginTop = "10px";
clickToOpen.style.opacity = "0.7";

modalText.insertAdjacentElement('afterend', clickToOpen);

// Event listener for each image
images.forEach(image => {
    image.addEventListener('click', function () {
        modalImage.src = image.src;  
        modalText.textContent = image.getAttribute('data-text');  
        modal.classList.add('show');  
        currentLink = image.getAttribute('data-link'); 
        clickToOpen.style.display = "block"; // Show text when modal opens
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

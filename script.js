document.addEventListener('DOMContentLoaded', function() {
    const imageContainers = document.querySelectorAll('.pet-image-container');
    
    imageContainers.forEach(container => {
        container.addEventListener('click', function() {
            const img = this.querySelector('.pet-image');
            const petName = this.closest('.pet-card').querySelector('h3').textContent;
            openModal(img.src, petName);
        });
        
        container.addEventListener('touchend', function(e) {
            e.preventDefault();
            const img = this.querySelector('.pet-image');
            const petName = this.closest('.pet-card').querySelector('h3').textContent;
            openModal(img.src, petName);
        }, {passive: false});
    });
});

function openModal(imgSrc, petName) {
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-img');
    const caption = document.getElementById('caption');

    modal.style.display = "block";
    modalImg.src = imgSrc;
    caption.innerHTML = petName;
}

function closeModal() {
    document.getElementById('modal').style.display = "none";
}

window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
        closeModal();
    }
}

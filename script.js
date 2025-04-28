document.addEventListener('DOMContentLoaded', function() {
    // Делаем карточки более отзывчивыми на касания
    const petCards = document.querySelectorAll('.pet-card');
    petCards.forEach(card => {
        card.style.cursor = 'pointer';
        card.addEventListener('touchend', function(e) {
            if (!e.target.matches('h3') && !e.target.matches('p')) {
                const img = this.querySelector('img');
                openModal(img.src, this.querySelector('h3').textContent);
            }
        }, {passive: true});
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

// Закрытие модального окна при клике вне изображения
window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
        closeModal();
    }
}
document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const mobileBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileBtn && mobileMenu) {
        mobileBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Modal Functionality
    const modal = document.getElementById('image-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalImg = document.getElementById('modal-img');
    const modalDesc = document.getElementById('modal-desc');
    const modalCloseBtn = document.getElementById('modal-close-btn');

    function openModal(title, imgSrc, desc) {
        if (modal && modalTitle && modalImg && modalDesc) {
            modalTitle.innerText = title;
            modalImg.src = imgSrc;
            modalDesc.innerText = desc;
            modal.classList.remove('hidden');
            document.body.style.overflow = 'hidden';
        }
    }

    function closeModal() {
        if (modal) {
            modal.classList.add('hidden');
            document.body.style.overflow = 'auto';
        }
    }

    // Attach click listeners to all interactive card/button elements
    const projectCards = document.querySelectorAll('.project-card-img, .project-card-btn');
    projectCards.forEach(card => {
        card.addEventListener('click', () => {
            const title = card.getAttribute('data-title');
            const img = card.getAttribute('data-img');
            const desc = card.getAttribute('data-desc');
            openModal(title, img, desc);
        });
    });

    if (modalCloseBtn) {
        modalCloseBtn.addEventListener('click', closeModal);
    }

    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target.id === 'image-modal') {
                closeModal();
            }
        });
    }
});
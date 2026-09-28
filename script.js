document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const mobileBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileBtn && mobileMenu) {
        mobileBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Modal Elements
    const imgOnlyModal = document.getElementById('image-only-modal');
    const imgOnlyTitle = document.getElementById('img-only-title');
    const imgOnlySrc = document.getElementById('img-only-src');
    const imgModalCloseBtn = document.getElementById('img-modal-close-btn');

    const detailModal = document.getElementById('detail-modal');
    const detailTitle = document.getElementById('detail-title');
    const detailImg = document.getElementById('detail-img');
    const detailDesc = document.getElementById('detail-desc');
    const detailCloseBtn = document.getElementById('detail-close-btn');

    // Fungsi Buka Modal Khusus Gambar Saja
    function openImageOnlyModal(title, imgSrc) {
        if (imgOnlyModal && imgOnlyTitle && imgOnlySrc) {
            imgOnlyTitle.innerText = title;
            imgOnlySrc.src = imgSrc;
            imgOnlyModal.classList.remove('hidden');
            document.body.style.overflow = 'hidden';
        }
    }

    // Fungsi Buka Modal Detail Gambar + Teks
    function openDetailModal(title, imgSrc, desc) {
        if (detailModal && detailTitle && detailImg && detailDesc) {
            detailTitle.innerText = title;
            detailImg.src = imgSrc;
            detailDesc.innerText = desc;
            detailModal.classList.remove('hidden');
            document.body.style.overflow = 'hidden';
        }
    }

    function closeAllModals() {
        if (imgOnlyModal) imgOnlyModal.classList.add('hidden');
        if (detailModal) detailModal.classList.add('hidden');
        document.body.style.overflow = 'auto';
    }

    // Event Listener 1: Klik Area Gambar ("Perbesar Gambar") -> Hanya Tampil Gambar Saja
    const projectCardImgs = document.querySelectorAll('.project-card-img');
    projectCardImgs.forEach(cardImg => {
        cardImg.addEventListener('click', () => {
            const title = cardImg.getAttribute('data-title');
            const img = cardImg.getAttribute('data-img');
            openImageOnlyModal(title, img);
        });
    });

    // Event Listener 2: Klik Tombol "Detail Analysis" / "Lihat Sertifikat" -> Tampil Gambar + Deskripsi Teks
    const projectCardBtns = document.querySelectorAll('.project-card-btn');
    projectCardBtns.forEach(cardBtn => {
        cardBtn.addEventListener('click', () => {
            const title = cardBtn.getAttribute('data-title');
            const img = cardBtn.getAttribute('data-img');
            const desc = cardBtn.getAttribute('data-desc');
            openDetailModal(title, img, desc);
        });
    });

    // Event Close Buttons & Click Background
    if (imgModalCloseBtn) imgModalCloseBtn.addEventListener('click', closeAllModals);
    if (detailCloseBtn) detailCloseBtn.addEventListener('click', closeAllModals);

    if (imgOnlyModal) {
        imgOnlyModal.addEventListener('click', (e) => {
            if (e.target.id === 'image-only-modal' || e.target.classList.contains('flex-col')) closeAllModals();
        });
    }

    if (detailModal) {
        detailModal.addEventListener('click', (e) => {
            if (e.target.id === 'detail-modal') closeAllModals();
        });
    }

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeAllModals();
    });
});
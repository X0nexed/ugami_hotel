import './src/css/style.css'

setTimeout(() => {
    document.body.style.opacity = '1';
}, 100); // Задержка в 0.1 секунды

document.addEventListener('DOMContentLoaded', () => {
    // Footer Year
    const yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    // Menu logic
    const toggleBtn = document.getElementById('navbar-toggle');
    const closeBtn = document.getElementById('close-menu');
    const sideMenu = document.getElementById('side-menu');
    const overlay = document.getElementById('menu-overlay');
    const menuLinks = document.querySelectorAll('.menu-link');

    function openMenu() {
        sideMenu.classList.remove('translate-x-full');
        overlay.classList.remove('opacity-0', 'pointer-events-none');
        document.body.style.overflow = 'hidden';
    }

    function closeMenu() {
        sideMenu.classList.add('translate-x-full');
        overlay.classList.add('opacity-0', 'pointer-events-none');
        document.body.style.overflow = '';
    }

    if (toggleBtn) toggleBtn.addEventListener('click', openMenu);
    if (closeBtn) closeBtn.addEventListener('click', closeMenu);
    if (overlay) overlay.addEventListener('click', closeMenu);
    menuLinks.forEach(link => link.addEventListener('click', closeMenu));

    // Lightbox logic
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');

    window.openLightbox = function(src) {
        if (!lightbox || !lightboxImg) return;
        lightboxImg.src = src;
        lightbox.classList.remove('hidden');
        lightbox.classList.add('flex');
        setTimeout(() => lightbox.classList.remove('opacity-0'), 10);
        document.body.style.overflow = 'hidden';
    };

    window.closeLightbox = function() {
        if (!lightbox || !lightboxImg) return;
        lightbox.classList.add('opacity-0');
        setTimeout(() => {
            lightbox.classList.add('hidden');
            lightbox.classList.remove('flex');
            lightboxImg.src = '';
            document.body.style.overflow = '';
        }, 300);
    };

    if (lightbox) {
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) window.closeLightbox();
        });
    }
});

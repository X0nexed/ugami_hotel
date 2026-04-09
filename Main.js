import './src/css/style.css'
import { initMenu } from './src/js/menu.js'
import { initLightbox } from './src/js/lightbox.js'
import { initSlider } from './src/js/slider.js'

setTimeout(() => {
    document.body.style.opacity = '1';
}, 100); // Задержка в 0.1 секунды

document.addEventListener('DOMContentLoaded', () => {
    // Footer Year
    const yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    initMenu();
    initLightbox();
    initSlider();
});

export function initSlider() {
    const buttons = document.querySelectorAll('button[data-slide][data-target]');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const slideAmount = parseInt(button.getAttribute('data-slide'));
            const targetId = button.getAttribute('data-target');
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollBy({left: slideAmount, behavior: 'smooth'});
            }
        });
    });
}

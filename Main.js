// Импорт стилей
import './src/css/style.css';

// Как только стили загружены, плавно показываем весь сайт
setTimeout(() => {
    document.body.style.opacity = '1';
}, 100); // Задержка в 0.1 секунды
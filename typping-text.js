document.addEventListener("DOMContentLoaded", function () {
    const typingContainers = document.querySelectorAll(".typing-container");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const typingContainer = entry.target;
                const typingText = typingContainer.querySelector(".typing-text");

                // Рассчитываем длительность анимации на основе длины текста
                const textLength = typingText.textContent.length;
                const duration = textLength * 0.1; // 0.1s на каждый символ

                // Запускаем анимацию
                typingContainer.style.animation = `typing ${duration}s steps(${textLength}, end) forwards, blink-caret 0.75s step-end infinite`;
                typingText.style.opacity = 1; // Показываем текст

                observer.unobserve(typingContainer); // Останавливаем наблюдение после запуска анимации
            }
        });
    }, {
        threshold: 0.5, // Анимация запустится, когда 50% элемента будет видно
    });

    // Начинаем наблюдение за всеми контейнерами
    typingContainers.forEach((container) => {
        observer.observe(container);
    });
});
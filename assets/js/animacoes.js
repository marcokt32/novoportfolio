const elementos = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // se quiser que a animação ocorra apenas uma vez, descomente:
            // observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.2 // 20% do elemento visível antes de animar
});

elementos.forEach(el => observer.observe(el));
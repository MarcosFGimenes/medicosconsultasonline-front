document.addEventListener('DOMContentLoaded', () => {
    // Navigation toggle
    const navToggle = document.getElementById('nav-toggle');
    const nav = document.querySelector('.nav');

    navToggle.addEventListener('click', () => {
        nav.classList.toggle('active');
        const isOpen = nav.classList.contains('active');
        navToggle.setAttribute('aria-expanded', isOpen);
        navToggle.querySelector('.hamburger').textContent = isOpen ? '✕' : '☰';
    });

    // FAQ accordion
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const item = header.parentElement;
            const isActive = item.classList.contains('active');
            document.querySelectorAll('.accordion-item').forEach(i => i.classList.remove('active'));
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });

    // Carousel
    const carousel = document.querySelector('.carousel');
    if (carousel) {
        const slides = Array.from(carousel.querySelectorAll('.carousel-slide'));
        const prevBtn = carousel.querySelector('.carousel-control.prev');
        const nextBtn = carousel.querySelector('.carousel-control.next');
        const dots = Array.from(carousel.querySelectorAll('.dot'));

        let index = 0;
        let timer = null;
        const AUTOPLAY_MS = 4000;

        function goTo(i) {
            index = (i + slides.length) % slides.length;
            slides.forEach((s, idx) => s.classList.toggle('active', idx === index));
            dots.forEach((d, idx) => d.classList.toggle('active', idx === index));
        }

        function next() { goTo(index + 1); restart(); }
        function prev() { goTo(index - 1); restart(); }

        function start() { timer = setInterval(next, AUTOPLAY_MS); }
        function stop() { clearInterval(timer); timer = null; }
        function restart() { stop(); start(); }

        prevBtn.addEventListener('click', prev);
        nextBtn.addEventListener('click', next);
        dots.forEach((d, idx) => d.addEventListener('click', () => { goTo(idx); restart(); }));

        carousel.addEventListener('mouseenter', stop);
        carousel.addEventListener('mouseleave', start);

        carousel.setAttribute('tabindex', '0');
        carousel.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') prev();
            if (e.key === 'ArrowRight') next();
        });

        let x0 = null;
        carousel.addEventListener('touchstart', (e) => x0 = e.touches[0].clientX, { passive: true });
        carousel.addEventListener('touchend', (e) => {
            if (x0 === null) return;
            const dx = e.changedTouches[0].clientX - x0;
            if (Math.abs(dx) > 40) { dx > 0 ? prev() : next(); }
            x0 = null;
        }, { passive: true });

        goTo(0);
        start();
    }
});
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        const targetY = target.getBoundingClientRect().top + window.pageYOffset;
        const startingY = window.pageYOffset;
        const diff = Math.abs(targetY - startingY);
        const duration = Math.min(Math.max(diff, 400), 1000); 
        const startTime = performance.now();

        function scroll() {
            const elapsedTime = performance.now() - startTime;
            const t = Math.min(1, elapsedTime / duration);
            const easedT = easeInOutCubic(t);

            window.scrollTo(0, startingY + (targetY - startingY) * easedT);

            if (elapsedTime < duration) {
                requestAnimationFrame(scroll);
            }
        }

        requestAnimationFrame(scroll);
    });
});

function easeInOutCubic(t) {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}
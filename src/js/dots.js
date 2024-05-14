let currentTextIndex = 0;
        const texts = document.querySelectorAll('.about__text');
        const dotsContainer = document.querySelector('.about__dots');

        function showText(index) {
            texts.forEach((text, idx) => {
                updateDots(index);

                if (idx === index) {
                    text.classList.add('active');
                } else {
                    text.classList.remove('active');
                }
            });

        }

        function nextText() {
            currentTextIndex = (currentTextIndex + 1) % texts.length;
            showText(currentTextIndex);
        }

        function prevText() {
            currentTextIndex = (currentTextIndex - 1 + texts.length) % texts.length;
            showText(currentTextIndex);
        }

        function updateDots(index) {
            dotsContainer.innerHTML = '';
            texts.forEach((_, idx) => {
                const dot = document.createElement('div');
                dot.classList.add('about__dot');
                if (idx === index) {
                    dot.classList.add('active');
                }
                dot.addEventListener('click', () => showText(idx));
                dotsContainer.appendChild(dot);
            });
        }
        
        showText(currentTextIndex);
        setInterval(nextText, 10000);
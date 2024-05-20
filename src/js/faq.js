document.addEventListener('DOMContentLoaded', function () {
    const cards = document.querySelectorAll('.faq__card');

    cards.forEach(card => {
        const header = card.querySelector('.faq__header');
        const content = card.querySelector('.faq__content');
        const icon = header.querySelector('.material-symbols-outlined');

        content.style.opacity = '0';
        content.style.visibility = 'hidden';

        header.addEventListener('click', function () {
            if (content.style.opacity === '0') {
                content.style.display = 'flex';
                content.style.opacity = '1';
                content.style.visibility = 'visible';
                icon.innerText = 'keyboard_arrow_up';
            } else {
                content.style.display = 'none';
                content.style.opacity = '0';
                content.style.visibility = 'hidden';
                icon.innerText = 'keyboard_arrow_down';
            }
        });
    });
});

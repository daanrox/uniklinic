const buttons = document.querySelectorAll('.button__agenda');

const url = 'https://agenda.link/UniklinicBetim/';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        window.open(url, '_blank');
    });
});
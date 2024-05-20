const texts = [
    "Escolha Alinhadores Transparentes. ",
    "Para um sorriso mais lindo e saudável. ",
    "Você merece um sorriso perfeito! ",
    "Deixe a Uniklinic cuidar do seu sorriso. ",
    "É confortável, é saudável, é transparente! "
];
let currentTextIndex = 0;
const typingElement = document.getElementById('typing-text');
const cursor = document.getElementById('cursor');
let index = 0;

function typeWriter() {
    if (index < texts[currentTextIndex].length) {
        typingElement.textContent += texts[currentTextIndex].charAt(index);
        index++;
        setTimeout(typeWriter, 100);
    } else {
        setTimeout(() => {
            currentTextIndex = (currentTextIndex + 1) % texts.length;
            index = 0;
            typingElement.textContent = '';
            typeWriter();
        }, 4000); 
    }
}

window.onload = typeWriter;
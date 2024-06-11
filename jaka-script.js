let counter = 0;
const counterElement = document.getElementById('counter');
const rotatingImage = document.getElementById('rotatingImage');
const container = document.querySelector('.container');

function updateCounter() {
    counter++;
    counterElement.textContent = `${counter}`;
}

function startRotation() {
    rotatingImage.style.animation = 'rotate 2s linear infinite';
    setInterval(updateCounter, 2000); // Povečaj števec vsakič, ko se slika enkrat zavrti (vsaki dve sekundi)
}

function startShake() {
    rotatingImage.style.animation = 'shake 0.5s infinite';
}

function stopShake() {
    rotatingImage.style.animation = 'rotate 2s linear infinite';
}

document.addEventListener('DOMContentLoaded', (event) => {
    startRotation();
});

container.addEventListener('mouseover', startShake);
container.addEventListener('mouseout', stopShake);
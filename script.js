//Sonido de fondo
document.getElementById('btn-iniciar').addEventListener('click', () => {
    const audio = document.getElementById('bg-audio');
    const overlay = document.getElementById('inicio-experiencia');
    // Iniciar música
    audio.play();
    // Ocultar pantalla de inicio
    overlay.style.display = 'none';
});

//Sonido de botones
const sonidoClick = new Audio('/sounds/sharingan.mp3');
document.querySelectorAll('.categoria').forEach(el => {
    el.addEventListener('click', () => {
        sonidoClick.currentTime = 0; // reinicia
        sonidoClick.play();
    });
});

//Tarjetas
function toggleCard(card) {
    const allCards = document.querySelectorAll('.card');

    allCards.forEach(c => {
        if (c !== card && c.classList.contains('expanded')) {
            c.classList.remove('expanded');
            const img = c.querySelector('img');
            fadeImage(img, img.dataset.original);
        }
    });

    const isExpanding = !card.classList.contains('expanded');
    card.classList.toggle('expanded');

    const img = card.querySelector('img');
    const newSrc = isExpanding ? img.dataset.expanded : img.dataset.original;

    fadeImage(img, newSrc);
}

function fadeImage(img, newSrc) {
    img.classList.add('fading');
    setTimeout(() => {
        img.src = newSrc;
        img.onload = () => {
            img.classList.remove('fading');
        };
    }, 200);
}


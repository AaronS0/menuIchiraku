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
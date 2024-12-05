document.addEventListener('mousemove', parallax);

function parallax(e) {
    // Calcula el porcentaje del ancho y alto
    let width = window.innerWidth / 2;
    let height = window.innerHeight / 2;

    // Obtén las posiciones del mouse relativas al centro
    let mouseX = (e.clientX - width) / width;
    let mouseY = (e.clientY - height) / height;

    // Aplica el movimiento parallax a cada elemento
    const background = document.querySelector('.background img');
    const aguila = document.querySelector('.aguila img');
    const foreground = document.querySelector('.foreground img');
    const vignette = document.querySelector('.vignette img');

    if (background) {

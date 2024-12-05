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
        background.style.transform = `translate(${-mouseX * 2}px, ${-mouseY * 3}px)`;
    }
    if (aguila) {   
        aguila.style.transform = `translate(${mouseX * 5}px, ${mouseY * 6}px)`; aguila  
    }
    if (foreground) {
        foreground.style.transform = `translate(${-mouseX * 10}px, ${-mouseY * 10}px)`; 
    }
    if (vignette) {
        vignette.style.transform = `translate(${mouseX * 5}px, ${mouseY * 5}px)`;
    }
}
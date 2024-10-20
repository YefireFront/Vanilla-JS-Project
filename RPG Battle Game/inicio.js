// Arrays de jugadores y equipos
let jugadores = ['Jugador 1', 'Jugador 2', 'Jugador 3', 'Jugador 4', 'Jugador 5'];
let equipo1 = [];
let equipo2 = [];

// Función para renderizar jugadores en la parte superior
function renderJugadores() {
    const container = document.getElementById('jugadores-container');
    container.innerHTML = '';  // Limpiar contenedor

    jugadores.forEach((jugador, index) => {
        const jugadorDiv = document.createElement('div');
        jugadorDiv.classList.add('jugador');
        jugadorDiv.textContent = jugador;
        jugadorDiv.draggable = true;
        jugadorDiv.id = `jugador-${index}`;
        jugadorDiv.ondragstart = drag;  // Asignar función drag
        container.appendChild(jugadorDiv);
    });
}

// Habilitar el drop en las áreas
function allowDrop(event) {
    event.preventDefault();
}

// Iniciar el drag del jugador
function drag(event) {
    event.dataTransfer.setData("text", event.target.id);
}

// Soltar el jugador en el equipo
function drop(event) {
    event.preventDefault();
    const jugadorId = event.dataTransfer.getData("text");
    const jugador = document.getElementById(jugadorId);
    
    // Solo permite el drop si el jugador no está ya en el equipo
    if (!event.target.contains(jugador)) {
        event.target.appendChild(jugador);
    }
}

// Función para asignar jugadores a los equipos
function asignarEquipos() {
    equipo1 = [];
    equipo2 = [];

    // Obtener jugadores en equipo 1
    const equipo1Div = document.getElementById('equipo1').children;
    for (let i = 1; i < equipo1Div.length; i++) { // Empezamos en 1 para evitar el h2
        equipo1.push(equipo1Div[i].textContent);
    }

    // Obtener jugadores en equipo 2
    const equipo2Div = document.getElementById('equipo2').children;
    for (let i = 1; i < equipo2Div.length; i++) { // Empezamos en 1 para evitar el h2
        equipo2.push(equipo2Div[i].textContent);
    }

    // Mostrar equipos en consola
    console.log('Equipo 1:', equipo1);
    console.log('Equipo 2:', equipo2);
}

// Evento de click en el botón iniciar
document.getElementById('iniciar-btn').addEventListener('click', asignarEquipos);

// Renderizar los jugadores al cargar la página
window.onload = renderJugadores;

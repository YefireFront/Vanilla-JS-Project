// Array de objetos de jugadores de la NBA
const jugadoresNBA = [
    { nombre: 'LeBron James', equipo: 'Los Angeles Lakers' },
    { nombre: 'Kevin Durant', equipo: 'Brooklyn Nets' },
    { nombre: 'Stephen Curry', equipo: 'Golden State Warriors' },
    // Agrega más jugadores aquí
];

// Obtén el elemento de la lista en HTML
const listaJugadores = document.getElementById('lista-jugadores');

// Recorre el array de jugadores y agrega los nombres a la lista
jugadoresNBA.forEach((jugador) => {
    const li = document.createElement('li');
    li.textContent = jugador.nombre;
    listaJugadores.appendChild(li);
});
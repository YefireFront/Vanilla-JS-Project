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

// Array de objetos de jugadores de la NBA
const jugadoresNBA = [
    { 
        nombre: 'LeBron James', 
        equipo: 'Los Angeles Lakers',
        posicion: 'Ala-Pívot',
        numero: 23
    },
    { 
        nombre: 'Kevin Durant', 
        equipo: 'Brooklyn Nets',
        posicion: 'Ala-Pívot',
        numero: 7
    },
    { 
        nombre: 'Stephen Curry', 
        equipo: 'Golden State Warriors',
        posicion: 'Base',
        numero: 30
    },
    // Agrega más jugadores aquí
];

// Obtén el elemento de la lista en HTML
const listaJugadores = document.getElementById('lista-jugadores');

// Recorre el array de jugadores y agrega las cards a la lista
jugadoresNBA.forEach((jugador) => {
    const card = document.createElement('div');
    card.classList.add('card');

    const nombre = document.createElement('h2');
    nombre.textContent = jugador.nombre;
    card.appendChild(nombre);

    const equipo = document.createElement('p');
    equipo.textContent = `Equipo: ${jugador.equipo}`;
    card.appendChild(equipo);

    const posicion = document.createElement('p');
    posicion.textContent = `Posición: ${jugador.posicion}`;
    card.appendChild(posicion);

    const numero = document.createElement('p');
    numero.textContent = `Número: ${jugador.numero}`;
    card.appendChild(numero);

    listaJugadores.appendChild(card);
});
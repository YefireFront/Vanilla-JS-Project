
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
    { 
        nombre: 'Kawhi Leonard', 
        equipo: 'Los Angeles Clippers',
        posicion: 'Alero',
        numero: 2
    },
    { 
        nombre: 'Giannis Antetokounmpo', 
        equipo: 'Milwaukee Bucks',
        posicion: 'Ala-Pívot',
        numero: 34
    },
    { 
        nombre: 'Luka Dončić', 
        equipo: 'Dallas Mavericks',
        posicion: 'Base',
        numero: 77
    },
    { 
        nombre: 'Joel Embiid', 
        equipo: 'Philadelphia 76ers',
        posicion: 'Pívot',
        numero: 21
    },
    { 
        nombre: 'Damian Lillard', 
        equipo: 'Portland Trail Blazers',
        posicion: 'Base',
        numero: 0
    },
    { 
        nombre: 'Anthony Davis', 
        equipo: 'Los Angeles Lakers',
        posicion: 'Ala-Pívot',
        numero: 3
    },
    { 
        nombre: 'Nikola Jokić', 
        equipo: 'Denver Nuggets',
        posicion: 'Pívot',
        numero: 15
    },
    { 
        nombre: 'Jimmy Butler', 
        equipo: 'Miami Heat',
        posicion: 'Alero',
        numero: 22
    },
    { 
        nombre: 'Jayson Tatum', 
        equipo: 'Boston Celtics',
        posicion: 'Alero',
        numero: 0
    },
    { 
        nombre: 'Devin Booker', 
        equipo: 'Phoenix Suns',
        posicion: 'Escolta',
        numero: 1
    },
    { 
        nombre: 'Khris Middleton', 
        equipo: 'Milwaukee Bucks',
        posicion: 'Alero',
        numero: 22
    },
    { 
        nombre: 'Rudy Gobert', 
        equipo: 'Utah Jazz',
        posicion: 'Pívot',
        numero: 27
    },
    { 
        nombre: 'Chris Paul', 
        equipo: 'Phoenix Suns',
        posicion: 'Base',
        numero: 3
    },
    { 
        nombre: 'Donovan Mitchell', 
        equipo: 'Utah Jazz',
        posicion: 'Escolta',
        numero: 45
    },
    { 
        nombre: 'Zion Williamson', 
        equipo: 'New Orleans Pelicans',
        posicion: 'Ala-Pívot',
        numero: 1
    },
    { 
        nombre: 'Bradley Beal', 
        equipo: 'Washington Wizards',
        posicion: 'Escolta',
        numero: 3
    },
    { 
        nombre: 'Paul George', 
        equipo: 'Los Angeles Clippers',
        posicion: 'Alero',
        numero: 13
    }
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
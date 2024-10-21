// Array de jugadores con más propiedades, incluyendo foto, posición y equipo
const jugadores = [
  {
      nombre: 'Lionel Messi',
      posicion: 'Delantero',
      equipo: 'Inter Miami',
      foto: 'https://example.com/messi.jpg'
  },
  {
      nombre: 'Cristiano Ronaldo',
      posicion: 'Delantero',
      equipo: 'Al Nassr',
      foto: 'https://example.com/ronaldo.jpg'
  },
  {
      nombre: 'Neymar Jr.',
      posicion: 'Delantero',
      equipo: 'Al Hilal',
      foto: 'https://example.com/neymar.jpg'
  },
  {
      nombre: 'Kylian Mbappé',
      posicion: 'Delantero',
      equipo: 'PSG',
      foto: 'https://example.com/mbappe.jpg'
  },
  {
      nombre: 'Kevin De Bruyne',
      posicion: 'Centrocampista',
      equipo: 'Manchester City',
      foto: 'https://example.com/debruyne.jpg'
  },
  // Nuevos jugadores
  {
      nombre: 'Sergio Ramos',
      posicion: 'Defensa',
      equipo: 'Al Nassr',
      foto: 'https://example.com/ramos.jpg'
  },
  {
      nombre: 'Luka Modrić',
      posicion: 'Centrocampista',
      equipo: 'Real Madrid',
      foto: 'https://example.com/modric.jpg'
  },
  {
      nombre: 'Erling Haaland',
      posicion: 'Delantero',
      equipo: 'Manchester City',
      foto: 'https://example.com/haaland.jpg'
  }
];

let equipo1 = [];
let equipo2 = [];

// Función para renderizar jugadores en la parte superior
function renderJugadores() {
  const container = document.getElementById('jugadores-container');
  container.innerHTML = '';  // Limpiar contenedor

  jugadores.forEach((jugador, index) => {
      const jugadorDiv = document.createElement('div');
      jugadorDiv.classList.add('jugador');
      jugadorDiv.draggable = true;
      jugadorDiv.id = `jugador-${index}`;
      jugadorDiv.ondragstart = drag;  // Asignar función drag

      jugadorDiv.innerHTML = `
          <img src="${jugador.foto}" alt="${jugador.nombre}">
          <h3>${jugador.nombre}</h3>

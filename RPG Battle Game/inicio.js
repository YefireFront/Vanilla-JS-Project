// Array de jugadores con más propiedades, incluyendo foto, posición y equipo
const jugadores = [
  {
    nombre: "Lionel Messi",
    posicion: "Delantero",
    equipo: "Inter Miami",
    foto: "https://example.com/messi.jpg",
  },
  {
    nombre: "Cristiano Ronaldo",
    posicion: "Delantero",
    equipo: "Al Nassr",
    foto: "https://example.com/ronaldo.jpg",
  },
  {
    nombre: "Neymar Jr.",
    posicion: "Delantero",
    equipo: "Al Hilal",
    foto: "https://example.com/neymar.jpg",
  },
  {
    nombre: "Kylian Mbappé",
    posicion: "Delantero",
    equipo: "PSG",
    foto: "https://example.com/mbappe.jpg",
  },
  {
    nombre: "Kevin De Bruyne",
    posicion: "Centrocampista",
    equipo: "Manchester City",
    foto: "https://example.com/debruyne.jpg",
  },
  // Nuevos jugadores
  {
    nombre: "Sergio Ramos",
    posicion: "Defensa",
    equipo: "Al Nassr",
    foto: "https://example.com/ramos.jpg",
  },
  {
    nombre: "Luka Modrić",
    posicion: "Centrocampista",
    equipo: "Real Madrid",
    foto: "https://example.com/modric.jpg",
  },
  {
    nombre: "Erling Haaland",
    posicion: "Delantero",
    equipo: "Manchester City",
    foto: "https://example.com/haaland.jpg",
  },
];

let equipo1 = [];
let equipo2 = [];

// Función para renderizar jugadores en la parte superior
function renderJugadores() {
  const container = document.getElementById("jugadores-container");
  container.innerHTML = ""; // Limpiar contenedor

  jugadores.forEach((jugador, index) => {
    const jugadorDiv = document.createElement("div");
    jugadorDiv.classList.add("jugador");
    jugadorDiv.draggable = true;
    jugadorDiv.id = `jugador-${index}`;
    jugadorDiv.ondragstart = drag; // Asignar función drag

    jugadorDiv.innerHTML = `
          <img src="${jugador.foto}" alt="${jugador.nombre}">
          <h3>${jugador.nombre}</h3>
          <p>Posición: ${jugador.posicion}</p>
          <p>Equipo: ${jugador.equipo}</p>
      `;

    jugadorDiv.addEventListener("click", () => {
      window.location.href = `detalle-jugador.html?nombre=${encodeURIComponent(
        jugador.nombre
      )}`;
    });

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
  const equipo1Div = document.getElementById("equipo1").children;
  for (let i = 1; i < equipo1Div.length; i++) {
    // Empezamos en 1 para evitar el h2
    const jugadorNombre = equipo1Div[i].querySelector("h3").textContent;
    const jugadorObj = jugadores.find(
      (jugador) => jugador.nombre === jugadorNombre
    );
    if (jugadorObj) {
      equipo1.push(jugadorObj);
    }
  }

  // Obtener jugadores en equipo 2
  const equipo2Div = document.getElementById("equipo2").children;
  for (let i = 1; i < equipo2Div.length; i++) {
    // Empezamos en 1 para evitar el h2
    const jugadorNombre = equipo2Div[i].querySelector("h3").textContent;
    const jugadorObj = jugadores.find(
      (jugador) => jugador.nombre === jugadorNombre
    );
    if (jugadorObj) {
      equipo2.push(jugadorObj);
    }
  }

  // Mostrar equipos en consola
  console.log("Equipo 1:", equipo1);
  console.log("Equipo 2:", equipo2);
}

// Evento de click en el botón iniciar
document
  .getElementById("iniciar-btn")
  .addEventListener("click", asignarEquipos);

// Renderizar los jugadores al cargar la página
window.onload = renderJugadores;

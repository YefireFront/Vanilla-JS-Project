// Clase Jugador
class Jugador {
  constructor(nombre) {
    this.nombre = nombre;
    this.puntos = 0;
  }

  anotarPuntos(cantidad) {
    if (!GestorDeTurnos.esTurno(this)) return;
    this.puntos += cantidad;
    console.log(`${this.nombre} anotó ${cantidad} puntos!`);
    GestorDeTurnos.finalizarTurno();
  }
}

// Clase GestorDeTurnos con métodos estáticos
class GestorDeTurnos {
  static jugadores = [];
  static indiceTurnoActual = 0;

  static agregarJugador(jugador) {
    this.jugadores.push(jugador);
  }

  static esTurno(jugador) {
    if (this.jugadores[this.indiceTurnoActual] !== jugador) {
      console.log(
        `No es tu turno, ${jugador.nombre}. Es el turno de ${this.jugadores[this.indiceTurnoActual].nombre}`
      );
      return false;
    }
    return true;
  }

  static finalizarTurno() {
    this.indiceTurnoActual = (this.indiceTurnoActual + 1) % this.jugadores.length;
    console.log(`Es el turno de ${this.jugadores[this.indiceTurnoActual].nombre}`);
    render();
    this.mostrarTablaDePosiciones();
  }

  static mostrarTablaDePosiciones() {
    console.log("\nTabla de Posiciones:");
    this.jugadores
      .sort((a, b) => b.puntos - a.puntos)
      .forEach((jugador, index) => {
        console.log(`${index + 1}. ${jugador.nombre} - ${jugador.puntos} puntos`);
      });
    console.log(""); // Espacio adicional para legibilidad
  }

  static iniciar() {
    console.log(`Comienza la partida. Es el turno de ${this.jugadores[this.indiceTurnoActual].nombre}`);
    render();
  }
}

// Creación de los jugadores
const anderson = new Jugador("Anderson");
const mateo = new Jugador("Mateo");
const brandon = new Jugador("Brandon");
const valery = new Jugador("Valery");

// Agregar jugadores al gestor de turnos
GestorDeTurnos.agregarJugador(anderson);
GestorDeTurnos.agregarJugador(mateo);
GestorDeTurnos.agregarJugador(brandon);
GestorDeTurnos.agregarJugador(valery);




const players = GestorDeTurnos.jugadores;
const contenedor = document.querySelector(".contenedor");
function render() {
  contenedor.innerHTML = '';

  players.forEach((player, i) => {  

    
    const Jugador = document.createElement("div");
    const Posiciones = document.createElement("div");
    const imagen = document.createElement("div");
    const nombre = document.createElement("div");
    const puntos = document.createElement("div");

    const h2posicion = document.createElement("h2");
    const img = document.createElement("img");
    const h2nombre = document.createElement("h2");
    const h2puntos = document.createElement("h2");

    Jugador.classList.add("jugador");
    Posiciones.classList.add("posicione");
    imagen.classList.add("imagen");
    nombre.classList.add("nombre");
    puntos.classList.add("puntos");

    h2posicion.textContent = i + 1;
    // img.src = player.imagen;
    h2nombre.textContent = player.nombre;
    h2puntos.textContent = player.puntos;

    Posiciones.appendChild(h2posicion);
    imagen.appendChild(img);
    nombre.appendChild(h2nombre);
    puntos.appendChild(h2puntos);

    Jugador.appendChild(Posiciones);
    Jugador.appendChild(imagen);
    Jugador.appendChild(nombre);
    Jugador.appendChild(puntos);

    contenedor.appendChild(Jugador);



    
    
});


}



// Iniciar el sistema de turnos
GestorDeTurnos.iniciar();





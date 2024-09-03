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
    GestorDeTurnos.mostrarTablaDePosiciones();
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

// Iniciar la partida
GestorDeTurnos.iniciar();

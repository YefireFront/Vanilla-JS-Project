class Juego {
  static equipo1 = [];
  static equipo2 = [];
  static turnoActualEquipo1 = 0;
  static turnoActualEquipo2 = 0;
  static turnoEquipo = 0;
  static personajeActual = null;
  // static PersonajeAnterior = null
  static campoEfectos = [];

  static agregarPersonaje(equipo, personaje) {
    if (equipo === 1) {
      if (this.equipo1.length === 3) {
        console.log("El equipo 1 ya tiene 3 personajes.");
        return;
      }
      this.equipo1.push(personaje);
      personaje.equipo = 1;
    } else {
      if (this.equipo2.length === 3) {
        console.log("El equipo 2 ya tiene 3 personajes.");
        return;
      }
      this.equipo2.push(personaje);
      personaje.equipo = 2;
    }

    // console.log(`Se ha agregado a ${personaje.nombre} al equipo ${equipo}.`);
    this.equipo1.sort((a, b) => b.velocidad - a.velocidad);
    this.equipo2.sort((a, b) => b.velocidad - a.velocidad);
  }

  static iniciarJuego() {
    this.turnoEquipo = Math.floor(Math.random() * 2) + 1;
    this.turnoActualEquipo1 = this.turnoActualEquipo1 % this.equipo1.length;
    this.turnoActualEquipo2 = this.turnoActualEquipo2 % this.equipo2.length;

    // jugador al iniciar el juego
    if (this.turnoEquipo === 1) {
      this.personajeActual = this.equipo1[this.turnoActualEquipo1];
    }
    if (this.turnoEquipo === 2) {
      this.personajeActual = this.equipo2[this.turnoActualEquipo2];
    }
  }

  static obtenerSiguientePersonaje(equipo, turnoActual) {
    let siguienteTurno = (turnoActual + 1) % equipo.length;
    let personaje = equipo[siguienteTurno];

    while (personaje.estaMuero()) {
      siguienteTurno = (siguienteTurno + 1) % equipo.length;
      personaje = equipo[siguienteTurno];
    }

    return { personaje, siguienteTurno };
  }

  static cambiarTurno() {
    setTimeout(() => {
      // Check for victory before changing turns
      if (this.verificarVictoria()) {
        actualizar_Interfaz();
        console.log("Fin de la partida.");
        return;
      }

      this.personajeActual.habilidades.forEach((habilidad) =>
        habilidad.reducirCooldown()
      );

      if (this.turnoEquipo === 1) {
        this.turnoEquipo = 2;
        const { personaje: personajeSiguiente, siguienteTurno } = this.obtenerSiguientePersonaje(this.equipo1, this.turnoActualEquipo1);
        this.turnoActualEquipo1 = siguienteTurno;
        this.personajeActual = this.equipo2[this.turnoActualEquipo2];
      } else {
        this.turnoEquipo = 1;
        const { personaje: personajeSiguiente, siguienteTurno } = this.obtenerSiguientePersonaje(this.equipo2, this.turnoActualEquipo2);
        this.turnoActualEquipo2 = siguienteTurno;
        this.personajeActual = this.equipo1[this.turnoActualEquipo1];
      }

      // Check if the current character is dead right before their turn
      if (this.personajeActual.estaMuero()) {
        const equipo = this.turnoEquipo === 1 ? this.equipo1 : this.equipo2;
        const turnoActual = this.turnoEquipo === 1 ? this.turnoActualEquipo1 : this.turnoActualEquipo2;
        const { personaje: personajeSiguiente, siguienteTurno } = this.obtenerSiguientePersonaje(equipo, turnoActual);
        if (this.turnoEquipo === 1) {
          this.turnoActualEquipo1 = siguienteTurno;
        } else {
          this.turnoActualEquipo2 = siguienteTurno;
        }
        this.personajeActual = personajeSiguiente;
      }

      this.personajeActual.activarEfectos();
      this.personajeActual.validarNegativos();
      if (this.personajeActual.estaMuero()) {
        this.cambiarTurno();
      }

      // console.log(`Es el turno de ${this.personajeActual.nombre}`);

      actualizar_Interfaz();
      AsignarTurno();
    }, 100);
  }

  static verificarVictoria() {
    // Lógica para verificar si un equipo ha ganado
    if (this.equipo1.every((personaje) => personaje.vida <= 0)) {
      console.log("Equipo 2 ha ganado.");
      return true;
    } else if (this.equipo2.every((personaje) => personaje.vida <= 0)) {
      console.log("Equipo 1 ha ganado.");
      return true;
    }
  }
}

Juego.agregarPersonaje(1, antorcha_1);
Juego.agregarPersonaje(1, reptil_1);
Juego.agregarPersonaje(1, pandawa_1);

Juego.agregarPersonaje(2, thunder_2);
Juego.agregarPersonaje(2, gigant_2);
Juego.agregarPersonaje(2, monje_2);

Juego.iniciarJuego();

class Juego {
  static equipo1 = [];
  static equipo2 = [];
  static turnoActualEquipo1 = 0;
  static turnoActualEquipo2 = 0;
  static turnoEquipo = 0;
  static estadoJuego = "inicial";
  static personajeActual = null;
  static PersonajeAnterior = null

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
    this.estadoJuego = "activo";
    this.turnoEquipo = Math.floor(Math.random() * 2) + 1;
    this.turnoActualEquipo1 =(this.turnoActualEquipo1 ) % this.equipo1.length
    this.turnoActualEquipo2 =(this.turnoActualEquipo2 ) % this.equipo2.length
    // console.log(`Inicio del juego. Equipo ${this.turnoEquipo} comienza.`);
    
    // jugador al iniciar el juego
    if (this.turnoEquipo === 1) {
      this.PersonajeAnterior = this.personajeActual
      this.personajeActual = this.equipo1[this.turnoActualEquipo1];
      // console.log(`Es el turno de ${this.personajeActual.nombre}`);      
    }else{
      this.PersonajeAnterior = this.personajeActual
      this.personajeActual = this.equipo2[this.turnoActualEquipo2];
      // console.log(`Es el turno de ${this.personajeActual.nombre}`);
    }

    this.PersonajeAnterior = this.personajeActual

    
  }
  
  static cambiarTurno() {
    
    if (this.turnoEquipo === 1) {
      this.turnoEquipo = 2;
      this.turnoActualEquipo1 =(this.turnoActualEquipo1 + 1) % this.equipo1.length

      this.PersonajeAnterior = this.personajeActual
      
      this.personajeActual = this.equipo2[this.turnoActualEquipo2];
      this.personajeActual.activarEfectos();
      console.log(`Es el turno de ${this.personajeActual.nombre}`);


      
      
      
    } else {
        this.turnoEquipo = 1;
        this.turnoActualEquipo2 =(this.turnoActualEquipo2 + 1) % this.equipo2.length
        this.PersonajeAnterior = this.personajeActual
        this.personajeActual = this.equipo1[this.turnoActualEquipo1];
        console.log(`Es el turno de ${this.personajeActual.nombre}`);
        this.personajeActual.activarEfectos();

    }


    actualizarInfomacionPersonajeActual();
    AsignarTurno()

   

  }

  static verificarVictoria() {
    // Lógica para verificar si un equipo ha ganado
    if (this.equipo1.every((personaje) => personaje.vida <= 0)) {
      console.log("Equipo 2 ha ganado.");
    } else if (this.equipo2.every((personaje) => personaje.vida <= 0)) {
      console.log("Equipo 1 ha ganado.");
    }

  }

}



 
Juego.agregarPersonaje(1, reptil);
Juego.agregarPersonaje(1, gigant);
Juego.agregarPersonaje(1, pandawa);

Juego.agregarPersonaje(2, thunder);
Juego.agregarPersonaje(2, monje);
Juego.agregarPersonaje(2, antorcha);

Juego.iniciarJuego();
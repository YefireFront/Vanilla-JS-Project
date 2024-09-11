class Juego {
  static equipo1 = [];
  static equipo2 = [];
  static turnoActualEquipo1 = 0;
  static turnoActualEquipo2 = 0;
  static turnoEquipo = 0;
  static estadoJuego = "inicial";


  //* 

  static agregarPersonaje(equipo, personaje) {
    if (equipo === 1) {
      if (this.equipo1.length === 3) {
        console.log("El equipo 1 ya tiene 3 personajes.");
        return;
      }
      this.equipo1.push(personaje);
    } else {
      if (this.equipo2.length === 3) {
        console.log("El equipo 2 ya tiene 3 personajes.");
        return;
      }
      this.equipo2.push(personaje);
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
    console.log(`Inicio del juego. Equipo ${this.turnoEquipo} comienza.`);
    
  }

  
  static cambiarTurno() {
    
    if (this.turnoEquipo === 1) {
      this.turnoEquipo = 2;
      this.turnoActualEquipo1 =(this.turnoActualEquipo1 + 1) % this.equipo1.length

      let jugadorActual = this.equipo2[this.turnoActualEquipo2];
      jugadorActual.activarEfectos();
      console.log(`Es el turno de ${jugadorActual.nombre}`);
      
      
      
    } else {
        this.turnoEquipo = 1;
        this.turnoActualEquipo2 =(this.turnoActualEquipo2 + 1) % this.equipo2.length
        let jugadorActual = this.equipo1[this.turnoActualEquipo1];
        console.log(`Es el turno de ${jugadorActual.nombre}`);
        jugadorActual.activarEfectos();

    }

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



Juego.agregarPersonaje(1, darkOz);
Juego.agregarPersonaje(1, skells);
Juego.agregarPersonaje(1, Valvius);

Juego.agregarPersonaje(2, skells);
Juego.agregarPersonaje(2, darkOz);
Juego.agregarPersonaje(2, Valvius);


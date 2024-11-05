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

  static cambiarTurno() {
    // Verificar si hay un equipo que ha ganado
    if (this.verificarVictoria()) {
        console.log("Fin de la partida.");
        return;
    }

    // Reducir cooldown de habilidades del personaje actual
    this.personajeActual.habilidades.forEach((habilidad) =>
        habilidad.reducirCooldown()
    );

    // Cambiar turno de equipo (1 a 2 o 2 a 1)
    this.turnoEquipo = this.turnoEquipo === 1 ? 2 : 1;

    // Seleccionar el equipo y el turno correspondiente
    const equipoActual = this.turnoEquipo === 1 ? this.equipo1 : this.equipo2;
    const turnoActual = this.turnoEquipo === 1 ? this.turnoActualEquipo1 : this.turnoActualEquipo2;

    // Obtener el siguiente personaje no muerto del equipo
    let siguienteTurno = (turnoActual + 1) % equipoActual.length;
    let personajeSiguiente = equipoActual[siguienteTurno];

    // Si el personaje está muerto, buscar el siguiente
    while (personajeSiguiente.estaMuerto()) {
        siguienteTurno = (siguienteTurno + 1) % equipoActual.length;
        personajeSiguiente = equipoActual[siguienteTurno];
    }

    // Actualizar el turno actual y el personaje actual según el equipo
    if (this.turnoEquipo === 1) {
        this.turnoActualEquipo1 = siguienteTurno;
    } else {
        this.turnoActualEquipo2 = siguienteTurno;
    }
    this.personajeActual = personajeSiguiente;



    // Wait for the activarEfectos method to fully complete its effects, then proceed
    this.personajeActual.activarEfectos(() => {
     Personaje.validarExcesos(this.personajeActual);
     this.personajeActual.estaMuerto() ? this.cambiarTurno() : actualizarInterfaz();
     actualizarSeccionHabilidades()
          
    },);


    

   
}


  // static verificarVictoria() {
  //   // Lógica para verificar si un equipo ha ganado
  //   if (this.equipo1.every((personaje) => personaje.vida <= 0)) {
  //     console.log("Equipo 2 ha ganado.");
  //     actualizarInterfaz();
  //     return true;
  //   } else if (this.equipo2.every((personaje) => personaje.vida <= 0)) {
  //     console.log("Equipo 1 ha ganado.");
  //     actualizarInterfaz();
  //     return true;
  //   }
  // }

  static verificarVictoria() {
    const victoriaSection = document.querySelector(".victoria");
    const imagenesVictoria = document.querySelectorAll(".imagenVictoria");
    const videoFondo = document.querySelector(".videoFondo")
  
    if (this.equipo1.every((personaje) => personaje.vida <= 0)) {
      console.log("Equipo 2 ha ganado.");
      actualizarInterfaz();
      setTimeout(() => {
        victoriaSection.style.display = "flex";
        videoFondo.style.display = "none"

        Juego.equipo2.forEach((personaje, index) => {
          if (index < 3) { 
            imagenesVictoria[index].src = `./FrontEnd/assets/img/Personajes/${personaje.id}/Quieto.gif`;
          }
        });
      }, 3000); 
      return true;
    } else if (this.equipo2.every((personaje) => personaje.vida <= 0)) {
      console.log("Equipo 1 ha ganado.");
      actualizarInterfaz();
      setTimeout(() => {
        victoriaSection.style.display = "flex";
        videoFondo.style.display = "none"

        Juego.equipo1.forEach((personaje, index) => {
          if (index < 3) {
            imagenesVictoria[index].src = `./FrontEnd/assets/img/Personajes/${personaje.id}/Quieto.gif`;
          }
        });
      }, 3000); 
      return true;
    }
    return false;
  }

 
}

Juego.agregarPersonaje(1, antorcha_1);
Juego.agregarPersonaje(1, reptil_1);
Juego.agregarPersonaje(1, thunder_1);

Juego.agregarPersonaje(2, hoz_2);

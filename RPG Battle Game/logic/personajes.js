class Personaje {
  static contadorId = 1;
  constructor(nombre, ataque, defensa, velocidad) {
    this.id = Personaje.contadorId++;
    this.nombre = nombre;
    this.ataque = ataque;
    this.defensa = defensa;
    this.velocidad = velocidad;
    this.vida = 100;
    this.debilitamiento = [];
    this.fortalecimiento = [];
    this.habilidades = [];
    this.equipo = null;
  }

  //metodo para valida pesonaje vivo
  estaMuero() {
    if (this.vida <= 0) {
      console.log(` El personaje ${this.nombre} está muerto`);
      return true;
    }
    return false;
  }

  //Asignar 0 si un perosnaje quesa con vida negativa
  validarVidaNegativa() {
    if (this.vida <= 0) {
      this.vida = 0;
    }
  }

  //Metodod para atacar a un objetivo
  Atacar(objetivo) {
    //Validar si el ataque puede hacer daño
    if (objetivo.estaMuero()) {
      console.log(`No puedes atacar a un jugador muerto`);
      return false;
    }

    if (this.equipo === objetivo.equipo) {
      console.log("No puede atacar a un aliado");
      return false;
    }

    if (objetivo.defensa >= this.ataque) {
      console.log("No tenías suficiente fuerza para herir a este personaje");
      Juego.cambiarTurno();
      return true;
    }

    objetivo.vida -= this.ataque - objetivo.defensa;
    console.log(
      `${this.nombre} ha atacado a ${objetivo.nombre} por ${
        this.ataque - objetivo.defensa
      } de daño`
    );
    objetivo.validarVidaNegativa();

    Juego.cambiarTurno();
    return true;
  }

  // Metodo para usar una habilidad
  usarHabilidad(nombreHabilidad, objetivo) {
    //Extraer habilidad
    const habilidad = this.habilidades.find(
      (habilidad) => habilidad.nombre === nombreHabilidad
    );

    if (habilidad) {
      //Valoidar que si la habilidad es de daño y no se use en un aliado
      if (habilidad.tipo === "Daño" && this.equipo === objetivo.equipo) {
        console.log(
          `${this.nombre} no puede usar una habilidad de daño en su propio equipo.`
        );
        return false;
      }

      //vailidar si la habilidad esta en cooldown
      if (habilidad.cooldownActual > 0) {
        console.log(
          `estas en cooldown. Espera ${habilidad.cooldownActual} turnos más.`
        );
        return false;
      }

      //Validar objetivo vivo
      if (objetivo.estaMuero()) {
        console.log(`El objetivo ${objetivo.nombre} está muerto`);
        return false;
      }

      //Activar la habilidad
      habilidad.activar(this, objetivo);
      objetivo.validarVidaNegativa();
      Juego.cambiarTurno();
      return true;
    } else {
      console.log("Habilidad no encontrada.");
      return false;
    }
  }

  //Metodo para activar los efectos de los personajes
  activarEfectos() {
    this.debilitamiento.forEach((efecto) => efecto.activar(this));
    this.fortalecimiento.forEach((efecto) => efecto.activar(this));
  }
}

class Reptil extends Personaje {
  constructor(nombre, ataque, defensa, velocidad) {
    super(nombre, ataque, defensa, velocidad);
    this.habilidades.push(crearMordidaToxica());
    this.habilidades.push(crearRegeneracionEscamosa());
  }
}

class Gigant extends Personaje {
  constructor(nombre, ataque, defensa, velocidad) {
    super(nombre, ataque, defensa, velocidad);
    // this.habilidades.push(crearGolpeGigante());
    this.habilidades.push(crearLlamadoCeleste());
    this.habilidades.push(crearArmadurarota());
  }
}

class Pandawa extends Personaje {
  constructor(nombre, ataque, defensa, velocidad) {
    super(nombre, ataque, defensa, velocidad);
    this.habilidades.push(crearPuñoFlamigero());
    this.habilidades.push(crearAlmaBambu());
  }
}

class Thunder extends Personaje {
  constructor(nombre, ataque, defensa, velocidad) {
    super(nombre, ataque, defensa, velocidad);
    this.habilidades.push(crear1000Volvios());
    this.habilidades.push(crearCarga());
    // this.habilidades.push(crearTormentaElectrica());
    // this.habilidades.push(crearCargaRelampago());
  }
}

class Monje extends Personaje {
  constructor(nombre, ataque, defensa, velocidad) {
    super(nombre, ataque, defensa, velocidad);
    this.habilidades.push(crearPalmaFuerza());
    this.habilidades.push(crearMeditacion());
    // this.habilidades.push(crearMeditacion());
    // this.habilidades.push(crearPalmaFuerza());
  }
}

class Antorcha extends Personaje {
  constructor(nombre, ataque, defensa, velocidad) {
    super(nombre, ataque, defensa, velocidad);
    this.habilidades.push(crearLlamarada());
    this.habilidades.push(crearExplosionSolar());
  }
}

const reptil = new Reptil("Reptil", 50, 20, 11);
const pandawa = new Pandawa("Pandawa", 30, 30, 8);
const gigant = new Gigant("Gigant", 50, 10, 14);

const antorcha = new Antorcha("Antorcha", 40, 20, 11);
const monje = new Monje("Monje", 40, 20, 8);
const thunder = new Thunder("Thunder", 60, 20, 10);

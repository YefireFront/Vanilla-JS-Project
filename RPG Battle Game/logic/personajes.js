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
    this.equiimiento = [];
    this.habilidades = [];
  }

  //metodo para valida pesonaje vivo
  estaMuerto() {
    if (this.vida <= 0) {
      // console.log(` El personaje ${this.nombre} está muerto`);
      return true;
    }
    return false;
  }

  //Asignar 0 si un perosnaje queda con vida negativa
  validarNegativos() {
    if (this.vida <= 0) {
      this.vida = 0;
    }

    if (this.defensa <= 0) {
      this.defensa = 0;
    }

    if (this.ataque <= 0) {
      this.ataque = 0;
    }
  }

  //validar positivos de vida y defensa
  validarPositivos() {
    if (this.vida >= 100) {
      this.vida = 100;
    }

    if (this.defensa >= 60) {
      this.defensa = 60;
    }
  }

  static validarExcesos(personaje1, personaje2) {
    if (personaje1) {
      personaje1.validarPositivos();
      personaje1.validarNegativos();
    }

    if (personaje2) {
      personaje2.validarPositivos();
      personaje2.validarNegativos();
    }
  }

  //Metodod para atacar a un objetivo
  Atacar(objetivo) {
    //Validar si el ataque puede hacer daño
    if (objetivo.estaMuerto()) {
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
    // console.log(`${this.nombre} ha atacado a ${objetivo.nombre} por ${this.ataque - objetivo.defensa} de daño`);
    objetivo.validarNegativos();

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

      if (habilidad.nombre === "Revivir") {
        //Activar la habilidad
        habilidad.activar(this, objetivo);
        objetivo.validarNegativos();
        Juego.cambiarTurno();
        return true;
      }

      //Validar objetivo vivo
      if (objetivo.estaMuerto()) {
        console.log(`El objetivo ${objetivo.nombre} está muerto`);
        return false;
      }

      //Activar la habilidad
      habilidad.activar(this, objetivo);
      objetivo.validarNegativos();
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
    this.habilidades.push(pandemia());
  }
}

class Gigant extends Personaje {
  constructor(nombre, ataque, defensa, velocidad) {
    super(nombre, ataque, defensa, velocidad);
    // this.habilidades.push(crearGolpeGigante());
    this.habilidades.push(crearLlamadoCeleste());
    this.habilidades.push(crearRevivir());
  }
}

class Pandawa extends Personaje {
  constructor(nombre, ataque, defensa, velocidad) {
    super(nombre, ataque, defensa, velocidad);
    this.habilidades.push(crearAlmaBambu());
    this.habilidades.push(crearPuñoFlamigero());
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
    this.habilidades.push(crearIraInfernal());
  }
}

class IceDragon extends Personaje {
  constructor(nombre, ataque, defensa, velocidad) {
    super(nombre, ataque, defensa, velocidad);
    this.habilidades.push(crearLlamarada());
    this.habilidades.push(crearIraInfernal());
  }
}
class personaje8 extends Personaje {
  constructor(nombre, ataque, defensa, velocidad) {
    super(nombre, ataque, defensa, velocidad);
    this.habilidades.push(crearLlamarada());
    this.habilidades.push(crearIraInfernal());
  }
}
class perosnaje9 extends Personaje {
  constructor(nombre, ataque, defensa, velocidad) {
    super(nombre, ataque, defensa, velocidad);
    this.habilidades.push(crearLlamarada());
    this.habilidades.push(crearIraInfernal());
  }
}
class perosnaje10 extends Personaje {
  constructor(nombre, ataque, defensa, velocidad) {
    super(nombre, ataque, defensa, velocidad);
    this.habilidades.push(crearLlamarada());
    this.habilidades.push(crearIraInfernal());
  }
}
class perosnaje11 extends Personaje {
  constructor(nombre, ataque, defensa, velocidad) {
    super(nombre, ataque, defensa, velocidad);
    this.habilidades.push(crearLlamarada());
    this.habilidades.push(crearIraInfernal());
  }
}
class perosnaje12 extends Personaje {
  constructor(nombre, ataque, defensa, velocidad) {
    super(nombre, ataque, defensa, velocidad);
    this.habilidades.push(crearLlamarada());
    this.habilidades.push(crearIraInfernal());
  }
}

// Reptil
const reptil_1 = new Reptil("Reptil", 50, 20, 10);
const reptil_2 = new Reptil("Reptil", 50, 20, 10);

//Pandawa
const pandawa_1 = new Pandawa("Pandawa", 30, 30, 18);
const pandawa_2 = new Pandawa("Pandawa", 30, 30, 18);

//Gigant
const gigant_1 = new Gigant("Gigant", 40, 30, 14);
const gigant_2 = new Gigant("Gigant", 40, 30, 14);

//Antorcha
const antorcha_1 = new Antorcha("Antorcha", 50, 20, 111);
const antorcha_2 = new Antorcha("Antorcha", 50, 20, 111);

//Monje
const monje_1 = new Monje("Monje", 40, 20, 81);
const monje_2 = new Monje("Monje", 40, 20, 81);

//thunder
const thunder_1 = new Thunder("Thunder", 50, 20, 100);
const thunder_2 = new Thunder("Thunder", 50, 20, 100);

//Ice Dragon
const iceDragon_1 = new IceDragon("IceDragon", 50, 20, 200);
const iceDragon_2 = new IceDragon("IceDragon", 50, 20, 100);

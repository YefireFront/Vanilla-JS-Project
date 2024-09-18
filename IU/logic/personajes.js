class Personaje {
  static  contadorId = 1;
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
  }

  Atacar(objetivo) {
    if (objetivo.defensa > this.ataque) {
      console.log("No tienes suficiente fuerza para atacar a este personaje");
    } else {
      objetivo.vida -= (this.ataque - objetivo.defensa);
      console.log(`${this.nombre} ha atacado a ${objetivo.nombre}. Vida restante: ${objetivo.vida}`);
    }

    Juego.cambiarTurno();
  }

  usarHabilidad(nombreHabilidad, objetivo) {
    const habilidad = this.habilidades.find(habilidad => habilidad.nombre === nombreHabilidad);
    if (habilidad) {
      habilidad.activar(this, objetivo);
      Juego.cambiarTurno();

    } else {
      console.log("Habilidad no encontrada.");
    }
  }

  activarEfectos() {
    this.debilitamiento.forEach(efecto => efecto.activar(this));
    this.fortalecimiento.forEach(efecto => efecto.activar(this));
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
    this.habilidades.push(crearGolpeGigante());
    this.habilidades.push(crearRugidoTerrenal());
  }
}

class Pandawa extends Personaje {
  constructor(nombre, ataque, defensa, velocidad) {
    super(nombre, ataque, defensa, velocidad);
    this.habilidades.push(crearGolpeBorracho());
    this.habilidades.push(crearDanzaEmbriagante());
  }
}

class Thunder extends Personaje {
  constructor(nombre, ataque, defensa, velocidad) {
    super(nombre, ataque, defensa, velocidad);
    this.habilidades.push(crearTormentaElectrica());
    this.habilidades.push(crearCargaRelampago());
  }
}

class Monje extends Personaje {
  constructor(nombre, ataque, defensa, velocidad) {
    super(nombre, ataque, defensa, velocidad);
    this.habilidades.push(crearMeditacion());
    this.habilidades.push(crearPalmaFuerza());
  }
}

class Antorcha extends Personaje {
  constructor(nombre, ataque, defensa, velocidad) {
    super(nombre, ataque, defensa, velocidad);
    this.habilidades.push(crearLlamarada());
    this.habilidades.push(crearExplosionSolar());
  }
}



const reptil = new Reptil("Reptil", 40, 20, 11);
const pandawa = new Pandawa("Pandawa", 30, 30, 8);
const gigant = new Gigant("Gigant", 50, 10, 4);

const antorcha = new Antorcha("Antorcha", 40, 20, 11);
const monje = new Monje("Monje", 40, 20, 11);
const thunder = new Thunder("Thunder", 40, 20, 11);



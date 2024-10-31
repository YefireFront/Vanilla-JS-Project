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
  estaMuerto() {
    if (this.vida <= 0) {
      // console.log(` El personaje ${this.nombre} está muerto`);
      return true;
    }
    return false;
  }

  //Asignar 0 si un perosnaje quesa con vida negativa
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
      let daño = this.ataque - objetivo.defensa;
      mostrarDaño(daño, objetivo);
      Juego.cambiarTurno();
      return true;
    }

    let daño = this.ataque - objetivo.defensa;
    objetivo.vida -= daño;
    mostrarDaño(daño, objetivo, 'orange');
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
      if ((habilidad.tipo === "Daño"|| habilidad.tipo == 'DañoMasivo' ) && this.equipo === objetivo.equipo) {
        console.log( `${this.nombre} no puede usar una habilidad de daño en su propio equipo.`  );
        return false;
      }

      //vailidar si la habilidad esta en cooldown
      if (habilidad.cooldownActual > 0) {
        console.log(  `estas en cooldown. Espera ${habilidad.cooldownActual} turnos más.`   );
        return false;
      }

      if (habilidad.nombre === "Revivir") {
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
  activarEfectos(callback , callbackHabilidad) {
    // Construct an array with effects and their respective details
    const efectos = this.debilitamiento.map((efecto) => {
      let damage, color;
      if (efecto.nombre === "Quemadura") {
        damage = 10;
        color = 'red';
      } else if (efecto.nombre === "Veneno") {
        damage = 5;
        color = 'violet';
      }
      return { efecto, damage, color }; 
    });
    
    // Ensure each effect is processed after the previous one is finished
    efectos.forEach(({ efecto, damage, color }, index) => {
      setTimeout(() => {
        efecto.activar(this);
        mostrarDaño(damage, this, color);
        console.warn('actualizar interfaz llamado de efectos')
        actualizarInterfaz();
      }, (index + 1) * 1000); // Longer delay to allow animation to complete
    });
    
    
    // Process fortification effects after all debuffs
    setTimeout(() => {
      this.fortalecimiento.forEach((efecto) => efecto.activar(this));
        console.warn(' callback llamado de efectos validar')
        callback();
    }, efectos.length * 2000);
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

class Dragon  extends Personaje {
  constructor(nombre, ataque, defensa, velocidad) {
    super(nombre, ataque, defensa, velocidad);
    this.habilidades.push(crearCuracionMasiva());
    this.habilidades.push(crearTormentaHelada());
  }
}

class Hoz extends Personaje {
  constructor(nombre, ataque, defensa, velocidad) {
    super(nombre, ataque, defensa, velocidad);
    this.habilidades.push(lluviaMaldita());
    this.habilidades.push(crearRevivir());
  }
}

class Samurai extends Personaje {
  constructor(nombre, ataque, defensa, velocidad) {
    super(nombre, ataque, defensa, velocidad);
    this.habilidades.push(crearBushido());
    this.habilidades.push(crearEspadaVeneno());
  }
}

class Calaverson extends Personaje {
  constructor(nombre, ataque, defensa, velocidad) {
    super(nombre, ataque, defensa, velocidad);
    this.habilidades.push(crearCraneoMaldito());
    this.habilidades.push(crearIlusionMortal());
  }
}

class Paladin extends Personaje {
  constructor(nombre, ataque, defensa, velocidad) {
    super(nombre, ataque, defensa, velocidad);

    this.habilidades.push(crearGuardiaDivina());
    this.habilidades.push(crearLuzSanadora());
  }
}



// Reptil
const reptil_1 = new Reptil("Reptil", 50, 20, 10);
const reptil_2 = new Reptil("Reptil", 50, 20, 150);

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
const dragon_1 = new Dragon ("Dragon ", 50, 20, 200);
const dragon_2 = new Dragon ("Dragon ", 50, 20, 100);

//Hoz
const hoz_1 = new Hoz ("Hoz ", 50, 20, 200);
const hoz_2 = new Hoz ("Hoz ", 50, 20, 200000);

//Samurai
const samurai_1 = new Samurai ("Samurai ", 50, 20, 200);
const samurai_2 = new Samurai ("Samurai ", 50, 20, 202);

//Paladin
const paladin_1 = new Paladin ("Paladin ", 50, 20, 200);
const paladin_2 = new Paladin ("Paladin ", 50, 20, 200);

//Calaverson
const calaverson_1 = new Calaverson ("Calaverson ", 50, 20, 200);
const calaverson_2 = new Calaverson ("Calaverson ", 50, 20, 2010);



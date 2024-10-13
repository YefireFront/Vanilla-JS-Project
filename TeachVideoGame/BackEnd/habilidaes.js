class Habilidad {
  constructor(nombre, tiempoDeEspera, tipo, descripcion, efecto) {
    this.nombre = nombre;
    this.tiempoDeEspera = tiempoDeEspera;
    this.tipo = tipo; 
    this.descripcion = descripcion;
    this.efecto = efecto;
    this.cooldownActual = 0;
  }

  activar(lanzador, objetivo) {
    if (this.cooldownActual === 0) {
      this.efecto(lanzador, objetivo);
      this.cooldownActual = this.tiempoDeEspera;
    } else {
      console.log(
        `${this.nombre} está en cooldown. Espera ${this.cooldownActual} turnos más.`
      );
    }
  }

  reducirCooldown() {
    if (this.cooldownActual > 0) {
      this.cooldownActual--;
    }
  }

  validarExcesos(personaje1, personaje2) {
    if (personaje1) {
      personaje1.validarPositivos();
      personaje1.validarNegativos();
    }

    if (personaje2) {
      personaje2.validarPositivos();
      personaje2.validarNegativos();
    }
  }
}

// Habilidades de thunder

function crear1000Volvios() {
  return new Habilidad(
    "1000 Voltios",
    3,
    "DañoMasivo",
    "Inflige 15 de Daño y paraliza al objetivo durante 1 turno.",
    (lanzador, objetivo) => {
      if (Juego.equipo1.find((personaje) => objetivo === personaje)) {
        Juego.equipo1.forEach((personaje) => {
          personaje.vida -= 15;
          Personaje.validarExcesos(lanzador, personaje);
        });
      } else {
        Juego.equipo2.forEach((personaje) => {
          personaje.vida -= 15;
          Personaje.validarExcesos(lanzador, personaje);
        });
      }
    }
  );
}



function crearCarga() {
  return new Habilidad(
    "Carga",
    3,
    "Soporte",
    "Aumenta el ataque de Thunder en 10 durante 2 turnos.",
    (lanzador) => {
      lanzador.ataque += 10;
      Personaje.validarExcesos(lanzador);
    }
  );
}

// Habilidades de reptil
function crearMordidaToxica() {
  return new Habilidad(
    "Mordida Tóxica",
    3,
    "Daño",
    "Inflige 15 de Daño y aplica veneno que causa 10 de Daño por turno durante 3 turnos.",
    (lanzador, objetivo) => {
      objetivo.vida -= 30;
      Personaje.validarExcesos(lanzador, objetivo);
      objetivo.debilitamiento.push(crearVeneno());
    }
  );
}

function pandemia() {
  return new Habilidad(
    "Pandemia",
    3,
    "DañoMasivo",
    "Inflige 5 de Daño y envenena a todos los enemigos",
    (lanzador, objetivo) => {
      if (Juego.equipo1.find((personaje) => objetivo === personaje)) {
        Juego.equipo1.forEach((personaje) => {
          personaje.vida -= 5;
          Personaje.validarExcesos(lanzador, personaje);
          personaje.debilitamiento.push(crearVeneno());
        });
      } else {
        Juego.equipo2.forEach((personaje) => {
          personaje.vida -= 5;
          Personaje.validarExcesos(lanzador, personaje);
          personaje.debilitamiento.push(crearVeneno());
        });
      }


  return new Habilidad(
    "Palma de Fuerza",
    4,
    "Daño",
    "Inflige 25 de Daño al objetivo y empuja al enemigo, reduciendo su defensa en 15.",
    (lanzador, objetivo) => {
      const defensa = crearDefensa(10);
      lanzador.fortalecimiento.push(defensa);
      defensa.aplicar(lanzador);
      Personaje.validarExcesos(lanzador, objetivo);
    }
  );
}

function crearMeditacion() {
  return new Habilidad(
    "Meditación",
    5,
    "Soporte",
    "Aumenta la defensa de Monje en 10 durante 3 turnos y queda en estado regeneracion",
    (lanzador) => {
      lanzador.defensa += 15;
      Personaje.validarExcesos(lanzador);
      lanzador.fortalecimiento.push(crearRegeneracion());
    }
  );
}

// Habilidades de Antorcha

function crearLlamarada() {
  return new Habilidad(
    "Llamarada",
    3,
    "DañoMasivo",
    "Inflige 5 de Daño a todos los enemigos y lo deja quemado.",
    (lanzador, objetivo) => {
      if (Juego.equipo1.find((personaje) => objetivo === personaje)) {
        Juego.equipo1.forEach((personaje) => {
          personaje.vida -= 5;
          Personaje.validarExcesos(lanzador, personaje);
          personaje.debilitamiento.push(crearQuemadura());
        });
      } else {
        Juego.equipo2.forEach((personaje) => {
          personaje.vida -= 20;
          Personaje.validarExcesos(lanzador, personaje);
          personaje.debilitamiento.push(crearQuemadura());
        });
      }
    }
  );
}

function crearIraInfernal() {
  return new Habilidad(
    "Ira Infernal",
    5,
    "Daño",
    "Deja al objetivo quemado y aumenta su ataque en 15.",
    (lanzador, objetivo) => {
      const ataque = crearAtaque(15);
      lanzador.fortalecimiento.push(ataque)
      ataque.aplicar(lanzador); // Activar el efecto de crearAtaque instantáneamente
      objetivo.debilitamiento.push(crearQuemadura());
      Personaje.validarExcesos(lanzador, objetivo);
    }
  );
}



//* Efectos









class Efecto {
  constructor(nombre, descripcion, duracion, efecto, tipo ) {
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.duracion = duracion;
    this.efecto = efecto;
    this.tipo = tipo;
  }

  limpiarEfectos() {
    objetivo.debilitamiento = objetivo.debilitamiento.filter((efecto) => efecto !== this);
    objetivo.fortalecimiento = objetivo.fortalecimiento.filter((efecto) => efecto !== this);
  }
}

class EfectoContinuo extends Efecto{
  constructor(nombre, descripcion, duracion, efecto) {
    super(nombre, descripcion, duracion, efecto);
  }

  activar(objetivo) {
    this.efecto(objetivo);
    this.duracion--;
    if (this.duracion === 0) {
      console.log(`${this.nombre} ha terminado.`);
      objetivo.debilitamiento = objetivo.debilitamiento.filter((efecto) => efecto !== this);
    }
  }
  
}

class EfectoFijo extends Efecto {
  constructor(nombre, descripcion, duracion, efecto, efectoOff, tipo) {
    super(nombre, descripcion, duracion, efecto, tipo);
    this.efectoOff = efectoOff;
    this.aplicado = false;
    this.Objetivo = null;
  }

  aplicar(objetivo) {
    this.efecto(objetivo);
    this.aplicado = true;
    this.Objetivo = objetivo;
  }

  desAplicar(){
    this.efectoOff(this.Objetivo);
  }

  reducirCooldown() {
    this.duracion--;
    if (this.duracion === 0) {
      console.log(`${this.nombre} ha terminado.`);
      this.desAplicar();
      this.aplicado = false;
      this.Objetivo.fortalecimiento = this.Objetivo.fortalecimiento.filter((efecto) => efecto !== this);
    }
  }

  activar(objetivo) {
    this.aplicado ? this.reducirCooldown() : this.aplicar(objetivo);
  }
}

function crearQuemadura() {
  return new EfectoContinuo(
    "Quemadura",
    "Recibe 10 de Daño por turno durante 2 turnos.",
    2,
    (objetivo) => {
      objetivo.vida -= 10;
      Personaje.validarExcesos(objetivo);
      console.log(`${objetivo.nombre} recibe Daño por quemadura.`);
    }
  );
}

function crearVeneno() {
  return new EfectoContinuo(
    "Veneno",
    "Recibe 5 de Daño por turno durante 5 turnos.",
    5,
    (objetivo) => {
      objetivo.vida -= 5;
      Personaje.validarExcesos(objetivo);
      console.log(`${objetivo.nombre} recibe Daño por veneno.`);
    }
  );
}


function crearAtaque(Aumento) {
  return new EfectoFijo(
    "Ataque",
    "Aumenta el ataque del personaje 2 turnos",
    5,
    (objetivo) => {
      objetivo.ataque += Aumento;
      Personaje.validarExcesos(objetivo);
      console.log(`aumenta el ataque de ${objetivo.nombre} por 15`);
    },
    (objetivo) => {
      objetivo.ataque -= Aumento;
      Personaje.validarExcesos(objetivo);
      console.log(`reduce el ataque de ${objetivo.nombre} por 15`); 
    }
  );
}

function crearDefensa(aumenta) {
  return new EfectoFijo(
    "Defensa",
    "Aumenta la defensa de un personaje durante 2 turnos.",
    3,
    (objetivo) => {
      objetivo.defensa += aumenta;
      Personaje.validarExcesos(objetivo);
      console.log(`aumenta la defensa de ${objetivo.nombre} por 15`);
    },
    (objetivo) => {
      console.log(`activando poder off`)
      console.log(objetivo)
      objetivo.defensa -= aumenta;
      Personaje.validarExcesos(objetivo);
      console.log(`reduce la defensa de ${objetivo.nombre} por 15`); 
    }
  );
}

function crearRegeneracion() {
  return new EfectoContinuo(
    "Regeneración",
    "Recupera 10 de vida por turno durante 3 turnos.",
    3,
    (objetivo) => {
      objetivo.vida += 10;
      Personaje.validarExcesos(objetivo);
      console.log(`${objetivo.nombre} ha recuperado 10 de vida.`);
    }
  );
}

class Habilidad {
  constructor(nombre, tiempoDeEspera, descripcion, efecto) {
    this.nombre = nombre;
    this.tiempoDeEspera = tiempoDeEspera;
    this.descripcion = descripcion;
    this.efecto = efecto;
    this.cooldownActual = 0;
  }

  informacion() {
    console.log(`Nombre: ${this.nombre}`);
    console.log(`Descripción: ${this.descripcion}`);
    console.log(`Cooldown: ${this.cooldownActual}/${this.tiempoDeEspera}`);
  }

  activar(lanzador, objetivo) {
    if (this.cooldownActual === 0) {
      this.efecto(lanzador, objetivo);
      this.cooldownActual = this.tiempoDeEspera;
    } else {
      console.log(
        `${this.nombre} está en cooldown, espera ${this.cooldownActual} turnos más.`
      );
    }
  }

  reducirCooldown() {
    if (this.cooldownActual > 0) {
      this.cooldownActual--;
    }
  }
}


function crearMordidaToxica() {
  return new Habilidad(
    "Mordida Tóxica",
    3,
    "Inflige 15 de daño y aplica veneno que causa 10 de daño por turno durante 3 turnos.",
    (lanzador, objetivo) => {
      objetivo.vida -= 15;
      objetivo.debilitamiento.push(crearVeneno());
      console.log(
        `${lanzador.nombre} ha usado Mordida Tóxica en ${objetivo.nombre}. El objetivo está envenenado.`
      );
    }
  );
}

function crearRegeneracionEscamosa() {
  return new Habilidad(
    "Regeneración Escamosa",
    5,
    "Recupera 30 de vida en 3 turnos, 10 de vida por turno.",
    (lanzador) => {
      lanzador.fortalecimiento.push(crearRegeneracion());
      console.log(`${lanzador.nombre} ha activado Regeneración Escamosa.`);
    }
  );
}

function crearGolpeGigante() {
  return new Habilidad(
    "Golpe Gigante",
    4,
    "Inflige 30 de daño, ignorando la defensa del objetivo.",
    (lanzador, objetivo) => {
      objetivo.vida -= 30;
      console.log(
        `${lanzador.nombre} ha usado Golpe Gigante en ${objetivo.nombre}, ignorando su defensa.`
      );
    }
  );
}

function crearRugidoTerrenal() {
  return new Habilidad(
    "Rugido Terrenal",
    6,
    "Reduce la defensa de todos los enemigos en 10 durante 2 turnos.",
    (lanzador, enemigos) => {
      enemigos.forEach((enemigo) => {
        enemigo.defensa -= 10;
        enemigo.debilitamiento.push(crearDebilitacionDefensiva());
      });
      console.log(
        `${lanzador.nombre} ha usado Rugido Terrenal. La defensa de los enemigos ha sido reducida.`
      );
    }
  );
}

function crearGolpeBorracho() {
  return new Habilidad(
    "Golpe Borracho",
    2,
    "Inflige 20 de daño al azar a uno de los enemigos.",
    (lanzador, enemigos) => {
      const enemigo = enemigos[Math.floor(Math.random() * enemigos.length)];
      enemigo.vida -= 20;
      console.log(
        `${lanzador.nombre} ha usado Golpe Borracho en ${enemigo.nombre}.`
      );
    }
  );
}

function crearDanzaEmbriagante() {
  return new Habilidad(
    "Danza Embriagante",
    4,
    "Aumenta la velocidad de Pandawa en 15 durante 2 turnos.",
    (lanzador) => {
      lanzador.velocidad += 15;
      lanzador.fortalecimiento.push(crearVelocidadTemporaria());
      console.log(`${lanzador.nombre} ha usado Danza Embriagante.`);
    }
  );
}

function crearTormentaElectrica() {
  return new Habilidad(
    "Tormenta Eléctrica",
    5,
    "Inflige 25 de daño a todos los enemigos.",
    (lanzador, enemigos) => {
      enemigos.forEach((enemigo) => {
        enemigo.vida -= 25;
        console.log(`${enemigo.nombre} ha sido golpeado por la Tormenta Eléctrica.`);
      });
    }
  );
}

function crearCargaRelampago() {
  return new Habilidad(
    "Carga Relámpago",
    3,
    "Aumenta la velocidad de Thunder en 10 y ataca al objetivo causando 15 de daño.",
    (lanzador, objetivo) => {
      lanzador.velocidad += 10;
      objetivo.vida -= 15;
      console.log(
        `${lanzador.nombre} ha usado Carga Relámpago. La velocidad de Thunder ha aumentado y ${objetivo.nombre} ha recibido daño.`
      );
    }
  );
}

function crearMeditacion() {
  return new Habilidad(
    "Meditación",
    3,
    "Recupera 20 de vida y elimina efectos negativos del Monje.",
    (lanzador) => {
      lanzador.vida += 20;
      lanzador.debilitamiento = [];
      console.log(
        `${lanzador.nombre} ha usado Meditación. Ha recuperado vida y eliminado todos los efectos negativos.`
      );
    }
  );
}

function crearPalmaFuerza() {
  return new Habilidad(
    "Palma de Fuerza",
    4,
    "Inflige 25 de daño al objetivo y empuja al enemigo, reduciendo su defensa en 5.",
    (lanzador, objetivo) => {
      objetivo.vida -= 25;
      objetivo.defensa -= 5;
      console.log(
        `${lanzador.nombre} ha usado Palma de Fuerza en ${objetivo.nombre}. La defensa del enemigo ha sido reducida.`
      );
    }
  );
}

function crearLlamarada() {
  return new Habilidad(
    "Llamarada",
    3,
    "Inflige 20 de daño y quema al objetivo, causando 5 de daño por turno durante 3 turnos.",
    (lanzador, objetivo) => {
      objetivo.vida -= 20;
      objetivo.debilitamiento.push(crearQuemadura());
      console.log(
        `${lanzador.nombre} ha usado Llamarada en ${objetivo.nombre}. El objetivo ha sido quemado.`
      );
    }
  );
}

function crearExplosionSolar() {
  return new Habilidad(
    "Explosión Solar",
    6,
    "Inflige 40 de daño a todos los enemigos, pero reduce 10 de vida de Antorcha.",
    (lanzador, enemigos) => {
      enemigos.forEach((enemigo) => {
        enemigo.vida -= 40;
      });
      lanzador.vida -= 10;
      console.log(
        `${lanzador.nombre} ha usado Explosión Solar, causando gran daño a todos los enemigos pero sacrificando su propia vida.`
      );
    }
  );
}


class Efecto {
  constructor(nombre, descripcion, duracion, efecto) {
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.duracion = duracion;
    this.efecto = efecto;
  }


  activar(objetivo) {
    this.efecto(objetivo);
    this.duracion--;
    if (this.duracion === 0) {
      console.log(`${this.nombre} ha terminado.`);
      objetivo.debilitamiento = objetivo.debilitamiento.filter(
        (efecto) => efecto !== this
      );
    }
  }
}


function crearRegeneracion() {
  return new Efecto(
    "Regeneración",
    "Recupera 10 de vida por turno durante 3 turnos.",
    3,
    (objetivo) => {
      objetivo.vida += 10;
      console.log(`${objetivo.nombre} ha recuperado 10 de vida.`);
    }
  );
}

function crearQuemadura() {
  return new Efecto(
    "Quemadura",
    "Recibe 5 de daño por turno durante 3 turnos.",
    3,
    (objetivo) => {
      objetivo.vida -= 5;
      console.log(`${objetivo.nombre} recibe daño por quemadura.`);
    }
  );
}

function crearVelocidadTemporaria() {
  return new Efecto(
    "Velocidad Temporaria",
    "Aumenta la velocidad del objetivo en 10 durante 2 turnos.",
    2,
    (objetivo) => {
      objetivo.velocidad += 10;
      console.log(`${objetivo.nombre} ha aumentado su velocidad temporalmente.`);
    }
  );
}

function crearDebilitacionDefensiva() {
  return new Efecto(
    "Debilitación Defensiva",
    "Reduce la defensa en 10 durante 2 turnos.",
    2,
    (objetivo) => {
      objetivo.defensa -= 10;
      console.log(`${objetivo.nombre} ha visto su defensa reducida.`);
    }
  );
}
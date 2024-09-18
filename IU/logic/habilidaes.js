class Habilidad {
  constructor(nombre, tiempoDeEspera, tipo, descripcion, efecto) {
    this.nombre = nombre;
    this.tiempoDeEspera = tiempoDeEspera;
    this.tipo = tipo; // 'Daño' o 'NoDaño'
    this.descripcion = descripcion;
    this.efecto = efecto;
    this.cooldownActual = 0;
  }

  activar(lanzador, objetivo) {
    if (this.cooldownActual === 0) {
      this.efecto(lanzador, objetivo);
      this.cooldownActual = this.tiempoDeEspera;
    } else {
      console.log(`${this.nombre} está en cooldown. Espera ${this.cooldownActual} turnos más.`);
    }
  }

  reducirCooldown() {
    if (this.cooldownActual > 0) {
      this.cooldownActual--;
    }
  }
}





// Habilidad creada a través de una función
function crearMordidaToxica() {
  return new Habilidad(
    "Mordida Tóxica",
    3,
    "Daño",
    "Inflige 15 de Daño y aplica veneno que causa 10 de Daño por turno durante 3 turnos.",
    (lanzador, objetivo) => {
      objetivo.vida -= 15;
      objetivo.debilitamiento.push(crearVeneno());
      console.log(`${lanzador.nombre} ha usado Mordida Tóxica en ${objetivo.nombre}. El objetivo está envenenado.`);
    },
    'Azul' // También aseguramos que el color sea pasado correctamente
  );
}

function crearRegeneracionEscamosa() {
  return new Habilidad(
    "Regeneración Escamosa",
    5,
    "Soporte",
    "Recupera 30 de vida en 3 turnos, 10 de vida por turno.",
    (lanzador) => {
      lanzador.fortalecimiento.push(crearRegeneracion());
      console.log(`${lanzador.nombre} ha activado Regeneración Escamosa.`);
    }
  );
}


function crearGolpeBorracho() {
  return new Habilidad(
    "Golpe Borracho",
    2,
    "Daño",
    "Inflige 20 de Daño al azar a uno de los enemigo.",
    (lanzador, enemigo) => {
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
    "Soporte",
    "Aumenta la velocidad de Pandawa en 15 durante 2 turnos.",
    (lanzador) => {
      lanzador.velocidad += 15;
      lanzador.fortalecimiento.push(crearVelocidadTemporaria());
      console.log(`${lanzador.nombre} ha usado Danza Embriagante.`);
    }
  );
}

function crearExplosionSolar() {
  return new Habilidad(
    "Explosión Solar",
    6,
    "Daño",
    "Inflige 40 de Daño a todos los enemigo, pero reduce 10 de vida de Antorcha.",
    (lanzador, enemigo) => {
      enemigo.forEach((enemigo) => {
        enemigo.vida -= 40;
      });
      lanzador.vida -= 10;
      console.log(
        `${lanzador.nombre} ha usado Explosión Solar, causando gran Daño a todos los enemigo pero sacrificando su propia vida.`
      );
    }
  );
}

function crearPalmaFuerza() {
  return new Habilidad(
    "Palma de Fuerza",
    4,
    "Daño",
    "Inflige 25 de Daño al objetivo y empuja al enemigo, reduciendo su defensa en 5.",
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
    "Daño",
    "Inflige 20 de Daño y quema al objetivo, causando 5 de Daño por turno durante 3 turnos.",
    (lanzador, objetivo) => {
      objetivo.vida -= 20;
      objetivo.debilitamiento.push(crearQuemadura());
      console.log(
        `${lanzador.nombre} ha usado Llamarada en ${objetivo.nombre}. El objetivo ha sido quemado.`
      );
    }
  );
}

function crearRugidoTerrenal() {
  return new Habilidad(
    "Rugido Terrenal",
    6,
    "Soporte",
    "Reduce la defensa de todos los enemigo en 10 durante 2 turnos.",
    (lanzador, enemigo) => {
      enemigo.forEach((enemigo) => {
        enemigo.defensa -= 10;
        enemigo.debilitamiento.push(crearDebilitacionDefensiva());
      });
      console.log(
        `${lanzador.nombre} ha usado Rugido Terrenal. La defensa de los enemigo ha sido reducida.`
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
    "Recibe 5 de Daño por turno durante 3 turnos.",
    3,
    (objetivo) => {
      objetivo.vida -= 5;
      console.log(`${objetivo.nombre} recibe Daño por quemadura.`);
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
      console.log(
        `${objetivo.nombre} ha aumentado su velocidad temporalmente.`
      );
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

function crearVeneno() {
  return new Efecto(
    "Veneno",
    "Recibe 10 de Daño por turno durante 3 turnos.",
    3,
    (objetivo) => {
      objetivo.vida -= 10;
      console.log(`${objetivo.nombre} recibe Daño por veneno.`);
    }
  );
}

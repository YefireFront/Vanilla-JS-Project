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


// Habilidades de thunder

function crear1000Volvios() {
  return new Habilidad(
    "1000 Voltios",
    3,
    "DañoMasivo",
    "Inflige 15 de Daño y paraliza al objetivo durante 1 turno.",
    (lanzador, objetivo) => {
       if (Juego.equipo1.find(personaje => objetivo === personaje)) {
         Juego.equipo1.forEach((personaje) => {
          personaje.vida -= 15;
          console.log(`${lanzador.nombre} ha usado 1000 con un daño de 15 en ${personaje.nombre}. Queda con la vida en ${personaje.vida}`);
        })
       }else{
         Juego.equipo2.forEach((personaje) => {
          personaje.vida -= 15;
          console.log(`${lanzador.nombre} ha usado 1000 Voltios en ${personaje.nombre}. El objetivo ha sido paralizado.`);
        });
          
       }
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
       if (Juego.equipo1.find(personaje => objetivo === personaje)) {
         Juego.equipo1.forEach((personaje) => {
          personaje.vida -= 5;
          personaje.debilitamiento.push(crearVeneno());
          console.log(`${lanzador.nombre} ha usado pandemia en ${personaje.nombre}. El objetivo ha sido envenenado.`);

        })
       }else{
         Juego.equipo2.forEach((personaje) => {
          personaje.vida -= 5;
          personaje.debilitamiento.push(crearVeneno());
          console.log(`${lanzador.nombre} ha usado pandemia en ${personaje.nombre}. El objetivo ha sido envenenado.`);
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
      console.log(`${lanzador.nombre} ha usado Carga y ha aumentado su ataque en 10.`);
    }
  )
}

// Habilidades de reptil
function crearMordidaToxica() {
  return new Habilidad(
    "Mordida Tóxica",
    3,
    "Daño",
    "Inflige 15 de Daño y aplica veneno que causa 10 de Daño por turno durante 3 turnos.",
    (lanzador, objetivo) => {
      objetivo.vida -= 98;
      objetivo.debilitamiento.push(crearVeneno());
      console.log(`${lanzador.nombre} ha usado Mordida Tóxica en ${objetivo.nombre}. El objetivo está envenenado.`);
    },
    'Azul' // También aseguramos que el color sea pasado correctamente
  );
}

function crearRegeneracionEscamosa() {
  return new Habilidad(
    "Regeneración ",
    5,
    "Soporte",
    "Recupera 30 de vida en 3 turnos, 10 de vida por turno.",
    (lanzador) => {
      lanzador.fortalecimiento.push(crearRegeneracion());
      console.log(`${lanzador.nombre} ha activado Regeneración Escamosa.`);
    }
  );
}


//Habilidades de pandawa

function crearPuñoFlamigero() {
  return new Habilidad(
    "Puño Flamígero",
    3,
    "Daño",
    "Inflige 20 de Daño al objetivo.",
    (lanzador, objetivo) => {
      objetivo.vida -= 20;
      console.log(`${lanzador.nombre} ha usado Puño Flamígero en ${objetivo.nombre}.`);
    }
  );
}

function crearAlmaBambu() {
  return new Habilidad(
    "Alma de Bambú",
    5,
    "Soporte",
    "Aumenta la defensa de Pandawa en 10 .",
    (lanzador) => {
      lanzador.defensa += 10;
      console.log(`${lanzador.nombre} ha usado Alma de Bambú y ha aumentado su defensa en 10.`);
    }
  );
}

// Habilidades de gigant

function crearLlamadoCeleste() {
  return new Habilidad(
    "Llamado Celeste",
    5,
    "Soporte",
    "Aumenta la defensa de Gigant en 10 por cada aliado muerto.",
    (lanzador) => {
      lanzador.defensa += 10;
      console.log(`${lanzador.nombre} ha usado Llamado Celeste y ha aumentado su defensa en 10.`);
    }
  );
}

function crearArmadurarota() {
  return new Habilidad(
    "Armadura Rota",
    3,
    "Daño",
    "Inflige 20 de Daño al objetivo y reduce su defensa en 5.",
    (lanzador, objetivo) => {
      objetivo.vida -= 20;
      objetivo.defensa -= 5;
      console.log(`${lanzador.nombre} ha usado Armadura Rota en ${objetivo.nombre}.`);
    }
  );
}


// Habilidades de Monje
function crearPalmaFuerza() {
  return new Habilidad(
    "Palma de Fuerza",
    4,
    "Daño",
    "Inflige 25 de Daño al objetivo y empuja al enemigo, reduciendo su defensa en 15.",
    (lanzador, objetivo) => {
      objetivo.vida -= 25;
      objetivo.defensa -= 15;
      console.log(
        `${lanzador.nombre} ha usado Palma de Fuerza en ${objetivo.nombre}. La defensa del enemigo ha sido reducida.`
      );
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
      lanzador.fortalecimiento.push(crearRegeneracion());
      console.log(`${lanzador.nombre} ha usado Meditación y ha aumentado su defensa en 15.`);
    }
  );
}



function crearLlamarada() {
  return new Habilidad(
    "Llamarada",
    3,
    "Daño",
    "Inflige 20 de Daño al objetivo y lo deja quemado.",
    (lanzador, objetivo) => {
      objetivo.vida -= 20;
      objetivo.debilitamiento.push(crearQuemadura());
      console.log(`${lanzador.nombre} ha usado Llamarada en ${objetivo.nombre} y lo ha dejado quemado.`);
    }
  );
}

function crearExplosionSolar() {
  return new Habilidad(
    "Ira Infernal",
    5,
    "Daño",
    "Inflige 30 de Daño al objetivo y lo deja quemado.",
    (lanzador, objetivo) => {
      objetivo.vida -= 30;
      objetivo.debilitamiento.push(crearQuemadura());
      console.log(`${lanzador.nombre} ha usado Ira Infernal en ${objetivo.nombre} y lo ha dejado quemado.`);
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
    "Recibe 10 de Daño por turno durante 2 turnos.",
    2,
    (objetivo) => {
      objetivo.vida -= 10;
      console.log(`${objetivo.nombre} recibe Daño por quemadura.`);
    }
  );
}

function crearVeneno() {
  return new Efecto(
    "Veneno",
    "Recibe 5 de Daño por turno durante 5 turnos.",
    5,
    (objetivo) => {
      objetivo.vida -= 5;
      console.log(`${objetivo.nombre} recibe Daño por veneno.`);
    }
  );
}


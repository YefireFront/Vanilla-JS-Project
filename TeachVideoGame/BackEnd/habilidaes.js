class Habilidad {
  constructor(nombre, tiempoDeEspera, tipo, descripcion, efecto, sonido) {
    this.nombre = nombre;
    this.tiempoDeEspera = tiempoDeEspera;
    this.tipo = tipo;
    this.descripcion = descripcion;
    this.efecto = efecto;
    this.cooldownActual = 0;
    this.sonido = sonido; // Add sound file property
  }

  activar(lanzador, objetivo) {
    if (this.cooldownActual === 0) {
      this.ejecutarMostrarDaño(lanzador, objetivo);
      this.cooldownActual = this.tiempoDeEspera;
      this.reproducirSonido(); // Play sound when ability is activated
    } else {
      console.log(
        `${this.nombre} está en cooldown. Espera ${this.cooldownActual} turnos más.`
      );
    }
  }

  reproducirSonido() {
    if (this.sonido) {
      const rutaSonido = `./FrontEnd/assets/sounds/${this.sonido}`;
      const audio = new Audio(rutaSonido);
      audio.play().catch(err => console.error("Error al reproducir el sonido:", err));
    }
  }

  ejecutarMostrarDaño(lanzador, objetivo) {
    const resultado = this.efecto(lanzador, objetivo);
    if (resultado) {
      resultado.forEach(daño => {
        mostrarDaño(daño.cantidad, daño.objetivo, daño.color);
      });
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
      const equipo = objetivo.equipo === 1 ? Juego.equipo1 : Juego.equipo2;
      return equipo.map((personaje) => {
        personaje.vida -= 15;
        Personaje.validarExcesos(lanzador, personaje);
        return { cantidad: 15, objetivo: personaje };
      });
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
      return [{ cantidad: 10, objetivo: lanzador, color: 'blue' }];
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
      return [{ cantidad: 30, objetivo: objetivo }];
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
      const enemigos = Juego.equipo1.includes(objetivo) ? Juego.equipo1 : Juego.equipo2;
      return enemigos.map((personaje) => {
        personaje.vida -= 5;
        Personaje.validarExcesos(lanzador, personaje);
        personaje.debilitamiento.push(crearVeneno());
        return { cantidad: 5, objetivo: personaje };
      });
    }
  );
}

// Habilidades de Dragon
function crearCuracionMasiva() {
  return new Habilidad(
    "Curación Masiva",
    4,
    "SoporteMasivo",
    "Cura a todos los personajes del equipo en 10 de vida.",
    (lanzador, objetivo) => {
      const equipo = objetivo.equipo === 1 ? Juego.equipo1 : Juego.equipo2;
      return equipo.map((personaje) => {
        personaje.vida += 10;
        Personaje.validarExcesos(objetivo, personaje);
        console.log(`${personaje.nombre} ha sido curado por 10 de vida.`);
        return { cantidad: 10, objetivo: personaje, color: 'green' };
      });
    }
  );
}

function crearTormentaHelada() {
  return new Habilidad(
    "Tormenta Helada",
    4,
    "DañoMasivo",
    "Inflige 20 de Daño a todos los enemigos y los congela por 1 turno.",
    (lanzador, objetivo) => {
      const enemigos = lanzador.equipo === 1 ? Juego.equipo2 : Juego.equipo1;
      return enemigos.map((personaje) => {
        personaje.vida -= 20;
        Personaje.validarExcesos(lanzador, personaje);
        return { cantidad: 20, objetivo: personaje };
      });
    }
  );
}

// Habilidades de pandawa
function crearPuñoFlamigero() {
  return new Habilidad(
    "Puño Flamígero",
    3,
    "Daño",
    "Inflige 20 de Daño al objetivo.",
    (lanzador, objetivo) => {
      objetivo.vida -= 20;
      Personaje.validarExcesos(lanzador, objetivo);
      return [{ cantidad: 20, objetivo: objetivo }];
    }
  );
}

function crearAlmaBambu() {
  return new Habilidad(
    "Alma de Bambú",
    5,
    "Soporte",
    "Aumenta la defensa de Pandawa en 10.",
    (lanzador) => {
      const defensa = crearDefensa(10);
      lanzador.fortalecimiento.push(defensa);
      defensa.aplicar(lanzador);
      Personaje.validarExcesos(lanzador);
      return [{ cantidad: 10, objetivo: lanzador, color: 'blue' }];
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
      let totalDefensa = 0;
      const equipo = lanzador.equipo === 1 ? Juego.equipo1 : Juego.equipo2;
      
      equipo.forEach((personaje) => {
        if (personaje.estaMuerto()) {
          const defensa = crearDefensa(10);
          lanzador.fortalecimiento.push(defensa);
          defensa.aplicar(lanzador);
          totalDefensa += 10;
        }
      });

      Personaje.validarExcesos(lanzador);
      return totalDefensa > 0 ? [{ cantidad: totalDefensa, objetivo: lanzador, color: 'blue' }] : [];
    }
  );
}

function crearRevivir() {
  return new Habilidad(
    "Revivir",
    3,
    "Soporte",
    "Revive a un objetivo con 30 de vida y aumenta su defensa en 5.",
    (lanzador, objetivo) => {
      if (objetivo.estaMuerto()) {
        objetivo.vida += 30;
        objetivo.defensa += 5;
        Personaje.validarExcesos(lanzador, objetivo);
        return [
          { cantidad: 30, objetivo: objetivo, color: 'green' },
          { cantidad: 5, objetivo: objetivo, color: 'blue' }
        ];
      } else {
        console.log(`${lanzador.nombre} no puede usar Revivir en ${objetivo.nombre}.`);
        return [];
      }
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
      Personaje.validarExcesos(lanzador, objetivo);
      return [
        { cantidad: 25, objetivo: objetivo },
        { cantidad: 15, objetivo: objetivo, color: 'blue' }
      ];
    }
  );
}

function crearMeditacion() {
  return new Habilidad(
    "Meditación",
    5,
    "Soporte",
    "Aumenta la defensa de Monje en 10 durante 3 turnos y queda en estado regeneracion.",
    (lanzador) => {
      lanzador.defensa += 15;
      lanzador.fortalecimiento.push(crearRegeneracion());
      Personaje.validarExcesos(lanzador);
      return [{ cantidad: 15, objetivo: lanzador, color: 'blue' }];
    }
  );
}

// Habilidades de Antorcha
function crearLlamarada() {
  return new Habilidad(
    "Llamarada",
    3,
    "DañoMasivo",
    "Inflige 5 de Daño a todos los enemigos y los deja quemados.",
    (lanzador, objetivo) => {
      const enemigos = Juego.equipo1.includes(objetivo) ? Juego.equipo1 : Juego.equipo2;
      return enemigos.map((personaje) => {
        personaje.vida -= 5;
        Personaje.validarExcesos(lanzador, personaje);
        personaje.debilitamiento.push(crearQuemadura());
        return { cantidad: 5, objetivo: personaje };
      });
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
      lanzador.fortalecimiento.push(ataque);
      ataque.aplicar(lanzador);
      objetivo.debilitamiento.push(crearQuemadura());
      Personaje.validarExcesos(lanzador, objetivo);
      return [{ cantidad: 15, objetivo: lanzador, color: 'blue' }];
    }
  );
}

// Habilidades de Paladin
function crearGuardiaDivina() {
  return new Habilidad(
    "Guardia Divina",
    4,
    "Soporte",
    "Aumenta en 15 la defensa del Paladín durante 3 turnos.",
    (lanzador) => {
      const defensa = crearDefensa(15);
      lanzador.fortalecimiento.push(defensa);
      defensa.aplicar(lanzador);
      Personaje.validarExcesos(lanzador);
      return [{ cantidad: 15, objetivo: lanzador, color: 'blue' }];
    }
  );
}


function crearLuzSanadora() {
  return new Habilidad(
    "Luz Sanadora",
    3,
    "Soporte",
    "Restaura 20 de vida a un aliado.",
    (lanzador, objetivo) => {
      objetivo.vida += 20;
      Personaje.validarExcesos(lanzador, objetivo);
      return [{ cantidad: 20, objetivo: objetivo, color: 'green' }];
    }
  );
}



// Habilidades de Calaverson
function crearCraneoMaldito() {
  return new Habilidad(
    "Cráneo Maldito",
    4,
    "Daño",
    "Inflige 30 de Daño y envenena a un enemigo.",
    (lanzador, objetivo) => {
      objetivo.vida -= 30;
      // Assuming crearMaldicion is defined to apply an attack debuff
      objetivo.debilitamiento.push(crearVeneno());
      Personaje.validarExcesos(lanzador, objetivo);
      return [{ cantidad: 30, objetivo: objetivo }];
    }
  );
}

function crearIlusionMortal() {
  return new Habilidad(
    "Ilusión Mortal",
    5,
    "Control",
    "Hace que el enemigo pierda el próximo turno.",
    (lanzador, objetivo) => {
      // Assuming crearPerdidaTurno is defined to skip a turn
      objetivo.debilitamiento.push(crearPerdidaTurno());
      return [{ cantidad: 0, objetivo: objetivo }];
    }
  );
}


// Habilidades de Samurai

function crearBushido() {
  return new Habilidad(
    "Bushido",
    5,
    "Soporte",
    "Aumenta el ataque y defensa en 15 durante 3 turnos.",
    (lanzador) => {
      const ataque = crearAtaque(15);
      const defensa = crearDefensa(15);
      lanzador.fortalecimiento.push(ataque, defensa);
      ataque.aplicar(lanzador);
      defensa.aplicar(lanzador);
      Personaje.validarExcesos(lanzador);
      return [{ cantidad: 15, objetivo: lanzador, color: 'blue' }];
    }
  );
}

function crearEspadaVeneno() {
  return new Habilidad(
    "Espada Veneno",
    3,
    "Daño",
    "Inflige 20 de Daño y aplica veneno a un enemigo.",
    (lanzador, objetivo) => {
      objetivo.vida -= 20;
      // Assuming crearVeneno is defined to apply a poison effect
      objetivo.debilitamiento.push(crearVeneno());
      Personaje.validarExcesos(lanzador, objetivo);
      return [{ cantidad: 20, objetivo: objetivo }];
    }
  );
}


// Habilidades de hoz

function lluviaMaldita() {
  return new Habilidad(
    "Lluvia Maldita",
    4,
    "DañoMasivo",
    "Inflige 10 de daños a los aliados y 30 a los enemigos.",
    (lanzador, objetivo) => {
      const equipoAliado = lanzador.equipo === 1 ? Juego.equipo1 : Juego.equipo2;
      const equipoEnemigo = lanzador.equipo === 1 ? Juego.equipo2 : Juego.equipo1;
      
      const resultado = [];

      // Apply damage to allies
      equipoAliado.forEach((personaje) => {
        if (!personaje.estaMuerto()) {
          personaje.vida -= 10;
          Personaje.validarExcesos(lanzador, personaje);
          resultado.push({ cantidad: 10, objetivo: personaje, color: 'red' });
        }
      });

      // Apply damage to enemies
      equipoEnemigo.forEach((personaje) => {
        if (!personaje.estaMuerto()) {
          personaje.vida -= 30;
          Personaje.validarExcesos(lanzador, personaje);
          resultado.push({ cantidad: 30, objetivo: personaje, color: 'orange' });
        }
      });

      return resultado;
    }
  );
}

// Continue adjusting other abilities in a similar manner

//* Efectos

class Efecto {
  constructor(nombre, descripcion, duracion, efecto, tipo) {
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.duracion = duracion;
    this.efecto = efecto;
    this.tipo = tipo;
  }

  limpiarEfectos() {
    objetivo.debilitamiento = objetivo.debilitamiento.filter( (efecto) => efecto !== this  );
    objetivo.fortalecimiento = objetivo.fortalecimiento.filter( (efecto) => efecto !== this );
  }
}

class EfectoContinuo extends Efecto {
  constructor(nombre, descripcion, duracion, efecto) {
    super(nombre, descripcion, duracion, efecto);
  }

  activar(objetivo) {
    this.efecto(objetivo);
    this.duracion--;
    if (this.duracion === 0) {
      console.log(`${this.nombre} ha terminado.`);
      objetivo.debilitamiento = objetivo.debilitamiento.filter( (efecto) => efecto !== this   );
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

  desAplicar() {
    this.efectoOff(this.Objetivo);
  }

  reducirCooldown() {
    this.duracion--;
    if (this.duracion === 0) {
      console.log(`${this.nombre} ha terminado.`);
      this.desAplicar();
      this.aplicado = false;
      this.Objetivo.fortalecimiento = this.Objetivo.fortalecimiento.filter(
        (efecto) => efecto !== this
      );
    }
  }

  activar(objetivo) {
    this.aplicado ? this.reducirCooldown() : this.aplicar(objetivo);
  }
}



// Effectos continuos
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
function crearPerdidaTurno() {
  return new EfectoContinuo(
    "Turno",
    "Perde el turno.",
    1,
    () => {
      Juego.cambiarTurno();
    }
  );
}

//




// Effectos fijos
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
      console.log(`activando poder off`);
      console.log(objetivo);
      objetivo.defensa -= aumenta;
      Personaje.validarExcesos(objetivo);
      console.log(`reduce la defensa de ${objetivo.nombre} por 15`);
    }
  );
}

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

function crearFuria() {
  return new Habilidad(
    "Furia",
    3,
    "Aumenta el ataque del objetivo en 20, pero reduce su vida en 10",
    (lanzador, objetivo) => {
      objetivo.ataque += 20;
      objetivo.vida -= 10;
      objetivo.debilitamiento.push(crearSangrado());
      console.log(
        `${lanzador.nombre} ha usado Furia en ${objetivo.nombre}. Ataque aumentado y vida reducida.`
      );
    }
  );
}

function crearEscudoProtector() {
  return new Habilidad(
    "Escudo Protector",
    4,
    "Aumenta la defensa del objetivo en 15 durante un turno.",
    (lanzador, objetivo) => {
      objetivo.defensa += 15;
      console.log(
        `${lanzador.nombre} ha usado Escudo Protector en ${objetivo.nombre}. Defensa aumentada y reducción de daño aplicada.`
      );
    }
  );
}

function crearCuracion() {
    return new Habilidad(
        "Curación",
        2,
        "Recupera 20 de vida al objetivo.",
        (lanzador, objetivo) => {
            objetivo.vida += 20;
            console.log(`${lanzador.nombre} ha usado Curación en ${objetivo.nombre}. Vida recuperada 20 puntos.`
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

function crearSangrado() {
    return new Efecto(
        "Sangrado",
        "Recibe 5 de daño al final de cada turno.",
        3,
        (objetivo) => {
        objetivo.vida -= 5;
        console.log(`Se activa el efecto Sangrado en ${objetivo.nombre}. pierde 5 de vida.`); 
        }
    );
}
function crearVeneno() {
    return new Efecto(
        "Veneno",
        "Recibe 10 de daño al final de cada turno.",
        3,
        (objetivo) => {
        objetivo.vida -= 10;
        console.log(`${objetivo.nombre} ha recibido daño por veneno.`);
        }
    );
}

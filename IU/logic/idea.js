class Personaje {
  constructor(nombre, ataque, defensa, velocidad) {
    this.nombre = nombre;
    this.ataque = ataque;
    this.defensa = defensa;
    this.velocidad = velocidad;
    this.vida = 100;
    this.energia = 100;
    this.debilitamiento = [];
    this.fortalecimiento = [];
    this.habilidades = [];
  }

  atacar(objetivo) {
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

class Guerrero extends Personaje {
  constructor(nombre, velocidad) {
    super(nombre, 40, 20,velocidad);


    this.habilidades.push(crearFuria());
    this.habilidades.push(crearEscudoProtector());
  }
}

class Sanador extends Personaje {
  constructor(nombre, velocidad) {
    super(nombre, 30, 20, velocidad);
    this.habilidades.push(crearCuracion());
    this.habilidades.push(crearEscudoProtector());
  }
}


// Ejemplo de uso
const guerrero2 = new Guerrero("Rogers",6);
const guerrero1 = new Guerrero("Thor",5);
const guerrero3 = new Guerrero("Tony",4);

const sanador1 = new Sanador("Bruce",3);
const sanador2 = new Sanador("Peter",2);
const sanador3 = new Sanador("Stephen",1);


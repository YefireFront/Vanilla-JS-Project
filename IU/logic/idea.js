class Personaje {
  constructor(nombre, ataque, defensa, velocidad) {
    this.nombre = nombre;
    this.ataque = ataque;
    this.defensa = defensa;
    this.velocidad = velocidad;
    this.vida = 100;
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

class DarkOz extends Personaje {
  constructor(nombre, ataque, defensa, velocidad){
    super(nombre, ataque, defensa , velocidad);


    this.habilidades.push(crearFuria());
    this.habilidades.push(crearCuracion());

  }
}

class PullsMonje extends Personaje {
  constructor(nombre, ataque, defensa, velocidad){
    super(nombre, ataque, defensa , velocidad);

    this.habilidades.push(crearCuracion());
    this.habilidades.push(crearFuria());
    
}
}


const darkOz = new DarkOz("Dark Oz", 40, 20, 7);
const pullsMonje = new PullsMonje("Pulls Monje", 30, 30, 5);
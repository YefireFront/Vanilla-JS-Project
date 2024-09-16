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
class Skells extends Personaje {
  constructor(nombre, ataque, defensa, velocidad){
    super(nombre, ataque, defensa , velocidad);

    this.habilidades.push(crearFuria());
    this.habilidades.push(crearEscudoProtector());
    
}
}
class Valviius extends Personaje {
  constructor(nombre, ataque, defensa, velocidad){
    super(nombre, ataque, defensa , velocidad);

    this.habilidades.push(crearFuria());
    this.habilidades.push(crearCuracion());
    
}
}




const darkOz_izquierda = new DarkOz("Bot Purple", 40, 20, 11);
const skells_izquierda = new Skells("Dimont  Best", 50, 10, 4);
const Valvius_izquierda = new Valviius("Shild Man", 30, 30, 8);

const darkOz_derecha= new DarkOz("Vakulo Azul", 40, 20, 12);
const Valvius_derecha = new Valviius("Monje Punch", 30, 30, 8);
const skells_derecha = new Skells("Blue Sky", 50, 10, 4);


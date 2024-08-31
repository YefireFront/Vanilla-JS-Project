import { Personaje } from "./01Personaje.js";
import { GestorDeTurnos } from "./00GestionDeTurnos.js";

export class Sanador extends Personaje {
  constructor({ nombre, iniciativa }) {
    super({ nombre, iniciativa });
    this.especial = 1;
    this.atk = 30;
    this.def = 60;
  }

  curar(objetivo) {
    if (this.estaMuerto()) return false;
    if (!GestorDeTurnos.esTurno(this)) return false;

    objetivo.vida += 30;
    this.energia -= 30;
    if (objetivo.vida > 100) {
      objetivo.vida = 100;
    }

    GestorDeTurnos.finalizarTurno();
  }

  sacrificio(objetivo) {
    if (this.estaMuerto()) return false;
    if (!GestorDeTurnos.esTurno(this)) return false;

    let cantidad = 100 - objetivo.vida;
    if (cantidad < this.vida) {
      objetivo.vida += cantidad;
      this.vida -= cantidad;
      this.energia -= 70;
    } else {
      objetivo.vida += this.vida;
      this.vida = 1;
      this.energia -= 70;
    }

    GestorDeTurnos.finalizarTurno();
  }

  revivir(objetivo) {
    if (this.especial == 0) return false;
    if (!GestorDeTurnos.esTurno(this)) return false;
    if (this.vida === 0) return false;
    if (objetivo.vida > 0) return false;

    objetivo.vida = 40;
    this.energia -= 70;
    this.especial = 0;

    GestorDeTurnos.finalizarTurno();
  }
}
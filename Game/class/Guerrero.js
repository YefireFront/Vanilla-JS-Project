import { Personaje } from "./01Personaje.js";
import { GestorDeTurnos } from "./00GestionDeTurnos.js";

export class Guerrero extends Personaje {
  constructor({ nombre, iniciativa }) {
    super({ nombre, iniciativa });
    this.especial = 0;
    this.atk = 60;
    this.def = 40;
  }

  atacar(objetivo) {
    super.atacar(objetivo);
    if (this.constructor.name == "Guerrero") {
      this.especial++;
      if (this.especial == 2) {
        this.atk += 10;
        this.especial = 0;
      }
    }
  }

  blindar() {
    if (this.estaMuerto()) return false;
    if (!GestorDeTurnos.esTurno(this)) return false;

    this.def += 15;
    this.energia -= 30;

    GestorDeTurnos.finalizarTurno();
  }

  iraYopuka(objetivo) {
    if (this.estaMuerto(objetivo)) return false;
    if (!GestorDeTurnos.esTurno(this)) return false;

    let dif = this.atk - objetivo.def;
    if (dif >= 30) {
      objetivo.vida = 0;
      this.energia -= 70;
    }

    GestorDeTurnos.finalizarTurno();
  }
}
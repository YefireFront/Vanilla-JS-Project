import { Personaje } from "./01Personaje.js";
import { GestorDeTurnos } from "./00GestionDeTurnos.js";

export class Hechicero extends Personaje {
  constructor({ nombre, iniciativa }) {
    super({ nombre, iniciativa });
    this.especial = 1;
    this.atk = 70;
    this.def = 30;
  }

  mejorar(objetivo) {
    if (this.estaMuerto()) return false;
    if (!GestorDeTurnos.esTurno(this)) return false;

    objetivo.atk += 10;
    objetivo.def += 10;
    this.energia -= 30;

    GestorDeTurnos.finalizarTurno();
  }

  peste(objetivo) {
    if (this.estaMuerto()) return false;
    if (!GestorDeTurnos.esTurno(this)) return false;

    objetivo.atk -= 20;
    objetivo.def -= 20;
    this.energia -= 70;

    GestorDeTurnos.finalizarTurno();
  }
}
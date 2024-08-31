import { GestorDeTurnos } from "./00GestionDeTurnos.js";


export class Personaje {
    constructor({ nombre, iniciativa }) {
        this.nombre = nombre;
        this.vida = 100;
        this.atk = 0;
        this.def = 0;
        this.energia = 100;
        this.iniciativa = iniciativa; 
    }
    
    estaMuerto(objetivo = false) {
        if (objetivo.vida <= 0 || this.vida <= 0) {
            console.log(`Estás intentando interactuar con personajes muertos`);
            return true;
        }
    }
    
    atacar(objetivo) {
        if (this.estaMuerto(objetivo)) return false;
        if (!GestorDeTurnos.esTurno(this)) return false; // Verificación de turno
  
        if (this.atk > objetivo.def) {
            objetivo.vida = objetivo.vida - (this.atk - objetivo.def);
  
            if (objetivo.vida < 0) {
                objetivo.vida = 0;
            }
        } else {
            console.log(
                `Tu ataque es de ${this.atk} y la defensa del objetivo es mayor, es de ${objetivo.def}, no le causas daño`
            );
        }
        
        GestorDeTurnos.finalizarTurno(); // Finalizar turno después de atacar
    }
}
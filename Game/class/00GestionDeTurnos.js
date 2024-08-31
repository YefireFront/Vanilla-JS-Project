export class GestorDeTurnos {
    static personajes = [];
    static indiceTurnoActual = 0;

    static agregarPersonaje(personaje) {
        this.personajes.push(personaje);
        this.personajes.sort((a, b) => b.iniciativa - a.iniciativa); 
    }

    static esTurno(personaje) {
        if (this.personajes[this.indiceTurnoActual] !== personaje) {
            console.log(`No es tu turno, ${personaje.nombre}. Es el turno de ${this.personajes[this.indiceTurnoActual].nombre}`);
            return false;
        }
        return true;
    }

    static finalizarTurno() {
        this.indiceTurnoActual = (this.indiceTurnoActual + 1) % this.personajes.length;
        console.log(`Es el turno de ${this.personajes[this.indiceTurnoActual].nombre}`);
    }

    static iniciar() {
        console.log(`Comienza la partida. Es el turno de ${this.personajes[this.indiceTurnoActual].nombre}`);
    }
}
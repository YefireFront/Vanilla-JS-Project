class Yeffer {
  activar(lanzador, objetivo) {
    if (this.cooldownActual === 0) {
      if (this.tipo === "Campo") {
        this.efecto(lanzador, Juego.campoEfectos);
      }

      if (this.tipo === "DañoUnico") {
      }

      if (this.tipo === "DañoMultiple") {
      }

      if (this.tipo === "Soporteunico") {
      }

      if (this.tipo === "SoporteMultiple") {
      }

      this.cooldownActual = this.tiempoDeEspera;
    } else {
      console.log(
        `${this.nombre} está en cooldown. Espera ${this.cooldownActual} turnos más.`
      );
    }
  }
}

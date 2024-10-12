class Habilidad {
    constructor(nombre, tiempoDeEspera, tipo, descripcion, efecto) {
      // Inicializa la habilidad con los atributos:
      // - nombre: el nombre de la habilidad.
      // - tiempoDeEspera: los turnos que debe esperar antes de volver a usarse.
      // - tipo: el tipo de habilidad ('Daño' o 'NoDaño').
      // - descripcion: una breve explicación de lo que hace la habilidad.
      // - efecto: el impacto que tiene la habilidad sobre los personajes.
    }
  
    activar(lanzador, objetivo) {
      // Método que recibe:
      // - lanzador: el personaje que lanza la habilidad.
      // - objetivo: el personaje o entidad sobre la que se usa la habilidad.
      // Define qué debe pasar cuando la habilidad se activa y el cooldown actual.
    }
  
    reducirCooldown() {
      // Método que no recibe parámetros.
      // Debería reducir el cooldown de la habilidad, si corresponde.
    }
  
    validarExcesos(personaje1, personaje2) {
      // Método que recibe:
      // - personaje1: el primer personaje a validar.
      // - personaje2: el segundo personaje a validar.
      // Aquí debes definir qué validaciones de estados o excesos aplicar en los personajes.
    }
  }

  
  class Personaje {
    static contadorId = 1;
    
    constructor(nombre, ataque, defensa, velocidad) {
      // Inicializa el personaje con sus atributos:
      // - nombre: nombre del personaje.
      // - ataque: la fuerza del personaje para atacar.
      // - defensa: su capacidad de protegerse.
      // - velocidad: su rapidez.
      // - vida: la cantidad de vida con la que empieza (100 por defecto).
      // El personaje también tiene arrays para debilitar y fortalecer, habilidades y un equipo asignado.
    }
  
    estaMuero() {
      // Método que no recibe parámetros.
      // Devuelve true si el personaje está muerto (su vida es 0 o menos), y false en caso contrario.
    }
  
    validarNegativos() {
      // Método que no recibe parámetros.
      // Asegura que los atributos de vida, defensa y ataque no sean negativos.
      // Si alguno de estos valores es menor que 0, se ajusta a un mínimo de 0.
    }
  
    validarPositivos() {
      // Método que no recibe parámetros.
      // Valida que los atributos no superen ciertos límites.
      // Por ejemplo, la vida no puede exceder 100, y la defensa no puede ser mayor a 60.
    }
  
    static validarExcesos(personaje1, personaje2) {
      // Método estático que recibe dos personajes.
      // Valida tanto los valores negativos como los positivos de ambos personajes.
    }
  
    Atacar(objetivo) {
      // Método que recibe:
      // - objetivo: el personaje que recibirá el ataque.
      // Define las condiciones bajo las cuales el ataque será exitoso.
      // Considera si el objetivo está muerto, si es un aliado, o si su defensa es mayor que el ataque.
    }
  
    usarHabilidad(nombreHabilidad, objetivo) {
      // Método que recibe:
      // - nombreHabilidad: el nombre de la habilidad que se quiere usar.
      // - objetivo: el personaje sobre el que se va a aplicar la habilidad.
      // Define qué pasa cuando se usa una habilidad, si está en cooldown,
      // si el objetivo es aliado o enemigo, y si el objetivo está vivo o muerto.
    }
  
    activarEfectos() {
      // Método que no recibe parámetros.
      // Activa los efectos de debilitar o fortalecer en el personaje.
      // Cada efecto se aplicará sobre el personaje en el turno correspondiente.
    }
  }

  
  class Juego {
    static equipo1 = [];
    static equipo2 = [];
    static turnoActualEquipo1 = 0;
    static turnoActualEquipo2 = 0;
    static turnoEquipo = 0;
    static personajeActual = null;
    static campoEfectos = [];
  
    static agregarPersonaje(equipo, personaje) {
      // Método que recibe:
      // - equipo: indica a qué equipo se va a agregar el personaje (1 o 2).
      // - personaje: el objeto del personaje que se va a agregar.
      // Agrega el personaje al equipo especificado si hay espacio disponible (máximo 3 personajes).
    }
  
    static iniciarJuego() {
      // Método que no recibe parámetros.
      // Inicializa el juego eligiendo aleatoriamente qué equipo comienza el turno.
      // Establece el personaje actual según el equipo que inicia.
    }
  
    static obtenerSiguientePersonaje(equipo, turnoActual) {
      // Método que recibe:
      // - equipo: el equipo del que se está buscando el siguiente personaje.
      // - turnoActual: el turno actual del personaje en el equipo.
      // Busca y devuelve el siguiente personaje que esté vivo.
      // Retorna un objeto con el personaje y el índice del siguiente turno.
    }
  
    static cambiarTurno() {
      // Método que no recibe parámetros.
      // Cambia el turno entre los equipos.
      // Verifica si hay un ganador antes de cambiar de turno.
      // Actualiza el cooldown de las habilidades del personaje actual y activa los efectos del personaje.
    }
  
    static verificarVictoria() {
      // Método que no recibe parámetros.
      // Verifica si algún equipo ha ganado.
      // Devuelve true si un equipo ha ganado y muestra el mensaje correspondiente.
    }
  }
  
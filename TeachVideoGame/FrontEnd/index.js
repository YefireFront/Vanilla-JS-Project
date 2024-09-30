const body = document.querySelector('body');
const escenario = document.querySelector('.escenario');
const escenarioEquipo1 = document.querySelector('.escenario__equipo1');
const escenarioEquipo2 = document.querySelector('.escenario__equipo2');


function crearPersonaje(personaje, escenario, posicion) {
    // Crear contenedor del personaje
    const personajeDiv = document.createElement("div");
    personajeDiv.classList.add("personaje", `p${personaje.id}`, `${personaje.nombre}`, `lugar${posicion}`);
    escenario.appendChild(personajeDiv);
  
    // Crear barra de vida
    const barraVida = document.createElement("div");
    barraVida.classList.add("contenedor_barraVida", `personaje_${personaje.id}`);
    personajeDiv.appendChild(barraVida);
  
    const porcentajeVida = document.createElement("span");
    porcentajeVida.classList.add("porcentajeVida");
    porcentajeVida.setAttribute("style", `width: ${personaje.vida}%`);
    barraVida.appendChild(porcentajeVida);
  
    const numeroPorcentaje = document.createElement("p");
    numeroPorcentaje.classList.add("numeroPorcentaje");
    numeroPorcentaje.textContent = `${personaje.vida} / 100`;
    barraVida.appendChild(numeroPorcentaje);
  
    // Crear sección de ataque y defensa
    const seccionEstadisticas = document.createElement("div");
    const defensaSeccion = document.createElement("div");
    const ataqueSeccion = document.createElement("div");
    const iconoDefensa = document.createElement("i");
    const iconoAtaque = document.createElement("i");
    const cantidadDefensa = document.createElement("p");
    const cantidadAtaque = document.createElement("p");
  
    seccionEstadisticas.classList.add("seccionestadisticas");
    defensaSeccion.classList.add("poder", "defensaSeccion");
    ataqueSeccion.classList.add("poder", "ataqueSeccion");
    iconoDefensa.classList.add("fa-solid", "fa-shield");
    iconoAtaque.classList.add("fa-solid", "fa-hand-back-fist");
    cantidadDefensa.classList.add("cantidadDefensa");
    cantidadAtaque.classList.add("cantidadAtaque");
  
    cantidadDefensa.textContent = `${personaje.ataque}`;
    cantidadAtaque.textContent = `${personaje.defensa}`;
  
    barraVida.appendChild(seccionEstadisticas);
    defensaSeccion.appendChild(iconoDefensa);
    defensaSeccion.appendChild(cantidadDefensa);
    ataqueSeccion.appendChild(iconoAtaque);
    ataqueSeccion.appendChild(cantidadAtaque);
    seccionEstadisticas.appendChild(defensaSeccion);
    seccionEstadisticas.appendChild(ataqueSeccion);
  
    // Crear sección de condiciones
    const seccionCondicion = document.createElement("div");
    seccionCondicion.classList.add("seccionCondicion");
    barraVida.appendChild(seccionCondicion);
  
    // Aquí podrías agregar la lógica para añadir condiciones positivas y negativas
  }
  


  Juego.equipo1.forEach((personaje, i) => {
    crearPersonaje(personaje, escenarioEquipo1, i + 1);
  });
  
  Juego.equipo2.forEach((personaje, i) => {
    crearPersonaje(personaje, escenarioEquipo2, i + 4); // Posiciones diferentes para el equipo 2
  });
  
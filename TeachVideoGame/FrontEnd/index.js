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
    const numeroPorcentaje = document.createElement("p");
    
    porcentajeVida.classList.add("porcentajeVida");
    numeroPorcentaje.classList.add("numeroPorcentaje");
    porcentajeVida.setAttribute("style", `width: ${personaje.vida}%`);
    numeroPorcentaje.textContent = `${personaje.vida} / 100`;
    
    barraVida.appendChild(porcentajeVida);
    barraVida.appendChild(numeroPorcentaje);
  
    // Crear sección de ataque y defensa
    const seccionEstadisticas = document.createElement("div"); //creando
    const defensaSeccion = document.createElement("div"); //Creando
    const ataqueSeccion = document.createElement("div");//Creando
    const iconoDefensa = document.createElement("i");//Creando
    const iconoAtaque = document.createElement("i");//Creando
    const cantidadDefensa = document.createElement("p");//Creando
    const cantidadAtaque = document.createElement("p");//Creando
    
    seccionEstadisticas.classList.add("seccionestadisticas");//Clases
    defensaSeccion.classList.add("poder", "defensaSeccion");//Clases
    ataqueSeccion.classList.add("poder", "ataqueSeccion");//Clases
    iconoDefensa.classList.add("fa-solid", "fa-shield");//Clases
    iconoAtaque.classList.add("fa-solid", "fa-hand-back-fist");
    cantidadDefensa.classList.add("cantidadDefensa");//Clases
    cantidadAtaque.classList.add("cantidadAtaque");//Clases
    
    cantidadDefensa.textContent = `${personaje.ataque}`;
    cantidadAtaque.textContent = `${personaje.defensa}`;
  
    personajeDiv.appendChild(seccionEstadisticas);
    seccionEstadisticas.appendChild(defensaSeccion);
    seccionEstadisticas.appendChild(ataqueSeccion);
    defensaSeccion.appendChild(iconoDefensa);
    defensaSeccion.appendChild(cantidadDefensa);
    ataqueSeccion.appendChild(iconoAtaque);
    ataqueSeccion.appendChild(cantidadAtaque);
  
    // Crear sección de condiciones
    const seccionCondicion = document.createElement("div");
    const condicionNegativas = document.createElement("div");
    const condicionPositivas = document.createElement("div");
    const iconoCondicionNegativas = document.createElement("i");
    const iconoCondicionPositivas = document.createElement("i");
    const cantidadCondicionNegativasTurnos = document.createElement("p");
    const cantidadCondicionPositivasTurnos = document.createElement("p");
    seccionCondicion.classList.add("seccionCondicion");
    personajeDiv.appendChild(seccionCondicion);


  
    // Aquí podrías agregar la lógica para añadir condiciones positivas y negativas
  }
  


  Juego.equipo1.forEach((personaje, i) => {
    crearPersonaje(personaje, escenarioEquipo1, i + 1);
  });
  
  Juego.equipo2.forEach((personaje, i) => {
    crearPersonaje(personaje, escenarioEquipo2, i + 4); // Posiciones diferentes para el equipo 2
  });
  
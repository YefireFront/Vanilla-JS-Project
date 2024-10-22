const body = document.querySelector("body");
const escenario = document.querySelector(".escenario");
const escenarioEquipo1 = document.querySelector(".escenario__equipo1");
const escenarioEquipo2 = document.querySelector(".escenario__equipo2");

function crearPersonaje(personaje, escenario, posicion) {
  // Crear contenedor del personaje
  const personajeDiv = document.createElement("div");
  personajeDiv.classList.add("personaje",`lugar${posicion}`);
  personajeDiv.setAttribute("id", `${personaje.id}`);
  escenario.appendChild(personajeDiv);

  //seccion debuf fuego
  const seccionDebufFuego = document.createElement("div");
  const imagenfuego = document.createElement("img");
  imagenfuego.src = `./FrontEnd/assets/img/condicion/fuego.gif`;
  seccionDebufFuego.classList.add("seccionDebufFuego");
  personajeDiv.appendChild(seccionDebufFuego);
  seccionDebufFuego.appendChild(imagenfuego);

  //seccion debuf veneno
  const seccionDebufVeneno = document.createElement("div");
  const imagenveneno = document.createElement("img");
  imagenveneno.src = `./FrontEnd/assets/img/condicion/veneno.gif`;
  seccionDebufVeneno.classList.add("seccionDebufVeneno");
  personajeDiv.appendChild(seccionDebufVeneno);
  seccionDebufVeneno.appendChild(imagenveneno);

  //seccion debuf caravela
  const seccionDebufCaravela = document.createElement("div");
  const imagencaravela = document.createElement("img");
  imagencaravela.src = `./FrontEnd/assets/img/condicion/skull.gif`;
  seccionDebufCaravela.classList.add("seccionDebufCaravela");
  personajeDiv.appendChild(seccionDebufCaravela);
  seccionDebufCaravela.appendChild(imagencaravela);



  // Crear barra de vida
  const seccionVida = document.createElement("div");
  const porcentajeVida = document.createElement("span");
  const numeroPorcentaje = document.createElement("p");

  seccionVida.classList.add("seccionVida");
  porcentajeVida.classList.add("porcentajeVida");
  porcentajeVida.setAttribute("style", `width: ${personaje.vida}%`);
  numeroPorcentaje.classList.add("numeroPorcentaje");
  numeroPorcentaje.textContent = `${personaje.vida} / 100`;

  seccionVida.appendChild(porcentajeVida);
  porcentajeVida.appendChild(numeroPorcentaje);
  personajeDiv.appendChild(seccionVida);

  // Crear sección de ataque y defensa
  const seccionEstadisticas = document.createElement("div"); //creando
  const defensaSeccion = document.createElement("div"); //Creando
  const ataqueSeccion = document.createElement("div"); //Creando
  const iconoDefensa = document.createElement("i"); //Creando
  const iconoAtaque = document.createElement("i"); //Creando
  const cantidadDefensa = document.createElement("p"); //Creando
  const cantidadAtaque = document.createElement("p"); //Creando

  seccionEstadisticas.classList.add("seccionestadisticas"); //Clases
  defensaSeccion.classList.add("poder", "defensaSeccion"); //Clases
  ataqueSeccion.classList.add("poder", "ataqueSeccion"); //Clases
  iconoDefensa.classList.add("fa-solid", "fa-shield"); //Clases
  iconoAtaque.classList.add("fa-solid", "fa-hand-back-fist");
  cantidadDefensa.classList.add("cantidadDefensa"); //Clases
  cantidadAtaque.classList.add("cantidadAtaque"); //Clases

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
  // const seccionCondicion = document.createElement("div");
  // const condicionNegativas = document.createElement("div");
  // const condicionPositivas = document.createElement("div");
  // const iconoCondicionNegativas = document.createElement("i");
  // const iconoCondicionPositivas = document.createElement("i");
  // const cantidadCondicionNegativasTurnos = document.createElement("p");
  // const cantidadCondicionPositivasTurnos = document.createElement("p");
  // seccionCondicion.classList.add("seccionCondicion");
  // iconoCondicionNegativas.classList.add(
  //   "condicion",
  //   "fa-solid",
  //   "fa-hand-back-fist"
  // );
  // iconoCondicionPositivas.classList.add("condicion", "fa-solid", "fa-fire");
  // condicionNegativas.classList.add("condicionNegativas");
  // condicionPositivas.classList.add("condicionPositivas");

  // personajeDiv.appendChild(seccionCondicion);
  // seccionCondicion.appendChild(condicionNegativas);
  // seccionCondicion.appendChild(condicionPositivas);
  // condicionNegativas.appendChild(iconoCondicionNegativas);
  // condicionPositivas.appendChild(iconoCondicionPositivas);
  // iconoCondicionNegativas.appendChild(cantidadCondicionNegativasTurnos);
  // iconoCondicionPositivas.appendChild(cantidadCondicionPositivasTurnos);

  //contendor de personajes
  const ubicacionPersonajePrincipal = document.createElement("div");
  ubicacionPersonajePrincipal.classList.add("ubicacionPersonajePrincipal");
  personajeDiv.appendChild(ubicacionPersonajePrincipal);

  const ubicacionPersonajeEnemigo = document.createElement("div");
  ubicacionPersonajeEnemigo.classList.add("ubicacionPersonajeEnemigo");
  personajeDiv.appendChild(ubicacionPersonajeEnemigo);

  const imagenPersonajeEnemigo = document.createElement("img");
  imagenPersonajeEnemigo.src = `./FrontEnd/assets/img/${personaje.id}/Quieto.gif`;
  ubicacionPersonajePrincipal.appendChild(imagenPersonajeEnemigo);



  imagenPersonajeEnemigo.addEventListener( "click", (e) => {
    console.log(personaje)
  })
}

Juego.equipo1.forEach((personaje, i) => {
  crearPersonaje(personaje, escenarioEquipo1, i + 1);
});

Juego.equipo2.forEach((personaje, i) => {
  crearPersonaje(personaje, escenarioEquipo2, i + 4); // Posiciones diferentes para el equipo 2
});



function actualizarInterfaz() {

  actualizarVida();


}

function actualizarVida() {

  const allPersonajesHMTL = document.querySelectorAll('.personaje');
  const allPersonajesObjetos = Juego.equipo1.concat(Juego.equipo2);

  allPersonajesHMTL.forEach((personaje) => {
    const personajeObjeto = allPersonajesObjetos.find((personajeObjeto) => personajeObjeto.id == personaje.id);
    if (personajeObjeto) {
      let porcentajeVida = personaje.querySelector('.porcentajeVida');
      let numeroPorcentaje = personaje.querySelector('.numeroPorcentaje');
      porcentajeVida.setAttribute('style', `width: ${personajeObjeto.vida}%`);
      numeroPorcentaje.textContent = `${personajeObjeto.vida} / 100`;
    }
 
  })

}


actualizarInterfaz()
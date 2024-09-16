// console.log(Juego.equipo1);
// console.log(Juego.equipo2);

//seleccionado body
const body = document.querySelector("body");
// selecioando escenario principal
const esenario = document.querySelector(".esenario");

// creando escenario Left / 1
const escenarioLeft = document.createElement("div");
escenarioLeft.classList.add("esenario__left");
esenario.appendChild(escenarioLeft);

const informacion_left = document.createElement("div");
informacion_left.classList.add("informacion_left")
escenarioLeft.appendChild(informacion_left);


// creando escenario right  / 2
const escenarioright = document.createElement("div");
escenarioright.classList.add("esenario_right");
esenario.appendChild(escenarioright);

const informacion_right = document.createElement("div");
informacion_right.classList.add("informacion_right")
escenarioright.appendChild(informacion_right);



Juego.equipo1.forEach((personaje, index) => {
  // creando personajes en el escenario Left / 1

  const personaje1 = document.createElement("div");
  personaje1.classList.add("personaje", `p${index + 1}`);
  escenarioLeft.appendChild(personaje1);



  // Creacion personaje principal
  const peronaje_principal = document.createElement("div");
  peronaje_principal.classList.add("personaje_Principal");
  peronaje_principal.id = personaje.id;
  personaje1.appendChild(peronaje_principal);

  // Creacion personaje secundario

  const personaje_Secundario = document.createElement("div");
  personaje_Secundario.classList.add("personaje_Secundario");
  personaje1.appendChild(personaje_Secundario);

  // Creacion imagen personaje principal


  const imagen_personaje = document.createElement("img");
  imagen_personaje.src = `./players/${personaje.id}/Quieto.gif`;
  peronaje_principal.appendChild(imagen_personaje);

  // creacion sombra
  const Shadow = document.createElement("div");
  Shadow.classList.add("shadow_left");
  peronaje_principal.appendChild(Shadow);

  // Creacion personaje secundario
  const peronaje_secundario = document.createElement("div");
  peronaje_secundario.classList.add("personaje_Secundario");

  //crear imagen personaje secundario
  const imagen_personaje_secundario = document.createElement("img");
  personaje_Secundario.appendChild(imagen_personaje_secundario);


});

Juego.equipo2.forEach((personaje, index) => {
  // creando personajes en el escenario right / 1

  const personaje1 = document.createElement("div");
  personaje1.classList.add("personaje", `p${index + 4}`);
  escenarioright.appendChild(personaje1);

  // Creacion personaje secundario

  const personaje_Secundario = document.createElement("div");
  personaje_Secundario.classList.add("personaje_Secundario");
  personaje1.appendChild(personaje_Secundario);

  // Creacion personaje principal
  const peronaje_principal = document.createElement("div");
  peronaje_principal.classList.add("personaje_Principal");
  peronaje_principal.id = personaje.id;
  personaje1.appendChild(peronaje_principal);

  //crear imagen personaje secundario
  const imagen_personaje_secundario = document.createElement("img");
  personaje_Secundario.appendChild(imagen_personaje_secundario);

  //crear imagen personaje principal
  const imagen_personaje = document.createElement("img");
  imagen_personaje.src = `./players/${personaje.id}/Quieto.gif`;
  peronaje_principal.appendChild(imagen_personaje);

  const Shadow = document.createElement("div");
  Shadow.classList.add("shadow_right");
  peronaje_principal.appendChild(Shadow);

  // Creacion personaje secundario
  const peronaje_secundario = document.createElement("div");
  peronaje_secundario.classList.add("personaje_Secundario");

});




const informacion = document.createElement("div");
  const stats = document.createElement("div");
    const nombreJugadorActual = document.createElement("h2");
    const vidaJugadorActual = document.createElement("h2");
    const ataqueJugadorActual = document.createElement("h2");
    const defensaJugadorActual = document.createElement("h2");

  const habilidades = document.createElement("div");
    const habilidad1 = document.createElement("button");
    const habilidad2 = document.createElement("button");



habilidades.classList.add("habilidades");
stats.classList.add("stats");
informacion.classList.add("informacion");


nombreJugadorActual.textContent = Juego.personajeActual.nombre;
vidaJugadorActual.textContent = `Vida: ${Juego.personajeActual.vida}`;
ataqueJugadorActual.textContent = `Ataque: ${Juego.personajeActual.ataque}`;
defensaJugadorActual.textContent = `Defensa: ${Juego.personajeActual.defensa}`;
habilidad1.textContent = Juego.personajeActual.habilidades[0].nombre;
habilidad2.textContent = Juego.personajeActual.habilidades[1].nombre;


body.appendChild(informacion);
  informacion.appendChild(stats);
    stats.appendChild(nombreJugadorActual);
    stats.appendChild(vidaJugadorActual);
    stats.appendChild(ataqueJugadorActual);
    stats.appendChild(defensaJugadorActual);
  informacion.appendChild(habilidades);
    habilidades.appendChild(habilidad1);
    habilidades.appendChild(habilidad2);






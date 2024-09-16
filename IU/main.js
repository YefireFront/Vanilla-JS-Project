console.log(Juego.equipo1);
console.log(Juego.equipo2);

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

const personajeTurno = 2

//Cambiar fondo de personaje Turno

// const background = document.querySelector(".backGround");
// background.children[1].children[0].src = `/players/${personajeTurno}/Wallpaper.png`
// console.log(background.children[1].children[0]);
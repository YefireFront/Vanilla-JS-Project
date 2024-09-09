console.log(Juego.equipo1);
console.log(Juego.equipo2);

// selecioando escenario principal
const esenario = document.querySelector(".esenario");
console.log(esenario);

// creando escenario Left / 1
const escenarioLeft = document.createElement("div");
escenarioLeft.classList.add("esenario__left");
esenario.appendChild(escenarioLeft);

// creando escenario right  / 2
const escenarioright = document.createElement("div");
escenarioright.classList.add("esenario_right");
esenario.appendChild(escenarioright);

Juego.equipo1.forEach((personaje, index) => {
  // creando personajes en el escenario Left / 1

  const personaje1 = document.createElement("div");
  personaje1.classList.add("personaje", `p${index + 1}`);
  escenarioLeft.appendChild(personaje1);

  //boton poderes 
    const boton_poderes = document.createElement("div");
    boton_poderes.classList.add("poderes");
    const boton_podere_1 = document.createElement("button");
    const boton_podere_2 = document.createElement("button");
    boton_poderes.appendChild(boton_podere_1);
    boton_poderes.appendChild(boton_podere_2);
    personaje1.appendChild(boton_poderes);

  // Creacion personaje principal
  const peronaje_principal = document.createElement("div");
  peronaje_principal.classList.add("personaje_Principal");
  personaje1.appendChild(peronaje_principal);

  const personaje_Secundario = document.createElement("div");
  personaje_Secundario.classList.add("personaje_Secundario");
  personaje1.appendChild(personaje_Secundario);

  const imagen_personaje = document.createElement("img");
  imagen_personaje.src = `./players/${personaje.nombre}/${personaje.nombre}_left.gif`;
  peronaje_principal.appendChild(imagen_personaje);

  const Shadow = document.createElement("div");
  Shadow.classList.add("shadow_left");
  peronaje_principal.appendChild(Shadow);

  // Creacion personaje secundario
  const peronaje_secundario = document.createElement("div");
  peronaje_secundario.classList.add("personaje_Secundario");

  console.log(personaje1);
});
Juego.equipo2.forEach((personaje, index) => {
  // creando personajes en el escenario Left / 1

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
  personaje1.appendChild(peronaje_principal);

  const imagen_personaje = document.createElement("img");
  imagen_personaje.src = `./players/${personaje.nombre}/${personaje.nombre}_right.gif`;
  peronaje_principal.appendChild(imagen_personaje);

  const Shadow = document.createElement("div");
  Shadow.classList.add("shadow_right");
  peronaje_principal.appendChild(Shadow);

  // Creacion personaje secundario
  const peronaje_secundario = document.createElement("div");
  peronaje_secundario.classList.add("personaje_Secundario");

  console.log(personaje1);
});

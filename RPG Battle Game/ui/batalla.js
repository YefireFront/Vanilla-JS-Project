const personajesDeElEquipo1 = document.querySelectorAll(
  ".esenarioEquipo1 .personaje"
);
const personajesDeElEquipo2 = document.querySelectorAll(
  ".esenario_right .personaje"
);

function animacionEquipo1(objetivo, lugarDeAtaque) {
  lugarDeAtaque.children[0].src = `./players/${Juego.personajeActual.id}/Atacando.gif`;

  objetivo.classList.add("daño");
  esenario.classList.add("temblor");

  setTimeout(() => {
    objetivo.classList.remove("daño");
    esenario.classList.remove("temblor");
  }, 2300);

  setTimeout(() => {
    lugarDeAtaque.children[0].src = "";
  }, 1500);

  personajesDeElEquipo2.forEach((elemento) => {
    if (elemento.classList.contains(`p${Juego.personajeActual.id}`)) {
      elemento.style.display = "none";
      setTimeout(() => {
        elemento.style.display = "flex";
      }, 1500);
    }
  });
}

function animacionEquipo2(objetivo, lugarDeAtaque) {
  lugarDeAtaque.children[0].src = `./players/${Juego.personajeActual.id}/Atacando.gif`;

  objetivo.classList.add("daño");
  esenario.classList.add("temblor");

  setTimeout(() => {
    objetivo.classList.remove("daño");
    esenario.classList.remove("temblor");
  }, 2300);

  setTimeout(() => {
    lugarDeAtaque.children[0].src = "";
  }, 1500);

  personajesDeElEquipo1.forEach((elemento) => {
    if (elemento.classList.contains(`p${Juego.personajeActual.id}`)) {
      elemento.style.display = "none";
      setTimeout(() => {
        elemento.style.display = "flex";
      }, 1500);
    }
  });
}

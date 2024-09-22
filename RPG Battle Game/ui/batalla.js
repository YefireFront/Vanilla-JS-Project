const personajesDeElEquipo1 = document.querySelectorAll(".esenarioEquipo1 .personaje");
const personajesDeElEquipo2 = document.querySelectorAll(".esenarioEquipo2 .personaje");

function animacionEquipo1(objetivo, lugarDeAtaque,lugarPropio, habilidadSeleccionada, personajeSeleccionado) {
  

  console.log(objetivo);
  console.log(lugarDeAtaque);
  console.log(lugarPropio);
  console.log(habilidadSeleccionada);
  console.log(personajeSeleccionado);


  if (habilidadSeleccionada == "Atacar") {
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

    return true
  
    
  }
  
  const tipoHabilidad = Juego.personajeActual.habilidades.find((habilidad) => habilidad.nombre === habilidadSeleccionada);
 
 if (tipoHabilidad.tipo === "Daño") {
   console.log(` Tipo de habilidad: ${tipoHabilidad.tipo}`);
   lugarDeAtaque.children[0].src = `./players/${Juego.personajeActual.id}/Atacando.gif`;
   objetivo.classList.add("daño");
   esenario.classList.add("temblor");
  }
  
  if (tipoHabilidad.tipo === "Soporte") {
    lugarPropio.children[0].src = `./players/${Juego.personajeActual.id}/Soporte.gif`;
    setTimeout(() => {
      lugarPropio.children[0].src = `./players/${personajeSeleccionado.id}/Quieto.gif`;
    }, 1500);
    objetivo.classList.add("soporte");
    
  }
  
  


  setTimeout(() => {
    objetivo.classList.remove("daño");
    esenario.classList.remove("temblor");
  }, 2300);

  setTimeout(() => {
    objetivo.classList.remove("soporte");
  }, 1500);

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


function validaTipoHabilidad(nombreHabilidad, personaje) {
  const tipoHabilidad = personaje.habilidades[0].find((habilidad) => habilidad.nombre === nombreHabilidad);
  if (juego.personajeActual) {
    
  }
  if (tipo === "Daño") {
    return true;
  }
  if (tipo === "Defensa") {
    return true;
  }
  if (tipo === "Velocidad") {
    return true;
  }
}
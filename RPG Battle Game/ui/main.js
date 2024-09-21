//seleccionado body
const body = document.querySelector("body");

// selecioando escenario principal
const esenario = document.querySelector(".esenario");

// creando escenario equipo 1
const escenarioEquipo1 = document.querySelector(".esenarioEquipo1");

// creando escenario equipo 2
const escenarioEquipo2 = document.querySelector(".esenarioEquipo2");

// creando escenario right  / 2

let habilidadSeleccionada = null;

Juego.equipo1.forEach((personaje) => {
  // creando personajes en el escenario Left / 1

  const personaje1 = document.createElement("div");
  personaje1.classList.add("personaje", `p${personaje.id}`);
  escenarioEquipo1.appendChild(personaje1);

  // crear barra de vida
  const barraVida = document.createElement("div");
  barraVida.classList.add("contenedor_barraVida", `personaje_${personaje.id}`);
  personaje1.appendChild(barraVida);

  const porcentajeVida = document.createElement("span");
  porcentajeVida.classList.add("porcentajeVida");
  porcentajeVida.setAttribute("style", `width: ${personaje.vida}%`);
  barraVida.appendChild(porcentajeVida);

  const numeroPorcentaje = document.createElement("p");
  numeroPorcentaje.classList.add("numeroPorcentaje");
  numeroPorcentaje.textContent = `${personaje.vida} / 100`;
  barraVida.appendChild(numeroPorcentaje);

  // crear seccion poderes
  const seccionPoder = document.createElement("div");
  seccionPoder.classList.add("seccionPoder");
  barraVida.appendChild(seccionPoder);

  const poder1 = document.createElement("div");
  poder1.classList.add("poder", "poder1");
  const imagenPoder = document.createElement("img");
  imagenPoder.src = `./players/${personaje.id}/poderes/poder1.png`;
  poder1.appendChild(imagenPoder);

  const poder2 = document.createElement("div");
  poder2.classList.add("poder", "poder2");
  const imagenPoder2 = document.createElement("img");
  imagenPoder2.src = `./players/${personaje.id}/poderes/poder2.png`;
  poder2.appendChild(imagenPoder2);

  // seccionPoder.appendChild(poder1);
  // seccionPoder.appendChild(poder2);

  // crear seccion condicion
  const seccionCondicion = document.createElement("div");
  seccionCondicion.classList.add("seccionCondicion");
  barraVida.appendChild(seccionCondicion);

  const condicion1 = document.createElement("div");
  condicion1.classList.add("condicion", "condicion1");
  const imagenCondicion = document.createElement("img");
  imagenCondicion.src = `./players/condicion/condicion1.gif`;
  condicion1.appendChild(imagenCondicion);

  const condicion2 = document.createElement("div");
  condicion2.classList.add("condicion", "condicion2");
  const imagenCondicion2 = document.createElement("img");
  imagenCondicion2.src = `./players/condicion/condicion2.gif`;
  condicion2.appendChild(imagenCondicion2);

  const condicion3 = document.createElement("div");
  condicion3.classList.add("condicion", "condicion3");
  const imagenCondicion3 = document.createElement("img");
  imagenCondicion3.src = `./players/condicion/condicion3.gif`;
  condicion3.appendChild(imagenCondicion3);

  // seccionCondicion.appendChild(condicion1);
  // seccionCondicion.appendChild(condicion2);
  // seccionCondicion.appendChild(condicion3);

  //idetifcador de turno
  const turno = document.createElement("div");
  turno.classList.add("turno", "turnoEquipo1");
  personaje1.appendChild(turno);

  const imagenTurno = document.createElement("img");
  imagenTurno.src = `./players/condicion/puño.gif`;
  turno.appendChild(imagenTurno);

  // Creacion personaje principal
  const peronajePrincipal = document.createElement("div");
  peronajePrincipal.classList.add("personaje_Principal");
  peronajePrincipal.id = personaje.id;
  personaje1.appendChild(peronajePrincipal);

  // Creacion personaje secundario

  const personajeSecundario = document.createElement("div");
  personajeSecundario.classList.add("personajeSecundario");
  personaje1.appendChild(personajeSecundario);

  // Creacion imagen personaje principal

  const imagenPersonaje = document.createElement("img");
  imagenPersonaje.src = `./players/${personaje.id}/Quieto.gif`;
  peronajePrincipal.appendChild(imagenPersonaje);

  // creacion sombra
  // const Shadow = document.createElement("div");
  // Shadow.classList.add("shadow_left");
  // peronajePrincipal.appendChild(Shadow);

  // Creacion personaje secundario
  const peronajeSecundario = document.createElement("div");
  peronajeSecundario.classList.add("personajeSecundario");

  //crear imagen personaje secundario
  const imagenPersonajeSecundario = document.createElement("img");
  personajeSecundario.appendChild(imagenPersonajeSecundario);

  imagenPersonaje.addEventListener("click", (e) => {
    const idPersonaje = e.target.parentElement.id;
    const personaje = Juego.equipo1.find(
      (personaje) => personaje.id == idPersonaje
    );

    if (habilidadSeleccionada) {
      if (habilidadSeleccionada === "Atacar") {
        let accionCompletada = Juego.personajeActual.Atacar(personaje);
        habilidadSeleccionada = null;

        if (accionCompletada) {
          animacionEquipo1(e.target, e.target.parentElement.nextElementSibling);
          desactivarBotones();
        }

        desactivarBotones();
      } else {
        desactivarBotones();
      }

      if (habilidadSeleccionada != null && habilidadSeleccionada != "Atacar") {
        let accionCompletada = Juego.personajeActual.usarHabilidad(habilidadSeleccionada,personaje);
        // habilidadSeleccionada = null;

        if (accionCompletada) {
          animacionEquipo1(e.target, e.target.parentElement.nextElementSibling, habilidadSeleccionada);
          desactivarBotones();
        }
        desactivarBotones();
      }
    }
  });
});

Juego.equipo2.forEach((personaje) => {
  // creando personajes en el escenario right / 1

  const personaje1 = document.createElement("div");
  personaje1.classList.add("personaje", `p${personaje.id}`);
  escenarioEquipo2.appendChild(personaje1);

  // crear barra de vida
  const barraVida = document.createElement("div");
  barraVida.classList.add("contenedor_barraVida", `personaje_${personaje.id}`);
  personaje1.appendChild(barraVida);

  const porcentajeVida = document.createElement("span");
  porcentajeVida.classList.add("porcentajeVida");
  porcentajeVida.setAttribute("style", `width: ${personaje.vida}%`);
  barraVida.appendChild(porcentajeVida);

  const numeroPorcentaje = document.createElement("p");
  numeroPorcentaje.classList.add("numeroPorcentaje");
  numeroPorcentaje.textContent = `${personaje.vida} / 100`;
  barraVida.appendChild(numeroPorcentaje);

  // crear seccion poderes
  const seccionPoder = document.createElement("div");
  seccionPoder.classList.add("seccionPoder");
  barraVida.appendChild(seccionPoder);

  const poder1 = document.createElement("div");
  poder1.classList.add("poder", "poder1");
  const imagenPoder = document.createElement("img");
  imagenPoder.src = `./players/${personaje.id}/poderes/poder1.png`;
  poder1.appendChild(imagenPoder);

  const poder2 = document.createElement("div");
  poder2.classList.add("poder", "poder2");
  const imagenPoder2 = document.createElement("img");
  imagenPoder2.src = `./players/${personaje.id}/poderes/poder2.png`;
  poder2.appendChild(imagenPoder2);

  // seccionPoder.appendChild(poder1);
  // seccionPoder.appendChild(poder2);

  // crear seccion condicion
  const seccionCondicion = document.createElement("div");
  seccionCondicion.classList.add("seccionCondicion");
  barraVida.appendChild(seccionCondicion);

  const condicion1 = document.createElement("div");
  condicion1.classList.add("condicion", "condicion1");
  const imagenCondicion = document.createElement("img");
  imagenCondicion.src = `./players/condicion/condicion1.gif`;
  condicion1.appendChild(imagenCondicion);

  const condicion2 = document.createElement("div");
  condicion2.classList.add("condicion", "condicion2");
  const imagenCondicion2 = document.createElement("img");
  imagenCondicion2.src = `./players/condicion/condicion2.gif`;
  condicion2.appendChild(imagenCondicion2);

  const condicion3 = document.createElement("div");
  condicion3.classList.add("condicion", "condicion3");
  const imagenCondicion3 = document.createElement("img");
  imagenCondicion3.src = `./players/condicion/condicion3.gif`;
  condicion3.appendChild(imagenCondicion3);

  // seccionCondicion.appendChild(condicion1);
  // seccionCondicion.appendChild(condicion2);
  // seccionCondicion.appendChild(condicion3);

  // Creacion personaje secundario

  const personajeSecundario = document.createElement("div");
  personajeSecundario.classList.add("personajeSecundario");
  personaje1.appendChild(personajeSecundario);

  // Creacion personaje principal
  const peronajePrincipal = document.createElement("div");
  peronajePrincipal.classList.add("personaje_Principal");
  peronajePrincipal.id = personaje.id;
  personaje1.appendChild(peronajePrincipal);

  //idetifcador de turno
  const turno = document.createElement("div");
  turno.classList.add("turno", "turnoEquipo2");
  personaje1.appendChild(turno);

  const imagenTurno = document.createElement("img");
  imagenTurno.src = `./players/condicion/puño.gif`;
  turno.appendChild(imagenTurno);

  //crear imagen personaje secundario
  const imagenPersonajeSecundario = document.createElement("img");
  personajeSecundario.appendChild(imagenPersonajeSecundario);

  //crear imagen personaje principal
  const imagenPersonaje = document.createElement("img");
  imagenPersonaje.src = `./players/${personaje.id}/Quieto.gif`;
  peronajePrincipal.appendChild(imagenPersonaje);

  // const Shadow = document.createElement("div");
  // Shadow.classList.add("shadow_right");
  // peronajePrincipal.appendChild(Shadow);

  // Creacion personaje secundario
  const peronajeSecundario = document.createElement("div");
  peronajeSecundario.classList.add("personajeSecundario");

  imagenPersonaje.addEventListener("click", (e) => {
    const idPersonaje = e.target.parentElement.id;
    const personaje = Juego.equipo2.find(
      (personaje) => personaje.id == idPersonaje
    );

    if (habilidadSeleccionada) {
      if (habilidadSeleccionada === "Atacar") {
        let accionCompletada = Juego.personajeActual.Atacar(personaje);
        habilidadSeleccionada = null;

        if (accionCompletada) {
          animacionEquipo2(
            e.target,
            e.target.parentElement.previousElementSibling
          );
          desactivarBotones();
        }

        desactivarBotones();
      } else {
        desactivarBotones();
      }

      if (habilidadSeleccionada != null && habilidadSeleccionada != "Atacar") {
        let accionCompletada = Juego.personajeActual.usarHabilidad(
          habilidadSeleccionada,
          personaje
        );
        habilidadSeleccionada = null;

        if (accionCompletada) {
          animacionEquipo2(
            e.target,
            e.target.parentElement.previousElementSibling
          );
          desactivarBotones();
        }
      }
    }
  });
});

//Seleccionanasdo contenedor de habilidades
const informacion = document.querySelector(".informacion");
const habilidades = document.querySelector(".habilidades");
//Seleccionando botones de habilidades
const habilidadAtacar = document.querySelector(".poder_Atacar");
const habilidad1 = document.querySelector(".poder_1");
const habilidad2 = document.querySelector(".poder_2");
//Seleccionando imagenes de habilidades
const imagenPoder1 = document.querySelector(".imagenPoder1");
const imagenPoder2 = document.querySelector(".imagenPoder2");
const imagenAtacar = document.querySelector(".imagen_atacar");
imagenAtacar.src = `./players/condicion/Atacar.png`;
//Seleccionando imagenes de cooldown
const imagencooldownhabilidad1 = document.querySelector(".cooldown_habilidad1");
const imagencooldownhabilidad2 = document.querySelector(".cooldown_habilidad2");
//Seleccionando texto cooldown
const cooldownHabilidad1 = document.querySelector(".cooldown_habilidad1");
const cooldownHabilidad2 = document.querySelector(".cooldown_habilidad2");
//Seleccionando texto de detalle poder
const detallePoder = document.querySelector(".detalle_poder");
const nombrePoder = document.querySelector(".nombre_poder");
const descripcionPoder = document.querySelector(".descripcion_poder");
const descripcionTiempo = document.querySelector(".descripcion_tiempo");
//desacticar los poderes para luego hcaer visibles cuando se seleccione
detallePoder.style.display = "none";

//Eventos de mouse para ver el detalle del poder cuando el mouse este encima
habilidad1.addEventListener("mouseenter", (e) => {actualizarDetallePoder(e);});
habilidad2.addEventListener("mouseenter", (e) => {actualizarDetallePoder(e);});
//Eventos de mouse para ocultar el detalle del poder cuando el mouse se va
habilidad1.addEventListener("mouseleave", (e) => {actualizarDetallePoder(e);});
habilidad2.addEventListener("mouseleave", (e) => {actualizarDetallePoder(e);});
// Eventos de click para seleccionar el poder
habilidad1.addEventListener("click", () =>seleccionarHabilidad(habilidad1, habilidad2, habilidadAtacar));
habilidad2.addEventListener("click", () =>  seleccionarHabilidad(habilidad2, habilidad1, habilidadAtacar));
habilidadAtacar.addEventListener("click", () =>seleccionarHabilidad(habilidadAtacar, habilidad1, habilidad2));

const turnoEquipo1 = document.querySelectorAll(".turnoEquipo1");
const turnoEquipo2 = document.querySelectorAll(".turnoEquipo2");

function seleccionarHabilidad(
  habilidad,
  habilidadDesactivar1,
  habilidadDesactivar2
) {
  // console.log(habilidad.getAttribute("nombrePoder"));
  if (habilidad.getAttribute("nombrePoder") !== habilidad.textContent) {
    habilidadSeleccionada = habilidad.getAttribute("nombrePoder");
    // console.log(`Habilidad seleccionada: ${habilidadSeleccionada}`);
    habilidad.classList.add("boton_activo");
    habilidadDesactivar1.classList.remove("boton_activo");
    habilidadDesactivar2.classList.remove("boton_activo");
  } else {
    habilidadSeleccionada = null;
    // console.log(`No hay Habilidad seleccionada`);
    habilidad.classList.remove("boton_activo");
  }
}

function actualizar_Interfaz() {
  // actualizar seccion poder
  actualizarSeccionPoder();
  //Actualizar barra de vida equipo
  actualizarBarraVida();
}

function AsignarTurno() {
  // Cambiar a display: none de forma inmediata
  turnoEquipo1.forEach((turno, i) => {
    if (Juego.personajeActual.id != turnoEquipo1[i].nextElementSibling.id) {
      turno.style.display = "none";
    }
  });

  turnoEquipo2.forEach((turno, i) => {
    if (Juego.personajeActual.id != turnoEquipo2[i].previousElementSibling.id) {
      turno.style.display = "none";
    }
  });

  // Usar timeout solo para el display: block después de 1 segundo
  setTimeout(() => {
    turnoEquipo1.forEach((turno, i) => {
      if (Juego.personajeActual.id == turnoEquipo1[i].nextElementSibling.id) {
        turno.style.display = "block";
      }
    });

    turnoEquipo2.forEach((turno, i) => {
      if (
        Juego.personajeActual.id == turnoEquipo2[i].previousElementSibling.id
      ) {
        turno.style.display = "block";
      }
    });
  }, 1500);
}

function desactivarBotones() {
  const botones = document.querySelectorAll(".habilidades button");
  botones.forEach((boton) => boton.classList.remove("boton_activo"));
}

function actualizarDetallePoder(e) {
  if (e.type === "mouseenter") {
    detallePoder.style.display = "flex";
    let poder = Juego.personajeActual.habilidades.find(
      (poder) => poder.nombre === e.target.getAttribute("nombrePoder")
    );
    if (poder) {
      descripcionPoder.textContent = `${poder.descripcion}`;
      descripcionTiempo.textContent = `(Reutilizable en  ${poder.tiempoDeEspera} turno(s))`;
      nombrePoder.textContent = `${poder.nombre}`;
    }
  }

  if (e.type === "mouseleave") {
    detallePoder.style.display = "none";
  }
}

function actualizarBarraVida() {
  const barraVida = document.querySelectorAll(".contenedor_barraVida");
  barraVida.forEach((barraVida) => {
    Juego.equipo1.forEach((personaje) => {
      // Verificamos si la barra de vida contiene la clase correspondiente al personaje
      if (barraVida.classList.contains(`personaje_${personaje.id}`)) {
        // Seleccionamos los elementos dentro de la barra de vida actual
        let porcentajeVida = barraVida.querySelector(".porcentajeVida");
        let numeroPorcentaje = barraVida.querySelector(".numeroPorcentaje");

        // Actualizamos el contenido de texto con los valores del personaje
        setTimeout(() => {
          porcentajeVida.setAttribute("style", `width: ${personaje.vida}%`);
          numeroPorcentaje.textContent = `${personaje.vida} / 100`;
        }, 1700);
      }
    });

    Juego.equipo2.forEach((personaje) => {
      // Verificamos si la barra de vida contiene la clase correspondiente al personaje
      if (barraVida.classList.contains(`personaje_${personaje.id}`)) {
        // Seleccionamos los elementos dentro de la barra de vida actual
        let porcentajeVida = barraVida.querySelector(".porcentajeVida");
        let numeroPorcentaje = barraVida.querySelector(".numeroPorcentaje");

        // Actualizamos el contenido de texto con los valores del personaje
        setTimeout(() => {
          porcentajeVida.setAttribute("style", `width: ${personaje.vida}%`);
          numeroPorcentaje.textContent = `${personaje.vida} / 100`;
        }, 1700);
      }
    });
  });
}

function actualizarSeccionPoder() {
  if (Juego.personajeActual.equipo == 1) {
    informacion.classList.remove("informacion_equipo2");
    informacion.classList.add("informacion_equipo1");
  } else {
    informacion.classList.remove("informacion_equipo1");
    informacion.classList.add("informacion_equipo2");
  }

  if (Juego.personajeActual.habilidades[0].cooldownActual > 0) {
    imagencooldownhabilidad1.src = `./players/condicion/cooldown.gif`;
    imagencooldownhabilidad1.style.display = "flex";
    cooldownHabilidad1.textContent = `${Juego.personajeActual.habilidades[0].cooldownActual}`;
    cooldownHabilidad1.style.display = "flex";
  } else {
    cooldownHabilidad1.style.display = "none";
    imagencooldownhabilidad1.style.display = "none";
  }

  if (Juego.personajeActual.habilidades[1].cooldownActual > 0) {
    imagencooldownhabilidad2.src = `./players/condicion/cooldown.gif`;
    imagencooldownhabilidad2.style.display = "flex";
    cooldownHabilidad2.textContent = `${Juego.personajeActual.habilidades[1].cooldownActual}`;
    cooldownHabilidad2.style.display = "flex";
  } else {
    cooldownHabilidad2.style.display = "none";
    imagencooldownhabilidad2.style.display = "none";
  }

  habilidad1.setAttribute(
    "nombrePoder",
    Juego.personajeActual.habilidades[0].nombre
  );
  habilidad2.setAttribute(
    "nombrePoder",
    Juego.personajeActual.habilidades[1].nombre
  );
  habilidadAtacar.setAttribute("nombrePoder", "Atacar");

  imagenPoder1.src = `./players/${Juego.personajeActual.id}/poderes/poder1.png`;
  imagenPoder2.src = `./players/${Juego.personajeActual.id}/poderes/poder2.png`;
}

AsignarTurno();
actualizar_Interfaz();




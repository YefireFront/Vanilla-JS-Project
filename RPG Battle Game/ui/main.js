//seleccionado body
const body = document.querySelector("body");

// selecioando escenario principal
const esenario = document.querySelector(".esenario");

// creando escenario equipo 1
const escenarioEquipo1 = document.querySelector(".esenarioEquipo1");

// creando escenario equipo 2
const escenarioEquipo2 = document.querySelector(".esenarioEquipo2");

let habilidadSeleccionada = null;

Juego.equipo1.forEach((personaje, i) => {
  // creando personajes en el escenario Left / 1

  const personaje1 = document.createElement("div");
  personaje1.classList.add( "personaje", `p${personaje.id}`, `${personaje.nombre}`,   `lugar${i + 1}`
  );
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

  // crear seccion ataque y defensa
  const seccionestadisticas = document.createElement("div");
  const defensaSeccion = document.createElement("div");
  const ataqueSeccion = document.createElement("div");
  const iconoDefensa = document.createElement("i");
  const iconoAtaque = document.createElement("i");
  const cantidadDefensa = document.createElement("p");
  const cantidadAtaque = document.createElement("p");

  seccionestadisticas.classList.add("seccionestadisticas");
  defensaSeccion.classList.add("poder", "defensaSeccion");
  ataqueSeccion.classList.add("poder", "ataqueSeccion");
  iconoDefensa.classList.add("fa-solid", "fa-shield");
  iconoAtaque.classList.add("fa-solid", "fa-hand-back-fist");
  cantidadDefensa.classList.add("cantidadDefensa");
  cantidadAtaque.classList.add("cantidadAtaque");

  cantidadDefensa.textContent = `${personaje.ataque}`;
  cantidadAtaque.textContent = `${personaje.defensa}`;

  barraVida.appendChild(seccionestadisticas);
  defensaSeccion.appendChild(iconoDefensa);
  defensaSeccion.appendChild(cantidadDefensa);
  ataqueSeccion.appendChild(iconoAtaque);
  ataqueSeccion.appendChild(cantidadAtaque);
  seccionestadisticas.appendChild(defensaSeccion);
  seccionestadisticas.appendChild(ataqueSeccion);

  // crear seccion condicion
  const seccionCondicion = document.createElement("div");
  seccionCondicion.classList.add("seccionCondicion");
  barraVida.appendChild(seccionCondicion);

  const condicionesNegativas = document.createElement("div");
  condicionesNegativas.classList.add("condicionNegativas");

  const condicionHerido = document.createElement("i");
  condicionHerido.classList.add(
    "condicion",
    "condicionHerido",
    "fa-solid",
    "fa-user-injured"
  );
  const turnosHeridos = document.createElement("p");
  turnosHeridos.classList.add("turnosHeridos");
  turnosHeridos.textContent = 5;
  condicionHerido.appendChild(turnosHeridos);

  const condicionQuemado = document.createElement("i");
  condicionQuemado.classList.add(
    "condicion",
    "condicionQuemado",
    "fa-solid",
    "fa-fire"
  );
  const turnosQuemados = document.createElement("p");
  turnosQuemados.classList.add("turnosQuemados");
  turnosQuemados.textContent = 5;
  condicionQuemado.appendChild(turnosQuemados);

  const condicionEnvenenado = document.createElement("i");
  condicionEnvenenado.classList.add(
    "condicion",
    "condicionEnvenenado",
    "fa-solid",
    "fa-skull"
  );
  const turnosEnvenenados = document.createElement("p");
  turnosEnvenenados.classList.add("turnosEnvenenados");
  turnosEnvenenados.textContent = 5;
  condicionEnvenenado.appendChild(turnosEnvenenados);

  const condiionesPositivas = document.createElement("div");
  condiionesPositivas.classList.add("condicionPositivas");

  const condicionAtaque = document.createElement("i");
  condicionAtaque.classList.add(
    "condicion",
    "condicionAtaque",
    "fa-solid",
    "fa-hand-back-fist"
  );
  const turnosAtaque = document.createElement("p");
  turnosAtaque.classList.add("turnosAtaque");
  turnosAtaque.textContent = 5;
  condicionAtaque.appendChild(turnosAtaque);

  const condicionDefensa = document.createElement("i");
  condicionDefensa.classList.add(
    "condicion",
    "condicionDefensa",
    "fa-solid",
    "fa-shield"
  );
  const turnosDefensa = document.createElement("p");
  turnosDefensa.classList.add("turnosDefensa");
  turnosDefensa.textContent = 5;
  condicionDefensa.appendChild(turnosDefensa);

  const condicionCurar = document.createElement("i");
  condicionCurar.classList.add(
    "condicion",
    "condicionCurar",
    "fa-solid",
    "fa-heart"
  );
  const turnosCurar = document.createElement("p");
  turnosCurar.classList.add("turnosCurar");
  turnosCurar.textContent = 5;
  condicionCurar.appendChild(turnosCurar);

  condicionesNegativas.appendChild(condicionHerido);
  condicionesNegativas.appendChild(condicionQuemado);
  condicionesNegativas.appendChild(condicionEnvenenado);
  condiionesPositivas.appendChild(condicionAtaque);
  condiionesPositivas.appendChild(condicionDefensa);
  condiionesPositivas.appendChild(condicionCurar);

  seccionCondicion.appendChild(condicionesNegativas);
  seccionCondicion.appendChild(condiionesPositivas);

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

        if (accionCompletada) {
          animacionEquipo1(
            e.target,
            personajeSecundario,
            habilidadSeleccionada,
            personaje
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

        if (accionCompletada) {
          animacionEquipo1(
            e.target,
            personajeSecundario,
            habilidadSeleccionada,
            personaje
          );
          desactivarBotones();
        }
        desactivarBotones();
      }
    }
  });
});

Juego.equipo2.forEach((personaje, i) => {
  // creando personajes en el escenario right / 1

  const personaje1 = document.createElement("div");
  personaje1.classList.add(
    "personaje",
    `p${personaje.id}`,
    `${personaje.nombre}`,
    `lugar${i + 4}`
  );
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
  const seccionestadisticas = document.createElement("div");
  const defensaSeccion = document.createElement("div");
  const ataqueSeccion = document.createElement("div");
  const iconoDefensa = document.createElement("i");
  const iconoAtaque = document.createElement("i");
  const cantidadDefensa = document.createElement("p");
  const cantidadAtaque = document.createElement("p");

  seccionestadisticas.classList.add("seccionestadisticas");
  defensaSeccion.classList.add("poder", "defensaSeccion");
  ataqueSeccion.classList.add("poder", "ataqueSeccion");
  iconoDefensa.classList.add("fa-solid", "fa-shield");
  iconoAtaque.classList.add("fa-solid", "fa-hand-back-fist");
  cantidadDefensa.classList.add("cantidadDefensa");
  cantidadAtaque.classList.add("cantidadAtaque");

  cantidadDefensa.textContent = `${personaje.ataque}`;
  cantidadAtaque.textContent = `${personaje.defensa}`;

  barraVida.appendChild(seccionestadisticas);
  defensaSeccion.appendChild(iconoDefensa);
  defensaSeccion.appendChild(cantidadDefensa);
  ataqueSeccion.appendChild(iconoAtaque);
  ataqueSeccion.appendChild(cantidadAtaque);
  seccionestadisticas.appendChild(defensaSeccion);
  seccionestadisticas.appendChild(ataqueSeccion);

  // crear seccion condicion
  const seccionCondicion = document.createElement("div");
  seccionCondicion.classList.add("seccionCondicion");
  barraVida.appendChild(seccionCondicion);

  const condicionesNegativas = document.createElement("div");
  condicionesNegativas.classList.add("condicionNegativas");

  const condicionHerido = document.createElement("i");
  condicionHerido.classList.add(
    "condicion",
    "condicionHerido",
    "fa-solid",
    "fa-user-injured"
  );
  const turnosHeridos = document.createElement("p");
  turnosHeridos.classList.add("turnosHeridos");
  turnosHeridos.textContent = 5;
  condicionHerido.appendChild(turnosHeridos);

  const condicionQuemado = document.createElement("i");
  condicionQuemado.classList.add(
    "condicion",
    "condicionQuemado",
    "fa-solid",
    "fa-fire"
  );
  const turnosQuemados = document.createElement("p");
  turnosQuemados.classList.add("turnosQuemados");
  turnosQuemados.textContent = 5;
  condicionQuemado.appendChild(turnosQuemados);

  const condicionEnvenenado = document.createElement("i");
  condicionEnvenenado.classList.add(
    "condicion",
    "condicionEnvenenado",
    "fa-solid",
    "fa-skull"
  );
  const turnosEnvenenados = document.createElement("p");
  turnosEnvenenados.classList.add("turnosEnvenenados");
  turnosEnvenenados.textContent = 5;
  condicionEnvenenado.appendChild(turnosEnvenenados);

  const condiionesPositivas = document.createElement("div");
  condiionesPositivas.classList.add("condicionPositivas");

  const condicionAtaque = document.createElement("i");
  condicionAtaque.classList.add(
    "condicion",
    "condicionAtaque",
    "fa-solid",
    "fa-hand-back-fist"
  );
  const turnosAtaque = document.createElement("p");
  turnosAtaque.classList.add("turnosAtaque");
  turnosAtaque.textContent = 5;
  condicionAtaque.appendChild(turnosAtaque);

  const condicionDefensa = document.createElement("i");
  condicionDefensa.classList.add(
    "condicion",
    "condicionDefensa",
    "fa-solid",
    "fa-shield"
  );
  const turnosDefensa = document.createElement("p");
  turnosDefensa.classList.add("turnosDefensa");
  turnosDefensa.textContent = 5;
  condicionDefensa.appendChild(turnosDefensa);

  const condicionCurar = document.createElement("i");
  condicionCurar.classList.add(
    "condicion",
    "condicionCurar",
    "fa-solid",
    "fa-heart"
  );
  const turnosCurar = document.createElement("p");
  turnosCurar.classList.add("turnosCurar");
  turnosCurar.textContent = 5;
  condicionCurar.appendChild(turnosCurar);

  condicionesNegativas.appendChild(condicionHerido);
  condicionesNegativas.appendChild(condicionQuemado);
  condicionesNegativas.appendChild(condicionEnvenenado);
  condiionesPositivas.appendChild(condicionAtaque);
  condiionesPositivas.appendChild(condicionDefensa);
  condiionesPositivas.appendChild(condicionCurar);

  seccionCondicion.appendChild(condicionesNegativas);
  seccionCondicion.appendChild(condiionesPositivas);

  //desactivar las condiciones negativas
  condicionHerido.style.display = "none";
  condicionQuemado.style.display = "none";
  condicionEnvenenado.style.display = "none";

  //desactivar las condiciones positivas
  condicionAtaque.style.display = "none";
  condicionDefensa.style.display = "none";
  condicionCurar.style.display = "none";

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

        if (accionCompletada) {
          animacionEquipo2(
            e.target,
            personajeSecundario,
            habilidadSeleccionada,
            personaje
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

        if (accionCompletada) {
          animacionEquipo2(
            e.target,
            personajeSecundario,
            habilidadSeleccionada,
            personaje
          );
          desactivarBotones();
        }
        desactivarBotones();
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
habilidad1.addEventListener("mouseenter", (e) => actualizarDetallePoder(e));
habilidad2.addEventListener("mouseenter", (e) => actualizarDetallePoder(e));
//Eventos de mouse para ocultar el detalle del poder cuando el mouse se va
habilidad1.addEventListener("mouseleave", (e) => actualizarDetallePoder(e));
habilidad2.addEventListener("mouseleave", (e) => actualizarDetallePoder(e));
// Eventos de click para seleccionar el poder
habilidad1.addEventListener("click", () =>
  seleccionarHabilidad(habilidad1, habilidad2, habilidadAtacar)
);
habilidad2.addEventListener("click", () =>
  seleccionarHabilidad(habilidad2, habilidad1, habilidadAtacar)
);
habilidadAtacar.addEventListener("click", () =>
  seleccionarHabilidad(habilidadAtacar, habilidad1, habilidad2)
);

const turnoEquipo1 = document.querySelectorAll(".turnoEquipo1");
const turnoEquipo2 = document.querySelectorAll(".turnoEquipo2");

function actualizar_Interfaz() {
  // actualizar seccion poder
  actualizarSeccionPoder();
  //Actualizar barra de vida equipo
  actualizarBarraVida();
  //actualizar defensa y ataque
  actualizarDefensaAtaque();
  //gestionar debilitamiento
  gestionarDebilitamiento();
}

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
    let poder = Juego.personajeActual.habilidades.find((poder) => poder.nombre === e.target.getAttribute("nombrePoder")    );
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

function actualizarDefensaAtaque() {
  //selecionar la defensa y el ataque de todos los perosnajes
  Juego.equipo1.forEach((personaje) => {
    document.querySelector( `.${personaje.nombre} .cantidadDefensa`).textContent = personaje.defensa;
    document.querySelector(`.${personaje.nombre} .cantidadAtaque`).textContent =   personaje.ataque;
  });

  Juego.equipo2.forEach((personaje) => {
    document.querySelector(
      `.${personaje.nombre} .cantidadDefensa`
    ).textContent = personaje.defensa;
    document.querySelector(`.${personaje.nombre} .cantidadAtaque`).textContent =
      personaje.ataque;
  });
}

function gestionarDebilitamiento2() {
  const personajesHTML = document.querySelectorAll(".personaje_Principal");
  const personajesJS = [...Juego.equipo1, ...Juego.equipo2];
  const condicionesNegativas = document.querySelectorAll(".condicionNegativas");
  const condicionesPositivas = document.querySelectorAll(".condicionPositivas");

  const efectosCSS = {
    Regeneración: "healingEffect",
    Quemadura: "burnEffect",
    Veneno: "poisonEffect",
  };

  personajesHTML.forEach((personajeHTML) => {
    const seccionCondicion =
      personajeHTML.parentElement.querySelector(".seccionCondicion");
    const condicionesNegativas = personajeHTML.parentElement.querySelector(
      ".condicionNegativas"
    );
    const condicionesPositivas = personajeHTML.parentElement.querySelector(
      ".condicionPositivas"
    );
    const personajeJS = personajesJS.find((p) => p.id == personajeHTML.id);

    if (personajeJS) {
      if (personajeJS.debilitamiento.length === 0) {
        condicionesNegativas.style.display = "none";
      }

      if (personajeJS.debilitamiento.length > 0) {
        condicionesNegativas.style.display = "flex";

        personajeJS.debilitamiento.forEach((efecto) => {
          if (efecto) {
            if (efecto.nombre === "Veneno") {
              const iconoVeneno = personajeHTML.parentElement.querySelector(
                ".condicionEnvenenado"
              );
              iconoVeneno.style.display = "flex";
              const turnosVeneno =
                personajeHTML.parentElement.querySelector(".turnosEnvenenados");
              turnosVeneno.textContent = efecto.duracion;
            } else {
              const iconoVeneno = personajeHTML.parentElement.querySelector(
                ".condicionEnvenenado"
              );
              iconoVeneno.style.display = "none";
            }

            if (efecto.nombre === "Quemadura") {
              const iconoQuemadura =
                personajeHTML.parentElement.querySelector(".condicionQuemado");
              iconoQuemadura.style.display = "flex";
              const turnosQuemadura =
                personajeHTML.parentElement.querySelector(".turnosQuemados");
              turnosQuemadura.textContent = efecto.duracion;
            } else {
              const iconoQuemadura =
                personajeHTML.parentElement.querySelector(".condicionQuemado");
              iconoQuemadura.style.display = "none";
            }

            if (efecto.nombre === "Herido") {
              const iconoHerido =
                personajeHTML.parentElement.querySelector(".condicionHerido");
              iconoHerido.style.display = "flex";
              const turnosHeridos =
                personajeHTML.parentElement.querySelector(".turnosHeridos");
              turnosHeridos.textContent = efecto.duracion;
            } else {
              const iconoHerido =
                personajeHTML.parentElement.querySelector(".condicionHerido");
              iconoHerido.style.display = "none";
            }
          }
        });
      }

      if (personajeJS.fortalecimiento.length === 0) {
        condicionesPositivas.style.display = "none";
      }

      if (personajeJS.fortalecimiento.length > 0) {
        condicionesPositivas.style.display = "flex";

        personajeJS.fortalecimiento.forEach((efecto) => {
          if (efecto) {
            if (efecto.nombre === "Regeneración") {
              const iconoRegeneracion =
                personajeHTML.parentElement.querySelector(".condicionCurar");
              iconoRegeneracion.style.display = "flex";
              const turnosRegeneracion =
                personajeHTML.parentElement.querySelector(".turnosCurar");
              turnosRegeneracion.textContent = efecto.duracion;
            } else {
              const iconoRegeneracion =
                personajeHTML.parentElement.querySelector(".condicionCurar");
              iconoRegeneracion.style.display = "none";
            }
          }

          if (efecto.nombre === "Ataque") {
            const iconoAtaque =
              personajeHTML.parentElement.querySelector(".condicionAtaque");
            iconoAtaque.style.display = "flex";
            const turnosAtaque =
              personajeHTML.parentElement.querySelector(".turnosAtaque");
            turnosAtaque.textContent = efecto.duracion;
          } else {
            const iconoAtaque =
              personajeHTML.parentElement.querySelector(".condicionAtaque");
            iconoAtaque.style.display = "none";
          }

          if (efecto.nombre === "Defensa") {
            const iconoDefensa =
              personajeHTML.parentElement.querySelector(".condicionDefensa");
            iconoDefensa.style.display = "flex";
            const turnosDefensa =
              personajeHTML.parentElement.querySelector(".turnosDefensa");
            turnosDefensa.textContent = efecto.duracion;
          } else {
            const iconoDefensa =
              personajeHTML.parentElement.querySelector(".condicionDefensa");
            iconoDefensa.style.display = "none";
          }
        });
      }

      if (personajeJS.estaMuerto()) {
        personajeHTML.classList.add("fantasma");
        seccionCondicion.style.display = "none";
      } else {
        personajeHTML.classList.remove("fantasma");
        seccionCondicion.style.display = "flex";
      }

      // Recorrer cada efecto definido en efectosCSS
      for (const efectoNombre in efectosCSS) {
        const claseCSS = efectosCSS[efectoNombre];

        // Verificar si el personaje tiene el efecto en el array de debilitamiento
        const tieneEfecto = personajeJS.debilitamiento.some(
          (efecto) => efecto.nombre === efectoNombre
        );

        if (tieneEfecto) {
          // Si el efecto está presente, añadir la clase CSS
          personajeHTML.classList.add(claseCSS);
        } else {
          // Si el efecto no está presente, remover la clase CSS
          personajeHTML.classList.remove(claseCSS);
        }
      }
    }
  });
}

function gestionarDebilitamiento() {
  const personajesHTML = document.querySelectorAll(".personaje_Principal");
  const personajesJS = [...Juego.equipo1, ...Juego.equipo2];

  const efectosCSS = {
    Regeneración: "healingEffect",
    Quemadura: "burnEffect",
    Veneno: "poisonEffect",
  };

  personajesHTML.forEach((personajeHTML) => {
    const seccionCondicion =
      personajeHTML.parentElement.querySelector(".seccionCondicion");
    const condicionesNegativas = personajeHTML.parentElement.querySelector(
      ".condicionNegativas"
    );
    const condicionesPositivas = personajeHTML.parentElement.querySelector(
      ".condicionPositivas"
    );

    const personajeJS = personajesJS.find((p) => p.id == personajeHTML.id);

    if (personajeJS) {
      if (personajeJS.debilitamiento.length === 0) {
        condicionesNegativas.style.display = "none";
      }

      if (personajeJS.debilitamiento.length > 0) {
        condicionesNegativas.style.display = "flex";

        // Primero, oculta todos los iconos
        const iconoVeneno = personajeHTML.parentElement.querySelector(
          ".condicionEnvenenado"
        );
        const iconoQuemadura =
          personajeHTML.parentElement.querySelector(".condicionQuemado");
        const iconoHerido =
          personajeHTML.parentElement.querySelector(".condicionHerido");

        iconoVeneno.style.display = "none";
        iconoQuemadura.style.display = "none";
        iconoHerido.style.display = "none";

        // Luego, recorre los efectos y muestra los iconos correspondientes
        personajeJS.debilitamiento.forEach((efecto) => {
          if (efecto.nombre === "Veneno") {
            iconoVeneno.style.display = "flex";
            const turnosVeneno =
              personajeHTML.parentElement.querySelector(".turnosEnvenenados");
            turnosVeneno.textContent = efecto.duracion;
          }

          if (efecto.nombre === "Quemadura") {
            iconoQuemadura.style.display = "flex";
            const turnosQuemadura =
              personajeHTML.parentElement.querySelector(".turnosQuemados");
            turnosQuemadura.textContent = efecto.duracion;
          }

          if (efecto.nombre === "Herido") {
            iconoHerido.style.display = "flex";
            const turnosHeridos =
              personajeHTML.parentElement.querySelector(".turnosHeridos");
            turnosHeridos.textContent = efecto.duracion;
          }
        });
      }

      if (personajeJS.fortalecimiento.length == 0) {
        condicionesPositivas.style.display = "none";
      }

      if (personajeJS.fortalecimiento.length > 0) {
        condicionesPositivas.style.display = "flex";

        personajeJS.fortalecimiento.forEach((efecto) => {
          const iconoRegeneracion =
            personajeHTML.parentElement.querySelector(".condicionCurar");
          const iconoAtaque =
            personajeHTML.parentElement.querySelector(".condicionAtaque");
          const iconoDefensa =
            personajeHTML.parentElement.querySelector(".condicionDefensa");

          iconoRegeneracion.style.display = "none";
          iconoAtaque.style.display = "none";
          iconoDefensa.style.display = "none";
          if (efecto) {
            if (efecto.nombre === "Regeneración") {
              iconoRegeneracion.style.display = "flex";
              const turnosRegeneracion =
                personajeHTML.parentElement.querySelector(".turnosCurar");
              turnosRegeneracion.textContent = efecto.duracion;
            }

            if (efecto.nombre === "Ataque") {
              iconoAtaque.style.display = "flex";
              const turnosAtaque =
                personajeHTML.parentElement.querySelector(".turnosAtaque");
              turnosAtaque.textContent = efecto.duracion;
            }

            if (efecto.nombre === "Defensa") {
              iconoDefensa.style.display = "flex";
              const turnosDefensa =
                personajeHTML.parentElement.querySelector(".turnosDefensa");
              turnosDefensa.textContent = efecto.duracion;
            }
          }
        });
      }

      if (personajeJS.estaMuerto()) {
        personajeHTML.classList.add("fantasma");
        seccionCondicion.style.display = "none";
      } else {
        personajeHTML.classList.remove("fantasma");
        seccionCondicion.style.display = "flex";
      }

      // Recorrer cada efecto definido en efectosCSS
      for (const efectoNombre in efectosCSS) {
        const claseCSS = efectosCSS[efectoNombre];

        // Verificar si el personaje tiene el efecto en el array de debilitamiento
        const tieneEfecto = personajeJS.debilitamiento.some(
          (efecto) => efecto.nombre === efectoNombre
        );

        if (tieneEfecto) {
          // Si el efecto está presente, añadir la clase CSS
          personajeHTML.classList.add(claseCSS);
        } else {
          // Si el efecto no está presente, remover la clase CSS
          personajeHTML.classList.remove(claseCSS);
        }
      }
    }
  });
}

AsignarTurno();
actualizar_Interfaz();
gestionarDebilitamiento();

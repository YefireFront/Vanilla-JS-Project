//seleccionado body
const body = document.querySelector("body");

// selecioando escenario principal
const esenario = document.querySelector(".esenario");

// creando escenario
const Escenario_Equipo_1 = document.createElement("div");
Escenario_Equipo_1.classList.add("esenario__left");
esenario.appendChild(Escenario_Equipo_1);

// creando escenario right  / 2
const Escenario_Equipo_2 = document.createElement("div");
Escenario_Equipo_2.classList.add("esenario_right");
esenario.appendChild(Escenario_Equipo_2);

let personajeatacante = null;
let habilidadSeleccionada = null;

Juego.equipo1.forEach((personaje) => {
  // creando personajes en el escenario Left / 1

  const personaje1 = document.createElement("div");
  personaje1.classList.add("personaje", `p${personaje.id}`);
  Escenario_Equipo_1.appendChild(personaje1);

  // crear barra de vida
  const barra_vida = document.createElement("div");
  barra_vida.classList.add(
    "contenedor_barra_vida",
    `personaje_${personaje.id}`
  );
  personaje1.appendChild(barra_vida);

  const porcentajevida = document.createElement("span");
  porcentajevida.classList.add("porcentajevida");
  porcentajevida.setAttribute("style", `width: ${personaje.vida}%`);
  barra_vida.appendChild(porcentajevida);

  const num_porcentaje = document.createElement("p");
  num_porcentaje.classList.add("num_porcentaje");
  num_porcentaje.textContent = `${personaje.vida} / 100`;
  barra_vida.appendChild(num_porcentaje);

  // crear seccion poderes
  const seccion_poder = document.createElement("div");
  seccion_poder.classList.add("seccion_poder");
  barra_vida.appendChild(seccion_poder);

  const poder1 = document.createElement("div");
  poder1.classList.add("poder", "poder1");
  const imagen_poder = document.createElement("img");
  imagen_poder.src = `./players/${personaje.id}/poderes/poder1.png`;
  poder1.appendChild(imagen_poder);

  const poder2 = document.createElement("div");
  poder2.classList.add("poder", "poder2");
  const imagen_poder2 = document.createElement("img");
  imagen_poder2.src = `./players/${personaje.id}/poderes/poder2.png`;
  poder2.appendChild(imagen_poder2);

  // seccion_poder.appendChild(poder1);
  // seccion_poder.appendChild(poder2);

  // crear seccion condicion
  const seccion_condicion = document.createElement("div");
  seccion_condicion.classList.add("seccion_condicion");
  barra_vida.appendChild(seccion_condicion);

  const condicion1 = document.createElement("div");
  condicion1.classList.add("condicion", "condicion1");
  const imagen_condicion = document.createElement("img");
  imagen_condicion.src = `./players/condicion/condicion1.gif`;
  condicion1.appendChild(imagen_condicion);

  const condicion2 = document.createElement("div");
  condicion2.classList.add("condicion", "condicion2");
  const imagen_condicion2 = document.createElement("img");
  imagen_condicion2.src = `./players/condicion/condicion2.gif`;
  condicion2.appendChild(imagen_condicion2);

  const condicion3 = document.createElement("div");
  condicion3.classList.add("condicion", "condicion3");
  const imagen_condicion3 = document.createElement("img");
  imagen_condicion3.src = `./players/condicion/condicion3.gif`;
  condicion3.appendChild(imagen_condicion3);

  // seccion_condicion.appendChild(condicion1);
  // seccion_condicion.appendChild(condicion2);
  // seccion_condicion.appendChild(condicion3);

  //idetifcador de turno
  const turno = document.createElement("div");
  turno.classList.add("turno", "turno_izquierda");
  personaje1.appendChild(turno);

  const imagen_turno = document.createElement("img");
  imagen_turno.src = `./players/condicion/puño.gif`;
  turno.appendChild(imagen_turno);

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
  // const Shadow = document.createElement("div");
  // Shadow.classList.add("shadow_left");
  // peronaje_principal.appendChild(Shadow);

  // Creacion personaje secundario
  const peronaje_secundario = document.createElement("div");
  peronaje_secundario.classList.add("personaje_Secundario");

  //crear imagen personaje secundario
  const imagen_personaje_secundario = document.createElement("img");
  personaje_Secundario.appendChild(imagen_personaje_secundario);

  imagen_personaje.addEventListener("click", (e) => {
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
        let accionCompletada = Juego.personajeActual.usarHabilidad(
          habilidadSeleccionada,
          personaje
        );
        habilidadSeleccionada = null;

        if (accionCompletada) {
          animacionEquipo1(e.target, e.target.parentElement.nextElementSibling);
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
  Escenario_Equipo_2.appendChild(personaje1);

  // crear barra de vida
  const barra_vida = document.createElement("div");
  barra_vida.classList.add(
    "contenedor_barra_vida",
    `personaje_${personaje.id}`
  );
  personaje1.appendChild(barra_vida);

  const porcentajevida = document.createElement("span");
  porcentajevida.classList.add("porcentajevida");
  porcentajevida.setAttribute("style", `width: ${personaje.vida}%`);
  barra_vida.appendChild(porcentajevida);

  const num_porcentaje = document.createElement("p");
  num_porcentaje.classList.add("num_porcentaje");
  num_porcentaje.textContent = `${personaje.vida} / 100`;
  barra_vida.appendChild(num_porcentaje);

  // crear seccion poderes
  const seccion_poder = document.createElement("div");
  seccion_poder.classList.add("seccion_poder");
  barra_vida.appendChild(seccion_poder);

  const poder1 = document.createElement("div");
  poder1.classList.add("poder", "poder1");
  const imagen_poder = document.createElement("img");
  imagen_poder.src = `./players/${personaje.id}/poderes/poder1.png`;
  poder1.appendChild(imagen_poder);

  const poder2 = document.createElement("div");
  poder2.classList.add("poder", "poder2");
  const imagen_poder2 = document.createElement("img");
  imagen_poder2.src = `./players/${personaje.id}/poderes/poder2.png`;
  poder2.appendChild(imagen_poder2);

  // seccion_poder.appendChild(poder1);
  // seccion_poder.appendChild(poder2);

  // crear seccion condicion
  const seccion_condicion = document.createElement("div");
  seccion_condicion.classList.add("seccion_condicion");
  barra_vida.appendChild(seccion_condicion);

  const condicion1 = document.createElement("div");
  condicion1.classList.add("condicion", "condicion1");
  const imagen_condicion = document.createElement("img");
  imagen_condicion.src = `./players/condicion/condicion1.gif`;
  condicion1.appendChild(imagen_condicion);

  const condicion2 = document.createElement("div");
  condicion2.classList.add("condicion", "condicion2");
  const imagen_condicion2 = document.createElement("img");
  imagen_condicion2.src = `./players/condicion/condicion2.gif`;
  condicion2.appendChild(imagen_condicion2);

  const condicion3 = document.createElement("div");
  condicion3.classList.add("condicion", "condicion3");
  const imagen_condicion3 = document.createElement("img");
  imagen_condicion3.src = `./players/condicion/condicion3.gif`;
  condicion3.appendChild(imagen_condicion3);

  // seccion_condicion.appendChild(condicion1);
  // seccion_condicion.appendChild(condicion2);
  // seccion_condicion.appendChild(condicion3);

  // Creacion personaje secundario

  const personaje_Secundario = document.createElement("div");
  personaje_Secundario.classList.add("personaje_Secundario");
  personaje1.appendChild(personaje_Secundario);

  // Creacion personaje principal
  const peronaje_principal = document.createElement("div");
  peronaje_principal.classList.add("personaje_Principal");
  peronaje_principal.id = personaje.id;
  personaje1.appendChild(peronaje_principal);

  //idetifcador de turno
  const turno = document.createElement("div");
  turno.classList.add("turno", "turno_derecha");
  personaje1.appendChild(turno);

  const imagen_turno = document.createElement("img");
  imagen_turno.src = `./players/condicion/puño.gif`;
  turno.appendChild(imagen_turno);

  //crear imagen personaje secundario
  const imagen_personaje_secundario = document.createElement("img");
  personaje_Secundario.appendChild(imagen_personaje_secundario);

  //crear imagen personaje principal
  const imagen_personaje = document.createElement("img");
  imagen_personaje.src = `./players/${personaje.id}/Quieto.gif`;
  peronaje_principal.appendChild(imagen_personaje);

  // const Shadow = document.createElement("div");
  // Shadow.classList.add("shadow_right");
  // peronaje_principal.appendChild(Shadow);

  // Creacion personaje secundario
  const peronaje_secundario = document.createElement("div");
  peronaje_secundario.classList.add("personaje_Secundario");

  imagen_personaje.addEventListener("click", (e) => {
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



const informacion = document.createElement("div");
const habilidades = document.createElement("div");
const habilidadAtacar = document.createElement("button");
const habilidad1 = document.createElement("button");
const habilidad2 = document.createElement("button");
const imagen_poder1 = document.createElement("img");
const imagen_poder2 = document.createElement("img");
const imagen_atcar = document.createElement("img");
const imagencooldownhabilidad1 = document.createElement("img");
const imagencooldownhabilidad2 = document.createElement("img");
const cooldownHabilidad1 = document.createElement("p");
const cooldownHabilidad2 = document.createElement("p");

const detallePoder = document.createElement("div");
const nombrePoder = document.createElement("p");
const descripcionPoder = document.createElement("p");
const descripcionTiempo = document.createElement("p");

descripcionPoder.textContent = `${Juego.personajeActual.habilidades[0].descripcion}`;
descripcionTiempo.textContent = `(Reutilizable en  ${Juego.personajeActual.habilidades[0].tiempoDeEspera} turno(s))`;
nombrePoder.textContent = `${Juego.personajeActual.habilidades[0].nombre}`;

habilidades.classList.add("habilidades");
informacion.classList.add("informacion");
imagencooldownhabilidad1.classList.add("imagen_cooldown");
imagencooldownhabilidad2.classList.add("imagen_cooldown");
cooldownHabilidad1.classList.add("cooldown_habilidad1", "cooldown");
cooldownHabilidad2.classList.add("cooldown_habilidad2", "cooldown");
detallePoder.classList.add("detalle_poder");
nombrePoder.classList.add("nombre_poder");
descripcionPoder.classList.add("descripcion_poder");
descripcionTiempo.classList.add("descripcion_tiempo");

esenario.appendChild(informacion);

informacion.appendChild(habilidades);
informacion.appendChild(detallePoder);

detallePoder.appendChild(nombrePoder);
detallePoder.appendChild(descripcionPoder);
detallePoder.appendChild(descripcionTiempo);

habilidades.appendChild(habilidadAtacar);
habilidades.appendChild(habilidad1);
habilidades.appendChild(habilidad2);

habilidadAtacar.appendChild(imagen_atcar);
habilidad1.appendChild(imagen_poder1);
habilidad2.appendChild(imagen_poder2);
habilidad1.appendChild(imagencooldownhabilidad1);
habilidad2.appendChild(imagencooldownhabilidad2);
habilidad1.appendChild(cooldownHabilidad1);
habilidad2.appendChild(cooldownHabilidad2);
detallePoder.style.display = "none";

habilidad1.addEventListener("mouseenter", (e) => {
  actualizarDetallePoder(e);
});
habilidad2.addEventListener("mouseenter", (e) => {
  actualizarDetallePoder(e);
});

habilidad1.addEventListener("mouseleave", (e) => {
  actualizarDetallePoder(e);
});

habilidad2.addEventListener("mouseleave", (e) => {
  actualizarDetallePoder(e);
});



habilidad1.addEventListener("click", () =>
  seleccionarHabilidad(habilidad1, habilidad2, habilidadAtacar)
);
habilidad2.addEventListener("click", () =>
  seleccionarHabilidad(habilidad2, habilidad1, habilidadAtacar)
);
habilidadAtacar.addEventListener("click", () =>
  seleccionarHabilidad(habilidadAtacar, habilidad1, habilidad2)
);

const turno_izquierda = document.querySelectorAll(".turno_izquierda");
const turno_derecha = document.querySelectorAll(".turno_derecha");

function seleccionarHabilidad(
  habilidad,
  habilidadDesactivar1,
  habilidadDesactivar2
) {
  console.log(habilidad.getAttribute("nombrePoder"));
  if (habilidad.getAttribute("nombrePoder") !== habilidad.textContent) {
    habilidadSeleccionada = habilidad.getAttribute("nombrePoder");
    console.log(`Habilidad seleccionada: ${habilidadSeleccionada}`);
    habilidad.classList.add("boton_activo");
    habilidadDesactivar1.classList.remove("boton_activo");
    habilidadDesactivar2.classList.remove("boton_activo");
  } else {
    habilidadSeleccionada = null;
    console.log(`No hay Habilidad seleccionada`);
    habilidad.classList.remove("boton_activo");
  }
}

function actualizarInfomacionPersonajeActual() {
  imagen_atcar.src = `./players/condicion/Atacar.png`;

  // nombreJugadorActual.textContent = Juego.personajeActual.nombre;
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
  imagen_poder1.src = `./players/${Juego.personajeActual.id}/poderes/poder1.png`;
  imagen_poder2.src = `./players/${Juego.personajeActual.id}/poderes/poder2.png`;

  //Actualizar detalle poder

  if (Juego.personajeActual.equipo == 1) {
    detallePoder.classList.remove("descripcion_poder_equipo2");
    detallePoder.classList.add("descripcion_poder_equipo1");
  } else {
    detallePoder.classList.remove("descripcion_poder_equipo1");
    detallePoder.classList.add("descripcion_poder_equipo2");
  }

  //Actualizar barra de vida equipo
  const barra_vida = document.querySelectorAll(".contenedor_barra_vida");
  barra_vida.forEach((barra_vida) => {
    Juego.equipo1.forEach((personaje) => {
      // Verificamos si la barra de vida contiene la clase correspondiente al personaje
      if (barra_vida.classList.contains(`personaje_${personaje.id}`)) {
        // Seleccionamos los elementos dentro de la barra de vida actual
        let porcentajevida = barra_vida.querySelector(".porcentajevida");
        let num_porcentaje = barra_vida.querySelector(".num_porcentaje");

        // Actualizamos el contenido de texto con los valores del personaje
        setTimeout(() => {
          porcentajevida.setAttribute("style", `width: ${personaje.vida}%`);
          num_porcentaje.textContent = `${personaje.vida} / 100`;
        }, 1700);
      }
    });

    Juego.equipo2.forEach((personaje) => {
      // Verificamos si la barra de vida contiene la clase correspondiente al personaje
      if (barra_vida.classList.contains(`personaje_${personaje.id}`)) {
        // Seleccionamos los elementos dentro de la barra de vida actual
        let porcentajevida = barra_vida.querySelector(".porcentajevida");
        let num_porcentaje = barra_vida.querySelector(".num_porcentaje");

        // Actualizamos el contenido de texto con los valores del personaje
        setTimeout(() => {
          porcentajevida.setAttribute("style", `width: ${personaje.vida}%`);
          num_porcentaje.textContent = `${personaje.vida} / 100`;
        }, 1700);
      }
    });
  });
}

function AsignarTurno() {
  // Cambiar a display: none de forma inmediata
  turno_izquierda.forEach((turno, i) => {
    if (Juego.personajeActual.id != turno_izquierda[i].nextElementSibling.id) {
      turno.style.display = "none";
    }
  });

  turno_derecha.forEach((turno, i) => {
    if (
      Juego.personajeActual.id != turno_derecha[i].previousElementSibling.id
    ) {
      turno.style.display = "none";
    }
  });

  // Usar timeout solo para el display: block después de 1 segundo
  setTimeout(() => {
    turno_izquierda.forEach((turno, i) => {
      if (
        Juego.personajeActual.id == turno_izquierda[i].nextElementSibling.id
      ) {
        turno.style.display = "block";
      }
    });

    turno_derecha.forEach((turno, i) => {
      if (
        Juego.personajeActual.id == turno_derecha[i].previousElementSibling.id
      ) {
        turno.style.display = "block";
      }
    });
  }, 1700);
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

AsignarTurno();
actualizarInfomacionPersonajeActual();

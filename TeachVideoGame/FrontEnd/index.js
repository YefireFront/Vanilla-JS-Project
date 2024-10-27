const body = document.querySelector("body");
const escenario = document.querySelector(".escenario");
const escenarioEquipo1 = document.querySelector(".escenario__equipo1");
const escenarioEquipo2 = document.querySelector(".escenario__equipo2");
let habilidadSeleccionada = null;

function crearPersonaje(personaje, escenario, posicion) {
  // Crear contenedor del personaje
  const personajeDiv = document.createElement("div");
  personajeDiv.classList.add("personaje", `lugar${posicion}`);
  personajeDiv.setAttribute("id", `${personaje.id}`);
  escenario.appendChild(personajeDiv);


  //seccion buff


  //seccion info daño
  const seccionInfoDaño = document.createElement("div");
  const cantidadDaño = document.createElement("p");
  seccionInfoDaño.classList.add("seccionDaño");
  cantidadDaño.classList.add("cantidadDaño");
  cantidadDaño.textContent = `${personaje.vida}`;
  seccionInfoDaño.appendChild(cantidadDaño);
  personajeDiv.appendChild(seccionInfoDaño);
  seccionInfoDaño.style.display = "none";

  //seccion debuf Quemadura
  const seccionDebufQuemadura = document.createElement("div");
  const imagenfuego = document.createElement("img");
  imagenfuego.src = `./FrontEnd/assets/img/condicion/fuego.gif`;
  seccionDebufQuemadura.classList.add("seccionDebufQuemadura");
  personajeDiv.appendChild(seccionDebufQuemadura);
  seccionDebufQuemadura.appendChild(imagenfuego);



  //seccion debuf veneno
  const seccionDebufVeneno = document.createElement("div");
  const imagenveneno = document.createElement("img");
  imagenveneno.src = `./FrontEnd/assets/img/condicion/veneno.gif`;
  seccionDebufVeneno.classList.add("seccionDebufVeneno");
  personajeDiv.appendChild(seccionDebufVeneno);
  seccionDebufVeneno.appendChild(imagenveneno);


  //seccion debuf turno
  const seccionDebufTurno = document.createElement("div");
  const imagenTurno = document.createElement("img");
  imagenTurno.src = `./FrontEnd/assets/img/condicion/turnoOff.gif`;
  seccionDebufTurno.classList.add("seccionDebufTurno");
  personajeDiv.appendChild(seccionDebufTurno);
  seccionDebufTurno.appendChild(imagenTurno);


  //seccion turno
  const seccionTurno = document.createElement("div");
  const imagencaravelaTurno = document.createElement("img");
  imagencaravelaTurno.src = `./FrontEnd/assets/img/condicion/skull.gif`;
  seccionTurno.classList.add("seccionTurno");
  personajeDiv.appendChild(seccionTurno);
  seccionTurno.appendChild(imagencaravelaTurno);

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
  imagenPersonajeEnemigo.src = `./FrontEnd/assets/img/Personajes/${personaje.id}/Quieto.gif`;
  imagenPersonajeEnemigo.setAttribute("draggable",false)
  ubicacionPersonajePrincipal.appendChild(imagenPersonajeEnemigo);

  imagenPersonajeEnemigo.addEventListener("click", (e) => {
    if (habilidadSeleccionada) {
      if (habilidadSeleccionada === "Atacar") {
        Juego.personajeActual.Atacar(personaje);
        habilidadSeleccionada = null;
      } else {
        Juego.personajeActual.usarHabilidad(habilidadSeleccionada, personaje);
        habilidadSeleccionada = null;
      }
    }
  });
}

Juego.equipo1.forEach((personaje, i) => {
  crearPersonaje(personaje, escenarioEquipo1, i + 1);
});

Juego.equipo2.forEach((personaje, i) => {
  crearPersonaje(personaje, escenarioEquipo2, i + 4); // Posiciones diferentes para el equipo 2
});

//Seleccionanasdo contenedor de habilidades
const informacion = document.querySelector(".seccionHabilidades");
const habilidades = document.querySelector(".habilidades");
//Seleccionando botones de habilidades
const habilidadAtacar = document.querySelector(".poder_Atacar");
const habilidad1 = document.querySelector(".poder_1");
const habilidad2 = document.querySelector(".poder_2");
//Seleccionando imagenes de habilidades
const imagenPoder1 = document.querySelector(".imagenPoder1");
const imagenPoder2 = document.querySelector(".imagenPoder2");
const imagenAtacar = document.querySelector(".imagen_atacar");
imagenAtacar.src = `./FrontEnd/assets/img/condicion/Atacar.png`;
//Seleccionando imagenes de cooldown
const imagencooldownhabilidad1 = document.querySelector(".cooldown_habilidad1");
const imagencooldownhabilidad2 = document.querySelector(".cooldown_habilidad2");
//Seleccionando texto cooldown
const cooldownHabilidad1 = document.querySelector(".cooldown_habilidad1");
const cooldownHabilidad2 = document.querySelector(".cooldown_habilidad2");
//Seleccionando texto de detalle poder
const descripcionHabilidades = document.querySelector(".descripcionHabilidades");
const nombrePoder = document.querySelector(".nombre_poder");
const descripcionPoder = document.querySelector(".descripcion_poder");
const descripcionTiempo = document.querySelector(".descripcion_tiempo");
//desacticar los poderes para luego hcaer visibles cuando se seleccione
descripcionHabilidades.style.display = "none";

//Eventos de mouse para ver el detalle del poder cuando el mouse este encima

habilidad1.addEventListener("mouseenter", (e) => actualizarDetallePoder(e));
habilidad2.addEventListener("mouseenter", (e) => actualizarDetallePoder(e));
//Eventos de mouse para ocultar el detalle del poder cuando el mouse se va
habilidad1.addEventListener("mouseleave", (e) => actualizarDetallePoder(e));
habilidad2.addEventListener("mouseleave", (e) => actualizarDetallePoder(e));

function actualizarDetallePoder(e) {
  if (e.type === "mouseenter") {
    descripcionHabilidades.style.display = "flex";
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
    descripcionHabilidades.style.display = "none";
  }
}

// Eventos de click para seleccionar el poder
habilidad1.addEventListener("click", () => seleccionarHabilidad(habilidad1, habilidad2, habilidadAtacar)
);
habilidad2.addEventListener("click", () => seleccionarHabilidad(habilidad2, habilidad1, habilidadAtacar)
);
habilidadAtacar.addEventListener("click", () =>  seleccionarHabilidad(habilidadAtacar, habilidad1, habilidad2)
);

function seleccionarHabilidad(
  habilidad,
  habilidadDesactivar1,
  habilidadDesactivar2
) {
  if (habilidadSeleccionada === habilidad.getAttribute("nombrePoder")) {
    habilidadSeleccionada = null;
    habilidad.classList.remove("boton_activo");
    console.log(`No hay Habilidad seleccionada`);
  } else {
    habilidadSeleccionada = habilidad.getAttribute("nombrePoder");
    habilidad.classList.add("boton_activo");
    habilidadDesactivar1.classList.remove("boton_activo");
    habilidadDesactivar2.classList.remove("boton_activo");
  }
}

//$ Actualizacion de la interfaz

function actualizarInterfaz() {
  actualizarVida();
  actualizarSeccionHabilidades();
  actualizarSeccionEstadisticas();
  actualizarseccionTurno();
  actualizarDebuff();
  actualizarMuerte();
}

function actualizarVida() {
  const allPersonajesHMTL = document.querySelectorAll(".personaje");
  const allPersonajesObjetos = Juego.equipo1.concat(Juego.equipo2);

  allPersonajesHMTL.forEach((personaje) => {
    const personajeObjeto = allPersonajesObjetos.find( (personajeObjeto) => personajeObjeto.id == personaje.id  );
    if (personajeObjeto) {
      let porcentajeVida = personaje.querySelector(".porcentajeVida");
      let numeroPorcentaje = personaje.querySelector(".numeroPorcentaje");
      porcentajeVida.setAttribute("style", `width: ${personajeObjeto.vida}%`);
      numeroPorcentaje.textContent = `${personajeObjeto.vida} / 100`;
    }
  });
}

function actualizarSeccionHabilidades() {
  if (Juego.personajeActual.equipo == 1) {
    informacion.classList.remove("seccionHabilidades_equipo2");
    informacion.classList.add("seccionHabilidades_equipo1");
  } else {
    informacion.classList.remove("seccionHabilidades_equipo1");
    informacion.classList.add("seccionHabilidades_equipo2");
  }

  if (Juego.personajeActual.habilidades[0].cooldownActual > 0) {
    imagencooldownhabilidad1.style.display = "flex";
    cooldownHabilidad1.textContent = `${Juego.personajeActual.habilidades[0].cooldownActual}`;
    cooldownHabilidad1.style.display = "flex";
  } else {
    cooldownHabilidad1.style.display = "none";
    imagencooldownhabilidad1.style.display = "none";
  }

  if (Juego.personajeActual.habilidades[1].cooldownActual > 0) {
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

  imagenPoder1.src = `./FrontEnd/assets/img/Personajes/${Juego.personajeActual.id}/poderes/poder1.png`;
  imagenPoder2.src = `./FrontEnd/assets/img/Personajes/${Juego.personajeActual.id}/poderes/poder2.png`;

  const botones = document.querySelectorAll(".habilidades button");
  botones.forEach((boton) => boton.classList.remove("boton_activo"));
}

function actualizarSeccionEstadisticas() {
  const allPersonajesHMTL = document.querySelectorAll(".personaje");
  const allPersonajesObjetos = Juego.equipo1.concat(Juego.equipo2);

  allPersonajesHMTL.forEach((personaje) => {
    const personajeObjeto = allPersonajesObjetos.find((personajeObjeto) => personajeObjeto.id == personaje.id );
    if (personajeObjeto) {
      personaje.querySelector(".cantidadDefensa").textContent =  personajeObjeto.defensa;
      personaje.querySelector(".cantidadAtaque").textContent =   personajeObjeto.ataque;
    }
  });
}

function actualizarseccionTurno() {
  const allPersonajesHMTL = document.querySelectorAll(".personaje");
  const allPersonajesObjetos = Juego.equipo1.concat(Juego.equipo2);

  allPersonajesHMTL.forEach((personaje) => {
    const personajeObjeto = allPersonajesObjetos.find((personajeObjeto) => personajeObjeto.id == personaje.id );
    if (personajeObjeto) {
      if (Juego.personajeActual.id === personajeObjeto.id) {
        personaje.querySelector(".seccionTurno").style.display = "flex";
      } else {
        personaje.querySelector(".seccionTurno").style.display = "none";
      }
    }
  });
}

function actualizarDebuff() {
  const allPersonajesHMTL = document.querySelectorAll(".personaje");
  const allPersonajesObjetos = Juego.equipo1.concat(Juego.equipo2);

  allPersonajesHMTL.forEach((personaje) => {
    const personajeObjeto = allPersonajesObjetos.find((personajeObjeto) => personajeObjeto.id == personaje.id);
    if (personajeObjeto) {
      if (!personajeObjeto.estaMuerto()) {
        
        const tieneQuemadura = personajeObjeto.debilitamiento.some(efecto => efecto.nombre === "Quemadura");
        const tieneVeneno = personajeObjeto.debilitamiento.some(efecto => efecto.nombre === "Veneno");
        const tieneTurno = personajeObjeto.debilitamiento.some(efecto => efecto.nombre === "Turno");

        if (tieneQuemadura) {
          personaje.querySelector(".seccionDebufQuemadura").style.display = "block";
          personaje.querySelector(".seccionVida").classList.add("efectoQuemadura");
        } else {
          personaje.querySelector(".seccionDebufQuemadura").style.display = "none";
          personaje.querySelector(".seccionVida").classList.remove("efectoQuemadura");
        }

        if (tieneVeneno) {
          personaje.querySelector(".seccionDebufVeneno").style.display = "block";
          personaje.querySelector(".porcentajeVida").classList.add("efectoVeneno");
        } else {
          personaje.querySelector(".seccionDebufVeneno").style.display = "none";
          personaje.querySelector(".porcentajeVida").classList.remove("efectoVeneno");
        }

        if (tieneTurno) {
          personaje.querySelector(".seccionDebufTurno").style.display = "block";
        } else {
          personaje.querySelector(".seccionDebufTurno").style.display = "none";
        }

      } else {
        // Reset everything if the character is dead
        personaje.querySelector(".seccionDebufQuemadura").style.display = "none";
        personaje.querySelector(".seccionDebufVeneno").style.display = "none";
        personaje.querySelector(".seccionDebufTurno").style.display = "none";
        personaje.querySelector(".porcentajeVida").classList.remove("efectoVeneno");
        personaje.querySelector(".seccionVida").classList.remove("efectoQuemadura");
      }
    }
  });
}

function actualizarMuerte() {
  const allPersonajesHMTL = document.querySelectorAll(".personaje");
  const allPersonajesObjetos = Juego.equipo1.concat(Juego.equipo2);

  allPersonajesHMTL.forEach((personaje) => {
    const personajeObjeto = allPersonajesObjetos.find((personajeObjeto) => personajeObjeto.id == personaje.id);
    if (personajeObjeto) {
      if (personajeObjeto.estaMuerto()) {
        personaje.querySelector(".ubicacionPersonajePrincipal").classList.add("efectoFantasma");
        personaje.querySelector(".seccionestadisticas").style.opacity = "0.3";
        personaje.querySelector(".seccionVida").style.opacity = "0.3";
      } else {
        personaje.querySelector(".ubicacionPersonajePrincipal").classList.remove("efectoFantasma");
        personaje.querySelector(".seccionestadisticas").style.opacity = "1";
        personaje.querySelector(".seccionVida").style.opacity = "1";
      }
    }
  });
}


function mostrarDaño(daño, personajeObjetivo, colorArgument = 'default') {
  const personajeHTML = document.getElementById(personajeObjetivo.id);
  if (personajeHTML) {
    const seccionDaño = personajeHTML.querySelector(".seccionDaño");
    const cantidadDaño = seccionDaño.querySelector(".cantidadDaño");

    seccionDaño.style.display = "flex"; // Triggers CSS animation
    
    let color = (colorArgument === 'default') ? '#ff9900' : colorArgument;
    seccionDaño.style.color = color;



    cantidadDaño.textContent = daño > 0 ? `${daño}` : `MISS`;

    setTimeout(() => {
      seccionDaño.style.display = "none";
    }, 500); // Matches the 1s duration in CSS
  }
}



console.warn('actualizar interfaz llamado de inicio')
actualizarInterfaz();

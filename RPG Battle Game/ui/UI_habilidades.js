const esenario_campo = document.querySelector(".esenario");

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

esenario_campo.appendChild(informacion);

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

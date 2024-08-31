// Selecciona el contenedor principal donde se mostrarán los personajes
const contenedor = document.querySelector(".contenedor");

// Obtiene la lista de personajes del gestor de turnos
const personajesJuego = GestorDeTurnos.personajes;

// Itera sobre cada personaje para generar su representación en la UI
personajesJuego.forEach((personaje) => {

  // Crea los elementos necesarios para la visualización del personaje
  const Personaje = document.createElement("div");
  const personaje_IMG = document.createElement("div");
  const Personaje_Info = document.createElement("div");
  const personaje_estadisticas = document.createElement("div");
  const Personaje_Poderes = document.createElement("div");

  // Elementos de información del personaje
  const img = document.createElement("img");
  const nombre = document.createElement("h2");
  const vida = document.createElement("p");
  const ataque = document.createElement("p");
  const defensa = document.createElement("p");
  const energia = document.createElement("p");

  // Botones para acciones y poderes del personaje
  const atacar = document.createElement("button");
  const poder1 = document.createElement("button");
  const poder2 = document.createElement("button");
  const poder3 = document.createElement("button");

  // Asigna clases CSS a los elementos para su estilo
  Personaje.id = personaje.id;
  Personaje.classList.add("personaje", `P${personaje.id}`);
  personaje_IMG.classList.add("character");
  Personaje_Info.classList.add("info");
  personaje_estadisticas.classList.add("estadisticas");
  Personaje_Poderes.classList.add("poderes");

  vida.classList.add("vida");
  ataque.classList.add("ataque");
  defensa.classList.add("defensa");
  energia.classList.add("energia");

  // Asigna la imagen correspondiente al tipo de personaje
  img.src = `./UI/assets/img/${personaje.constructor.name}.gif`;
  img.src = `./UI/assets/img/${personaje.constructor.name}.gif`;
  if (personaje.constructor.name === "Hechicero" || personaje.constructor.name === "Sanador") {
    img.src = `./UI/assets/img/${personaje.constructor.name}.webp`;
  }

  // Asigna el texto a los elementos de información del personaje
  nombre.textContent = ` ${personaje.nombre}  -  ${personaje.constructor.name} `;
  vida.textContent = `Vida: ${personaje.vida}`;
  ataque.textContent = `Ataque: ${personaje.ataque}`;
  defensa.textContent = `Defensa: ${personaje.defensa}`;
  energia.textContent = `Energía: ${personaje.energia}`;

  // Asigna el texto a los botones de ataque y poderes según el tipo de personaje
  atacar.textContent = "Atacar";
  let poderes;
  if (personaje.constructor.name === "Sanador" || personaje.constructor.name === "Hechicero" || personaje.constructor.name === "Guerrero" || personaje.constructor.name === "Ladron") {
    poderes = Object.getOwnPropertyNames(personaje.constructor.prototype).filter((poder) => poder !== "constructor" && poder !== "atacar");
    poder1.textContent = poderes[0];
    poder2.textContent = poderes[1];
    poder3.textContent = poderes[2];
  }

  // Asigna eventos a los botones y a la imagen del personaje
  atacar.onclick = () => { usarPoder(personaje, 'atacar'  ) };
  poder1.onclick = () => { usarPoder(personaje, poderes[0]) };
  poder2.onclick = () => { usarPoder(personaje, poderes[1]) };
  poder3.onclick = () => { usarPoder(personaje, poderes[2]) };
  personaje_IMG.onclick = () => { Batalla(personaje) };


  // Organiza y agrega los elementos creados al DOM
  personaje_IMG.appendChild(img);
  Personaje_Info.appendChild(nombre);
  personaje_estadisticas.appendChild(vida);
  personaje_estadisticas.appendChild(ataque);
  personaje_estadisticas.appendChild(defensa);

  Personaje_Poderes.appendChild(atacar);
  Personaje_Poderes.appendChild(poder1);
  Personaje_Poderes.appendChild(poder2);
  Personaje_Poderes.appendChild(poder3);

  Personaje.appendChild(personaje_IMG);
  Personaje.appendChild(Personaje_Info);
  Personaje.appendChild(personaje_estadisticas);
  Personaje.appendChild(Personaje_Poderes);

  contenedor.appendChild(Personaje);

});

// Actualiza la información de los personajes después de cada interacción
function UpdateInfo(...PersonajeInteractuan) {
  personajesJuego.forEach((personaje1) => {
    PersonajeInteractuan.forEach((personaje2) => {
      if (personaje1.id === personaje2.id) {
        const personaje = document.querySelector(`.P${personaje1.id}`);
        personaje.querySelector(".vida").textContent = `Vida: ${personaje1.vida}`;
        personaje.querySelector(".ataque").textContent = `Ataque: ${personaje1.ataque}`;
        personaje.querySelector(".defensa").textContent = `Defensa: ${personaje1.defensa}`;
        // Si es necesario, descomentar para actualizar también la energía
        // personaje.querySelector(".energia").textContent = `Energía: ${personaje1.energia}`;
      }
    });
  });

  // Actualiza la visualización del personaje que tiene el turno actual
  PersonajeTurno();
}

// Agrega la clase 'turn' al personaje que tiene el turno actual
function PersonajeTurno() {
  const IdPersonajeTurno = GestorDeTurnos.personajes[GestorDeTurnos.indiceTurnoActual].id;
  personajesJuego.forEach((personaje) => {
    const PJ = document.querySelector(`.P${personaje.id}`);
    if (personaje.id === IdPersonajeTurno) {
      PJ.classList.add("turn");
    } else {
      PJ.classList.remove("turn");
    }
  });
}

let personajeAtacante = null;



function usarPoder(personaje, poderNombre) {
  personajeAtacante = {
    personajeId: personaje,
    accion : poderNombre
  }

  console.log(personajeAtacante);


}

// Función para realizar la batalla entre el personaje atacante y el objetivo
function Batalla(Personaje_Objetivo) {

  if (personajeAtacante === null) {
    console.log("No has seleccionado un poder")
    return;
    
  }
  let Poder = personajeAtacante.accion;
  let Atacante = personajeAtacante.personajeId;

  if (Atacante) {
    Atacante[Poder](Personaje_Objetivo);
  }else{
    console.log("No hay personaje atacante")
  }

  botones.forEach( boton => {
    boton.classList.remove("btn__active");
  })


  personajeAtacante = null;


}

// Inicia la UI con la asignación del turno al primer personaje
PersonajeTurno();


const botones = document.querySelectorAll(".poderes button");

botones.forEach( boton => {
  boton.addEventListener("click", ActivacionBoton);
})


function ActivacionBoton(e) {

  // console.log(GestorDeTurnos.personajes[GestorDeTurnos.indiceTurnoActual].id)
  // console.log(this.parentElement.parentElement.id);

  if (GestorDeTurnos.personajes[GestorDeTurnos.indiceTurnoActual].id != this.parentElement.parentElement.id) {
    console.log("No es tu turno");
    return;
  }


  botones.forEach( boton => {
    boton.classList.remove("btn__active");
  })

  this.classList.add("btn__active");

}


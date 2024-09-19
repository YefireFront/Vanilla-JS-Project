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




 Juego.equipo1.forEach((personaje) => {

    // creando personajes en el escenario Left / 1
  
    const personaje1 = document.createElement("div");
    personaje1.classList.add("personaje", `p${personaje.id}`);
    Escenario_Equipo_1.appendChild(personaje1);


    // crear barra de vida
    const barra_vida = document.createElement("div");
    barra_vida.classList.add("contenedor_barra_vida" , `personaje_${personaje.id}`);
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

    seccion_poder.appendChild(poder1);
    seccion_poder.appendChild(poder2);
    
    

    //idetifcador de turno
    const turno = document.createElement("div");
    turno.classList.add("turno", "turno_izquierda");
    personaje1.appendChild(turno);
  
  
  
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
      const personaje = Juego.equipo1.find((personaje) => personaje.id == idPersonaje);


      
      if (habilidadSeleccionada) {
        if (habilidadSeleccionada === "Atacar") {
          let accionCompletada = Juego.personajeActual.Atacar(personaje); 
          habilidadSeleccionada = null;

          if (accionCompletada) {
            animacionEquipo1( e.target, e.target.parentElement.nextElementSibling, );
            desactivarBotones();
          }
          
          desactivarBotones();

        }else{
          desactivarBotones();
        }

        if (habilidadSeleccionada != null && habilidadSeleccionada != "Atacar") {
          let accionCompletada= Juego.personajeActual.usarHabilidad(habilidadSeleccionada, personaje);
          habilidadSeleccionada = null;

          if (accionCompletada) {
            animacionEquipo1( e.target, e.target.parentElement.nextElementSibling, );
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
    barra_vida.classList.add("contenedor_barra_vida" , `personaje_${personaje.id}`);
    personaje1.appendChild(barra_vida);
    
    const porcentajevida = document.createElement("span");
    porcentajevida.classList.add("porcentajevida");
    porcentajevida.setAttribute("style", `width: ${personaje.vida}%`);
    barra_vida.appendChild(porcentajevida);
    
    const num_porcentaje = document.createElement("p");
    num_porcentaje.classList.add("num_porcentaje");
    num_porcentaje.textContent = `${personaje.vida} / 100`;
    barra_vida.appendChild(num_porcentaje);




  
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
      const personaje = Juego.equipo2.find((personaje) => personaje.id == idPersonaje);


      
      if (habilidadSeleccionada) {
        if (habilidadSeleccionada === "Atacar") {
          let accionCompletada = Juego.personajeActual.Atacar(personaje);
          habilidadSeleccionada = null;

          if (accionCompletada) {
            animacionEquipo2( e.target, e.target.parentElement.previousElementSibling, );
            desactivarBotones();
          }

          desactivarBotones();

        }else{
          desactivarBotones();
        }

        if (habilidadSeleccionada != null && habilidadSeleccionada != "Atacar") {
          let accionCompletada = Juego.personajeActual.usarHabilidad(habilidadSeleccionada, personaje);
          habilidadSeleccionada = null;

          if (accionCompletada) {
            animacionEquipo2( e.target, e.target.parentElement.previousElementSibling, );
            desactivarBotones();
          }
          
        }
      }
      
      
  
    });
  
  });





function actualizarInfomacionPersonajeActual() {
  nombreJugadorActual.textContent = Juego.personajeActual.nombre;
  vidaJugadorActual.textContent = `Vida: ${Juego.personajeActual.vida}`;
  ataqueJugadorActual.textContent = `Ataque: ${Juego.personajeActual.ataque}`;
  defensaJugadorActual.textContent = `Defensa: ${Juego.personajeActual.defensa}`;
  habilidad1.textContent = Juego.personajeActual.habilidades[0].nombre;
  habilidad2.textContent = Juego.personajeActual.habilidades[1].nombre;


  //Actualizar barra de vida equipo 
   const barra_vida = document.querySelectorAll(".contenedor_barra_vida");
   barra_vida.forEach((barra_vida) => {
     Juego.equipo1.forEach((personaje) => {
       // Verificamos si la barra de vida contiene la clase correspondiente al personaje
       if (barra_vida.classList.contains(`personaje_${personaje.id}`)) {
         // Seleccionamos los elementos dentro de la barra de vida actual
         let porcentajevida = barra_vida.querySelector('.porcentajevida');
         let num_porcentaje = barra_vida.querySelector('.num_porcentaje');
         
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
         let porcentajevida = barra_vida.querySelector('.porcentajevida');
         let num_porcentaje = barra_vida.querySelector('.num_porcentaje');
         
         // Actualizamos el contenido de texto con los valores del personaje
         setTimeout(() => {                                                   
           porcentajevida.setAttribute("style", `width: ${personaje.vida}%`);
           num_porcentaje.textContent = `${personaje.vida} / 100`;
         }, 1700);
       }
     });
   });

   //Actualizar barra de vida equipo 2
   
   

  


}



const informacion = document.createElement("div");
  const stats = document.createElement("div");
    const nombreJugadorActual = document.createElement("h2");
    const vidaJugadorActual = document.createElement("h2");
    const ataqueJugadorActual = document.createElement("h2");
    const defensaJugadorActual = document.createElement("h2");

  const habilidades = document.createElement("div");
    const habilidadAtacar = document.createElement("button");
    const habilidad1 = document.createElement("button");
    const habilidad2 = document.createElement("button");




habilidades.classList.add("habilidades");
stats.classList.add("stats");
informacion.classList.add("informacion");


body.appendChild(informacion);
informacion.appendChild(stats);
stats.appendChild(nombreJugadorActual);
stats.appendChild(vidaJugadorActual);
stats.appendChild(ataqueJugadorActual);
stats.appendChild(defensaJugadorActual);
informacion.appendChild(habilidades);
habilidades.appendChild(habilidadAtacar);
habilidades.appendChild(habilidad1);
habilidades.appendChild(habilidad2);



nombreJugadorActual.textContent = Juego.personajeActual.nombre;
vidaJugadorActual.textContent = `Vida: ${Juego.personajeActual.vida}`;
ataqueJugadorActual.textContent = `Ataque: ${Juego.personajeActual.ataque}`;
defensaJugadorActual.textContent = `Defensa: ${Juego.personajeActual.defensa}`;
habilidadAtacar.textContent = "Atacar";
habilidad1.textContent = Juego.personajeActual.habilidades[0].nombre;
habilidad2.textContent = Juego.personajeActual.habilidades[1].nombre;



let personajeatacante = null;
let habilidadSeleccionada = null


function seleccionarHabilidad(habilidad, habilidadDesactivar1, habilidadDesactivar2 ) {
  if (habilidadSeleccionada !== habilidad.textContent) {
    habilidadSeleccionada = habilidad.textContent;
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

habilidad1.addEventListener("click", () => seleccionarHabilidad(habilidad1, habilidad2, habilidadAtacar));
habilidad2.addEventListener("click", () => seleccionarHabilidad(habilidad2, habilidad1, habilidadAtacar));
habilidadAtacar.addEventListener("click", () =>seleccionarHabilidad(habilidadAtacar ,habilidad1, habilidad2) );




const turno_izquierda = document.querySelectorAll(".turno_izquierda");
const turno_derecha = document.querySelectorAll(".turno_derecha");


function AsignarTurno() {

  // Cambiar a display: none de forma inmediata
  turno_izquierda.forEach((turno, i) => {
    if (Juego.personajeActual.id != turno_izquierda[i].nextElementSibling.id) {
      turno.style.display = "none";
    }
  });

  turno_derecha.forEach((turno, i) => {
    if (Juego.personajeActual.id != turno_derecha[i].previousElementSibling.id) {
      turno.style.display = "none";
    }
  });

  // Usar timeout solo para el display: block después de 1 segundo
  setTimeout(() => {
    turno_izquierda.forEach((turno, i) => {
      if (Juego.personajeActual.id == turno_izquierda[i].nextElementSibling.id) {
        turno.style.display = "block";
      }
    });
    
    turno_derecha.forEach((turno, i) => {
      if (Juego.personajeActual.id == turno_derecha[i].previousElementSibling.id) {
        turno.style.display = "block";
      }
    });
  }, 1700);
}


function desactivarBotones() {
  const botones = document.querySelectorAll(".habilidades button");
  botones.forEach(boton => boton.classList.remove("boton_activo"));
}


AsignarTurno()

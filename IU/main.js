console.log(Juego.equipo1);
console.log(Juego.equipo2);

// selecioando escenario principal
const esenario = document.querySelector(".esenario");
console.log(esenario);

// creando escenario Left / 1
const escenarioLeft = document.createElement("div");
escenarioLeft.classList.add("esenario__left");
esenario.appendChild(escenarioLeft);


// creando escenario Right / 2
const escenarioRight = document.createElement("div");
escenarioRight.classList.add("esenario_right");
esenario.appendChild(escenarioRight);

Juego.equipo1.forEach((personaje, index) => {

    // creando personajes en el escenario Left / 1
    
    const personaje1 = document.createElement("div");
    personaje1.classList.add("personaje" , "p1");
    escenarioLeft.appendChild(personaje1);
    
    // Creacion personaje principal
    const peronaje_principal = document.createElement("div");
    peronaje_principal.classList.add("personaje_Principal");
    personaje1.appendChild(peronaje_principal);
    
    const imagen_personaje = document.createElement("img");
    imagen_personaje.src = "./img/guerreroFD.gif";
    peronaje_principal.appendChild(imagen_personaje);
    
    const Shadow = document.createElement("div");
    Shadow.classList.add("shadow_left");
    peronaje_principal.appendChild(Shadow);
    
    
    // Creacion personaje secundario
    const peronaje_secundario = document.createElement("div");
    peronaje_secundario.classList.add("personaje_Secundario");
    
    
    console.log(personaje1)
});
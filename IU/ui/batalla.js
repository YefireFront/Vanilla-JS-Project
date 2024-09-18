const personajesDeElEquipo1 = document.querySelectorAll(".esenario__left .personaje");
const personajesDeElEquipo2 = document.querySelectorAll(".esenario_right .personaje");

function animacionEquipo1(objetivo, lugarDeAtaque) {

    lugarDeAtaque.children[0].src = `./players/${Juego.PersonajeAnterior.id}/Atacando.gif`;

    objetivo.classList.add("daño");
    esenario.classList.add("temblor");

    setTimeout(() => {
        objetivo.classList.remove("daño");
        esenario.classList.remove("temblor");
    }, 2300);
    
    setTimeout(() => {
        lugarDeAtaque.children[0].src = "";
    }, 1500);

    personajesDeElEquipo2.forEach(elemento => {
        // Utiliza template string para construir la clase dinámica basada en el id del personaje actual
        if (elemento.classList.contains(`p${Juego.PersonajeAnterior.id}`)) {
            console.log('El elemento contiene la clase:', `p${Juego.PersonajeAnterior.id}`);
            console.log(elemento);  // Muestra el elemento que contiene la clase
            elemento.style.display = "none";
            setTimeout(() => {
                elemento.style.display = "flex";
            }, 1500);
        }else{
            console.log('El elemento no contiene la clase:', `p${Juego.PersonajeAnterior.id}`);
        }
    });

}


function animacionEquipo2( objetivo , lugarDeAtaque) {
    lugarDeAtaque.children[0].src = `./players/${Juego.PersonajeAnterior.id}/Atacando.gif`;

    objetivo.classList.add("daño");
    esenario.classList.add("temblor");

    setTimeout(() => {
        objetivo.classList.remove("daño");
        esenario.classList.remove("temblor");
    }, 2300);
    
    setTimeout(() => {
        lugarDeAtaque.children[0].src = "";
    }, 1500);

    personajesDeElEquipo1.forEach(elemento => {
        // Utiliza template string para construir la clase dinámica basada en el id del personaje actual
        if (elemento.classList.contains(`p${Juego.PersonajeAnterior.id}`)) {
            console.log('El elemento contiene la clase:', `p${Juego.PersonajeAnterior.id}`);
            console.log(elemento);  // Muestra el elemento que contiene la clase
            elemento.style.display = "none";
            setTimeout(() => {
                elemento.style.display = "flex";
            }, 1500);
        }else{
            console.log('El elemento no contiene la clase:', `p${Juego.PersonajeAnterior.id}`);
        }
    });
}

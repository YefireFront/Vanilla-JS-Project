const equipo2 = document.querySelectorAll(".esenario_right .personaje");
const equipo1 = document.querySelectorAll(".esenario__left .personaje");
console.log(equipo2);
console.log(equipo1);



equipo2.forEach(element => {

    element.addEventListener("click", (e) => {
        const lugarDeAtaque = e.target.parentElement.previousElementSibling
        const objetivo = e.target
        lugarDeAtaque.children[0].src = `./players/${Juego.personajeActual.id}/Atacando.gif`;
       

 

     
        
        objetivo.classList.add("daño");
        esenario.classList.add("temblor");
        // objetivo.classList.add("poisonEffect");
        
        
        setTimeout(() => {
            objetivo.classList.remove("daño");
            esenario.classList.remove("temblor");
        }, 2300);


        setTimeout(() => {
            lugarDeAtaque.children[0].src = "";
        }, 2000);
    }); 
    
});

// const idatacanteIzquierda = 6


equipo1.forEach(element => { 

    element.addEventListener("click", (e) => {
        const lugarDeAtaque = e.target.parentElement.nextElementSibling
        lugarDeAtaque.children[0].src = `./players/${Juego.personajeActual.id}/Atacando.gif`;
        const objetivo = e.target

        objetivo.classList.add("daño");
        esenario.classList.add("temblor");

        // objetivo.classList.add("poisonEffect");

        setTimeout(() => {
            objetivo.classList.remove("daño");
            esenario.classList.remove("temblor");

        }, 2300);

        setTimeout(() => {
            lugarDeAtaque.children[0].src = "";
        }, 1500);
    }); 
    
});
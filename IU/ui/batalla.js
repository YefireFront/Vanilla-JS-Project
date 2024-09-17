const ObjetivoDerecha = document.querySelectorAll(".esenario_right .personaje");
const ObjetivoIzquierda = document.querySelectorAll(".esenario__left .personaje");
console.log(ObjetivoIzquierda)




ObjetivoDerecha.forEach(element => {

    element.addEventListener("click", (e) => {
        const lugarDeAtaque = e.target.parentElement.previousElementSibling
        const objetivo = e.target
        lugarDeAtaque.children[0].src = `./players/${Juego.personajeActual.id}/Atacando.gif`;



        ObjetivoIzquierda.forEach(elemento => {
            // Utiliza template string para construir la clase dinámica basada en el id del personaje actual
            if (elemento.classList.contains(`p${Juego.personajeActual.id}`)) {
                console.log('El elemento contiene la clase:', `p${Juego.personajeActual.id}`);
                console.log(elemento);  // Muestra el elemento que contiene la clase
                elemento.style.display = "none";
                setTimeout(() => {
                    elemento.style.display = "block";
                }, 1500);
            }else{
                console.log('El elemento no contiene la clase:', `p${Juego.personajeActual.id}`);
            }
        });
        
       



     
        
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

const idatacanteIzquierda = 2


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
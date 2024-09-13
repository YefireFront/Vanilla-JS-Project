const poder1 = document.querySelector(".poder1");
const ObjetivoDerecha = document.querySelectorAll(".esenario_right .personaje");
const ObjetivoIzquierda = document.querySelectorAll(".esenario__left .personaje");
const idatacanteDerecha = 1
const idDesaparece= document.getElementById("1");
console.log(idDesaparece);
ObjetivoDerecha.forEach(element => {

    element.addEventListener("click", (e) => {
        const lugarDeAtaque = e.target.parentElement.previousElementSibling
        const objetivo = e.target
        lugarDeAtaque.children[0].src = `./players/${idatacanteDerecha}/Atacando.gif`;
        console.log('atacante',lugarDeAtaque);
        console.log('Objetivo', objetivo);


        idDesaparece.style.display = "none";
        setTimeout(() => {
            idDesaparece.style.display = "block";
        }, 1500);

     
        
        objetivo.classList.add("daño");
        // objetivo.classList.add("poisonEffect");


        setTimeout(() => {
            objetivo.classList.remove("daño");
        }, 2300);


        setTimeout(() => {
            lugarDeAtaque.children[0].src = "";
        }, 1500);
    }); 
    
});


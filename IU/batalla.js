const poder1 = document.querySelector(".poder1");
const ObjetivoDerecha = document.querySelectorAll(".esenario_right .personaje");
const ObjetivoIzquierda = document.querySelectorAll(".esenario__left .personaje");
console.log(ObjetivoDerecha);
console.log(ObjetivoIzquierda);

ObjetivoDerecha.forEach(element => {

    element.addEventListener("click", (e) => {
        const lugarDeAtaque = e.target.parentElement.previousElementSibling
        lugarDeAtaque.children[0].src = "./img/ATK1.gif";
        const objetivo = e.target
        objetivo.classList.add("daño");
        objetivo.classList.add("poisonEffect");


        setTimeout(() => {
            objetivo.classList.remove("daño");
        }, 2300);


        setTimeout(() => {
            lugarDeAtaque.children[0].src = "";
        }, 1500);
    }); 
    
});


ObjetivoIzquierda.forEach(element => { 

    element.addEventListener("click", (e) => {
        const lugarDeAtaque = e.target.parentElement.nextElementSibling
        lugarDeAtaque.style.display = "block";
        console.log(lugarDeAtaque);
        lugarDeAtaque.children[0].src = "./img/ATK10.gif";
        const objetivo = e.target
        objetivo.classList.add("daño");
        objetivo.classList.add("poisonEffect");

        setTimeout(() => {
            objetivo.classList.remove("daño");
        }, 2300);

        setTimeout(() => {
            lugarDeAtaque.children[0].src = "";
        }, 1500);
    }); 
    
});
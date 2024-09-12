const informacion_left  = document.querySelector(".informacion_left");
const imagenes_left = document.querySelectorAll(".esenario__left img");

imagenes_left.forEach((imagen) => {

    imagen.addEventListener("mouseenter", () => {
        console.log(informacion_left)
        informacion_left.classList.add("parpadeo");

    });

    imagen.addEventListener("mouseleave", () => {
        informacion_left.classList.remove("parpadeo");
    });
});


const informacion_right  = document.querySelector(".informacion_right");
const imagenes_right = document.querySelectorAll(".esenario_right img");

console.log(imagenes_right)
imagenes_right.forEach((imagen) => {

    imagen.addEventListener("mouseenter", (e) => {
        console.log(e.target)
        informacion_right.classList.add("parpadeo");
        informacion_right.appendChild= e.target;
        

    });

    imagen.addEventListener("mouseleave", () => {
        informacion_right.classList.remove("parpadeo");
    });
});
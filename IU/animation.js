const imagenes_left = document.querySelectorAll(".esenario__left img");

imagenes_left.forEach((imagen) => {
  imagen.addEventListener("mouseenter", (e) => {
    setTimeout(() => {
      informacion_left.classList.add("parpadeo");
    }, 300);
  });

  imagen.addEventListener("mouseleave", () => {
    setTimeout(() => {
      informacion_left.classList.remove("parpadeo");
    }, 300);
  });
});

const imagenes_right = document.querySelectorAll(".esenario_right img");

imagenes_right.forEach((imagen) => {
  imagen.addEventListener("mouseenter", (e) => {
    informacion_right.classList.add("parpadeo");
    informacion_right.appendChild = e.target;
  });

  imagen.addEventListener("mouseleave", () => {
    informacion_right.classList.remove("parpadeo");
  });
});


const img = document.querySelector('img');
const daño = document.querySelector('.daño');
const atk = document.querySelector('.atk');
const veneno = document.querySelector('.veneno');
const curar = document.querySelector('.curar');
const muerte = document.querySelector('.muerte');



atk.addEventListener('click', () => {
    
    img.src= './img/guerreroATK.gif';
    
    setTimeout(function() {
        img.src= './img/guerreroFD.gif';
    }, 1950); 
});


daño.addEventListener('click', () => {
    img.classList.add('animate-damage');

    setTimeout(function() {
        img.classList.remove('animate-damage');
    }, 2000); 
});

veneno.addEventListener('click', () => {
    img.classList.add('animate-poison');

});


curar.addEventListener('click', () => {
    img.classList.add('animate-healing');

    setTimeout(function() {
        img.classList.remove('animate-healing');
    }, 2000);
});


muerte.addEventListener('click', () => {
      // Añadir la clase de animación de muerte
      img.classList.add('animate-ghost');
            
      // Esperar el final de la animación de muerte
      img.addEventListener('animationend', function() {
          // Eliminar la clase de muerte
          img.classList.remove('animate-death');
          // Añadir la clase de animación de fantasma
          img.classList.add('animate-ghost');
      }, { once: true });
});
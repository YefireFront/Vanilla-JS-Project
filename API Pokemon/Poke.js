const apiUrl = 'https://pokeapi.co/api/v2/pokemon';
let PokemonList = []

fetch(`${apiUrl}?limit=10`)
  .then(response => response.json())
  .then(data => {
    const pokemons = data.results;
    pokemons.forEach(pokemon => {
      fetch(pokemon.url)
        .then(response => response.json())
        .then(pokemonData => {
          
            PokemonList.push(
              {
                name:pokemonData.name,
                type:pokemonData.types[0].type.name,
                img:pokemonData.sprites.front_default
              }
              
              ) 

           
        })
        .catch(error => {
          console.error('Hubo un error al obtener los datos del Pokémon:', error);
        });
    });
  })
  .catch(error => {
    console.error('Hubo un error al obtener la lista de Pokémon:', error);
  });
  

async function ejecucionAsincronica() {
  await new Promise(resolve => setTimeout(resolve,2000));  
  cards(PokemonList)

}


function cards(ArrayPokemon) {
  const $container = document.querySelector(".container")

  ArrayPokemon.forEach(pokemon =>{


                 //! CREANDO CARTAD PRINCIPALES
  //%CREATIND
  const $card = document.createElement("div")
  //%STYLING
  $card.classList.add('card')
  //%INSERTING
  $container.append($card)

                //! CREANDO CARTAD DIV INFO  
  //%CREATING
  const $info        = document.createElement("div");  
  const $info__name  = document.createElement("h2"); 
  const $info__type  = document.createElement("div") ;
  const $i           = document.createElement("i");
  const $p           = document.createElement("p");
  //%STYLING
  $info.classList.add('info');     
  $info__name.classList.add('info__name')
  $info__type.classList.add('info__type')   
  
  if (pokemon.type == 'fire') {
    $i.classList.add('fa-solid' , 'fa-fire')
    $i.style                ="color: #f15d1e";
    $info__name.style.color = '#f15d1e';
    $card.classList.add('fire')
    
  }
  if (pokemon.type == 'grass') {
    $i.classList.add('fa-solid' , 'fa-leaf')
    $i.style                ="color:#25b686"
    $info__name.style.color = '#25b686';
    $card.classList.add('grass')
    
  }
  if (pokemon.type == 'bug') {
    $i.classList.add('fa-solid' , 'fa-bug')
    $i.style                ="color:#c15d06"
    $info__name.style.color = '#c15d06';
    $card.classList.add('grass')
    
  }
  if (pokemon.type == 'ice') {
    $i.classList.add('fa-solid', 'fa-icicles')
    $i.style                ="color:#ffffff"
    $info__name.style.color = '#2968d6';
    $card.classList.add('water')
    
  }
  if (pokemon.type == 'water') {
    $i.classList.add('fa-solid', 'fa-location-pin','fa-rotate-180')
    $i.style                ="color:#2968d6"
    $info__name.style.color = '#2968d6';
    $card.classList.add('water')
    
  }
  if (pokemon.type == 'dragon') {
    $i.classList.add('fa-solid', 'fa-dragon')
    $i.style                ="color:#2968d6"
    $info__name.style.color = '#2968d6';
    $card.classList.add('water')
    
  }
  if (pokemon.type == 'rock' || pokemon.type== 'ground') {
    $i.classList.add('fa-solid', 'fa-circle')
    $i.style                ="color:#837f6b"
    $info__name.style.color = '#837f6b';
    $card.classList.add('rock')
    
  }
  if (pokemon.type == 'electric') {
    $i.classList.add('fa-solid','fa-bolt')
    $i.style                ="color:#f2d026"
    $info__name.style.color = '#f2d026';
    $card.classList.add('electric')
    
  }
  if (pokemon.type == 'psychic') {
    $i.classList.add('fa-solid','fa-timeline')
    $i.style                ="color:#b8a800"
    $info__name.style.color = '#b8a800';
    $card.classList.add('electric')
  }
  if (pokemon.type == 'poison') {
    $i.classList.add('fa-solid', 'fa-skull')
    $i.style                ="color:#604cc8"
    $info__name.style.color = '#604cc8';
    $card.classList.add('poison')
    
  }
  if (pokemon.type == 'normal') {
    $i.classList.add('fa-solid', 'fa-circle')
    $i.style                ="color:#8f8f8f"
    $info__name.style.color = '#8f8f8f';
        $card.classList.add('normal')

  }
  if (pokemon.type == 'fighting') {
    $i.classList.add('fa-solid', 'fa-hand-back-fist')
    $i.style                ="color:#c91d1d"
    $info__name.style.color = '#c91d1d';
        $card.classList.add('fire')

  }
  if (pokemon.type == 'fairy') {
    $i.classList.add('fa-solid', 'fa-moon')
    $i.style                ="color:#e84594"
    $info__name.style.color = '#e84594';
        $card.classList.add('feiry')

  }
 
  //%INSERTING  
  $card.append($info)
  $info.append($info__name,$info__type)
  $info__type.append($i,$p)
  //%TEXTING
  $info__name.textContent = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1) 
  $p.textContent          = pokemon.type.charAt(0).toUpperCase() + pokemon.type.slice(1) 


                    //! CREANDO CARTAD DIV IMGAGE  
  //%CREATING
  const $imagen       = document.createElement("div");                  
  const $img          = document.createElement("img");                  
  //%STYLING
  $imagen.classList.add('imagen');
  $img.setAttribute('src', pokemon.img);
  //%INSERTING  
  $imagen.append($img)
  $card.append($imagen)

})
  
}




ejecucionAsincronica()


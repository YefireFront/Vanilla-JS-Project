const listwrapper = document.querySelector("#listaPokemon");
const apiUrl = "https://pokeapi.co/api/v2/pokemon/";
const pokemonlista=[];

fetch(`${apiUrl}?limit=3`)
  .then((response) => response.json())
  .then((data) => {
    const pokemons = data.results;
    pokemons.forEach((pokemon) => {
      fetch(pokemon.url)
        .then((response) => response.json())
        .then((pokemonData) => {
          
          // Create stats Data Pokemon
          let objetoStatsPokemon = {};
           pokemonData.stats.forEach((e) => {
            objetoStatsPokemon[e.stat.name] = e.base_stat;
          });

          pokemonlista.push({
            order: pokemonData.order,
            name: pokemonData.name,
            type: pokemonData.types[0].type.name,
            img: pokemonData.sprites.other["official-artwork"].front_default,
            weight: pokemonData.weight,
            height: pokemonData.height,
            types: pokemonData.types.map((e) => e.type.name),
            stats: objetoStatsPokemon,
          });
          
          
          // BuiltPokemon(pokemonlista)
        })
        .catch((error) => {
          console.error(
            "Hubo un error al obtener los datos del Pokémon:",
            error
          );
        });
    });
  });

  
  function BuiltPokemon(ListAllPokemon) {
    listwrapper.innerHTML = "";

    ListAllPokemon.forEach((pokemon) => {
      const cardPokemon = document.createElement("div");
      cardPokemon.className = "pokemon";
      cardPokemon.innerHTML = `
      <div class="number-wrap">
          <p class="pokemon-id-back">${pokemon.order}</p>
          <div class="pokemon-imagen">
              <img src="${pokemon.img}" alt="Pikachu"
                   alt="${pokemon.name}">
          </div>
          <div class="pokemon-info">
              <div class="nombre-contenedor">
                  <p class="pokemon-id">#${pokemon.order}</p>
                  <h2 class="pokemon-nombre">${pokemon.name}</h2>
              </div>
              <div class="pokemon-tipos">
              
                  <p class="electric tipo">ELECTRIC</p>
                  <p class="fighting tipo">FIGHTING</p>
              </div>
              <div class="pokemon-stats">
                  <p class="stat">4m</p>
                  <p class="stat">60kg</p>
              </div>
          </div>
      </div>
      `;


  
      listwrapper.appendChild(cardPokemon);
  
    });
    
  }




  async function ejecucionAsincronica() {
    await new Promise(resolve => setTimeout(resolve,3000));  
    pokemonlista.forEach(e=>{
      console.log(e);
    })
  
  }


  ejecucionAsincronica()
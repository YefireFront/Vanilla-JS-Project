const PokemonList = document.querySelector("#listaPokemon");
const apiUrl = "https://pokeapi.co/api/v2/pokemon/";
const pokemonlist = [];


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
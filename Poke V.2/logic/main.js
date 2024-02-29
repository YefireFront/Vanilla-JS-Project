const PokemonList = document.querySelector("#listaPokemon");
const apiUrl = "https://pokeapi.co/api/v2/pokemon/";
const pokemonlista = [];

fetch(`${apiUrl}?limit=3`)
  .then((response) => response.json())
  .then((data) => {
    const pokemons = data.results;
    pokemons.forEach((pokemon) => {
      fetch(pokemon.url)
        .then((response) => response.json())
        .then((pokemonData) => {
          console.log(pokemonData);
          pokemonlista.push({
            order: pokemonData.order,
            name: pokemonData.name,
            type: pokemonData.types[0].type.name,
            img: pokemonData.sprites.other["official-artwork"].front_default,
            weight: pokemonData.weight,
            height: pokemonData.height,
            types: pokemonData.types.map(e=>e.type.name)
          });
        })
        .catch((error) => {
          console.error(
            "Hubo un error al obtener los datos del Pokémon:",
            error
          );
        });
    });
  });


  console.log(pokemonlista);
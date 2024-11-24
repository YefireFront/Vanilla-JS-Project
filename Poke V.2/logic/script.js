const apiUrl = "https://pokeapi.co/api/v2/pokemon/";

// Función para obtener la lista de Pokémon
async function fetchPokemonList() {
  try {
    const pokemonList = [];

    // Llamada a la API para obtener los Pokémon
    const response = await fetch(`${apiUrl}?limit=3`);
    const data = await response.json();
    const dataJson = data.results;

    console.log( dataJson);

    for (const pokemon of dataJson) {

      const fetchPokemon = await fetch(pokemon.url);
      const pokemonIndividualData = await fetchPokemon.json();

        // Create stats Data Pokemon
        let objetoStatsPokemon = {};
        pokemonIndividualData.stats.forEach((e) => {
          objetoStatsPokemon[e.stat.name] = e.base_stat;
        });

      pokemonList.push({
        order: pokemonIndividualData.id,
        name: pokemonIndividualData.name,
        type: pokemonIndividualData.types[0].type.name,
        img: pokemonIndividualData.sprites.other["official-artwork"].front_default,
        weight: pokemonIndividualData.weight,
        height: pokemonIndividualData.height,
        types: pokemonIndividualData.types.map((e) => e.type.name),
        stats: objetoStatsPokemon
      });
      
    }


    console.log(pokemonList);

  

  
  } catch (error) {

    console.error("Error al obtener los Pokémon:", error);
  }
}


fetchPokemonList()
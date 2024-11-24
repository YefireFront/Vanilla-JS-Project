const apiUrl = "https://pokeapi.co/api/v2/pokemon/";

// Función para obtener los detalles de un Pokémon
async function fetchPokemonDetails(pokemonUrl) {
  const response = await fetch(pokemonUrl);
  const pokemonData = await response.json();

  // Crear el objeto de estadísticas del Pokémon
  const stats = {};
  pokemonData.stats.forEach((stat) => {
    stats[stat.stat.name] = stat.base_stat;
  });

  return {
    order: pokemonData.id,
    name: pokemonData.name,
    type: pokemonData.types[0].type.name,
    img: pokemonData.sprites.other["official-artwork"].front_default,
    weight: pokemonData.weight,
    height: pokemonData.height,
    types: pokemonData.types.map((type) => type.type.name),
    stats,
  };
}

// Función para obtener la lista de Pokémon
async function fetchPokemonList() {
  try {
    // Llamada inicial para obtener la lista de Pokémon
    const response = await fetch(`${apiUrl}?limit=3`);
    const { results: pokemonResults } = await response.json();

    // Obtener detalles de cada Pokémon en paralelo
    const pokemonList = await Promise.all(
      pokemonResults.map((pokemon) => fetchPokemonDetails(pokemon.url))
    );

    console.log(pokemonList);
  } catch (error) {
    console.error("Error al obtener los Pokémon:", error);
  }
}

fetchPokemonList();

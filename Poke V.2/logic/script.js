const apiUrl = "https://pokeapi.co/api/v2/pokemon/";

// Función para obtener la lista de Pokémon
async function fetchPokemonList() {
  try {
    // Llamada a la API
    const response = await fetch(`${apiUrl}?limit=10`);
    
    // Conversión de la respuesta a formato JSON
    const data = await response.json();
    
    // Mostrar los resultados en la consola
    console.log("Lista de Pokémon obtenida:", data.results);
  } catch (error) {
    console.error("Error al obtener los Pokémon:", error);
  }
}

// Llamar a la función para probar
fetchPokemonList();

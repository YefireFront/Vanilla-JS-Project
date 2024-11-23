const apiUrl = "https://pokeapi.co/api/v2/pokemon/";
const appContainer = document.querySelector("#app"); // Contenedor en el DOM

// Función para obtener la lista de Pokémon y sus detalles
async function fetchPokemonList() {
  try {
    // Llamada a la API para obtener los Pokémon
    const response = await fetch(`${apiUrl}?limit=3`);
    const data = await response.json();
    const pokemonList = data.results;
    console.log("Lista de Pokémon obtenida:", pokemonList);

    // Obtener información detallada de cada pokémon
    const pokemonDetails = await Promise.all(
      pokemonList.map(async (pokemon) => {
        const pokemonInfo = await fetch(pokemon.url);
        return pokemonInfo.json();
      })
    );

    // Mostrar los Pokémon en el DOM
    displayPokemons(pokemonDetails);
  } catch (error) {
    console.error("Error al obtener los Pokémon:", error);
  }
}

// Función para mostrar los Pokémon en el DOM
function displayPokemons(pokemonDetails) {
  // Limpiar el contenedor antes de agregar las cartas
  appContainer.innerHTML = "";

  // Crear las cartas de Pokémon
  pokemonDetails.forEach((pokemon) => {
    // Crear el contenedor de la carta
    const pokemonCard = document.createElement("div");
    pokemonCard.className = "pokemon-card";

    // Crear y configurar el elemento del nombre
    const pokemonName = document.createElement("h3");
    pokemonName.textContent = pokemon.name;

    // Crear y configurar el elemento de la imagen
    const pokemonImage = document.createElement("img");
    pokemonImage.src = pokemon.sprites.front_default;
    pokemonImage.alt = pokemon.name;

    // Crear y configurar el enlace a los detalles
    const pokemonLink = document.createElement("a");
    pokemonLink.href = pokemon.url;
    pokemonLink.textContent = "Ver detalles";
    pokemonLink.target = "_blank";

    // Agregar elementos hijos a la carta
    pokemonCard.appendChild(pokemonName);
    pokemonCard.appendChild(pokemonImage);
    pokemonCard.appendChild(pokemonLink);

    // Agregar la carta al contenedor principal
    appContainer.appendChild(pokemonCard);
  });
}

// Llamar a la función para iniciar el flujo
fetchPokemonList();
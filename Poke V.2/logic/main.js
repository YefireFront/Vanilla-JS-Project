const listwrapper = document.querySelector("#listaPokemon");
const apiUrl = "https://pokeapi.co/api/v2/pokemon/";

async function fetchinData() {
  try {
    const pokemonlista = [];

    const response = await fetch(`${apiUrl}?limit=30`);
    const data = await response.json();

    const pokemons = data.results;
    for (const pokemon of pokemons) {
      const response = await fetch(pokemon.url);
      const pokemonData = await response.json();

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
    }

    return pokemonlista;
  } catch (error) {
    console.error("Hubo un error al obtener los datos de los Pokémon:", error);
    throw error;
  }
}

async function orderPokemons(arraysPokemon) {
  // Ordenar por el número de orden de los Pokémon
  arraysPokemon.sort((a, b) => a.order - b.order);
  return arraysPokemon;
}

async function BuiltPokemon(ListAllPokemon) {
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

async function showTime() {
  try {
    const PokemonData = await fetchinData();
    const SortPokemonData = await orderPokemons(PokemonData);
    BuiltPokemon(SortPokemonData);
  } catch (error) {
    console.log("Vamos a lo riBer ", error);
  }
}

// showTime();

async function getPokemonevolution(id = 152) {
  let ways = 3;

  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon-species/${id}/`
  );
  const data = await response.json();
  const dataEvolution = await fetch(data.evolution_chain.url);
  const Evolution = await dataEvolution.json();

  //*VALIDATION EVOLUTION
  let firstForm = Evolution.chain.species.name;
  let secunForm = "";
  let thirdForm = "";

  try {
    secunForm = Evolution.chain.evolves_to[0].species.name;
  } catch (error) {
    ways = 1;
  }

  try {
    thirdForm = Evolution.chain.evolves_to[0].evolves_to[0].species.name;
  } catch (error) {
    ways = 2;
  }

  if (ways == 1) {
    console.log(`${firstForm}  don't have evolution `);
    return false
  }

  if (ways == 2) {
    secunForm = Evolution.chain.evolves_to[0].species.name;
    console.log(`${firstForm} can evolution to ${secunForm} `);
    return [firstForm,secunForm]
  }
  
  if (ways == 3) {
    secunForm = Evolution.chain.evolves_to[0].species.name;
    thirdForm = Evolution.chain.evolves_to[0].evolves_to[0].species.name;
    console.log(`${firstForm} can evolution to ${secunForm} and ${thirdForm}`);
    return [firstForm,secunForm,thirdForm]
  }
}

getPokemonevolution();

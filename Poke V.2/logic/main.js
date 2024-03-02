const listwrapper = document.querySelector("#listaPokemon");
const apiUrl = "https://pokeapi.co/api/v2/pokemon/";

async function showTime() {
  try {
    const PokemonData     =   await fetchinData();
    const SortPokemonData =   await orderPokemons(PokemonData);

    BuiltPokemon(SortPokemonData);

  } catch (error) {
    console.error(error);
  }
}

async function fetchinData() {
  try {
    const pokemonlista = [];

    const response = await fetch(`${apiUrl}?limit=63`);
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
        order: pokemonData.id,
        name: pokemonData.name,
        type: pokemonData.types[0].type.name,
        img: pokemonData.sprites.other["official-artwork"].front_default,
        weight: pokemonData.weight,
        height: pokemonData.height,
        types: pokemonData.types.map((e) => e.type.name),
        stats: objetoStatsPokemon,
        evolution: await getPokemonevolution(pokemonData.id)
      });
    }
    console.log(pokemonlista);

    return pokemonlista;
  } catch (error) {
    console.error("Hubo un error al obtener los datos de los Pokémon:", error);
    throw error;
  }
}

async function getPokemonevolution(id = 115) {
  let ways = 2;

  const response = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}/`);
  const data = await response.json();
  const dataEvolution = await fetch(data.evolution_chain.url);
  const Evolution = await dataEvolution.json();

  //*VALIDATION EVOLUTION
  let PokemonName = Evolution.chain.species.name;
  let evolution1 = "";
  let evolution2 = "";

  
  // we validate if any path to obtain the evolution fails
  try {
    evolution2 = Evolution.chain.evolves_to[0].evolves_to[0].species.name;
  } catch (error) {
    ways = 1;
  }

  try {
    evolution1 = Evolution.chain.evolves_to[0].evolution_details
  } catch (error) {
    ways = 0;
  }

  if (ways === 0) {
    // console.log(`${PokemonName}  don't have evolution `);
    return null
  }

  if (ways === 1) {
    // console.log(`${PokemonName} can evolution to ${evolution1} `);
    evolution1 = Evolution.chain.evolves_to[0].species.name;
    return [PokemonName,evolution1]
  }
  
  if (ways === 2) {
    // console.log(`${PokemonName} can evolution to ${evolution1} and ${evolution2}`);
    evolution1 = Evolution.chain.evolves_to[0].species.name;
    evolution2 = Evolution.chain.evolves_to[0].evolves_to[0].species.name;
    return [PokemonName,evolution1,evolution2]
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



showTime()
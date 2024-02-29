const listwrapper = document.querySelector(".pokemon-todos");
let allpokemon = [];

fetch(`https://pokeapi.co/api/v2/pokemon?limit=15`)
  .then((res) => res.json())
  .then((data) => {
    allpokemon = data.results;
    display(allpokemon);
    // console.log(data);
    // console.log(data.results);
    // console.log(data.results[0]);
  });

function display(pokemon) {
  listwrapper.innerHTML = "";

  pokemon.forEach((pokemon) => {
    const pokemonID = pokemon.url.split("/")[6];
    const listItem = document.createElement("div");
    listItem.className = "pokemon";
    listItem.innerHTML = `
    <div class="number-wrap">
        <p class="pokemon-id-back">${pokemonID}</p>
        <div class="pokemon-imagen">
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonID}.png" alt="Pikachu"
                 alt="${pokemon.name}">
        </div>
        <div class="pokemon-info">
            <div class="nombre-contenedor">
                <p class="pokemon-id">#${pokemonID}</p>
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

    listwrapper.appendChild(listItem);
    listItem.addEventListener("click", async () => {
        console.log('object');
      const success = await fetchPokeonData(pokemonID);
      if (success) {
        window.location.href = `./detal.html/?id=${pokemonID}`;
      }
    });
  });
}

async function fetchPokeonData(id) {
  try {
    const [pokemon, pokemonSpecies] = await Promise.all([
      fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then((res) =>
        res.json()
      ),
      fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`).then((res) =>
        res.json()
      ),
    ]);
  } catch (error) {
    console.log(error);
  }
}

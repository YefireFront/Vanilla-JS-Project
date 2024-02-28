const PokemonList = document.querySelector("#listaPokemon");
const apiUrl = "https://pokeapi.co/api/v2/pokemon/";
const pokemonlist = [];


for (let i = 0; i < 15; i++) {
    fetch(apiUrl + 1)
    .then(res=>res.json())
    .then(data=>showPokemon(data))
    
}

function showPokemon(data) {

}
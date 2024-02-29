fetch(`https://pokeapi.co/api/v2/pokemon?limit=2`)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    console.log(data.results);
    console.log(data.results[0]);

  });


  async function fetchPokeonData(id) {
    try {
        const [pokemon, pokemonSpecies] = await Promise.all(
            [
                fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
                .then(res=>res.json())
                ,
                fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`)
                .then(res => res.json())
            ])
        
    } catch (error) {
        console.log(error);
    }
    
  }
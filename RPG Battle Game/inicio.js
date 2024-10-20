const characters = [
    { id: 1, name: "Guerrero", pokemonId: 6 },   // Charizard
    { id: 2, name: "Mago", pokemonId: 151 },     // Mew
    { id: 3, name: "Arquero", pokemonId: 25 },   // Pikachu
    { id: 4, name: "Clérigo", pokemonId: 143 },  // Snorlax
    { id: 5, name: "Ladrón", pokemonId: 150 },   // Mewtwo
    { id: 6, name: "Paladín", pokemonId: 149 },  // Dragonite
    { id: 7, name: "Druida", pokemonId: 3 },     // Venusaur
    { id: 8, name: "Bárbaro", pokemonId: 68 },   // Machamp
    { id: 9, name: "Monje", pokemonId: 65 },     // Alakazam
    { id: 10, name: "Hechicero", pokemonId: 94 } // Gengar
  ];
  
  function getPokemonImageUrl(pokemonId) {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`;
  }
  
  function renderCharacters() {
    const charactersList = document.getElementById('characters-list');
    charactersList.innerHTML = characters.map(character => `
      <div class="character" draggable="true" data-id="${character.id}">
        <img src="${getPokemonImageUrl(character.pokemonId)}" alt="${character.name}">
        <h3>${character.name}</h3>
      </div>
    `).join('');
  
    charactersList.querySelectorAll('.character').forEach(char => {
      char.addEventListener('dragstart', dragStart);
    });
  }
  
  function dragStart(e) {
    e.dataTransfer.setData('text/plain', e.target.dataset.id);
  }
  
  function dragOver(e) {
    e.preventDefault();
  }
  
  function drop(e) {
    e.preventDefault();
    const characterId = e.dataTransfer.getData('text');
    const character = characters.find(c => c.id == characterId);
    
    if (character && e.target.classList.contains('team-members')) {
      const teamMember = document.createElement('div');
      teamMember.classList.add('team-member');
      teamMember.innerHTML = `
        <img src="${getPokemonImageUrl(character.pokemonId)}" alt="${character.name}">
        <h3>${character.name}</h3>
      `;
      e.target.appendChild(teamMember);
      updateTeams();
    }
  }
  
  function updateTeams() {
    const team1Members = document.querySelector('#team1 .team-members').children.length;
    const team2Members = document.querySelector('#team2 .team-members').children.length;
    
    if (team1Members === 5 && team2Members === 5) {
      document.getElementById('start-game').style.display = 'block';
    }
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    renderCharacters();
    
    const teamMembers = document.querySelectorAll('.team-members');
    teamMembers.forEach(team => {
      team.addEventListener('dragover', dragOver);
      team.addEventListener('drop', drop);
    });
  });
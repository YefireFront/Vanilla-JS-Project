


const PersonajeGame = [Yeffer,Walter,Arley];
const allplayers = []

PersonajeGame.forEach((pj) => {

  //% CREANTING IMG  
  const div__img = document.createElement("div");
  const div_image = document.createElement("img");
  //% PARSEANDO
  div__img.classList.add("card__img");
  //% INSERTANDO
  div__img.append(div_image);
  //% DATA
  div_image.src = `./img/${pj.constructor.name}.png`;
  div_image.alt='game'
  div_image.setAttribute('type', 'Game');



  //% CREANTING CARD INFO
  const div__info = document.createElement("div");
  const info_h2   = document.createElement("h2");
  const info_h4   = document.createElement("h4");
  const $skills   = document.createElement("div");
  const $skill1   = document.createElement("i");
  const $skill2   = document.createElement("i");
  const $skill3   = document.createElement("i");
  const $skill4   = document.createElement("i");
  
  //% INTRODUCING TEXT
  info_h2.textContent= pj.name
  info_h4.textContent= pj.constructor.name
  

  //% ADDING CLASS
  div__info.classList.add("card__info");
  
  if(pj.constructor.name == 'Healer'){
    $skills.classList.add('skills','skills-Healer')
    
    $skill1.classList.add('fa-sharp','fa-solid','fa-wand-sparkles','skill1')
    $skill2.classList.add('fa-solid' ,'fa-hand-holding-medical', 'skill2')
    $skill3.classList.add('fa-sharp', 'fa-solid', 'fa-notes-medical', 'skill3')
    $skill4.classList.add('fa-brands', 'fa-gratipay')
    
  }
  if(pj.constructor.name == 'Warrior'){
    $skills.classList.add('skills', 'skills-Warrior')

    $skill1.classList.add('fa-solid','fa-hand-fist','skill1')
    $skill2.classList.add('fa-solid' ,'fa-user-shield', 'skill2')
    $skill3.classList.add('fa-solid','fa-dragon', 'skill3')
    $skill4.classList.add('fa-solid' ,'fa-people-line')
    
  }
  if(pj.constructor.name == 'Witcher'){
    $skills.classList.add('skills', 'skills-Witcher')

    $skill1.classList.add('fa-sharp','fa-solid','fa-wand-sparkles','skill1')
    $skill2.classList.add('fa-solid' ,'fa-virus', 'skill2')
    $skill3.classList.add('fa-solid' ,'fa-gears', 'skill3')
    $skill4.classList.add('fa-solid','fa-skull-crossbones', 'neon-icon')
    
  }


 


  //% INSERTIND NODES
  $skills.append($skill1,$skill2,$skill3,$skill4)
  div__info.append(info_h2,info_h4,$skills);
  


  
  //? CREANTING CARD WAPON
  const div__weapon = document.createElement("div");
  const div_weapon1 = document.createElement("div");
  const i_weapon1 = document.createElement("i");
  const p_weapon1 = document.createElement("p");
  const div_weapon2 = document.createElement("div");
  const i_weapon2 = document.createElement("i");
  const p_weapon2 = document.createElement("p");
  //! DATA
  p_weapon1.textContent=pj.atk
  p_weapon2.textContent=pj.def
  //$ PARSEANDO
  div__weapon.classList.add("card__weapon");
  div_weapon1.classList.add("card__stats--atk");
  div_weapon2.classList.add("card__stats--def");
  i_weapon1.classList.add("fa-solid", "fa-hand-back-fist");
  i_weapon2.classList.add("fa-solid", "fa-shield");
  //% INSERTANDO
  div_weapon1.append(i_weapon1, p_weapon1);
  div_weapon2.append(i_weapon2, p_weapon2);
  div__weapon.append(div_weapon1, div_weapon2);



  //? CREANTING CARD STATS
  const div_stats = document.createElement("div");
  const div_life = document.createElement("div");
  const i_life = document.createElement("i");
  const p_life = document.createElement("p");
  const div_energy = document.createElement("div");
  const i_energy = document.createElement("i");
  const p_energy = document.createElement("p");
  const div_special = document.createElement("div");
  const i_special = document.createElement("i");
  const p_special = document.createElement("p");
  //! DATA
  p_life.textContent= pj.life
  p_energy.textContent= pj.energy
  p_special.textContent= pj.special
  //$ PARSEANDO
  div_stats.classList.add("card__stats");
  div_life.classList.add("card__stats--heart");
  div_energy.classList.add("card__stats--magic");
  div_special.classList.add("card__stats--special");
  i_life.classList.add("fa-solid", "fa-heart", "fa-beat-fade");
  i_energy.classList.add("fa-solid", "fa-fire");
  i_special.classList.add("fa-solid", "fa-star");
  //% INSERTANDO
  div_life.append(i_life, p_life);
  div_energy.append(i_energy, p_energy);
  div_special.append(i_special, p_special);
  div_stats.append(div_life, div_energy, div_special);



  //? CREANTING MAIN CARD
  const card = document.createElement("div");
  //$PARDENADO
  card.classList.add( "card", pj.constructor.name, pj.name);
  //% INSERTANDO
  card.append(div__img, div__info, div__weapon, div_stats);



 
  allplayers.push(card)
  
});


//? CREANTING APLICATION CONTAINER
const container = document.createElement("div");
container.classList.add("container");
container.append(...allplayers);

const appNode =  document.querySelector("#APP")
appNode.appendChild(container);








function Reloade(me , you) {

  if (me) {
    const me_vida    = document.querySelector(`#APP > div > div.card.${me.name} > div.card__stats > div.card__stats--heart > p`)
    const me_energy  = document.querySelector(`#APP > div > div.card.${me.name} > div.card__stats > div.card__stats--magic > p`)
    const me_special = document.querySelector(`#APP > div > div.card.${me.name} > div.card__stats > div.card__stats--special > p`)
    const me_atk     = document.querySelector(`#APP > div > div.card.${me.name} > div.card__weapon > div.card__stats--atk > p`)
    const me_def     = document.querySelector(`#APP > div > div.card.${me.name} > div.card__weapon > div.card__stats--def > p`)
    
      me_energy.textContent   = me.energy;
      me_special.textContent  = me.special;
      me_vida.textContent     = me.life;
      me_atk.textContent      = me.atk;
      me_def.textContent      = me.def;    
  }

  if (you) {
    const you_vida    = document.querySelector(`#APP > div > div.card.${you.name} > div.card__stats > div.card__stats--heart > p`)
    const you_energy  = document.querySelector(`#APP > div > div.card.${you.name} > div.card__stats > div.card__stats--magic > p`)
    const you_special = document.querySelector(`#APP > div > div.card.${you.name} > div.card__stats > div.card__stats--special > p`)
    const you_atk     = document.querySelector(`#APP > div > div.card.${you.name} > div.card__weapon > div.card__stats--atk > p`)
    const you_def     = document.querySelector(`#APP > div > div.card.${you.name} > div.card__weapon > div.card__stats--def > p`)
    
      you_energy.textContent  = you.energy;
      you_special.textContent = you.special;
      you_vida.textContent    = you.life;
      you_atk.textContent     = you.atk;
      you_def.textContent     = you.def;
    }
    
  }
  



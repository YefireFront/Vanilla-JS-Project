const apiUrl = "https://db.ygoprodeck.com/api/v7/cardinfo.php";
let monsterList = [];

fetch(apiUrl)
  .then((response) => response.json())
  .then((Fetchingdata) => {
    const arrayData = Fetchingdata.data;

    let cardFilterd = arrayData.filter(
      (card) => card.type != "Spell Card" && card.type != "Trap Card"
    );
    cardFilterd.forEach((card) => {
      monsterList.push({
        name: card.name,
        tipo: card.type,
        atk: card.atk,
        def: card.def,
        img: {
          img1: card.card_images[0].image_url,
          img2: card.card_images[0].image_url_cropped,
        },
      });
    });
  })
  .catch((error) => {
    console.error("Hubo un error al obtener los datos:", error);
  });

//! RESOLVIENDO API
async function awaitEjecuted() {
  await new Promise((resolve) => setTimeout(resolve, 1500));
  CrearMazos();
}

//! FUNCION RANDON
function randon(max = 100, min = 1) {
  let Randonnumber;
  Randonnumber = Math.random() * (max - min) + min;
  Randonnumber = Math.round(Randonnumber);
  return Randonnumber;
}

//! CREACION DE MAZOS
function CrearMazos() {
  let min = 0;
  let max = monsterList.length;

  //* MAZO 1
  let card1 = monsterList[randon(max, min)];
  let card2 = monsterList[randon(max, min)];
  let card3 = monsterList[randon(max, min)];
  let card4 = monsterList[randon(max, min)];
  let card5 = monsterList[randon(max, min)];
  const MAZO1 = [card1, card2, card3, card4, card5];

  //* MAZO 2
  let card6 = monsterList[randon(max, min)];
  let card7 = monsterList[randon(max, min)];
  let card8 = monsterList[randon(max, min)];
  let card9 = monsterList[randon(max, min)];
  let card10 = monsterList[randon(max, min)];
  const MAZO2 = [card6, card7, card8, card9, card10];

  BuiltUI(MAZO1, MAZO2);
}

//!BUILT UI

function BuiltUI(MAZO1, MAZO2) {
  const nodelist1 = document.querySelectorAll(
    "body > div > div.your > div > img"
  );
  const nodelist2 = document.querySelectorAll(
    "body > div > div.yourself > div > img"
  );

  const mano1 = Array.from(nodelist1);
  const mano2 = Array.from(nodelist2);

  for (let i = 0; i < mano1.length; i++) {
    mano1[i].setAttribute("src", MAZO1[i].img.img1);
    mano1[i].setAttribute("atk", MAZO1[i].atk);
    mano1[i].setAttribute("def", MAZO1[i].def);
  }

  for (let i = 0; i < mano1.length; i++) {
    mano2[i].setAttribute("src", MAZO2[i].img.img1);
    mano2[i].setAttribute("atk", MAZO2[i].atk);
    mano2[i].setAttribute("def", MAZO2[i].def);
  }

  Battle(nodelist1, nodelist2);
}

//!INTERCCION

function Battle(nodelist1, nodelist2) {
  let score1 = document.querySelector("body > div > h2:nth-child(1) > span")
  let score2 = document.querySelector("body > div > h2:nth-child(4) > span")
  let target1 = "";
  let target2 = "";
  let target1ATK = null;
  let target2ATK = null;
  let target1DEF = null;
  let target2DEF = null;
  let player1 = 0;
  let player2 = 0;

  nodelist1.forEach(function (elemento) {
    elemento.addEventListener("click", function (event) {
      target1 = event.target;
      target1ATK = Number(target1.getAttribute("atk"));
      target1DEF = Number(target1.getAttribute("def"));

      if (target1 == elemento) {
        removemano1(target1);
        elemento.classList.add("select");
      }
    });
  });
  nodelist2.forEach(function (elemento) {
    elemento.addEventListener("click", function (event) {
      target2 = event.target;
      target2ATK = Number(target2.getAttribute("atk"));
      target2DEF = Number(target2.getAttribute("def"));

      if (target2 == elemento) {
        removemano2(target2);
        elemento.classList.add("select");
      }
    });
  });

  function removemano1(target) {
    nodelist1.forEach(function (elemento) {
      if (target != elemento) {
        elemento.classList.remove("select");
      }
    });

    vs();
  }
  function removemano2(target) {
    nodelist2.forEach(function (elemento) {
      if (target != elemento) {
        elemento.classList.remove("select");
      }
    });

    vs();
  }

  function vs() {
    if (target1ATK == null || target2ATK == null) return false;

    if (target1ATK > target2ATK) {
      console.log(target1ATK);
      console.log(target2ATK);

      player1++;
      target1.parentNode.remove()
      target2.parentNode.remove()
      target1ATK = null;
      target2ATK = null;
      console.log(`Player ONE BEAT`);
      console.log(`Player 1: ${player1} Player 2: ${player2} `);
      score1.textContent=player1
      score2.textContent=player2
    }else{
      
      if (target1ATK < target2ATK) {
        console.log(target1ATK);
        console.log(target2ATK);
        target1.parentNode.remove()
        target2.parentNode.remove() 
        player2++;
        target1ATK = null;
        target2ATK = null;
        console.log(`Player TWO BEAT`);
        console.log(`Player One: ${player1} Player Two: ${player2} `);
        score1.textContent=(player1)
        score2.textContent=(player2)
      }else{

        if(target1ATK == target2ATK) {
          console.log(
            `Los ataques son iguales ${target1ATK} y ${target2ATK} se evaluara la defensa`
          );
    
          if (target1DEF > target2DEF) {
            player1++;
            player1++;
            target1.parentNode.remove()
            target2.parentNode.remove()
            target1ATK = null;
            target2ATK = null;
            console.log(`Player ONE BEAT`);
            console.log(`Player 1: ${player1} Player 2: ${player2} `);
          } else {
            target1.parentNode.remove()
            target2.parentNode.remove()
            target1ATK = null;
            target2ATK = null;
            console.log(`Player TWO BEAT`);
            console.log(`Player One: ${player1} Player Two: ${player2} `);
          }
    
          target1ATK = null;
          target2ATK = null;
        }
        
      }
    }
    

    if (player1 === 3) {
      console.log("PLAYER 1 WIN");
      player1 = 0;
      player2 = 0;
      location.reload();
      // awaitEjecuted();
    }
    if (player2 === 3) {
      console.log("PLAYER 2 WIN");
      player1 = 0;
      player2 = 0;
      location.reload();
      // awaitEjecuted();
    }
  }
}

awaitEjecuted();

const monsterList = [];

async function createMonsterList() {
  try {
    const response = await fetch(
      "https://db.ygoprodeck.com/api/v7/cardinfo.php"
    );

    if (!response.ok) {
      throw new Error("failed to fetch data");
    }

    const { data: cardsData } = await response.json();
    const filteredCards = cardsData.filter(
      (card) => card.type !== "Spell Card" && card.type !== "Trap Card"
    );

    //$Destructuring

    filteredCards.forEach(({ name, type, atk, def, card_images }) => {
      const img = {
        img1: card_images[0].image_url,
        img2: card_images[0].image_url_cropped,
      };

      monsterList.push({ name, tipo: type, atk, def, img });
    });

    console.log(monsterList);
    //$NormalWay
    // cardFilterd.forEach((card) => {
    //   monsterList.push({
    //     name: card.name,
    //     tipo: card.type,
    //     atk: card.atk,
    //     def: card.def,
    //     img: {
    //       img1: card.card_images[0].image_url,
    //       img2: card.card_images[0].image_url_cropped,
    //     },
    //   });
    // });
  } catch (error) {
    console.error("Error:", error);
  }
}


function generateDeck(max, min) {

  const deck = [];
  for (let i = 0; i < 5; i++) {
    deck.push(monsterList[randon(max, min)]);
  }
  
  function randon(max, min) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  return deck;
}

async function createDeck() {
  let min = 0;
  let max = monsterList.length;

  const deckOne = generateDeck(max, min);
  const deckTwo = generateDeck(max, min);

  BuiltUI(deckOne, deckTwo);
}

//!BUILT UI

function BuiltUI(deckOne, deckTwo) {
  const nodelist1 = document.querySelectorAll("body > div > div.your > div > img");
  const nodelist2 = document.querySelectorAll("body > div > div.yourself > div > img");


  setCardAttributes(nodelist1, deckOne)
  setCardAttributes(nodelist2, deckTwo)

  function setCardAttributes(cards, deck) {
    cards.forEach((card, index) => {
      const { img, atk, def } = deck[index];
      card.setAttribute("src", img.img1);
      card.setAttribute("atk", atk);
      card.setAttribute("def", def);
    });
  
  
}

Battle(nodelist1, nodelist2);
}
//!INTERCCION

function Battle(nodelist1, nodelist2) {
  let score1 = document.querySelector("body > div > h2:nth-child(1) > span");
  let score2 = document.querySelector("body > div > h2:nth-child(4) > span");
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

    console.log(nodelist1);

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
      target1.parentNode.remove();
      target2.parentNode.remove();
      target1ATK = null;
      target2ATK = null;
      console.log(`Player ONE BEAT`);
      console.log(`Player 1: ${player1} Player 2: ${player2} `);
      score1.textContent = player1;
      score2.textContent = player2;
    } else {
      if (target1ATK < target2ATK) {
        console.log(target1ATK);
        console.log(target2ATK);
        target1.parentNode.remove();
        target2.parentNode.remove();
        player2++;
        target1ATK = null;
        target2ATK = null;
        console.log(`Player TWO BEAT`);
        console.log(`Player One: ${player1} Player Two: ${player2} `);
        score1.textContent = player1;
        score2.textContent = player2;
      } else {
        if (target1ATK == target2ATK) {
          console.log(
            `Los ataques son iguales ${target1ATK} y ${target2ATK} se evaluara la defensa`
          );

          if (target1DEF > target2DEF) {
            player1++;
            player1++;
            target1.parentNode.remove();
            target2.parentNode.remove();
            target1ATK = null;
            target2ATK = null;
            console.log(`Player ONE BEAT`);
            console.log(`Player 1: ${player1} Player 2: ${player2} `);
          } else {
            target1.parentNode.remove();
            target2.parentNode.remove();
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



async function Start(){
  await createMonsterList()
  await createDeck()
};


Start()
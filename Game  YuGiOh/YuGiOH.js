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

console.log(MAZO1);


BuiltUI(MAZO1,MAZO2)
}


//!BUILT UI

function BuiltUI(MAZO1,MAZO2) {

    const nodelist1 = document.querySelectorAll("body > div > div.your > div > img")
    const nodelist2 = document.querySelectorAll("body > div > div.yourself > div > img")

    const mano1 = Array.from(nodelist1)    
    const mano2 = Array.from(nodelist2)    

    for (let i = 0; i < mano1.length; i++) {
        mano1[i].setAttribute('src', MAZO1[i].img.img1 );
    }
    
    for (let i = 0; i < mano1.length; i++) {
        mano2[i].setAttribute('src', MAZO2[i].img.img1 );
    }

   
   

  
    
}




awaitEjecuted();



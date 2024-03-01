fechingData()
const monsterList = [];
class Player{
    constructor(name , deck ){
        this.name = name,
        this.deck = deck,
        this.points = 10000
    }

    play(target){

        let place = Math.floor(Math.random() * (4 - 0 + 0) + 0)
        console.log(place);
        console.log(this.deck[place]);

        // if (this.deck[place]) {
        //     console.log(`${this.deck}  ${place}`   );
        // }

    }


}

const yeffer = new Player("Yeffer");
const yefire = new Player("Yefire");


async function fechingData() {
  try {
    const response = await fetch("https://db.ygoprodeck.com/api/v7/cardinfo.php");

    if (!response.ok) {
      throw new Error("failed to fetch data");
    }

    const { data: cardsData } = await response.json();

    const filteredCards = cardsData.filter((card) => card.type !== "Spell Card" && card.type !== "Trap Card");

    //$Destructuring

    filteredCards.forEach(({ name, type, atk, def, card_images }) => {
      const img = {
        img1: card_images[0].image_url,
        img2: card_images[0].image_url_cropped,
      };

      monsterList.push({ name,  type, atk, def, img });
    });

    createDeck()
  
  } catch (error) {
    console.error("Error:", error);
  }
}

async function createDeck() {
  let min = 0;
  let max = monsterList.length;

  const deckOne = generaPositionCardInDecks(max, min);
  const deckTwo = generaPositionCardInDecks(max, min);

  yeffer.deck = deckOne
  yefire.deck = deckTwo
  


//   Its_time_to_Duel(deckOne,deckTwo );


  function generaPositionCardInDecks(max, min) {

    const deck = [];
    for (let i = 0; i < 5; i++) {
      deck.push(monsterList[ (Math.floor(Math.random() * (max - min + 1) + min)) ]); //Generating position (Index) in the array
    } 
    return deck;
  }

}



// function Its_time_to_Duel(p1 , p2) {
//     console.log(p1);
//     console.log(p2);  
// }








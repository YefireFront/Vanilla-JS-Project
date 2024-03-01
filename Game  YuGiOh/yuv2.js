const monsterList = [];

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

  Its_time_to_Duel(deckOne, deckTwo);


  function generaPositionCardInDecks(max, min) {

    const deck = [];
    for (let i = 0; i < 5; i++) {
      deck.push(monsterList[ (Math.floor(Math.random() * (max - min + 1) + min)) ]); //Generating position (Index) in the array
    } 
    return deck;
  }

}




fechingData()


function Its_time_to_Duel(deckOne , deckTwo ) {
    console.log(deckOne , deckTwo);


}

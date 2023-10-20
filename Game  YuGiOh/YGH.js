const apiUrl = "https://db.ygoprodeck.com/api/v7/cardinfo.php";

fetch(apiUrl)
  .then(response =>  response.json())
  .then(dataArray => dataArray.data)
  .then(carta=>{
    carta.forEach(e => {
        console.log(e.name);
    });
  })
  .catch((error) => {
    console.error("Hubo un error al obtener los datos:", error);
  });

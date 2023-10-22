const animeTitle = 'Naruto'; // Reemplaza con el título del anime que desees consultar

// Construye la URL de la solicitud
const apiUrl = `https://kitsu.io/api/edge/anime?filter[text]=${animeTitle}`;

// Realiza la solicitud GET utilizando fetch
fetch(apiUrl)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`Error en la solicitud: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    // Procesa la respuesta JSON
    const firstResult = data.data[0];
    console.log('Información del anime:', firstResult);
  })
  .catch((error) => {
    console.error('Error:', error);
  });

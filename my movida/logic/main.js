const API_KEY = "f61c5d73b6063bd64bf69cb8573872fa";
const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: { api_key: API_KEY },
});

async function getmovieList() {
  const moveList = []
  const { data } = await api(`movie/popular`);
  const movies = data.results;

  movies.forEach((movie) => {

    moveList.push({   
       poster     : movie.poster_path,
       movieName  : movie.original_title,
       backGround : movie.backdrop_path,
       overView   : movie.overview,
       date       : movie.release_date,
       rate       : movie.vote_average,
    })
  });

  console.log(moveList);
}

getmovieList();

async function getGenderMovieList() {
    
  const {data} = await api(`genre/movie/list`);
  const genres = data.genres;
  console.log(genres);
  
  genres.forEach((genres) => {
    
    console.log(`${genres.id} - ${genres.name}`);
  });
}

getGenderMovieList();

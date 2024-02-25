const API_KEY = "f61c5d73b6063bd64bf69cb8573872fa";
const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: { api_key: API_KEY },
});

async function getmovieList() {
  const { data } = await api(`movie/popular`);
  const movies = data.results;

  movies.forEach((movie) => {
    console.log(movie);
    const poster = movie.poster_path;
    const moviename = movie.original_title;
    const backGround = movie.backdrop_path;
    const overview = movie.overview;
    const date = movie.release_date;
    const rate = movie.vote_average;
  });
}

getmovieList();

async function getGenderMovieList() {
    
  const {data} = await api(`genre/movie/list`);
  const genres = data.genres;

  genres.forEach((genres) => {
    console.log(`${genres.id} - ${genres.name}`);
  });
}

getGenderMovieList();

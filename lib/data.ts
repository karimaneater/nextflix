
let cachedTrendingMovies: Array<any> = [];
let lastFetchTime: string = '';

async function fetchTrendingMovies() {
  const apiToken = process.env.API_TOKEN;
  const url = 'https://api.themoviedb.org/3/trending/movie/week?language=en-US';
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${apiToken}`,
    },
  };

  try {
    const response = await fetch(url, options);
    const data = await response.json();
    cachedTrendingMovies = data.results;

    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0'); 
    const yyyy = today.getFullYear();
    lastFetchTime = mm + '/' + dd + '/' + yyyy;

  } catch (err) {
    console.error('Error fetching trending movies:', err);
  }
}


fetchTrendingMovies();
setInterval(fetchTrendingMovies, 3600000); 

export function getTrendingMovies() {
  return cachedTrendingMovies;
}


export async function getMovieByTitle(title: string) {
  const apiToken = process.env.API_TOKEN;
  const url = `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(
    title
  )}&include_adult=false&language=en-US&page=1`;

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${apiToken}`,
    },
  };

  const response = await fetch(url, options);

  if (!response.ok) {
    throw new Error(`Failed to fetch movies: ${response.statusText}`);
  }

  const data = await response.json();

  // console.log(data, "searchMovie");

  return data.results;
}




 type Movie = {
    id: number;
    title: string;
    overview: string;
    poster_path: string;
    release_date: string;
};
  
export type MovieCardsProps = {
    movies: Movie[];
};
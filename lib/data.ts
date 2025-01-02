
export async function getTrendingMovies() {
const apiToken = process.env.API_TOKEN;
const url = 'https://api.themoviedb.org/3/trending/movie/week?language=en-US';
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${apiToken}`, 
  }
};


const response = await fetch(url, options)
  .then(res => res.json())
  .then(data => data)
  .catch(err => console.error(err));

  return response.results;
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

export async function PlayMovie(request: Request) { 
  const { searchParams } = new URL(request.url);
  const url = `https://vidsrc.xyz/embed/movie/${searchParams.get("id")}`;
 
  return url;
};



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
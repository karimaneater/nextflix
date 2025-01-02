
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
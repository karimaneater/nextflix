export default async function getMovies() {
  
const url = 'https://api.themoviedb.org/3/trending/movie/week?language=en-US';
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNGVjNTA2Zjk5ZTdlM2RkYjdjNTAwYWJkZDE5YmEzYSIsIm5iZiI6MTczMzM0Mjk0MS4xNiwic3ViIjoiNjc1MGI2ZGQ4MDEyZjkzZGJjNjliMTk5Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.Va8UzzfHFAM8snvVWjii2UlQ5_GlOaywfldcRuwgZNY'
  }
};

const movies = []; 

const response = await fetch(url, options)
  .then(res => res.json())
  .then(data => data)
  .catch(err => console.error(err));

    return response.results;
}
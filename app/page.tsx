import MovieCards from './movieCard';
import {getMovies} from "@/lib/data";



async function fetchMovies() {
  const movies = await getMovies();  
  return movies;  
}


export default async function Page() {
  
  const movies = await fetchMovies();
  const date = new Date().getFullYear();
  

  return (
    <div>
      <main className="container mx-auto p-6">
        <MovieCards movies={movies} />
      </main>
      <footer className=" text-sm/6 bg-gray-800 text-white text-center p-4">
          for educational purposes only! Copyright &copy; {date} <a href="https://github.com/karimaneater">karimaneater</a>
      </footer>
    </div>
    
  );
}

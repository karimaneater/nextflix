import MovieCards from './movieCard';
import {getTrendingMovies} from "@/lib/data";
import PageHeader from './pageHeader';



export default async function Page() {
  
  const movies = await getTrendingMovies();
  const date = new Date().getFullYear();
  

  return (
    <div>
      <PageHeader /> 
      <main className="container mx-auto p-6">
        <MovieCards movies={movies} />
      </main>
      <footer className=" text-sm/6 bg-gray-800 text-white text-center p-4">
           Copyright &copy; {date} <a href="https://github.com/karimaneater">karimaneater</a>
      </footer>
    </div>
  );
}

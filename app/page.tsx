import Image from "next/image";
import VideoPlayer from './moviePlayer';
import LocalMoviesSharpIcon from '@mui/icons-material/LocalMoviesSharp';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import getMovies from "@/lib/data";

export default async function Page() {
  const embedUrl = "https://vidsrc.xyz/embed/movie/1241982";
  const movies = await getMovies();
  console.log(movies, "movies page");
  return (
    // <VideoPlayer embedUrl={embedUrl} />
   
    <div>
       <header>
          <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
            <div className="flex lg:flex-1">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">NextFlix</span>
                <span className="h-8 w-auto"> <LocalMoviesSharpIcon /></span>
                <label className="text-sm/6 font-semibold text-gray-900">NextFlix</label>
              </a>
            </div>
            <div className="flex lg:hidden">
              <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
                <span className="sr-only">Open main menu</span>
                <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              </button>
            </div>
            <div className="hidden lg:flex lg:gap-x-12">
              {/* <div className="relative">
                <button type="button" className="flex items-center gap-x-1 text-sm/6 font-semibold text-gray-900" aria-expanded="false">
                  Product
                  <svg className="size-5 flex-none text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                    <path fill-rule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
                  </svg>
                </button>
              </div> */}

              <a href="#" className="text-sm/6 font-semibold text-gray-900">Genre</a>
              <a href="#" className="text-sm/6 font-semibold text-gray-900">About</a>
              <a href="#" className="text-sm/6 font-semibold text-gray-900">Contact Us</a>
            </div>
            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
              <a href="#" className="text-sm/6 font-semibold text-gray-900">Log in <span aria-hidden="true">&rarr;</span></a>
            </div>
          </nav>


        </header>


      <main className="container mx-auto p-6">
        <h1 className="text-4xl font-bold text-center mb-2">Trending Movies</h1>
        <div className="grid grid-cols-5 gap-4">
          {movies.map((movie: any) => ( 
            <Card key={movie.id}>
              <CardHeader>
                <Image
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  width={400}
                  height={750}
                />
              </CardHeader>
              <CardContent>
                <CardTitle>{movie.title}</CardTitle>
                <CardDescription>{movie.overview}</CardDescription>
              </CardContent>
              <CardFooter>
                <span>{movie.release_date}</span>
              </CardFooter>
            </Card>
          ))}
        </div>
      </main>
      <footer className=" text-sm/6 bg-gray-800 text-white text-center p-4">
          for educational purposes only! copy right &copy; 2024
      </footer>
    </div>
    
  );
}

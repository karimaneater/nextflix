"use client";

import { useState, useRef  } from "react";
import Image from "next/image";
import VideoPlayer from './moviePlayer';
import LocalMoviesSharpIcon from '@mui/icons-material/LocalMoviesSharp';
import LightModeIcon from '@mui/icons-material/LightMode';
import NightlightIcon from '@mui/icons-material/Nightlight';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type Movie = {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  release_date: string;
};

type MovieCardsProps = {
  movies: Movie[];
};


export default function MovieCards({ movies }: MovieCardsProps) {
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
    document.body.classList.toggle("dark");
  };

  
  const embedUrl = (id: number): string => `https://vidsrc.xyz/embed/movie/${id}`;

  
  const handleCardClick = (movieId: number) => {
    window.scroll({ top: 0, left: 0, behavior: 'smooth' });
    const url = embedUrl(movieId); 
    setVideoUrl(url); 
    
  };

  

  return (
    <>
        <header>
          <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
            <div className="flex lg:flex-1">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">NextFlix</span>
                <span className="h-8 w-auto"> <LocalMoviesSharpIcon /></span>
                <label className="text-sm/6 font-semibold ">NextFlix</label>
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

              <a href="#" className="text-sm/6 font-semibold ">Genre</a>
              <a href="#" className="text-sm/6 font-semibold ">About</a>
              <a href="#" className="text-sm/6 font-semibold ">Contact Us</a>
            </div>
            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
              {/* <a href="#" className="text-sm/6 font-semibold ">Log in <span aria-hidden="true">&rarr;</span></a> */}
              <button type="button" className="flex items-center gap-x-1 text-sm/6 font-semibold" aria-expanded="false" onClick={toggleTheme}>
                {isDarkMode ? <NightlightIcon /> : <LightModeIcon />}
              </button>
            </div>
          </nav>
        </header>
        <div>
            {videoUrl && <VideoPlayer embedUrl={videoUrl} />}
        </div>
        <h1 className="text-4xl font-bold text-center mb-2 pt-2">Trending Movies</h1>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {movies.map((movie) => (
            <Card key={movie.id}
                onClick={() => {
                    handleCardClick(movie.id);
                }}
                className="border rounded-lg overflow-hidden transition transform hover:scale-105 hover:shadow-lg cursor-pointer"
            >
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
    </>
    
  );
}
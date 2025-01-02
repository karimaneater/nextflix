"use client";

import { useState } from "react";
import Image from "next/image";
import VideoPlayer from './moviePlayer';
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
  

  
  const embedUrl = (id: number): string => `https://vidsrc.xyz/embed/movie/${id}`;

  
  const handleCardClick = (movieId: number) => {
    window.scroll({ top: 0, left: 0, behavior: 'smooth' });
    const url = embedUrl(movieId); 
    setVideoUrl(url); 
    
  };

  

  return (
    <>
        
        <div>
            {videoUrl && <VideoPlayer embedUrl={videoUrl} />}
        </div>
        <h1 className="text-4xl font-bold text-center mb-2 pt-2">Trending Movies</h1>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {movies.length === 0 ? (
            <div className="text-center">No trending movies found</div>
          ) : (
                movies.map((movie) => (
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
                ))
            )
          }
        </div>
    </>
    
  );
}
"use client";

import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MovieCardsProps } from "@/lib/data";
import { useRouter } from "next/navigation";



export default function MovieCards({ movies }: MovieCardsProps) {
  const router = useRouter();

  return (
    <>
        <h1 className="text-4xl font-bold text-center mb-2 pt-2">Trending Movies</h1>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {movies.length === 0 ? (
            <div className="text-center">No trending movies found</div>
          ) : (
                movies.map((movie) => (
                    <Card 
                        key={movie.id}
                        onClick={() => {
                            router.push(`/play/${movie.id}`);
                        }}
                        className="border rounded-lg overflow-hidden transition transform hover:scale-105 hover:shadow-lg cursor-pointer"
                    >
                        <CardHeader> 
                            <Image
                               
                                src={movie.poster_path !== null ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : '/broken_img.jpg'} 
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
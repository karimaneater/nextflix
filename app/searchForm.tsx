'use client';

import { Input } from '@/components/ui/input';
import { useState } from "react";
import { MovieCardsProps } from "@/lib/data";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import SearchIcon from '@mui/icons-material/Search';
import { useRouter } from "next/navigation";

export default function SearchForm() {
    const [title, setTitle] = useState("");
    const [movies, setMovies] = useState<MovieCardsProps['movies']>([]);
    const router = useRouter();

    const handleSearch = async (event: React.FormEvent) => {
        event.preventDefault();
    
        try {
          const response = await fetch(`/api/search-movie?title=${title}`);
          const data = await response.json();
            console.log(data.results , "searchFormResponse");
          setMovies(data.results);
        } catch (error) {
          console.error("Error fetching movies:", error);
        }
      };

    return (
      <>
       <form onSubmit={handleSearch} className="flex pb-4 gap-4">
            <Input 
                type='text' 
                placeholder='Search a movie . . .'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="border rounded-md p-2 text-center"
                required
            />
            <button type="submit">
                <SearchIcon/>
            </button>
        </form>
       
               <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                 { movies.map((movie) => (
                        <Card key={movie.id}
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
                 }
               </div>
      </>
      
    );
  };
  
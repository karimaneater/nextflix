import Image from "next/image";
import VideoPlayer from './movieCard';

export default async function Home() {
  const embedUrl = "https://vidsrc.xyz/embed/movie/tt5433140";

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="aspect-w-16 aspect-h-9 w-full">
          <h1 className="text-2xl font-bold mb-4">Movie Player</h1>
          <VideoPlayer embedUrl={embedUrl} />
        </div>
        <div>
          <h1 className="text-3xl text-center font-bold sm:text-4xl">
            Welcome to Nextflix!
          </h1>
          <p className="text-lg text-center">
            Binged watch your favorite movies today!
          </p>

        </div>
       
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        
       
       
      </footer>
    </div>
  );
}

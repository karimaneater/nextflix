const VideoPlayer = ({ id }: { id: number }) => {
  const embedUrl = `https://vidsrc.xyz/embed/movie/${id}`;

    return (
      <>
        <h1 className="text-4xl font-bold text-center mb-2 pt-2">Now Playing...</h1>
        <div className="aspect-w-16 aspect-h-9 h-96 rounded shadow-lg">
          <iframe
            src={embedUrl}
            title="Video Player"
            width="100%"
            height="100%"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full aspect-video"
          ></iframe>
        </div>
      </>
      
    );
  };
  
export default VideoPlayer;
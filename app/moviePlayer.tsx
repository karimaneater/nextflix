const VideoPlayer = ({ embedUrl }: { embedUrl: any }) => {
    return (
      <>
        <h1 className="text-4xl font-bold text-center mb-2 pt-2">Playing...</h1>
        <div className="aspect-w-16 aspect-h-9 h-96 rounded shadow-lg">
          <iframe
            src={embedUrl}
            title="Video Player"
            width="100%"
            height="100%"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </>
      
    );
  };
  
  export default VideoPlayer;
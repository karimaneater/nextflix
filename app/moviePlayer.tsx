const VideoPlayer = ({ embedUrl }: { embedUrl: string }) => {
    return (
      <div className="aspect-w-16 aspect-h-9 w-full">
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
    );
  };
  
  export default VideoPlayer;
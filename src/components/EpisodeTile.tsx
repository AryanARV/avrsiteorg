import spotifyButton from "@/assets/spotify-button.png";
import amazonMusicButton from "@/assets/amazon-music-button.png";

interface EpisodeTileProps {
  title: string;
  description: string;
  duration: string;
  spotifyUrl: string;
  amazonMusicUrl: string;
  imageUrl: string;
}

const EpisodeTile = ({ title, description, duration, spotifyUrl, amazonMusicUrl, imageUrl }: EpisodeTileProps) => {
  return (
    <div 
      className="w-full rounded-lg overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl animate-fade-in"
      style={{ backgroundColor: '#55185d' }}
    >
      <div className="p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-6">
        <div className="shrink-0">
          <img 
            src={imageUrl} 
            alt={title}
            className="w-full md:w-40 md:h-40 object-cover rounded-lg"
          />
        </div>
        
        <div className="flex-1 space-y-3">
          <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight">
            {title}
          </h2>
          <p className="text-white/90 text-base md:text-lg leading-relaxed">
            {description}
          </p>
          <p className="text-white/60 text-sm">
            Duration: {duration}
          </p>
        </div>
        
        <div className="flex flex-row md:flex-col gap-3 items-center md:items-end justify-center md:justify-start shrink-0">
          <a 
            href={spotifyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-all duration-300 hover:scale-110 hover:opacity-80"
            aria-label={`Listen to ${title} on Spotify`}
          >
            <img 
              src={spotifyButton} 
              alt="Listen on Spotify" 
              className="h-12 md:h-14 w-auto"
            />
          </a>
          
          <a 
            href={amazonMusicUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-all duration-300 hover:scale-110 hover:opacity-80"
            aria-label={`Listen to ${title} on Amazon Music`}
          >
            <img 
              src={amazonMusicButton} 
              alt="Listen on Amazon Music" 
              className="h-9 md:h-10 w-auto"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default EpisodeTile;

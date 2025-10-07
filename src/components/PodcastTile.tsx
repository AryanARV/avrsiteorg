import spotifyButton from "@/assets/spotify-button.png";
import amazonMusicButton from "@/assets/amazon-music-button.png";

interface PodcastTileProps {
  title: string;
  spotifyUrl: string;
  amazonMusicUrl: string;
  imageUrl: string;
}

const PodcastTile = ({ title, spotifyUrl, amazonMusicUrl, imageUrl }: PodcastTileProps) => {
  return (
    <div className="group relative bg-card rounded-lg overflow-hidden hover-lift hover-glow">
      <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-500"
           style={{ boxShadow: 'var(--shadow-glow)' }} />
      
      <div className="relative z-10">
        <img 
          src={imageUrl} 
          alt={title}
          className="w-full aspect-square object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        <div className="p-4 pl-3">
          <div className="flex flex-row gap-1.5 justify-center items-center">
            <a 
              href={spotifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all duration-300 hover:scale-105 hover:opacity-80 flex items-center"
              aria-label={`Listen to ${title} on Spotify`}
            >
              <img 
                src={spotifyButton} 
                alt="Listen on Spotify" 
                className="h-[52px] w-auto"
              />
            </a>
            
            <a 
              href={amazonMusicUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all duration-300 hover:scale-105 hover:opacity-80 flex items-center"
              aria-label={`Listen to ${title} on Amazon Music`}
            >
              <img 
                src={amazonMusicButton} 
                alt="Listen on Amazon Music" 
                className="h-10 w-auto"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PodcastTile;

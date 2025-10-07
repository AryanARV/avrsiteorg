import { useState } from "react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import spotifyButton from "@/assets/spotify-button.png";
import amazonMusicButton from "@/assets/amazon-music-button.png";
import youtubeLogo from "@/assets/youtube-logo-white.png";

const emailSchema = z.string().trim().email({ message: "Invalid email address" }).max(255);

const Subscribe = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsSubmitting(true);

    try {
      const validatedEmail = emailSchema.parse(email);
      
      // Here you would typically send to your newsletter service
      console.log("Newsletter signup:", validatedEmail);
      
      toast({
        title: "Subscribed!",
        description: "You'll receive updates about new episodes.",
      });
      
      setEmail("");
    } catch (err) {
      if (err instanceof z.ZodError) {
        setError(err.errors[0].message);
      } else {
        toast({
          title: "Error",
          description: "Something went wrong. Please try again.",
          variant: "destructive",
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-16 md:py-24 bg-[#55185d] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#55185d] via-[#4a1553] to-[#3f1148] opacity-90"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 animate-fade-in">
            Subscribe to Sports29 by AVR
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-8 animate-slide-up" style={{ animationDelay: "0.1s" }}>
            Never miss a new episode!
          </p>
          <p className="text-base text-white/80 mb-10 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            Subscribe and follow Sports29 by AVR on your favorite platform:
          </p>

          {/* Platform Buttons */}
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 mb-12 animate-fade-in-scale" style={{ animationDelay: "0.3s" }}>
            <a 
              href="https://open.spotify.com/show/69fLO1dnVq93fxgUQ0YmpB" 
              target="_blank" 
              rel="noopener noreferrer"
              className="transition-all duration-300 hover:scale-110 hover:-translate-y-1"
            >
              <img 
                src={spotifyButton} 
                alt="Listen on Spotify" 
                className="h-14 w-auto"
              />
            </a>
            
            <a 
              href="https://music.amazon.com/podcasts/e60c2128-1271-4e3d-b4c2-32e5c55bce2a/sports29-by-avr" 
              target="_blank" 
              rel="noopener noreferrer"
              className="transition-all duration-300 hover:scale-110 hover:-translate-y-1"
            >
              <img 
                src={amazonMusicButton} 
                alt="Listen on Amazon Music" 
                className="h-11 w-auto"
              />
            </a>
            
            <a 
              href="https://youtube.com/@Arvd" 
              target="_blank" 
              rel="noopener noreferrer"
              className="transition-all duration-300 hover:scale-110 hover:-translate-y-1"
            >
              <img 
                src={youtubeLogo} 
                alt="Watch on YouTube" 
                className="h-12 w-auto"
              />
            </a>
          </div>

          {/* Newsletter Form */}
          <div className="max-w-md mx-auto bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <h3 className="text-xl font-semibold text-white mb-4">
              Newsletter
            </h3>
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <Input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (error) setError("");
                }}
                placeholder="Enter your email"
                className="bg-white/90 border-white/30 text-gray-900 placeholder:text-gray-500"
              />
              {error && (
                <p className="text-red-300 text-sm text-left">{error}</p>
              )}
              <Button 
                type="submit"
                disabled={isSubmitting}
                className="bg-white text-[#55185d] hover:bg-white/90 font-semibold transition-all duration-300"
              >
                {isSubmitting ? "Subscribing..." : "Subscribe"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;

import Navigation from "@/components/Navigation";
import PodcastTile from "@/components/PodcastTile";
import Subscribe from "@/components/Subscribe";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import Episode1 from "@/assets/Episode_1.png";
import Episode2 from "@/assets/Episode_2.png";
import Episode3 from "@/assets/Episode_3.png";
import Episode4 from "@/assets/Episode_4.png";
import Episode5 from "@/assets/Episode_5.png";
import Episode6 from "@/assets/Episode_6.png";
import Episode7 from "@/assets/Episode_7.png";
import Episode8 from "@/assets/Episode_8.png";
import Episode9 from "@/assets/Episode_9.png";
import Episode10 from "@/assets/Episode_10.png";
import Episode11 from "@/assets/Episode_11.png";
import Episode12 from "@/assets/Episode_12.png";
import Episode13 from "@/assets/Episode_13.png";
import Episode14 from "@/assets/Episode_14.png";

const podcasts = [
  { id: 1, title: "M'Phelps", imageUrl: Episode1, spotifyUrl: "https://open.spotify.com/episode/6k4klt79P2gm8eIVGbV4YE?si=BSDmPHo8QcmhJ-BvEd1AsA", amazonMusicUrl: "https://music.amazon.com/podcasts/e60c2128-1271-4e3d-b4c2-32e5c55bce2a/episodes/4fdab896-531e-4183-be1a-c4f17df23f7b/michael-phelps-deep-water-deeper-battles-mastering-victory-and-vulnerability-episode-1" },
  { id: 2, title: "Lionel M", imageUrl: Episode2, spotifyUrl: "https://open.spotify.com/episode/2bb0w6lF2pq6uUyHSyyL9v?si=q-1K4sEgRuesdvLcDMbvPg", amazonMusicUrl: "https://music.amazon.com/podcasts/e60c2128-1271-4e3d-b4c2-32e5c55bce2a/episodes/b9764a7a-aaee-4f43-8dd8-3c73913de29e/lionel-messi-breaking-limits-the-rise-of-footballs-little-giant-episode-2" },
  { id: 3, title: "Mardini", imageUrl: Episode3, spotifyUrl: "#", amazonMusicUrl: "#" },
  { id: 4, title: "Jordan", imageUrl: Episode4, spotifyUrl: "#", amazonMusicUrl: "#" },
  { id: 5, title: "Ronaldo", imageUrl: Episode5, spotifyUrl: "#", amazonMusicUrl: "#" },
  { id: 6, title: "V Kohli", imageUrl: Episode6, spotifyUrl: "#", amazonMusicUrl: "#" },
  { id: 7, title: "B'Ellison", imageUrl: Episode7, spotifyUrl: "#", amazonMusicUrl: "#" },
  { id: 8, title: "Woojin", imageUrl: Episode8, spotifyUrl: "#", amazonMusicUrl: "#" },
  { id: 9, title: "Neymar J", imageUrl: Episode9, spotifyUrl: "#", amazonMusicUrl: "#" },
  { id: 10, title: "Simone", imageUrl: Episode10, spotifyUrl: "#", amazonMusicUrl: "#" },
  { id: 11, title: "Stutzman", imageUrl: Episode11, spotifyUrl: "#", amazonMusicUrl: "#" },
  { id: 12, title: "LeBron", imageUrl: Episode12, spotifyUrl: "#", amazonMusicUrl: "#" },
  { id: 13, title: "Károly", imageUrl: Episode13, spotifyUrl: "#", amazonMusicUrl: "#" },
  { id: 14, title: "K'Strug", imageUrl: Episode14, spotifyUrl: "#", amazonMusicUrl: "#" },
];

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Sports29 by AVR - Inspiring Stories of Legendary Athletes | Premium Podcast Series"
        description="Listen to Sports29 by AVR - deeply researched, emotionally told stories of legendary athletes. Michael Phelps, Lionel Messi, Simone Biles & more on Spotify and Amazon Music."
        keywords="Sports29, AVR podcast, sports podcast, athlete stories, Michael Phelps, Lionel Messi, Simone Biles, inspirational sports, Olympic athletes"
        canonicalUrl="https://sports29.lovable.app/"
      />
      <Navigation />
      
      <main className="flex-1 pt-24 pb-16">
        <div className="container mx-auto px-6">
          {/* Header Section */}
          <header className="text-center mb-16 animate-fade-in-scale">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-foreground animate-slide-up">
              Listen to Sports29 by AVR
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-light max-w-3xl mx-auto animate-slide-up" style={{ animationDelay: "0.1s" }}>
              Deeply researched, emotionally told stories of legendary athletes and unforgettable journeys
            </p>
          </header>
          
          {/* Podcast Grid */}
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {podcasts.map((podcast, index) => (
              <div 
                key={podcast.id} 
                className="stagger-fade"
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                <PodcastTile
                  title={podcast.title}
                  imageUrl={podcast.imageUrl}
                  spotifyUrl={podcast.spotifyUrl}
                  amazonMusicUrl={podcast.amazonMusicUrl}
                />
              </div>
            ))}
          </section>
        </div>
      </main>
      
      {/* Subscribe Section */}
      <Subscribe />
      
      <Footer />
    </div>
  );
};

export default Home;

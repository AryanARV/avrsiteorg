import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import EpisodeTile from "@/components/EpisodeTile";
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

const episodes = [
  {
    id: 14,
    title: "Kerri Strug: One Vault, A Million Hearts. Overcoming Pain to Olympic Glory | Episode 14",
    description: "Despite a crushing injury, Kerri Strug vaulted into history at the 1996 Olympics, embodying sheer willpower and inspiring millions worldwide. Her story turns pain into legacy: a single vault that won America's heart.",
    duration: "27:35",
    spotifyUrl: "https://open.spotify.com/show/69fLO1dnVq93fxgUQ0YmpB",
    amazonMusicUrl: "https://music.amazon.com/podcasts/e60c2128-1271-4e3d-b4c2-32e5c55bce2a/sports29-by-avr",
    imageUrl: Episode14
  },
  {
    id: 13,
    title: "Károly Takács: The Hand That Rewrote Destiny. From Battlefield to Olympic Legend | Episode 13",
    description: "After losing his shooting hand in war, Takács trained with his left and stunned the world, winning Olympic gold. An epic tale of resilience and breaking the boundaries of fate.",
    duration: "19:36",
    spotifyUrl: "https://open.spotify.com/show/69fLO1dnVq93fxgUQ0YmpB",
    amazonMusicUrl: "https://music.amazon.com/podcasts/e60c2128-1271-4e3d-b4c2-32e5c55bce2a/sports29-by-avr",
    imageUrl: Episode13
  },
  {
    id: 12,
    title: "LeBron James: Out of Akron. Building Basketball's Battle-Tested King | Episode 12",
    description: "Raised in hardship, LeBron James rose to global prominence by leading, learning, and never giving up. This episode carves out the relentless climb from the streets to the NBA throne.",
    duration: "04:53",
    spotifyUrl: "https://open.spotify.com/show/69fLO1dnVq93fxgUQ0YmpB",
    amazonMusicUrl: "https://music.amazon.com/podcasts/e60c2128-1271-4e3d-b4c2-32e5c55bce2a/sports29-by-avr",
    imageUrl: Episode12
  },
  {
    id: 11,
    title: "Matt Stutzman: The Armless Archer. Redefining Impossible | Episode 11",
    description: "Born without arms, Matt Stutzman became a record-breaking archer, proving nothing is truly impossible. His journey shatters limits and inspires anyone with a dream.",
    duration: "05:38",
    spotifyUrl: "https://open.spotify.com/show/69fLO1dnVq93fxgUQ0YmpB",
    amazonMusicUrl: "https://music.amazon.com/podcasts/e60c2128-1271-4e3d-b4c2-32e5c55bce2a/sports29-by-avr",
    imageUrl: Episode11
  },
  {
    id: 10,
    title: "Simone Biles: Flying Past Limits. Foster Hope to Olympic Immortality | Episode 10",
    description: "Simone Biles conquered gravity and adversity to become a symbol of hope and Olympic perfection. Every leap and twist tells her story of courage and transformation.",
    duration: "04:25",
    spotifyUrl: "https://open.spotify.com/show/69fLO1dnVq93fxgUQ0YmpB",
    amazonMusicUrl: "https://music.amazon.com/podcasts/e60c2128-1271-4e3d-b4c2-32e5c55bce2a/sports29-by-avr",
    imageUrl: Episode10
  },
  {
    id: 9,
    title: "Neymar Jr: Barefoot Dreams to Global Superstar. The Cost of Talent | Episode 9",
    description: "Neymar's dazzling journey from humble beginnings to football's brightest stages reveals the price of fame and brilliance. Raw, electrifying, and deeply personal.",
    duration: "14:20",
    spotifyUrl: "https://open.spotify.com/show/69fLO1dnVq93fxgUQ0YmpB",
    amazonMusicUrl: "https://music.amazon.com/podcasts/e60c2128-1271-4e3d-b4c2-32e5c55bce2a/sports29-by-avr",
    imageUrl: Episode9
  },
  {
    id: 8,
    title: "Kim Woojin: Korea's Machine. Forged by Rejection, Crowned Olympic King | Episode 8",
    description: "Kim Woojin battled rejection to become an Olympic archery champion. His story is one of iron will and mastery. Every shot aimed to rewrite his own future.",
    duration: "12:10",
    spotifyUrl: "https://open.spotify.com/show/69fLO1dnVq93fxgUQ0YmpB",
    amazonMusicUrl: "https://music.amazon.com/podcasts/e60c2128-1271-4e3d-b4c2-32e5c55bce2a/sports29-by-avr",
    imageUrl: Episode8
  },
  {
    id: 7,
    title: "Brady Ellison: Silver, Setbacks & Steel. The Cowboy Archer's Global Journey | Episode 7",
    description: "From wild west roots and health battles, Brady Ellison forged a path of steel and silver in Olympic archery. His story celebrates relentless grit.",
    duration: "13:25",
    spotifyUrl: "https://open.spotify.com/show/69fLO1dnVq93fxgUQ0YmpB",
    amazonMusicUrl: "https://music.amazon.com/podcasts/e60c2128-1271-4e3d-b4c2-32e5c55bce2a/sports29-by-avr",
    imageUrl: Episode7
  },
  {
    id: 6,
    title: "Virat Kohli: Grit, Grief & Greatness. The Making of India's Batting Icon | Episode 6",
    description: "Virat Kohli's journey from heartbreaking loss to cricketing greatness is driven by fire and commitment. This episode captures India's sporting icon and his unmatched willpower.",
    duration: "15:14",
    spotifyUrl: "https://open.spotify.com/show/69fLO1dnVq93fxgUQ0YmpB",
    amazonMusicUrl: "https://music.amazon.com/podcasts/e60c2128-1271-4e3d-b4c2-32e5c55bce2a/sports29-by-avr",
    imageUrl: Episode6
  },
  {
    id: 5,
    title: "Cristiano Ronaldo: From Poverty's Pitch to Football Immortality | Episode 5",
    description: "From a small island to the world's biggest stages, Ronaldo's story is one of determination, faith, and football immortality. The beautiful game in its rawest form.",
    duration: "11:03",
    spotifyUrl: "https://open.spotify.com/show/69fLO1dnVq93fxgUQ0YmpB",
    amazonMusicUrl: "https://music.amazon.com/podcasts/e60c2128-1271-4e3d-b4c2-32e5c55bce2a/sports29-by-avr",
    imageUrl: Episode5
  },
  {
    id: 4,
    title: "Michael Jordan: Cut from the Team. Building Basketball's Greatest Legend | Episode 4",
    description: "Michael Jordan turned early rejection into basketball's greatest story. A lesson in resilience, rivalry, and reign.",
    duration: "12:47",
    spotifyUrl: "https://open.spotify.com/show/69fLO1dnVq93fxgUQ0YmpB",
    amazonMusicUrl: "https://music.amazon.com/podcasts/e60c2128-1271-4e3d-b4c2-32e5c55bce2a/sports29-by-avr",
    imageUrl: Episode4
  },
  {
    id: 3,
    title: "Yusra Mardini: Swimming for Survival. The Refugee Olympian's Longest Journey | Episode 3",
    description: "From escape to Olympic glory, Yusra's journey is a swim for hope through the deepest waters. Courage beyond borders.",
    duration: "10:13",
    spotifyUrl: "https://open.spotify.com/show/69fLO1dnVq93fxgUQ0YmpB",
    amazonMusicUrl: "https://music.amazon.com/podcasts/e60c2128-1271-4e3d-b4c2-32e5c55bce2a/sports29-by-avr",
    imageUrl: Episode3
  },
  {
    id: 2,
    title: "Lionel Messi: Breaking Limits. The Rise of Football's Little Giant | Episode 2",
    description: "Overcoming doubters, Messi's story is the rise of a legend whose skill and humility changed football forever. Every goal broke a barrier.",
    duration: "13:12",
    spotifyUrl: "https://open.spotify.com/episode/2bb0w6lF2pq6uUyHSyyL9v?si=q-1K4sEgRuesdvLcDMbvPg",
    amazonMusicUrl: "https://music.amazon.com/podcasts/e60c2128-1271-4e3d-b4c2-32e5c55bce2a/episodes/b9764a7a-aaee-4f43-8dd8-3c73913de29e/lionel-messi-breaking-limits-the-rise-of-footballs-little-giant-episode-2",
    imageUrl: Episode2
  },
  {
    id: 1,
    title: "Michael Phelps: Deep Water, Deeper Battles. Mastering Victory and Vulnerability | Episode 1",
    description: "Michael Phelps's journey from world records to personal redemption is as deep as the water he mastered. This is a tale of struggle, triumph, and the heart of a champion.",
    duration: "06:59",
    spotifyUrl: "https://open.spotify.com/episode/6k4klt79P2gm8eIVGbV4YE?si=BSDmPHo8QcmhJ-BvEd1AsA",
    amazonMusicUrl: "https://music.amazon.com/podcasts/e60c2128-1271-4e3d-b4c2-32e5c55bce2a/episodes/4fdab896-531e-4183-be1a-c4f17df23f7b/michael-phelps-deep-water-deeper-battles-mastering-victory-and-vulnerability-episode-1",
    imageUrl: Episode1
  }
];

const Podcasts = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="All Episodes - Season 1 | Sports29 by AVR"
        description="Explore all Sports29 Season 1 episodes. Inspiring stories of legendary athletes from Michael Phelps to Simone Biles. Deeply researched, emotionally told journeys."
        keywords="Sports29 episodes, Season 1, athlete podcasts, Michael Phelps, Lionel Messi, Simone Biles, Kerri Strug, LeBron James"
        canonicalUrl="https://sports29.lovable.app/podcasts"
      />
      <Navigation />
      
      <main className="flex-1 pt-24 pb-16">
        <div className="container mx-auto px-6 max-w-6xl">
          {/* Header Section */}
          <header className="text-center mb-16 animate-fade-in-scale space-y-4">
            <div className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4" style={{ backgroundColor: '#55185d', color: '#fff' }}>
              SEASON 1
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              Sports29 Episodes
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Explore all Sports29 episodes, a showcase of inspiring stories, legendary athletes, and unforgettable journeys. 
              Each episode is deeply researched, emotionally told, and designed to move you.
            </p>
          </header>
          
          {/* Episodes List */}
          <section className="space-y-6">
            {episodes.map((episode, index) => (
              <div 
                key={episode.id}
                className="stagger-fade"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <EpisodeTile
                  title={episode.title}
                  description={episode.description}
                  duration={episode.duration}
                  spotifyUrl={episode.spotifyUrl}
                  amazonMusicUrl={episode.amazonMusicUrl}
                  imageUrl={episode.imageUrl}
                />
              </div>
            ))}
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Podcasts;

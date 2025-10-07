import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";

const podcastSeries = [
  {
    id: 1,
    title: "Startup Stories: Realm by Rook",
    subtitle: "Founder journeys, startup lessons, scaling secrets.",
    link: "https://realmrook.com/podcasts",
    episodes: [] // Add actual episodes data when available
  },
  {
    id: 2,
    title: "Sports29 by AVR",
    subtitle: "Untold athlete stories, grit, and glory.",
    link: "https://sports29.aravindh.org",
    episodes: [] // Add actual episodes data when available
  },
  {
    id: 3,
    title: "AVR x Amrish",
    subtitle: "Raw conversations on entrepreneurship, mindset, and the new world.",
    link: "https://instagram.com/arav.vr",
    episodes: [] // Add actual episodes data when available
  }
];

const Podcasts = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEO 
        title="All Podcasts by Aravindh Ravichandran | Startup Stories, Sports29, AVR x Amrish"
        description="Explore three acclaimed podcast series by AVR: Startup Stories (founder journeys), Sports29 (athlete stories), and AVR x Amrish (entrepreneurship insights)."
        keywords="Aravindh Ravichandran podcasts, Startup Stories, Sports29, AVR x Amrish, entrepreneur podcast, startup podcast, business podcast"
        canonicalUrl="https://aravindh.org/podcasts"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "PodcastSeries",
          "name": "Podcasts by Aravindh Ravichandran",
          "description": "Three acclaimed podcast series covering startup journeys, athlete stories, and entrepreneurship insights",
          "url": "https://aravindh.org/podcasts",
          "author": {
            "@type": "Person",
            "name": "Aravindh Ravichandran"
          }
        }}
      />
      <Navigation />
      
      <main className="flex-1 pt-24 pb-16">
        <div className="container mx-auto px-6 max-w-6xl">
          {/* Header Section */}
          <header className="text-center mb-16 animate-fade-in space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-primary">
              All Podcast Series by Aravindh Ravichandran
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Explore my three acclaimed shows. Tap any show to see all episodes.
            </p>
          </header>
          
          {/* Podcast Series Sections */}
          <div className="space-y-16">
            {podcastSeries.map((series, index) => (
              <section 
                key={series.id}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Series Header */}
                <div className="mb-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2">
                    {series.title}
                  </h2>
                  <p className="text-lg text-muted-foreground italic">
                    {series.subtitle}
                  </p>
                </div>

                {/* Horizontally Scrolling Episode Tiles */}
                <div className="relative mb-6">
                  <div className="overflow-x-auto pb-4 hide-scrollbar">
                    <div className="flex gap-6 min-w-max">
                      {/* Placeholder Episode Tiles */}
                      {[1, 2, 3, 4, 5].map((episodeNum) => (
                        <div 
                          key={episodeNum}
                          className="bg-card border border-border/50 rounded-lg p-6 w-80 hover:scale-105 hover:shadow-xl transition-all duration-300"
                        >
                          {/* Episode Cover Placeholder */}
                          <div className="w-full aspect-square bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg mb-4 flex items-center justify-center">
                            <span className="text-primary/50 font-bold text-2xl">EP {episodeNum}</span>
                          </div>
                          
                          {/* Episode Info */}
                          <h3 className="font-bold text-primary mb-2 line-clamp-2">
                            Episode {episodeNum} Title
                          </h3>
                          <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                            Episode description goes here with compelling details about the content.
                          </p>
                          <div className="flex items-center justify-between text-xs text-muted-foreground">
                            <span>Episode {episodeNum}</span>
                            <span>12:34</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* All Episodes Button */}
                <div className="text-center">
                  <Button
                    asChild
                    className="bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    <a href={series.link} target="_blank" rel="noopener noreferrer">
                      All Episodes
                    </a>
                  </Button>
                </div>
              </section>
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Podcasts;

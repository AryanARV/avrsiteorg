import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Mic, Building2, Award } from "lucide-react";
import portraitImage from "@/assets/AVR_3.png";
import rookLogo from "@/assets/rook-logo.png";
import realmLogo from "@/assets/realm-logo.png";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEO 
        title="Aravindh Ravichandran: Startup Advisor, SaaS Founder, Podcast Host | Realm by Rook"
        description="Book startup mentoring, listen to top podcasts, and discover robust SaaS tools by Realm by Rook founder Aravindh Ravichandran. Transform your venture today."
        keywords="Aravindh Ravichandran, AVR, startup advisor, SaaS founder, podcast host, entrepreneur, Rook, Realm by Rook, business automation, startup mentoring"
        canonicalUrl="https://aravindh.org"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Aravindh Ravichandran",
          "alternateName": "AVR",
          "url": "https://aravindh.org",
          "image": "https://aravindh.org/assets/AVR_3.png",
          "jobTitle": "Founder & CEO",
          "worksFor": {
            "@type": "Organization",
            "name": "Realm by Rook",
            "url": "https://realmrook.com"
          }
        }}
      />
      <Navigation />
      
      <main className="flex-1 pt-24">
        {/* Hero Section */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
              {/* Left: Content */}
              <div className="space-y-8 animate-fade-in">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight">
                  Build, Scale, Win With Aravindh Ravichandran
                </h1>
                <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
                  Serial entrepreneur, global advisor, SaaS founder, and podcast host. I help ambitious founders launch, grow, and transform ventures with clarity, speed, and smart execution.
                </p>
                <div className="pt-4">
                  <Button 
                    size="lg" 
                    className="text-base px-8 py-6 bg-primary text-primary-foreground hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl animate-pulse-subtle"
                    onClick={() => window.location.href = '/contact'}
                  >
                    Book Your Startup Advisory Call
                  </Button>
                </div>
                {/* Social Proof */}
                <div className="flex flex-wrap gap-4 text-sm text-foreground/70 pt-4">
                  <span>✓ Trusted by 200+ founders</span>
                  <span>✓ Featured on 10+ podcasts</span>
                  <span>✓ CEO of Rook</span>
                </div>
              </div>

              {/* Right: Portrait with VFX */}
              <div className="relative animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <div className="relative group">
                  {/* VFX Background Glow */}
                  <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl animate-pulse-glow group-hover:scale-110 transition-transform duration-500"></div>
                  {/* Portrait Image */}
                  <div className="relative">
                  <img 
                      src={portraitImage} 
                      alt="Aravindh Ravichandran - Serial entrepreneur and startup advisor" 
                      className="relative rounded-2xl w-full max-w-md mx-auto shadow-2xl hover:shadow-primary/20 transition-all duration-300"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Impact Metrics */}
        <section className="py-16 border-y border-border/50 bg-card/30">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {[
                { icon: Users, label: "200+ founders advised", color: "text-primary" },
                { icon: Mic, label: "3 successful podcast shows", color: "text-primary" },
                { icon: Building2, label: "Founder, CEO of Rook (SaaS)", color: "text-primary" },
                { icon: Award, label: "Featured in 10+ media outlets", color: "text-primary" },
              ].map((metric, index) => (
                <div 
                  key={index} 
                  className="flex flex-col items-center text-center space-y-3 animate-slide-up hover:scale-105 transition-transform duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <metric.icon className={`h-10 w-10 ${metric.color}`} />
                  <p className="text-sm md:text-base font-medium text-foreground/80">{metric.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Podcast Shows */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-5xl font-bold text-primary text-center mb-16">
              Discover My Podcast Shows
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                {
                  title: "Startup Stories: Realm by Rook",
                  description: "Transformative journeys and lessons from the world of founders, innovators, and scaling startups.",
                  link: "https://realmrook.com/podcasts"
                },
                {
                  title: "Sports29 by AVR",
                  description: "Untold athlete origins, grit, and victory. Where sport meets story.",
                  link: "https://sports29.aravindh.org"
                },
                {
                  title: "AVR x Amrish",
                  description: "Unfiltered conversations on entrepreneurship, mindset, and global perspectives.",
                  link: "https://instagram.com/arav.vr"
                },
              ].map((show, index) => (
                <Card 
                  key={index} 
                  className="hover:scale-105 hover:shadow-2xl transition-all duration-300 bg-card border-border/50"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <CardContent className="p-8 space-y-4">
                    {/* Thumbnail Placeholder */}
                    <div className="w-full h-48 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg flex items-center justify-center mb-4">
                      <Mic className="h-16 w-16 text-primary/40" />
                    </div>
                    <h3 className="text-xl font-bold text-primary">{show.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{show.description}</p>
                    <Button 
                      variant="outline" 
                      className="w-full hover:bg-primary hover:text-primary-foreground transition-colors"
                      onClick={() => window.open(show.link, '_blank')}
                    >
                      Listen Now
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Venture Spotlight */}
        <section className="py-20 md:py-32 bg-card/30">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-5xl font-bold text-primary text-center mb-16">
              My Ventures
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <Card className="hover:scale-105 hover:shadow-2xl transition-all duration-300 bg-card border-border/50">
                <CardContent className="p-8 space-y-4 text-center">
                  <img 
                    src={rookLogo} 
                    alt="Rook" 
                    className="h-16 w-auto mx-auto"
                  />
                  <h3 className="text-2xl font-bold text-primary">Rook</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Frictionless, scalable SaaS solutions for modern businesses. Automation and innovation at scale.
                  </p>
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="w-full hover:bg-primary hover:text-primary-foreground transition-colors border-2 border-primary"
                    onClick={() => window.open('https://rookhq.com', '_blank')}
                  >
                    Visit Rook
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:scale-105 hover:shadow-2xl transition-all duration-300 bg-card border-border/50">
                <CardContent className="p-8 space-y-4 text-center">
                  <img 
                    src={realmLogo} 
                    alt="Realm by Rook" 
                    className="h-16 w-auto mx-auto"
                  />
                  <h3 className="text-2xl font-bold text-primary">Realm by Rook</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Custom growth solutions for legal, media, and marketing verticals. Client success through innovation.
                  </p>
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="w-full hover:bg-primary hover:text-primary-foreground transition-colors border-2 border-primary"
                    onClick={() => window.open('https://realmrook.com', '_blank')}
                  >
                    Visit Realm
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Happenings Preview */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-5xl font-bold text-primary text-center mb-16">
              Latest Happenings
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
              {[
                { type: "Podcast", title: "New Episode: Sports29", date: "Jan 2025" },
                { type: "Media", title: "Featured in Tech Today", date: "Dec 2024" },
                { type: "Speaking", title: "Startup Summit 2024", date: "Nov 2024" },
                { type: "Impact", title: "Community Initiative Launch", date: "Oct 2024" },
              ].map((happening, index) => (
                <Card 
                  key={index}
                  className="hover:scale-105 hover:shadow-xl transition-all duration-300 bg-card border-border/50"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6 space-y-2">
                    <p className="text-xs font-semibold text-primary uppercase tracking-wider">{happening.type}</p>
                    <h3 className="text-base font-bold text-foreground">{happening.title}</h3>
                    <p className="text-sm text-muted-foreground">{happening.date}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center">
              <Button 
                variant="outline"
                size="lg"
                className="hover:bg-primary hover:text-primary-foreground transition-colors border-2 border-primary"
                onClick={() => window.location.href = '/happenings'}
              >
                See All Happenings
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Home;

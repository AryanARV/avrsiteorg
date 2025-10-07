import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Mic, Building2, Award } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEO 
        title="Aravindh Ravichandran - Startup Advisory, SaaS Founder & Podcast Host"
        description="Serial entrepreneur, startup mentor, SaaS founder, podcast host, and social impact creator. Trusted by founders and innovators for actionable insights and rapid growth."
        keywords="Aravindh Ravichandran, startup advisor, SaaS founder, podcast host, entrepreneurship, Rook, Sports29"
        canonicalUrl="https://sports29.lovable.app/"
      />
      <Navigation />
      
      <main className="flex-1 pt-24">
        {/* Hero Section */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto text-center space-y-8 animate-fade-in">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary leading-tight">
                Hire Aravindh Ravichandran — Startup Advisory Calls
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Serial entrepreneur, startup mentor, SaaS founder, podcast host, and social impact creator. 
                Trusted by founders and innovators for actionable insights and rapid growth.
              </p>
              <div className="pt-4">
                <Button 
                  size="lg" 
                  className="text-base px-8 py-6 hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl"
                  onClick={() => window.location.href = '/contact'}
                >
                  Book a Startup Advisory Call
                </Button>
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
                  link: "/podcasts"
                },
                {
                  title: "Sports29 by AVR",
                  description: "Untold athlete origins, grit, and victory. Where sport meets story.",
                  link: "/podcasts"
                },
                {
                  title: "AVR x Amrish",
                  description: "Unfiltered conversations on entrepreneurship, mindset, and global perspectives.",
                  link: "/podcasts"
                },
              ].map((show, index) => (
                <Card 
                  key={index} 
                  className="hover:scale-105 hover:shadow-2xl transition-all duration-300 bg-card border-border/50"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <CardContent className="p-8 space-y-4">
                    <h3 className="text-xl font-bold text-primary">{show.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{show.description}</p>
                    <Button 
                      variant="outline" 
                      className="w-full hover:bg-primary hover:text-primary-foreground transition-colors"
                      onClick={() => window.location.href = show.link}
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
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <h2 className="text-3xl md:text-5xl font-bold text-primary">
                My SaaS Venture: Rook
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Rook delivers frictionless, scalable SaaS solutions for modern businesses. 
                Realm by Rook dives deeper into client success, automation, and innovation 
                for verticals in legal, media, and growth marketing.
              </p>
              <div className="pt-4">
                <Button 
                  size="lg" 
                  variant="outline"
                  className="text-base px-8 py-6 hover:bg-primary hover:text-primary-foreground hover:scale-105 transition-all duration-300 border-2 border-primary"
                  onClick={() => window.open('https://realmrook.com', '_blank')}
                >
                  Visit Rook
                </Button>
              </div>
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

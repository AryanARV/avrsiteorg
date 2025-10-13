import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Mic, Building2, Award } from "lucide-react";
import portraitImage from "@/assets/AVR_3.png";
import rookLogo from "@/assets/rook-logo.png";
import realmLogo from "@/assets/realm-logo.png";
import podcastThumb1 from "@/assets/podcast-thumb-1.png";
import podcastThumb2 from "@/assets/podcast-thumb-2.png";
import podcastThumb3 from "@/assets/podcast-thumb-3.png";
import { Instagram, Twitter, Youtube, Linkedin } from "lucide-react";

import Avr from "@/assets/AVR_speaking.png";
const Home = () => {
   const socialLinks = [
    {
      name: "Instagram",
      url: "https://instagram.com/arav.vr",
      icon: Instagram
    },
    {
      name: "X (Twitter)",
      url: "https://x.com/AravAVR",
      icon: Twitter
    },
    {
      name: "YouTube",
      url: "https://youtube.com/@ardh",
      icon: Youtube
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/avra",
      icon: Linkedin
    },
    {
      name: "Threads",
      url: "https://threads.com/arav.vr",
      icon: Instagram
    },
    {
      name: "Bluesky",
      url: "https://bsky.app/profile/ardh.bsky.social",
      icon: Twitter
    }
  ];

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
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center order-last md:order-first">
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
                  <span>✓ Trusted by 100+ founders</span>
                  <span>✓ Featured on 22+ podcasts</span>
                  <span>✓ CEO of Rook</span>
                </div>
              </div>

              {/* Right: Portrait with VFX */}
              <div className="relative animate-fade-in pt-8 md:pt-0 order-first md:order-last" style={{ animationDelay: '0.2s' }}>
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
        <section className="py-12 border-y border-border/50 bg-card/30">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {[
                { icon: Users, label: "100+ founders advised", color: "text-primary" },
                { icon: Mic, label: "22+ successful podcast shows", color: "text-primary" },
                { icon: Building2, label: "Founder, CEO of Rook", color: "text-primary" },
                { icon: Award, label: "Award Winning Entrepreneur", color: "text-primary" },
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
        <section className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-5xl font-bold text-primary text-center mb-16">
              Discover My Podcast Shows
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                {
                  title: "Startup Stories: Realm by Rook",
                  description: "Transformative journeys and lessons from the world of founders, innovators, and scaling startups.",
                  link: "https://realmrook.com/podcasts",
                  thumbnail: podcastThumb1
                },
                {
                  title: "Sports29 by AVR",
                  description: "Untold athlete origins, grit, and victory. Where sport meets story.",
                  link: "https://sports29.aravindh.org",
                  thumbnail: podcastThumb2
                },
                {
                  title: "AVR x Amrish",
                  description: "Unfiltered conversations on entrepreneurship, mindset, and global perspectives.",
                  link: "https://instagram.com/arav.vr",
                  thumbnail: podcastThumb3
                },
              ].map((show, index) => (
                <Card 
                  key={index} 
                  className="hover:scale-105 hover:shadow-2xl transition-all duration-300 bg-card border-border/50"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <CardContent className="p-8 space-y-4">
                    {/* Podcast Thumbnail */}
                    <div className="w-full aspect-square rounded-lg overflow-hidden mb-4">
                      <img 
                        src={show.thumbnail} 
                        alt={`${show.title} podcast cover`}
                        className="w-full h-full object-cover"
                      />
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
        <section className="py-20 bg-card/30">
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
                  {/* <h3 className="text-2xl font-bold text-primary">Rook</h3> */}
                  <p className="text-muted-foreground leading-relaxed">
                  We craft focused SaaS products that empower creators, freelancers, and founders to get more done with less.
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
                  {/* <h3 className="text-2xl font-bold text-primary">Realm by Rook</h3> */}
                  <p className="text-muted-foreground leading-relaxed">
                  At Realm by Rook, we blend creativity and technology to build experiences that inspire action.
                  </p>
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="w-full hover:bg-primary hover:text-primary-foreground transition-colors border-2 border-primary"
                    onClick={() => window.open('https://realmrook.com', '_blank')}
                  >
                    Visit Realm by Rook
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Book Me for Your Event */}
        <section className="py-20 bg-[#fdf4ee]">
            <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto grid md:grid-cols-2  items-center text-center md:text-left">
              {/* Left: Content */}
              <div className="space-y-8">
              <h2 className="text-3xl md:text-5xl font-bold text-[#55185d] mb-6">
                Book Aravindh Ravichandran for Your Event
              </h2>
              <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
                Inspirational startup mentor, podcast host, and SaaS entrepreneur. Available for keynote talks, panel moderation, fireside chats, and growth workshops.
              </p>
              <div className="grid md:grid-cols-1 gap-6 my-12 text-left">
                <div className="space-y-2">
                <div className="text-[#55185d] font-semibold">✓ Keynotes on startup growth, SaaS scaling, and content virality</div>
                </div>
                <div className="space-y-2">
                <div className="text-[#55185d] font-semibold">✓ Podcast-style storytelling for events</div>
                </div>
                <div className="space-y-2">
                <div className="text-[#55185d] font-semibold">✓ Workshops for founders, teams, and creators</div>
                </div>
              </div>
              <Button 
                size="lg" 
                className="bg-[#55185d] text-white hover:bg-[#55185d]/90 hover:scale-105 transition-all duration-300 px-8 py-6 text-base"
                onClick={() => window.location.href = '/hire-me-for-events'}
              >
                View Full Profile & Book an Event
              </Button>
              </div>
              {/* Right: Image */}
              <div className="flex justify-center md:justify-end pt-12 md:pt-0">
              <img 
                src={Avr} 
                alt="Aravindh Ravichandran speaking at an event" 
                className="rounded-2xl w-full max-w-xs shadow-xl"
              />
              </div>
            </div>
            </div>
        </section>

        {/* Happenings Preview */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-5xl font-bold text-primary text-center mb-16">
              Latest Happenings
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
              {[
                { type: "Podcast", title: "New Episode: Sports29", date: "Oct 2025" },
                { type: "Media", title: "Featured in Finext Award", date: "Feb 2024" },
                { type: "Speaking", title: "Startup Summit 2024", date: "Jan 2026" },
                { type: "Impact", title: "Community Initiative Launch", date: "May 2026" },
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


          {/* Social Links */}
        <section className="py-20 bg-card/30">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">
                Connect With Me
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 bg-card border border-border/50 rounded-lg hover:scale-105 hover:shadow-xl hover:border-primary transition-all duration-300"
                  >
                    <div className="p-2 bg-primary rounded-lg">
                      <social.icon className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <span className="text-sm font-medium text-foreground">{social.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

  

      </main>
      
      <Footer />
    </div>
  );
};

export default Home;

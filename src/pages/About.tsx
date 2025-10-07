import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Instagram, Twitter, Youtube, Linkedin } from "lucide-react";
import portraitImage from "@/assets/AVR_speaking.png";

const About = () => {
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
        title="About Aravindh Ravichandran - Entrepreneur, Advisor & Podcast Host"
        description="Learn about Aravindh Ravichandran's journey as a serial entrepreneur, startup advisor, SaaS founder, podcast host, and social impact creator."
        keywords="Aravindh Ravichandran, about, entrepreneur, startup advisor, SaaS founder, podcast host"
        canonicalUrl="https://sports29.lovable.app/about"
      />
      <Navigation />
      
      <main className="flex-1 pt-24">
        {/* Page Header */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold text-primary animate-fade-in">
                About Aravindh Ravichandran (AVR)
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground animate-fade-in" style={{ animationDelay: '0.1s' }}>
                Serial Entrepreneur, Startup Advisor, SaaS Founder, Podcast Host
              </p>
            </div>
          </div>
        </section>

        {/* Profile Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto space-y-12">
              {/* Portrait */}
              <div className="flex justify-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <div className="relative group">
                  <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl animate-pulse-glow"></div>
                  <img 
                    src={portraitImage} 
                    alt="Aravindh Ravichandran" 
                    className="relative rounded-full w-64 h-64 object-cover shadow-2xl hover:shadow-primary/20 transition-all duration-300"
                  />
                </div>
              </div>

              {/* Bio */}
              <div className="space-y-6 text-lg text-foreground/80 leading-relaxed">
                <p>
                  Aravindh Ravichandran, known as AVR, is a multidisciplinary Indian entrepreneur, advisor, writer, and podcast creator. With a deep passion for technology, sports, and social impact, Aravindh has helped launch and scale ventures in SaaS, media, and advisory—championing growth, automation, and positive change.
                </p>
                <p>
                  From founding Rook and its vertical Realm by Rook, to hosting acclaimed digital shows like Startup Stories, Sports29, and AVR x Amrish, Aravindh brings vision, mentorship, and powerful storytelling to every project. His guidance has shaped hundreds of founders, and his voice resonates through the entrepreneurial, athletic, and innovation communities.
                </p>
                <p>
                  Outside business, Aravindh leads impact projects through the Aravindh Initiative, promoting blood donation, mentoring up-and-coming talent, and advancing thought leadership through podcasts and media. His story is one of determination, curiosity, and creating lasting value.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Social Links */}
        <section className="py-16 md:py-24 bg-card/30">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">
                Connect With Me
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
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

        {/* Core Values */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">
                Core Values & Mission
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {[
                  "Empowering Founders",
                  "Building Automated Futures",
                  "Storytelling with Impact",
                  "Championing Sport, Technology, and Social Good"
                ].map((value, index) => (
                  <div 
                    key={index}
                    className="p-6 bg-card border border-border/50 rounded-lg hover:scale-105 hover:shadow-xl transition-all duration-300"
                  >
                    <h3 className="text-xl font-bold text-primary">{value}</h3>
                  </div>
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

export default About;

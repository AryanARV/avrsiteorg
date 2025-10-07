import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Rocket, Heart, Award } from "lucide-react";

const About = () => {
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
            <h1 className="text-4xl md:text-6xl font-bold text-primary text-center mb-6 animate-fade-in">
              About Aravindh Ravichandran
            </h1>
            <p className="text-lg md:text-xl text-foreground/70 text-center max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.1s' }}>
              Serial entrepreneur, global advisor, SaaS founder, podcast host, and social impact creator
            </p>
          </div>
        </section>

        {/* Bio Section */}
        <section className="py-16 md:py-24 bg-card/30">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto space-y-8">
              <Card className="bg-card border-border/50">
                <CardContent className="p-8 md:p-12 space-y-6">
                  <p className="text-lg text-foreground/80 leading-relaxed">
                    Aravindh Ravichandran (AVR) is a serial entrepreneur, startup advisor, and the founder & CEO of Rook, 
                    a cutting-edge SaaS platform empowering businesses with automation and scalable solutions.
                  </p>
                  <p className="text-lg text-foreground/80 leading-relaxed">
                    With a passion for innovation and a track record of building impactful ventures, AVR has advised over 
                    200 founders across the globe, helping them navigate the complexities of startup growth, fundraising, 
                    and market expansion.
                  </p>
                  <p className="text-lg text-foreground/80 leading-relaxed">
                    Beyond business, AVR is a podcast host running three successful shows: <strong>Startup Stories: Realm by Rook</strong>, 
                    <strong> Sports29 by AVR</strong>, and <strong>AVR x Amrish</strong>. These platforms showcase transformative stories, 
                    athlete journeys, and unfiltered conversations on entrepreneurship and mindset.
                  </p>
                  <p className="text-lg text-foreground/80 leading-relaxed">
                    As a competitive archery athlete and social impact creator through the Aravindh Initiative, AVR combines 
                    his love for sport with a commitment to giving back—organizing blood drives, mentorship programs, and 
                    community initiatives.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Key Highlights */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-5xl font-bold text-primary text-center mb-12">
              Key Highlights
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {[
                {
                  icon: Rocket,
                  title: "Founder & CEO",
                  description: "Leading Rook, a SaaS platform transforming business operations"
                },
                {
                  icon: Users,
                  title: "200+ Founders Advised",
                  description: "Trusted mentor for startup growth and scaling strategies"
                },
                {
                  icon: Award,
                  title: "FiNext Award Winner",
                  description: "Recognized for innovation in technology and SaaS in Dubai"
                },
                {
                  icon: Heart,
                  title: "Social Impact Creator",
                  description: "Driving positive change through Aravindh Initiative"
                }
              ].map((highlight, index) => (
                <Card 
                  key={index}
                  className="hover:scale-105 hover:shadow-xl transition-all duration-300 bg-card border-border/50"
                >
                  <CardContent className="p-8 space-y-4 text-center">
                    <highlight.icon className="h-12 w-12 text-primary mx-auto" />
                    <h3 className="text-xl font-bold text-foreground">{highlight.title}</h3>
                    <p className="text-muted-foreground">{highlight.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16 md:py-24 bg-card/30">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
              <Card className="bg-card border-border/50">
                <CardContent className="p-8 md:p-10 space-y-4">
                  <h3 className="text-2xl md:text-3xl font-bold text-primary">Mission</h3>
                  <p className="text-lg text-foreground/80 leading-relaxed">
                    To empower founders and businesses with the tools, insights, and mentorship they need to build, 
                    scale, and win in today's competitive landscape.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card border-border/50">
                <CardContent className="p-8 md:p-10 space-y-4">
                  <h3 className="text-2xl md:text-3xl font-bold text-primary">Vision</h3>
                  <p className="text-lg text-foreground/80 leading-relaxed">
                    To create a global ecosystem where innovation thrives, entrepreneurs succeed, and technology 
                    drives meaningful social impact across communities.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Personal Interests */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-bold text-primary text-center mb-12">
                Beyond Business
              </h2>
              <Card className="bg-card border-border/50">
                <CardContent className="p-8 md:p-12 space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-primary">Archery Athlete</h3>
                    <p className="text-lg text-foreground/80 leading-relaxed">
                      As a competitive archer, AVR brings discipline, focus, and precision to everything he does. 
                      Sports29 by AVR podcast celebrates athletic excellence and untold stories from the world of sports.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-primary">Podcast Host</h3>
                    <p className="text-lg text-foreground/80 leading-relaxed">
                      Running three unique podcast shows that explore entrepreneurship, sports, and global perspectives. 
                      Each show offers listeners actionable insights and inspiring stories.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-primary">Community Leader</h3>
                    <p className="text-lg text-foreground/80 leading-relaxed">
                      Through the Aravindh Initiative, AVR organizes blood drives, mentorship programs, and education 
                      initiatives to make a tangible difference in communities across India.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;

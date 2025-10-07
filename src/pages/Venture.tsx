import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Rocket, Target, Zap, Shield, Users, TrendingUp } from "lucide-react";

const Venture = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEO 
        title="My Ventures - Rook & Realm by Rook | Aravindh Ravichandran"
        description="Discover Rook: Frictionless SaaS for modern businesses. Explore Realm by Rook's custom growth solutions for legal, media, and marketing industries."
        keywords="Rook, Realm by Rook, SaaS, automation, startup, Aravindh Ravichandran"
        canonicalUrl="https://sports29.lovable.app/venture"
      />
      <Navigation />
      
      <main className="flex-1 pt-24">
        {/* Page Header */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-6">
            <h1 className="text-4xl md:text-6xl font-bold text-primary text-center mb-6 animate-fade-in">
              My Ventures
            </h1>
            <p className="text-lg md:text-xl text-foreground/70 text-center max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.1s' }}>
              Building the future of business automation and vertical SaaS solutions
            </p>
          </div>
        </section>

        {/* Rook Section */}
        <section className="py-16 md:py-24 bg-card/30">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6">
                  Rook: Frictionless Growth Through Automation
                </h2>
                <p className="text-lg md:text-xl text-foreground/80 max-w-4xl mx-auto leading-relaxed">
                  Rook is the powerhouse SaaS platform enabling startups, agencies, and enterprises to automate operations, scale fast, and unlock new markets.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 mb-12">
                {[
                  {
                    icon: Rocket,
                    title: "Cloud-native, no-code interfaces",
                    description: "Build and deploy without technical complexity"
                  },
                  {
                    icon: Target,
                    title: "Performance-focused tools",
                    description: "Optimized for legal, media, and sales ops"
                  },
                  {
                    icon: Zap,
                    title: "Visionary leadership",
                    description: "Backed by real founder experience"
                  }
                ].map((feature, index) => (
                  <Card 
                    key={index}
                    className="hover:scale-105 hover:shadow-xl transition-all duration-300 bg-card border-border/50"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardContent className="p-8 space-y-4 text-center">
                      <feature.icon className="h-12 w-12 text-primary mx-auto" />
                      <h3 className="text-xl font-bold text-foreground">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="text-center">
                <Button 
                  size="lg"
                  className="px-8 py-6 text-base hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl"
                  onClick={() => window.open('https://realmrook.com', '_blank')}
                >
                  Try Rook / Request Demo
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Realm by Rook Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6">
                  Realm by Rook: Custom Growth for Your Industry
                </h2>
                <p className="text-lg md:text-xl text-foreground/80 max-w-4xl mx-auto leading-relaxed">
                  Realm brings Rook's tech to vertical solutions (legal, media, marketing), with case studies showing how businesses save time, drive sales, and stay ahead.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 mb-12">
                {[
                  {
                    icon: Shield,
                    title: "Powerful integrations",
                    description: "Seamlessly connect with your existing tools and workflows"
                  },
                  {
                    icon: Users,
                    title: "Proven client successes",
                    description: "Real results from satisfied businesses across industries"
                  },
                  {
                    icon: TrendingUp,
                    title: "Secure & scalable",
                    description: "Always up-to-date, enterprise-grade security"
                  }
                ].map((feature, index) => (
                  <Card 
                    key={index}
                    className="hover:scale-105 hover:shadow-xl transition-all duration-300 bg-card border-border/50"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardContent className="p-8 space-y-4 text-center">
                      <feature.icon className="h-12 w-12 text-primary mx-auto" />
                      <h3 className="text-xl font-bold text-foreground">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Future Vision Section */}
        <section className="py-16 md:py-24 bg-card/30">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <h2 className="text-3xl md:text-5xl font-bold text-primary">
                Future Vision & Growth
              </h2>
              <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
                Constant innovation: AI-driven features, new vertical launches, and the promise to deliver results faster and simpler.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 pt-8">
                <div className="space-y-2">
                  <p className="text-lg font-semibold text-primary">Community-driven roadmap</p>
                  <p className="text-muted-foreground">Built with feedback from real users</p>
                </div>
                <div className="space-y-2">
                  <p className="text-lg font-semibold text-primary">24/7 support</p>
                  <p className="text-muted-foreground">Always here when you need us</p>
                </div>
                <div className="space-y-2">
                  <p className="text-lg font-semibold text-primary">Designed for founders</p>
                  <p className="text-muted-foreground">By founders who understand your journey</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Preview */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-5xl font-bold text-primary text-center mb-12">
              What Our Clients Say
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {[
                {
                  quote: "Rook transformed our operations completely. We've saved countless hours and scaled faster than we ever imagined.",
                  author: "Sarah Chen",
                  role: "Founder, Legal Tech Startup"
                },
                {
                  quote: "Realm by Rook gave us the custom solution we needed. The results speak for themselves - 3x revenue growth in 6 months.",
                  author: "Michael Rodriguez",
                  role: "CEO, Media Agency"
                }
              ].map((testimonial, index) => (
                <Card 
                  key={index}
                  className="hover:scale-105 hover:shadow-xl transition-all duration-300 bg-card border-border/50"
                >
                  <CardContent className="p-8 space-y-4">
                    <p className="text-lg text-foreground/80 italic">"{testimonial.quote}"</p>
                    <div>
                      <p className="font-semibold text-foreground">{testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Venture;

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Youtube, Instagram, Target, Award } from "lucide-react";

const Archery = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#fdf4ee]">
      <SEO 
        title="Archery Journey | Aravindh Ravichandran - Competitive Recurve Archer"
        description="Follow my competitive recurve archery journey. Training, competitions, technique, and mindset on YouTube and Instagram."
        keywords="Aravindh Ravichandran archery, recurve archery, competitive archer, archery training"
      />
      <Navigation />
      
      <main className="flex-1 pt-24">
        {/* Hero Section */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in">
              <Target className="h-20 w-20 text-[#55185d] mx-auto mb-4" />
              <h1 className="text-4xl md:text-6xl font-bold text-[#55185d] leading-tight">
                My Archery Journey
              </h1>
              <p className="text-xl md:text-2xl text-foreground/80 leading-relaxed">
                I am a competitive recurve archer sharing my journey, technique, and victories.
              </p>
              <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
                Follow my archery adventure for real progress and mindset on YouTube and Instagram.
              </p>
            </div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="py-16 bg-white/50">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-[#55185d] text-center mb-12">
                Training Philosophy
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  { icon: Target, title: "Precision", desc: "Every arrow is a lesson in focus and control" },
                  { icon: Award, title: "Perseverance", desc: "Consistent practice builds championship mindset" },
                  { icon: Target, title: "Excellence", desc: "Pursuit of mastery in every shot" }
                ].map((item, index) => (
                  <Card key={index} className="hover:scale-105 transition-all duration-300 bg-white border-[#55185d]/20">
                    <CardContent className="p-6 text-center space-y-4">
                      <item.icon className="h-12 w-12 text-[#55185d] mx-auto" />
                      <h3 className="text-xl font-bold text-[#55185d]">{item.title}</h3>
                      <p className="text-foreground/70">{item.desc}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-[#55185d] text-center mb-12">
                Latest from YouTube & Instagram
              </h2>
              
              {/* YouTube Section */}
              <div className="mb-12">
                <div className="flex items-center justify-center gap-3 mb-6">
                  <Youtube className="h-8 w-8 text-[#55185d]" />
                  <h3 className="text-2xl font-bold text-[#55185d]">Recent Videos</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  {[1, 2].map((i) => (
                    <Card key={i} className="bg-white border-[#55185d]/20 hover:scale-105 transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="aspect-video bg-gradient-to-br from-[#55185d]/10 to-[#55185d]/5 rounded-lg flex items-center justify-center mb-4">
                          <Youtube className="h-16 w-16 text-[#55185d]/40" />
                        </div>
                        <p className="text-center text-foreground/70">Latest archery training and competition footage</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                <div className="text-center mt-6">
                  <Button 
                    className="bg-[#55185d] text-white hover:bg-[#55185d]/90 hover:scale-105 transition-all duration-300"
                    onClick={() => window.open('https://youtube.com/@aravindh', '_blank')}
                  >
                    <Youtube className="h-5 w-5 mr-2" />
                    Subscribe on YouTube
                  </Button>
                </div>
              </div>

              {/* Instagram Section */}
              <div>
                <div className="flex items-center justify-center gap-3 mb-6">
                  <Instagram className="h-8 w-8 text-[#55185d]" />
                  <h3 className="text-2xl font-bold text-[#55185d]">Recent Posts</h3>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  {[1, 2, 3].map((i) => (
                    <Card key={i} className="bg-white border-[#55185d]/20 hover:scale-105 transition-all duration-300">
                      <CardContent className="p-0">
                        <div className="aspect-square bg-gradient-to-br from-[#55185d]/10 to-[#55185d]/5 rounded-lg flex items-center justify-center">
                          <Instagram className="h-12 w-12 text-[#55185d]/40" />
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                <div className="text-center mt-6">
                  <Button 
                    className="bg-[#55185d] text-white hover:bg-[#55185d]/90 hover:scale-105 transition-all duration-300"
                    onClick={() => window.open('https://instagram.com/arav.vr', '_blank')}
                  >
                    <Instagram className="h-5 w-5 mr-2" />
                    Follow on Instagram
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer Message */}
        <section className="py-12 bg-white/50">
          <div className="container mx-auto px-6">
            <p className="text-center text-lg text-foreground/70 italic max-w-2xl mx-auto">
              "Join me in the pursuit of precision, perseverance, and excellence."
            </p>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Archery;

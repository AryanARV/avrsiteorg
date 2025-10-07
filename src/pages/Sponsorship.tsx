import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Mail, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Sponsorship = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Sponsorship & Partnerships | Sports29 by AVR"
        description="Partner with Sports29 by AVR and support athletic excellence. Explore sponsorship opportunities for archery and sports content with Aravindh Initiative."
        keywords="Sports29 sponsorship, sports partnership, AVR archery sponsor, podcast sponsorship, athletic partnerships"
        canonicalUrl="https://sports29.lovable.app/sponsorship"
      />
      <Navigation />
      
      <main className="flex-1 container mx-auto px-4 py-12 md:py-20 pt-24">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Sponsorship & Partnerships
            </h1>
            <p className="text-xl text-foreground font-medium animate-slide-up" style={{ animationDelay: "0.1s" }}>
              Championing Archery and Athletic Excellence with Sports29 by AVR
            </p>
          </div>

          {/* Main Content */}
          <div className="space-y-8 mb-12">
            <div className="bg-card/50 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-border/30 animate-fade-in-scale" style={{ animationDelay: "0.2s" }}>
              <p className="text-base md:text-lg text-foreground/90 leading-relaxed mb-6">
                Are you interested in sponsoring AVR's archery journey or partnering with Sports29 by AVR?
              </p>
              <p className="text-base md:text-lg text-foreground/90 leading-relaxed mb-6">
                We work with brands passionate about sport, innovation, and positive impact. As an archery athlete and entrepreneur, AVR is open to collaborations, sponsorships, and strategic partnerships that help push the boundaries of athletic achievement and audience engagement.
              </p>
              <p className="text-base md:text-lg text-foreground/90 leading-relaxed">
                We look forward to collaborating and creating world-class sporting and content experiences together.
              </p>
            </div>

            {/* Contact Section */}
            <div className="bg-gradient-to-br from-accent/20 to-primary/20 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-accent/30 animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <h2 className="text-2xl font-semibold text-foreground mb-6 text-center">
                How to Reach Out
              </h2>
              
              <div className="space-y-6">
                <div className="text-center">
                  <p className="text-foreground mb-3">
                    Interested sponsors and partners can connect via email:
                  </p>
                  <div className="flex items-center justify-center gap-2 mb-6">
                    <Mail className="w-5 h-5 text-foreground" />
                    <a 
                      href="mailto:avr@aravindh.org" 
                      className="text-foreground hover:text-foreground/80 transition-colors duration-300 text-lg font-semibold"
                    >
                      avr@aravindh.org
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 justify-center">
                  <div className="h-px flex-1 bg-border/30"></div>
                  <span className="text-muted-foreground text-sm">or</span>
                  <div className="h-px flex-1 bg-border/30"></div>
                </div>

                <div className="text-center">
                  <p className="text-foreground mb-4">
                    Use the contact form on our Contact page
                  </p>
                  <Link to="/contact">
                    <Button className="bg-accent hover:bg-accent/90 transition-all duration-300 group">
                      Go to Contact Page
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Sponsorship;

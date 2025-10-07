import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const Legal = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Legal Information & Copyright | Sports29 by AVR"
        description="Legal information, copyright details, and rights inquiries for Sports29 by AVR podcast series. Contact us for licensing and permissions."
        keywords="Sports29 legal, copyright, podcast rights, Aravindh Initiative"
        canonicalUrl="https://sports29.lovable.app/legal"
      />
      <Navigation />
      
      <main className="flex-1 pt-24 pb-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <h1 className="text-5xl font-bold mb-12 text-center animate-fade-in">
            Legal Information
          </h1>
          
          <div className="bg-card rounded-lg p-8 md:p-12 space-y-6 text-foreground/90 leading-relaxed animate-fade-in">
            <p>
              Sports29 by AVR is operated as part of the Aravindh Initiative. All podcast content is original and protected by copyright under applicable law.
            </p>
            
            <p>
              All podcast titles, descriptions, and associated assets are owned by Aravindh Initiative 2025.
            </p>
            
            <p>
              Spotify®, Amazon Music® names and logos are trademarks of their respective owners and are used here for linking purposes only.
            </p>
            
            <p>
              No unauthorized reproduction, distribution, or public airing of Sports29 by AVR podcasts is allowed.
            </p>
            
            <p className="font-medium">
              For rights inquiries or takedown requests, contact us at{" "}
              <a 
                href="mailto:avr@aravindh.org" 
                className="text-accent-foreground hover:text-foreground transition-colors underline"
              >
                avr@aravindh.org
              </a>
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Legal;

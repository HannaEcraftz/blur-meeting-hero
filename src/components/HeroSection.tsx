import { Button } from "@/components/ui/button";
import { PlayCircle } from "lucide-react";
import heroMockup from "@/assets/hero-mockup.jpg";

export const HeroSection = () => {
  const handleGetStarted = () => {
    const pricingSection = document.querySelector('#pricing');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleSeeHow = () => {
    const featuresSection = document.querySelector('#features');
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="relative overflow-hidden" style={{ background: 'var(--gradient-hero)' }}>
      <div className="container mx-auto px-6 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="inline-block">
              <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold">
                #1 AI Meeting Agent
              </span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              The <span className="gradient-text">AI Meeting</span> Assistant You Need
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-xl">
              Record, transcribe, and summarize your meetings automatically. 
              Get instant insights and action items powered by AI.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="group" onClick={handleGetStarted}>
                Get Started Free
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </Button>
              <Button variant="hero-outline" size="lg" className="group" onClick={handleSeeHow}>
                <PlayCircle className="mr-2 h-5 w-5" />
                See How It Works
              </Button>
            </div>
            
            <div className="flex items-center gap-8 pt-6">
              <div>
                <div className="text-3xl font-bold gradient-text">50K+</div>
                <div className="text-sm text-muted-foreground">Active Users</div>
              </div>
              <div className="h-12 w-px bg-border"></div>
              <div>
                <div className="text-3xl font-bold gradient-text">10M+</div>
                <div className="text-sm text-muted-foreground">Meetings Recorded</div>
              </div>
            </div>
          </div>
          
          {/* Right Mockup */}
          <div className="relative lg:ml-auto animate-float">
            <div className="relative z-10">
              <img 
                src={heroMockup} 
                alt="AI Meeting Assistant Interface" 
                className="rounded-3xl shadow-premium max-w-md mx-auto"
              />
            </div>
            {/* Gradient Blur Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 blur-3xl -z-10 scale-110"></div>
          </div>
        </div>
      </div>
      
      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-background"></div>
    </section>
  );
};

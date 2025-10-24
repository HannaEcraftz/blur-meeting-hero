import { Mic, Sparkles, CheckCircle, Brain } from "lucide-react";
import featureMockup from "@/assets/feature-mockup.jpg";

const features = [
  {
    icon: Mic,
    title: "Instant Transcripts",
    description: "Crystal-clear transcriptions in real-time with speaker identification and timestamps.",
  },
  {
    icon: Sparkles,
    title: "Smart Summaries",
    description: "AI-powered summaries that capture key decisions and important moments automatically.",
  },
  {
    icon: CheckCircle,
    title: "Action Items",
    description: "Automatically extract and organize action items with assigned owners and deadlines.",
  },
  {
    icon: Brain,
    title: "Meeting Insights",
    description: "Get sentiment analysis, talk time analytics, and conversation insights instantly.",
  },
];

export const FeatureHighlights = () => {
  return (
    <section id="features" className="py-24 bg-background scroll-mt-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Like Having Your Own <span className="gradient-text">Executive Assistant</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Powerful AI features that transform how you handle meetings and collaboration
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Mockup */}
          <div className="relative animate-scale-in order-2 lg:order-1 cursor-pointer hover:scale-105 transition-transform duration-300">
            <div className="relative z-10">
              <img 
                src={featureMockup} 
                alt="AI Chat Interface" 
                className="rounded-3xl shadow-premium max-w-sm mx-auto"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-tr from-secondary/20 via-primary/20 to-accent/20 blur-3xl -z-10 scale-110"></div>
          </div>
          
          {/* Right: Features */}
          <div className="space-y-8 order-1 lg:order-2">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="glass-card rounded-2xl p-6 hover:shadow-hover transition-all duration-300 animate-fade-in hover:scale-105"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center"
                         style={{ background: 'var(--gradient-primary)' }}>
                      <feature.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

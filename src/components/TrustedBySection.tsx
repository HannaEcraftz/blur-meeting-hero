import { Star } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const companies = [
  "Salesforce", "Google", "Zoom", "Microsoft", "Slack", "Dropbox"
];

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "VP of Operations",
    company: "TechCorp",
    content: "This AI assistant has transformed our meeting culture. We're 10x more productive and nothing falls through the cracks anymore.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Product Manager",
    company: "InnovateLab",
    content: "The automatic action items and smart summaries save our team hours every week. It's like having a personal assistant in every meeting.",
    rating: 5,
  },
  {
    name: "Emma Williams",
    role: "Engineering Lead",
    company: "DevFlow",
    content: "Game-changer for remote teams. The transcription accuracy and AI insights are incredibly accurate and useful.",
    rating: 5,
  },
];

export const TrustedBySection = () => {
  const { toast } = useToast();
  
  const handleCompanyClick = (company: string) => {
    toast({
      title: `${company} uses AI Meeting`,
      description: "Join thousands of companies transforming their meetings with AI.",
    });
  };

  const handleTestimonialClick = (name: string) => {
    toast({
      title: "Read full story",
      description: `Learn more about how ${name} uses AI Meeting Assistant.`,
    });
  };

  return (
    <section id="trusted" className="py-24 bg-background scroll-mt-16">
      <div className="container mx-auto px-6">
        {/* Trusted By */}
        <div className="text-center mb-16">
          <p className="text-muted-foreground text-sm font-semibold mb-8 uppercase tracking-wider">
            Trusted by leading companies worldwide
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-16">
            {companies.map((company, index) => (
              <div 
                key={index}
                onClick={() => handleCompanyClick(company)}
                className="text-2xl font-bold text-muted-foreground/40 hover:text-primary transition-colors cursor-pointer"
              >
                {company}
              </div>
            ))}
          </div>
        </div>
        
        {/* Testimonials */}
        <div className="mt-24">
          <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16">
            What Our <span className="gradient-text">Users Say</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                onClick={() => handleTestimonialClick(testimonial.name)}
                className="glass-card rounded-2xl p-8 hover:shadow-hover transition-all duration-300 animate-fade-in cursor-pointer"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                  ))}
                </div>
                
                <p className="text-foreground mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold"
                       style={{ background: 'var(--gradient-primary)' }}>
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role} at {testimonial.company}
                    </div>
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

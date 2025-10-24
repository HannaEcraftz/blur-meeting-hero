import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Perfect for individuals and small teams",
    features: [
      "Up to 5 meetings per month",
      "Basic transcription",
      "Meeting summaries",
      "30-day history",
      "Email support",
    ],
    cta: "Start for Free",
    popular: false,
  },
  {
    name: "Pro",
    price: "$29",
    period: "per month",
    description: "For professionals and growing teams",
    features: [
      "Unlimited meetings",
      "Advanced AI transcription",
      "Smart summaries & insights",
      "Action items extraction",
      "Unlimited history",
      "Priority support",
      "All integrations",
      "Custom branding",
    ],
    cta: "Upgrade Now",
    popular: true,
  },
];

export const PricingSection = () => {
  const handlePlanSelect = (planName: string) => {
    console.log(`Selected plan: ${planName}`);
    // You can add checkout or signup logic here
  };

  return (
    <section id="pricing" className="py-24 bg-background scroll-mt-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Simple, <span className="gradient-text">Transparent Pricing</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose the plan that works best for you. Upgrade or downgrade anytime.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative rounded-3xl p-8 transition-all duration-300 animate-scale-in hover:scale-105 ${
                plan.popular 
                  ? 'glass-card shadow-premium border-2 border-primary/20' 
                  : 'glass-card shadow-card'
              }`}
              style={{ 
                animationDelay: `${index * 150}ms`,
                background: plan.popular ? 'var(--gradient-card)' : undefined,
              }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1 rounded-full text-sm font-semibold text-white"
                        style={{ background: 'var(--gradient-primary)' }}>
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-muted-foreground text-sm mb-4">{plan.description}</p>
                <div className="mb-2">
                  <span className="text-5xl font-bold gradient-text">{plan.price}</span>
                  <span className="text-muted-foreground ml-2">/{plan.period}</span>
                </div>
              </div>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                variant={plan.popular ? "hero" : "hero-outline"} 
                size="lg" 
                className="w-full group"
                onClick={() => handlePlanSelect(plan.name)}
              >
                {plan.cta}
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </Button>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            All plans include a 14-day free trial. No credit card required.
          </p>
        </div>
      </div>
    </section>
  );
};

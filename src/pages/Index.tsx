import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { FeatureHighlights } from "@/components/FeatureHighlights";
import { AIActionsSection } from "@/components/AIActionsSection";
import { TrustedBySection } from "@/components/TrustedBySection";
import { IntegrationsSection } from "@/components/IntegrationsSection";
import { PricingSection } from "@/components/PricingSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        <HeroSection />
        <FeatureHighlights />
        <AIActionsSection />
        <TrustedBySection />
        <IntegrationsSection />
        <PricingSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

import InteractiveHero from "@/components/InteractiveHero";
import Navigation from "@/components/Navigation";
import WhatsIncludedSection from "@/components/WhatsIncludedSection";
import WhoIsItForSection from "@/components/WhoIsItForSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import AboutMentorSection from "@/components/AboutMentorSection";
import OtherOptionsSection from "@/components/OtherOptionsSection";
import PricingSection from "@/components/PricingSection";
import CombinedMentorshipVideoSection from "@/components/CombinedMentorshipVideoSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-purple-50">
      <Navigation />
      <InteractiveHero />
      <CombinedMentorshipVideoSection />
      <WhatsIncludedSection />
      <WhoIsItForSection />
      <HowItWorksSection />
      <AboutMentorSection />

      <OtherOptionsSection />
      <PricingSection />
    </div>
  );
}

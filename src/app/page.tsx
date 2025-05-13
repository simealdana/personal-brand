import InteractiveHero from "@/components/InteractiveHero";
import Navigation from "@/components/Navigation";
import TestimonialsSection from "@/components/TestimonialsSection";
import VideoSection from "@/components/VideoSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-purple-50">
      <Navigation />
      <InteractiveHero />
      <div id="demo">
        <VideoSection />
      </div>
      <TestimonialsSection />
    </div>
  );
}

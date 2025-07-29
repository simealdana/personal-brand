import Hero from "@/components/LandingPage/Hero";
import TimelineSection from "@/components/LandingPage/TimelineSection";
import VideoSection from "@/components/LandingPage/VideoSection";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <div className="max-w-7xl lg:max-w-[1920px] mx-auto">
        <Hero />
        <TimelineSection />
        <VideoSection />
      </div>
    </div>
  );
}

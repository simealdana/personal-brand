import Hero from "@/components/LandingPage/Hero";
import TimelineSection from "@/components/LandingPage/TimelineSection";
import VideoSection from "@/components/LandingPage/VideoSection";
import TestimonySection from "@/components/LandingPage/TestimonySection";
import ExperienceSection from "@/components/LandingPage/ExperienceSection";
import MentorshipSection from "@/components/LandingPage/MentorshipSection";
import FAQSection from "@/components/LandingPage/FAQSection";
import ContentSection from "@/components/LandingPage/ContentSection";
import ModalWrapper from "@/components/ModalWrapper";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <div className="max-w-7xl lg:max-w-[1920px] mx-auto">
        <Hero />
        <TimelineSection />
        <VideoSection />
        <TestimonySection />
        <ExperienceSection />
        <MentorshipSection />
        <ContentSection />
        <FAQSection />
        <ModalWrapper />
      </div>
    </div>
  );
}

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsBar from "@/components/StatsBar";
import ReelsSection from "@/components/ReelsSection";
import ServicesSection from "@/components/ServicesSection";
import ProcessTimeline from "@/components/ProcessTimeline";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <StatsBar />
      <ReelsSection />
      <ServicesSection />
      <ProcessTimeline />
      <ContactSection />
    </main>
  );
}

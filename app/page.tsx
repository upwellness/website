/* UP Wellness landing · sections in design's exact order */
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Pillars } from "@/components/Pillars";
import { Services } from "@/components/Services";
import { Community } from "@/components/Community";
import { Assessment } from "@/components/Assessment";
import { Transformations } from "@/components/Transformations";
import { Supplements } from "@/components/Supplements";
import { Resources } from "@/components/Resources";
import { Testimonials } from "@/components/Testimonials";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-warm-white">
      <Header />
      <Hero />
      <Pillars />
      <Services />
      <Community />
      <Assessment />
      <Transformations />
      <Supplements />
      <Resources />
      <Testimonials />
      <FinalCTA />
      <Footer />
    </main>
  );
}

import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Pillars } from "@/components/Pillars";
import { Community } from "@/components/Community";
import { Services } from "@/components/Services";
import { Assessment } from "@/components/Assessment";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Pillars />
        <Community />
        <Services />
        <Assessment />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

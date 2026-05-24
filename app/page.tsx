import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ProofBar } from "@/components/ProofBar";
import { Manifesto } from "@/components/Manifesto";
import { Pillars } from "@/components/Pillars";
import { Process } from "@/components/Process";
import { Community } from "@/components/Community";
import { Services } from "@/components/Services";
import { Coaches } from "@/components/Coaches";
import { Assessment } from "@/components/Assessment";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <ProofBar />
        <Manifesto />
        <Pillars />
        <Process />
        <Community />
        <Services />
        <Coaches />
        <Assessment />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

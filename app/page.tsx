import { CTA } from "@/components/landing/CTA";
import { Features } from "@/components/landing/Features";
import { Footer } from "@/components/landing/Footer";
import { GradientBackground } from "@/components/landing/GradientBackground";
import { Hero } from "@/components/landing/Hero";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { Navbar } from "@/components/landing/Navbar";
import { SupportedChains } from "@/components/landing/SupportedChains";

export default function Home() {
  return (
    <>
      <GradientBackground />
      <Navbar />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <SupportedChains />
        <CTA />
      </main>
      <Footer />
    </>
  );
}

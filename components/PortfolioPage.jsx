"use client";

import { useEffect, useState } from "react";
import ContactCTA from "@/components/ContactCTA";
import DeviceShowcase from "@/components/DeviceShowcase";
import ExperienceGate from "@/components/ExperienceGate";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import SocialProof from "@/components/SocialProof";
import Services from "@/components/Services";
import SplashScreen from "@/components/SplashScreen";
import WhyJiti from "@/components/WhyJiti";

export default function PortfolioPage() {
  const [showSplash, setShowSplash] = useState(true);
  const [showExperienceGate, setShowExperienceGate] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setShowSplash(false);
      setShowExperienceGate(true);
    }, 1800);

    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    const shouldLock = showSplash || showExperienceGate;
    document.body.style.overflow = shouldLock ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [showSplash, showExperienceGate]);

  const handleSelectStart = (sectionId) => {
    setShowExperienceGate(false);

    window.setTimeout(() => {
      const target = document.getElementById(sectionId);
      if (target) {
        const top = target.getBoundingClientRect().top + window.scrollY - 8;
        window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
      }
    }, 430);
  };

  return (
    <div className="relative min-h-screen text-[var(--ink)]">
      <SplashScreen visible={showSplash} />
      <ExperienceGate
        key={showExperienceGate ? "journey-open" : "journey-closed"}
        visible={showExperienceGate}
        onSelect={handleSelectStart}
        onSkip={() => setShowExperienceGate(false)}
      />
      <Navbar />
      <main id="main-content" className="pt-4">
        <Hero />
        <DeviceShowcase />
        <Services />
        <WhyJiti />
        <SocialProof />
        <ContactCTA />
      </main>
      <FloatingContact visible={!showSplash && !showExperienceGate} />
      <Footer />
    </div>
  );
}

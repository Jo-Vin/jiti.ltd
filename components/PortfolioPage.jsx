"use client";

import { useEffect, useState } from "react";
import ContactCTA from "@/components/ContactCTA";
import DeviceShowcase from "@/components/DeviceShowcase";
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
  const [showcaseHintKey, setShowcaseHintKey] = useState(0);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setShowSplash(false);
    }, 1800);

    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.body.style.overflow = showSplash ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [showSplash]);

  const scrollToShowcase = () => {
    const target = document.getElementById("work");
    if (!target) {
      return;
    }

    const top = target.getBoundingClientRect().top + window.scrollY - 8;
    window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
    setShowcaseHintKey((current) => current + 1);
  };

  return (
    <div className="relative min-h-screen text-[var(--ink)]">
      <SplashScreen visible={showSplash} />
      <Navbar />
      <main id="main-content" className="pt-4">
        <Hero onViewPortfolio={scrollToShowcase} countdownActive={false} />
        <DeviceShowcase onboardingHintKey={showcaseHintKey} />
        <Services />
        <WhyJiti />
        <SocialProof />
        <ContactCTA />
      </main>
      <FloatingContact visible={!showSplash} />
      <Footer />
    </div>
  );
}

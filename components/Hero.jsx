"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, MousePointer2, Star } from "lucide-react";
import { contact, socialProof } from "@/data/siteData";

const PORTFOLIO_COUNTDOWN_SECONDS = 30;

export default function Hero({ onViewPortfolio, countdownActive = false }) {
  const stars = Array.from({ length: socialProof.rating });
  const [portfolioCountdown, setPortfolioCountdown] = useState(
    PORTFOLIO_COUNTDOWN_SECONDS,
  );
  const hasTriggeredPortfolioRef = useRef(false);

  const startPortfolioJourney = useCallback(() => {
    if (hasTriggeredPortfolioRef.current) {
      return;
    }

    hasTriggeredPortfolioRef.current = true;
    onViewPortfolio?.();
  }, [onViewPortfolio]);

  useEffect(() => {
    if (!countdownActive || hasTriggeredPortfolioRef.current) {
      return undefined;
    }

    if (portfolioCountdown === 0) {
      const autoTimer = window.setTimeout(() => {
        startPortfolioJourney();
      }, 140);

      return () => window.clearTimeout(autoTimer);
    }

    const tickTimer = window.setTimeout(() => {
      setPortfolioCountdown((current) => Math.max(current - 1, 0));
    }, 1000);

    return () => window.clearTimeout(tickTimer);
  }, [countdownActive, portfolioCountdown, startPortfolioJourney]);

  return (
    <section className="relative overflow-x-clip px-4 pb-18 pt-12 sm:px-6 lg:px-10">
      <motion.div
        className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[30rem] w-[30rem] -translate-x-1/2 rounded-full bg-gradient-to-r from-cyan-300/35 via-amber-300/35 to-pink-300/30 blur-3xl sm:h-[42rem] sm:w-[42rem]"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      />

      <div className="mx-auto w-full max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 2.0 }}
        >
          <div className="mb-6 flex flex-wrap items-center gap-2.5 sm:gap-3">
            <p className="inline-flex h-9 items-center gap-2.5 rounded-full border border-zinc-900/10 bg-white/88 px-3.5 pr-4 text-[0.63rem] font-semibold uppercase tracking-[0.14em] text-zinc-700 shadow-[0_6px_18px_rgba(52,38,16,0.1)] backdrop-blur">
              <span className="flex items-center gap-0.5 text-amber-500">
                {stars.map((_, index) => (
                  <Star key={`hero-star-${index}`} className="h-3 w-3 fill-current" />
                ))}
              </span>
              <span className="whitespace-nowrap">
                {socialProof.rating}.0 rating
                <span className="mx-1.5 text-zinc-400" aria-hidden="true">
                  |
                </span>
                {socialProof.totalReviews}+ reviews
              </span>
            </p>

            <p className="inline-flex min-h-9 items-center gap-2 rounded-full border border-zinc-900/10 bg-white/80 px-4 py-1.5 text-[0.6rem] font-semibold uppercase tracking-[0.12em] text-zinc-700 shadow-[0_6px_18px_rgba(52,38,16,0.08)] backdrop-blur sm:text-[0.66rem] sm:tracking-[0.18em]">
              <MousePointer2 className="h-3.5 w-3.5 shrink-0" />
              <span>Product design + software + automation</span>
            </p>
          </div>

          <h1 className="max-w-4xl text-5xl leading-[0.9] font-bold text-zinc-950 sm:text-6xl lg:text-8xl">
            We build digital products that feel launch-ready from day one.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--muted)] sm:text-lg">
            Jiti Ltd is a premium studio for web and app builds, marketplace and
            e-commerce systems, branding, and business automation. We merge product
            thinking with engineering clarity to help ambitious teams move faster.
          </p>

          <div className="mt-8 max-w-xl space-y-3">
                        <div className="relative inline-flex w-full sm:w-auto">
              <span
                className="pointer-events-none absolute inset-x-6 -inset-y-4 -z-10 rounded-full bg-[radial-gradient(circle,_rgba(24,24,27,0.34)_0%,_rgba(24,24,27,0.16)_45%,_rgba(24,24,27,0)_78%)] blur-xl"
                aria-hidden="true"
              />
              <button
                type="button"
                onClick={startPortfolioJourney}
                className="group inline-flex w-full items-center justify-center rounded-full border border-zinc-900 bg-zinc-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-zinc-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-500/70 sm:w-auto"
              >
                {countdownActive
                  ? `View Portfolio (${portfolioCountdown})`
                  : "View Portfolio"}
                <ArrowDown className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-0.5" />
              </button>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href={contact.instagramLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-zinc-900/15 bg-white px-6 py-3 text-sm font-semibold text-zinc-900 transition hover:bg-zinc-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400/70"
              >
                DM on Instagram
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </a>
              <a
                href={contact.emailLink}
                className="inline-flex items-center justify-center rounded-full border border-zinc-900/15 bg-white/80 px-6 py-3 text-sm font-semibold text-zinc-900 transition hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400/70"
              >
                Email us
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

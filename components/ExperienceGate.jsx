"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Code2, Sparkles } from "lucide-react";

const AUTO_START_SECONDS = 8;

export default function ExperienceGate({ visible, onSelect, onSkip }) {
  const [countdown, setCountdown] = useState(AUTO_START_SECONDS);

  useEffect(() => {
    if (!visible) {
      return undefined;
    }

    const timer = window.setInterval(() => {
      setCountdown((current) => {
        const next = Math.max(current - 1, 0);
        if (next === 0) {
          window.clearInterval(timer);
          window.setTimeout(() => onSelect("work"), 80);
        }
        return next;
      });
    }, 1000);

    return () => window.clearInterval(timer);
  }, [visible, onSelect]);

  const progressPercent =
    ((AUTO_START_SECONDS - countdown) / AUTO_START_SECONDS) * 100;

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          className="fixed inset-0 z-[65] overflow-y-auto bg-[#f3ebde]/85 p-3 backdrop-blur-md sm:p-7"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="mx-auto my-3 w-full max-w-4xl rounded-[1.7rem] border border-[#dccfbe] bg-[#fffaf3]/96 p-4 text-zinc-900 shadow-[0_30px_70px_rgba(80,56,16,0.16)] sm:my-0 sm:rounded-[2rem] sm:p-8"
            initial={{ y: 20, opacity: 0, scale: 0.98 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 10, opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-700/70">
              Guided journey
            </p>
            <h2 className="mt-2 text-[1.95rem] font-bold leading-[1.08] sm:mt-3 sm:text-5xl">
              Let&apos;s show you what work we&apos;ve done.
            </h2>
            <p className="mt-3 max-w-2xl text-[0.96rem] leading-7 text-zinc-700 sm:mt-4 sm:text-base">
              Start with the five-project showcase, then continue to services at the
              finish line. Or skip and browse the full page normally.
            </p>

            <div className="mt-5 grid gap-3 sm:mt-7 sm:grid-cols-2">
              <button
                type="button"
                onClick={() => onSelect("work")}
                className="group rounded-[1.25rem] border border-[#cfe3dd] bg-white p-4 text-left transition hover:bg-cyan-50/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/70 sm:rounded-[1.4rem] sm:p-5"
              >
                <span className="mb-4 inline-flex rounded-xl bg-cyan-100 p-2.5 text-zinc-900">
                  <Sparkles className="h-[1.125rem] w-[1.125rem] sm:h-5 sm:w-5" />
                </span>
                <p className="text-[1.6rem] leading-tight font-semibold sm:text-xl">
                  Start the work journey
                </p>
                <p className="mt-2 text-[0.96rem] leading-6 text-zinc-700 sm:text-sm sm:leading-7">
                  Scroll through all five projects. At the finish line, jump to what
                  we can do next.
                </p>
                <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-zinc-900/10">
                  <motion.div
                    className="h-full rounded-full bg-zinc-900"
                    animate={{ width: `${progressPercent}%` }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                  />
                </div>
                <p className="mt-3 inline-flex items-center text-sm font-semibold text-zinc-900 sm:mt-4">
                  Go to portfolio ({countdown})
                  <ArrowUpRight className="ml-1.5 h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </p>
              </button>

              <button
                type="button"
                onClick={() => onSelect("services")}
                className="group rounded-[1.25rem] border border-[#e1d5c7] bg-white p-4 text-left transition hover:bg-amber-50/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400/70 sm:rounded-[1.4rem] sm:p-5"
              >
                <span className="mb-4 inline-flex rounded-xl bg-amber-100 p-2.5 text-zinc-900">
                  <Code2 className="h-[1.125rem] w-[1.125rem] sm:h-5 sm:w-5" />
                </span>
                <p className="text-[1.6rem] leading-tight font-semibold sm:text-xl">
                  Jump to services
                </p>
                <p className="mt-2 text-[0.96rem] leading-6 text-zinc-700 sm:text-sm sm:leading-7">
                  Skip straight to product design, software development, automation,
                  and delivery support.
                </p>
                <p className="mt-3 inline-flex items-center text-sm font-semibold text-zinc-900 sm:mt-4">
                  Go to services
                  <ArrowUpRight className="ml-1.5 h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </p>
              </button>
            </div>

            <div className="mt-5 sm:mt-6">
              <button
                type="button"
                onClick={onSkip}
                className="text-sm font-semibold text-zinc-700 underline decoration-zinc-500/50 underline-offset-4 transition hover:text-zinc-950"
              >
                Explore the full page
              </button>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

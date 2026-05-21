"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Code2, Sparkles } from "lucide-react";

export default function ExperienceGate({ visible, onSelect, onSkip }) {
  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          className="fixed inset-0 z-[65] flex items-center justify-center bg-[#f3ebde]/85 p-4 backdrop-blur-md sm:p-7"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="w-full max-w-4xl rounded-[2rem] border border-[#dccfbe] bg-[#fffaf3]/96 p-5 text-zinc-900 shadow-[0_30px_70px_rgba(80,56,16,0.16)] sm:p-8"
            initial={{ y: 20, opacity: 0, scale: 0.98 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 10, opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-700/70">
              Choose your path
            </p>
            <h2 className="mt-3 text-3xl font-bold leading-tight sm:text-5xl">
              What do you want to see first?
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-zinc-700 sm:text-base">
              Pick the lens that matches your intent. You can switch at any time
              from the sticky navigation.
            </p>

            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              <button
                type="button"
                onClick={() => onSelect("services")}
                className="group rounded-[1.4rem] border border-[#e1d5c7] bg-white p-5 text-left transition hover:bg-amber-50/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400/70"
              >
                <span className="mb-4 inline-flex rounded-xl bg-amber-100 p-2.5 text-zinc-900">
                  <Code2 className="h-5 w-5" />
                </span>
                <p className="text-xl font-semibold">What do we offer</p>
                <p className="mt-2 text-sm leading-7 text-zinc-700">
                  Product design, software development, automation, and the full
                  delivery stack.
                </p>
                <p className="mt-4 inline-flex items-center text-sm font-semibold text-zinc-900">
                  Go to services
                  <ArrowUpRight className="ml-1.5 h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </p>
              </button>

              <button
                type="button"
                onClick={() => onSelect("work")}
                className="group rounded-[1.4rem] border border-[#e1d5c7] bg-white p-5 text-left transition hover:bg-cyan-50/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/70"
              >
                <span className="mb-4 inline-flex rounded-xl bg-cyan-100 p-2.5 text-zinc-900">
                  <Sparkles className="h-5 w-5" />
                </span>
                <p className="text-xl font-semibold">What work have we done</p>
                <p className="mt-2 text-sm leading-7 text-zinc-700">
                  Scroll the full-screen portfolio wall and see each product in
                  context while you browse.
                </p>
                <p className="mt-4 inline-flex items-center text-sm font-semibold text-zinc-900">
                  Go to portfolio
                  <ArrowUpRight className="ml-1.5 h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </p>
              </button>
            </div>

            <div className="mt-6">
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

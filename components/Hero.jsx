"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, MousePointer2 } from "lucide-react";
import { contact, projects } from "@/data/siteData";

export default function Hero() {
  return (
    <section className="relative px-4 pb-18 pt-12 sm:px-6 lg:px-10">
      <motion.div
        className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[42rem] w-[42rem] -translate-x-1/2 rounded-full bg-gradient-to-r from-cyan-300/35 via-amber-300/35 to-pink-300/30 blur-3xl"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      />

      <div className="mx-auto grid w-full max-w-7xl gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 2.0 }}
        >
          <p className="mb-5 inline-flex items-center rounded-full border border-zinc-900/10 bg-white/72 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-700 shadow-sm backdrop-blur">
            <MousePointer2 className="mr-2 h-3.5 w-3.5" />
            Product design + software + automation
          </p>
          <h1 className="max-w-4xl text-5xl leading-[0.9] font-bold text-zinc-950 sm:text-6xl lg:text-8xl">
            We build digital products that feel launch-ready from day one.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--muted)] sm:text-lg">
            Jiti Ltd is a premium studio for web and app builds, marketplace and
            e-commerce systems, branding, and business automation. We merge product
            thinking with engineering clarity to help ambitious teams move faster.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={contact.instagramLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-zinc-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-zinc-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400/70"
            >
              DM on Instagram
              <ArrowUpRight className="ml-2 h-4 w-4" />
            </a>
            <a
              href={contact.emailLink}
              className="inline-flex items-center justify-center rounded-full border border-zinc-900/15 bg-white/80 px-6 py-3 text-sm font-semibold text-zinc-900 transition hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400/70"
            >
              {contact.email}
            </a>
          </div>
        </motion.div>

        <motion.aside
          className="rounded-[2rem] border border-[#ddd2c2] bg-white/80 p-5 shadow-[0_20px_60px_rgba(92,65,22,0.14)] backdrop-blur-xl sm:p-7"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: "easeOut", delay: 2.15 }}
          aria-label="Selected project snapshot"
        >
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-zinc-600">
              Selected work
            </h2>
            <span className="rounded-full bg-zinc-900 px-3 py-1 text-xs font-semibold text-white">
              {projects.length} projects
            </span>
          </div>

          <div className="mt-5 space-y-3">
            {projects.slice(0, 3).map((project) => (
              <article
                key={project.slug}
                className="rounded-2xl border border-zinc-900/10 bg-[#fff9f2] px-4 py-3"
              >
                <p className="text-sm font-semibold text-zinc-950">{project.name}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.16em] text-zinc-600">
                  {project.category}
                </p>
                <p className="mt-2 text-sm text-zinc-700">{project.tagline}</p>
              </article>
            ))}
          </div>
        </motion.aside>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Mail, MessageCircle } from "lucide-react";
import { contact } from "@/data/siteData";

export default function ContactCTA() {
  return (
    <section id="contact" className="px-4 pb-26 pt-10 sm:px-6 lg:px-10">
      <motion.div
        className="mx-auto max-w-6xl overflow-hidden rounded-[2.2rem] border border-[#dbcdbf] bg-gradient-to-br from-amber-100 via-orange-50 to-cyan-100 p-7 text-zinc-900 shadow-[0_26px_60px_rgba(84,58,20,0.16)] sm:p-10 lg:p-14"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-700/70">
          Start your next build
        </p>
        <h2 className="mt-3 max-w-4xl text-4xl font-bold leading-[0.95] sm:text-5xl lg:text-6xl">
          Need product design, software delivery, or automation that scales?
        </h2>
        <p className="mt-5 max-w-2xl text-sm leading-7 text-zinc-800/75 sm:text-base">
          Reach out directly and we will map the right next step quickly. Clean
          scope, clear timeline, and execution quality you can present with
          confidence.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href={contact.instagramLink}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-zinc-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-zinc-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-700"
          >
            <MessageCircle className="mr-2 h-4 w-4" />
            DM us on Instagram
            <ArrowUpRight className="ml-2 h-4 w-4" />
          </a>
          <a
            href={contact.emailLink}
            className="inline-flex items-center justify-center rounded-full border border-zinc-900/20 bg-white/70 px-6 py-3 text-sm font-semibold text-zinc-900 transition hover:bg-white"
          >
            <Mail className="mr-2 h-4 w-4" />
            {contact.email}
          </a>
        </div>
      </motion.div>
    </section>
  );
}

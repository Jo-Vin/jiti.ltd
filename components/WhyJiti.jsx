"use client";

import { motion } from "framer-motion";
import { whyJiti } from "@/data/siteData";

export default function WhyJiti() {
  return (
    <section id="why-jiti" className="px-4 py-22 sm:px-6 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-9 rounded-[2.2rem] border border-[#dbcfbf] bg-gradient-to-br from-white via-[#fff9f2] to-[#f6ede0] p-6 shadow-[0_18px_45px_rgba(90,63,20,0.12)] backdrop-blur-xl lg:grid-cols-[0.82fr_1.18fr] lg:p-10">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-700/75">
            Why Jiti Ltd
          </p>
          <h2 className="mt-3 text-4xl font-bold text-zinc-950 sm:text-5xl">
            A small studio,
            <br />
            enterprise-grade output.
          </h2>
          <p className="mt-4 max-w-md text-sm leading-7 text-zinc-700 sm:text-base">
            We combine strategy, craft, and technical execution so clients get one
            clear team from idea to launch.
          </p>
        </div>

        <div className="space-y-3">
          {whyJiti.map((item, index) => (
            <motion.article
              key={item.title}
              className="rounded-2xl border border-zinc-900/10 bg-white/70 p-5"
              initial={{ opacity: 0, x: 18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.42, delay: index * 0.06 }}
            >
              <h3 className="text-xl font-bold text-zinc-950">{item.title}</h3>
              <p className="mt-2 text-sm leading-7 text-zinc-700 sm:text-base">
                {item.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

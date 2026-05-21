"use client";

import { motion } from "framer-motion";
import { Code2, Palette, ShoppingBag, Sparkles, Workflow } from "lucide-react";
import { services } from "@/data/siteData";

const iconMap = {
  Code2,
  Palette,
  ShoppingBag,
  Sparkles,
  Workflow,
};

export default function Services() {
  return (
    <section id="services" className="px-4 py-22 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <h2 className="max-w-4xl text-4xl font-bold text-zinc-950 sm:text-5xl lg:text-6xl">
          Services that turn ambitious ideas into shipped products.
        </h2>

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon];
            return (
              <motion.article
                key={service.title}
                className="rounded-[1.8rem] border border-[#dfd4c7] bg-white/85 p-5 shadow-[0_14px_35px_rgba(84,58,20,0.12)] backdrop-blur"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
              >
                <div className="mb-4 inline-flex rounded-2xl bg-amber-100 p-3 text-zinc-900">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-2xl font-bold text-zinc-950">{service.title}</h3>
                <p className="mt-3 text-sm leading-7 text-zinc-700 sm:text-base">
                  {service.description}
                </p>
                <ul className="mt-5 space-y-2 text-sm text-zinc-700">
                  {service.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-cyan-500" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

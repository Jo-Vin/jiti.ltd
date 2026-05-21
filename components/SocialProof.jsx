"use client";

import { motion } from "framer-motion";
import { ExternalLink, Quote, ShieldCheck, Star } from "lucide-react";
import { socialProof, testimonials } from "@/data/siteData";

const cardThemes = [
  "from-[#fff9ee] to-[#fff4e0]",
  "from-[#f5fbff] to-[#eaf8ff]",
  "from-[#fff7f5] to-[#ffefe8]",
];

export default function SocialProof() {
  const starList = Array.from({ length: socialProof.rating });

  return (
    <section id="proof" className="px-4 py-20 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <motion.div
          className="overflow-hidden rounded-[2.2rem] border border-[#dccfbe] bg-gradient-to-br from-[#fffdfa] via-white to-[#f8f1e4] p-6 shadow-[0_20px_56px_rgba(88,62,22,0.14)] sm:p-8 lg:p-10"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
        >
          <div className="grid gap-6 lg:grid-cols-[1.02fr_0.98fr] lg:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-700/70">
                Social proof
              </p>
              <h2 className="mt-3 max-w-3xl text-4xl font-bold leading-[0.96] text-zinc-950 sm:text-5xl">
                Trusted by clients under our former brand,
                <br />
                now delivered by Jiti Ltd.
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-zinc-700 sm:text-base">
                {socialProof.headline}
              </p>
              <a
                href={socialProof.sourceUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center rounded-full border border-zinc-900/14 bg-white/88 px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-zinc-800 transition hover:bg-white"
              >
                Source: {socialProof.sourceLabel}
                <ExternalLink className="ml-2 h-3.5 w-3.5" />
              </a>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-zinc-900/10 bg-white/90 p-4">
                <p className="text-[0.63rem] font-semibold uppercase tracking-[0.16em] text-zinc-600">
                  Average rating
                </p>
                <div className="mt-2 flex items-center gap-2">
                  <p className="text-3xl font-bold text-zinc-950">
                    {socialProof.rating}.0
                  </p>
                  <div className="flex items-center gap-0.5 text-amber-500">
                    {starList.map((_, index) => (
                      <Star key={`proof-star-${index}`} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-zinc-900/10 bg-white/90 p-4">
                <p className="text-[0.63rem] font-semibold uppercase tracking-[0.16em] text-zinc-600">
                  Client reviews
                </p>
                <p className="mt-2 text-3xl font-bold text-zinc-950">
                  {socialProof.totalReviews}+
                </p>
                <p className="mt-1 text-xs text-zinc-600">
                  Published under the {socialProof.legacyBrand} brand
                </p>
              </div>

              <div className="rounded-2xl border border-[#d7cab8] bg-[#fff8ec] p-4 sm:col-span-2">
                <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-zinc-800">
                  <ShieldCheck className="h-4 w-4 text-emerald-600" />
                  Verified social proof
                </p>
                <p className="mt-2 text-sm leading-6 text-zinc-700">
                  Quotes shown below are sourced from the former company site and
                  mapped to the same delivery team now operating as Jiti Ltd.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
            {testimonials.map((item, index) => (
              <motion.article
                key={`${item.author}-${item.company}`}
                className={`rounded-2xl border border-zinc-900/10 bg-gradient-to-br p-4 ${cardThemes[index % cardThemes.length]}`}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.36, delay: index * 0.04 }}
              >
                <div className="mb-2 flex items-center justify-between">
                  <Quote className="h-4 w-4 text-zinc-500" />
                  <div className="flex items-center gap-0.5 text-amber-500">
                    {starList.map((_, starIndex) => (
                      <Star
                        key={`card-star-${item.author}-${starIndex}`}
                        className="h-3.5 w-3.5 fill-current"
                      />
                    ))}
                  </div>
                </div>
                <p className="text-sm leading-6 font-medium text-zinc-900">
                  &quot;{item.quote}&quot;
                </p>
                <div className="mt-3 border-t border-zinc-900/10 pt-3">
                  <p className="text-sm font-semibold text-zinc-900">{item.author}</p>
                  <p className="text-xs font-medium uppercase tracking-[0.12em] text-zinc-600">
                    {item.company}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}


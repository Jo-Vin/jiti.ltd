"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp, Quote, Star } from "lucide-react";
import { socialProof, testimonials } from "@/data/siteData";

const cardThemes = [
  "from-[#fff9ee] to-[#fff4e0]",
  "from-[#f5fbff] to-[#eaf8ff]",
  "from-[#fff7f5] to-[#ffefe8]",
];

export default function SocialProof() {
  const [showFullFeatured, setShowFullFeatured] = useState(false);
  const starList = Array.from({ length: socialProof.rating });
  const featuredReview =
    testimonials.find((item) => item.company === "Shrink My House") ||
    testimonials[0];
  const otherReviews = testimonials.filter((item) => item !== featuredReview);
  const featuredQuotePreview =
    featuredReview.shortQuote ||
    `${featuredReview.quote.slice(0, 120).trim()}...`;

  return (
    <section id="reviews" className="px-4 py-20 sm:px-6 lg:px-10">
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
                Reviews
              </p>
              <h2 className="mt-3 max-w-3xl text-4xl font-bold leading-[0.96] text-zinc-950 sm:text-5xl">
                Real client feedback
                <br />
                from shipped work.
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-zinc-700 sm:text-base">
                {socialProof.headline}
              </p>
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
                  Trusted by founders and teams
                </p>
              </div>

              <div className="rounded-2xl border border-[#d7cab8] bg-[#fff8ec] p-4 sm:col-span-2">
                <p className="text-sm leading-6 text-zinc-700">
                  A snapshot of client outcomes across product, design, and platform work.
                </p>
              </div>
            </div>
          </div>

          <motion.article
            className="mt-8 rounded-2xl border border-zinc-900/10 bg-gradient-to-br from-[#fff5e9] via-[#ffefdd] to-[#ffe6cf] p-5"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.38 }}
          >
            <div className="mb-3 flex items-center justify-between gap-2">
              <p className="text-[0.66rem] font-semibold uppercase tracking-[0.14em] text-zinc-700">
                Featured review
              </p>
              <div className="flex items-center gap-0.5 text-amber-500">
                {starList.map((_, index) => (
                  <Star key={`featured-star-${index}`} className="h-4 w-4 fill-current" />
                ))}
              </div>
            </div>

            <p className="text-base leading-7 font-semibold text-zinc-900 sm:text-lg">
              &quot;
              {showFullFeatured ? featuredReview.quote : featuredQuotePreview}
              &quot;
            </p>

            <div className="mt-3 flex flex-wrap items-center justify-between gap-3 border-t border-zinc-900/10 pt-3">
              <div>
                <p className="text-sm font-semibold text-zinc-900">{featuredReview.author}</p>
                <p className="text-xs font-medium uppercase tracking-[0.12em] text-zinc-600">
                  {featuredReview.company}
                </p>
              </div>

              {featuredReview.quote.length > featuredQuotePreview.length ? (
                <button
                  type="button"
                  onClick={() => setShowFullFeatured((current) => !current)}
                  className="inline-flex items-center rounded-full border border-zinc-900/14 bg-white/80 px-3 py-1.5 text-[0.66rem] font-semibold uppercase tracking-[0.12em] text-zinc-800"
                >
                  {showFullFeatured ? "Show less" : "Read full review"}
                  {showFullFeatured ? (
                    <ChevronUp className="ml-1.5 h-3.5 w-3.5" />
                  ) : (
                    <ChevronDown className="ml-1.5 h-3.5 w-3.5" />
                  )}
                </button>
              ) : null}
            </div>
          </motion.article>

          <div className="mt-8 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
            {otherReviews.map((item, index) => (
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

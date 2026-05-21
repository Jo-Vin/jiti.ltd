"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Star } from "lucide-react";
import Image from "next/image";
import { socialProof, testimonials } from "@/data/siteData";

export default function SplashScreen({ visible }) {
  const [reviewIndex, setReviewIndex] = useState(0);
  const stars = Array.from({ length: socialProof.rating });

  useEffect(() => {
    if (!visible || testimonials.length < 2) {
      return undefined;
    }

    const timer = window.setInterval(() => {
      setReviewIndex((current) => (current + 1) % testimonials.length);
    }, 1550);

    return () => window.clearInterval(timer);
  }, [visible]);

  const activeReview = testimonials[reviewIndex];

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          className="fixed inset-0 z-[70] flex items-center justify-center overflow-hidden bg-[#f8f3ea] px-4"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.7, ease: "easeInOut" } }}
        >
          <motion.div
            className="absolute h-[34rem] w-[34rem] rounded-full bg-cyan-300/32 blur-3xl sm:h-[46rem] sm:w-[46rem]"
            animate={{ scale: [0.86, 1.08, 0.9], rotate: [0, 200, 360] }}
            transition={{ duration: 2.1, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute h-[28rem] w-[28rem] rounded-full bg-amber-300/25 blur-3xl sm:h-[38rem] sm:w-[38rem]"
            animate={{ scale: [1, 0.9, 1.06], rotate: [180, 12, 340] }}
            transition={{ duration: 2.1, ease: "easeInOut" }}
          />

          <motion.div
            className="relative rounded-[2rem] border border-[#dbcdbd] bg-white/66 px-8 py-9 text-center shadow-[0_24px_70px_rgba(42,31,11,0.16)] backdrop-blur-xl sm:rounded-[2.4rem] sm:px-12 sm:py-11"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
          >
            <Image
              src="/logos/Jiti_Logo_Black.png"
              alt="Jiti Ltd wordmark"
              width={172}
              height={58}
              className="mx-auto h-9 w-auto sm:h-11"
              priority
            />
            <p className="mt-4 text-[0.66rem] font-semibold uppercase tracking-[0.24em] text-zinc-700/75 sm:mt-5 sm:text-xs sm:tracking-[0.34em]">
              Design + software studio
            </p>

            <div className="mt-4 flex items-center justify-center gap-0.5 text-amber-500">
              {stars.map((_, index) => (
                <Star key={`splash-star-${index}`} className="h-4 w-4 fill-current" />
              ))}
            </div>
            <p className="mt-1 text-[0.6rem] font-semibold uppercase tracking-[0.14em] text-zinc-700/75 sm:text-[0.66rem]">
              {socialProof.rating}.0 rating | {socialProof.totalReviews}+ client reviews
            </p>
            <div className="mt-1.5 h-4 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.p
                  key={`${activeReview.author}-${activeReview.company}`}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.28, ease: "easeOut" }}
                  className="text-[0.53rem] font-semibold uppercase tracking-[0.1em] text-zinc-600/80 sm:text-[0.58rem]"
                >
                  {activeReview.author} | {activeReview.company}
                </motion.p>
              </AnimatePresence>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}


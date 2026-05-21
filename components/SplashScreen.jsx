"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

export default function SplashScreen({ visible }) {
  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          className="fixed inset-0 z-[70] flex items-center justify-center overflow-hidden bg-[#f8f3ea]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.7, ease: "easeInOut" } }}
        >
          <motion.div
            className="absolute h-[46rem] w-[46rem] rounded-full bg-cyan-300/32 blur-3xl"
            animate={{ scale: [0.86, 1.08, 0.9], rotate: [0, 200, 360] }}
            transition={{ duration: 2.1, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute h-[38rem] w-[38rem] rounded-full bg-amber-300/25 blur-3xl"
            animate={{ scale: [1, 0.9, 1.06], rotate: [180, 12, 340] }}
            transition={{ duration: 2.1, ease: "easeInOut" }}
          />

          <motion.div
            className="relative text-center"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
          >
            <div className="mx-auto mb-5 flex h-20 w-28 items-center justify-center rounded-[2rem] border border-black/10 bg-white/80 px-4 shadow-[0_18px_60px_rgba(0,0,0,0.15)] backdrop-blur">
              <Image
                src="/logos/Jiti_Logo_Black.png"
                alt="Jiti Ltd"
                width={116}
                height={39}
                className="h-8 w-auto"
                priority
              />
            </div>
            <p className="text-xs font-semibold uppercase tracking-[0.34em] text-zinc-700/75">
              Design + software studio
            </p>
            <h1 className="mt-4 text-5xl font-bold lowercase text-zinc-950 sm:text-7xl md:text-8xl">
              jiti ltd
            </h1>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

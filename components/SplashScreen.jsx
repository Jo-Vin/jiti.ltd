"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

export default function SplashScreen({ visible }) {
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
            className="relative text-center"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
          >
            <div className="mx-auto mb-4 flex h-16 w-24 items-center justify-center rounded-[1.6rem] border border-black/10 bg-white/80 px-3 shadow-[0_18px_60px_rgba(0,0,0,0.15)] backdrop-blur sm:mb-5 sm:h-20 sm:w-28 sm:rounded-[2rem] sm:px-4">
              <Image
                src="/logos/Jiti_Logo_Black.png"
                alt="Jiti Ltd"
                width={116}
                height={39}
                className="h-6 w-auto sm:h-8"
                priority
              />
            </div>
            <p className="text-[0.66rem] font-semibold uppercase tracking-[0.24em] text-zinc-700/75 sm:text-xs sm:tracking-[0.34em]">
              Design + software studio
            </p>
            <h1 className="mt-3 text-4xl font-bold lowercase text-zinc-950 sm:mt-4 sm:text-7xl md:text-8xl">
              jiti ltd
            </h1>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

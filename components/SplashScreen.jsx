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
            className="relative rounded-[2rem] border border-[#dbcdbd] bg-white/66 px-7 py-7 text-center shadow-[0_24px_70px_rgba(42,31,11,0.16)] backdrop-blur-xl sm:rounded-[2.4rem] sm:px-9 sm:py-9"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
          >
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-[1.3rem] border border-black/10 bg-white/92 p-2.5 shadow-[0_16px_40px_rgba(0,0,0,0.14)] sm:mb-5 sm:h-20 sm:w-20 sm:rounded-[1.6rem] sm:p-3">
              <Image
                src="/logos/Jiti_Square_Black.png"
                alt="Jiti Ltd"
                width={88}
                height={88}
                className="h-full w-full object-contain"
                priority
              />
            </div>
            <Image
              src="/logos/Jiti_Logo_Black.png"
              alt="Jiti Ltd wordmark"
              width={172}
              height={58}
              className="mx-auto h-8 w-auto sm:h-10"
              priority
            />
            <p className="text-[0.66rem] font-semibold uppercase tracking-[0.24em] text-zinc-700/75 sm:text-xs sm:tracking-[0.34em]">
              Design + software studio
            </p>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

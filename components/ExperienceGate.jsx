"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const AUTO_START_SECONDS = 5;

export default function ExperienceGate({ visible, onSelect }) {
  const [countdown, setCountdown] = useState(AUTO_START_SECONDS);
  const hasStartedRef = useRef(false);

  const startShowcaseJourney = useCallback(() => {
    if (hasStartedRef.current) {
      return;
    }

    hasStartedRef.current = true;
    onSelect("work");
  }, [onSelect]);

  useEffect(() => {
    if (!visible) {
      return undefined;
    }

    hasStartedRef.current = false;

    const timer = window.setInterval(() => {
      setCountdown((current) => {
        const next = Math.max(current - 1, 0);
        if (next === 0) {
          window.clearInterval(timer);
          window.setTimeout(() => {
            startShowcaseJourney();
          }, 180);
        }
        return next;
      });
    }, 1000);

    return () => window.clearInterval(timer);
  }, [visible, startShowcaseJourney]);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          className="fixed inset-0 z-[65] overflow-y-auto bg-[#f3ebde]/85 p-3 backdrop-blur-md sm:p-7"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.4, ease: "easeInOut" } }}
        >
          <motion.div
            className="mx-auto my-3 w-full max-w-4xl rounded-[1.7rem] border border-[#dccfbe] bg-[#fffaf3]/96 p-4 text-zinc-900 shadow-[0_30px_70px_rgba(80,56,16,0.16)] sm:my-0 sm:rounded-[2rem] sm:p-8"
            initial={{ y: 20, opacity: 0, scale: 0.98 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{
              y: 16,
              opacity: 0,
              scale: 0.985,
              transition: { duration: 0.4, ease: "easeInOut" },
            }}
            transition={{ duration: 0.38, ease: "easeOut" }}
          >
            <h2 className="text-[2rem] font-bold leading-[1.05] text-zinc-950 sm:text-5xl">
              Welcome to Jiti
            </h2>
            <p className="mt-3 text-[0.95rem] font-medium text-zinc-700 sm:mt-4 sm:text-base">
              The showcase journey will begin in
            </p>
            <p className="mt-2 text-5xl font-bold leading-none text-zinc-950 sm:text-6xl">
              {countdown}
            </p>

            <button
              type="button"
              onClick={startShowcaseJourney}
              className="mt-6 inline-flex items-center rounded-full border border-zinc-900/14 bg-white px-5 py-2.5 text-sm font-semibold text-zinc-900 transition hover:bg-zinc-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400/70"
            >
              Start now
            </button>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

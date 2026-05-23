"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronUp, Mail, MessageCircle, X } from "lucide-react";
import { contact } from "@/data/siteData";

export default function FloatingContact({ visible = true }) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    const handleClickOutside = (event) => {
      if (!containerRef.current) {
        return;
      }

      if (!containerRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);
    window.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("keydown", handleEscape);
      window.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  if (!visible) {
    return null;
  }

  return (
    <div
      ref={containerRef}
      className="fixed bottom-[calc(0.8rem+env(safe-area-inset-bottom))] right-[calc(0.75rem+env(safe-area-inset-right))] z-[80] sm:bottom-5 sm:right-5"
    >
      <div className="relative">
        <AnimatePresence>
          {open ? (
            <motion.div
              className="absolute bottom-14 right-0 w-[min(84vw,20.5rem)] rounded-2xl border border-[#dccfbe] bg-[#fffaf4]/95 p-3 backdrop-blur-xl sm:bottom-16 sm:p-4"
              initial={{ opacity: 0, y: 10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-zinc-700/75">
                Contact Jiti Ltd
              </p>
              <div className="grid gap-2">
                <a
                  href={contact.instagramLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-xl bg-zinc-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-zinc-800"
                >
                  <MessageCircle className="mr-2 h-4 w-4" />
                  DM us on Instagram
                </a>
                <a
                  href={contact.emailLink}
                  className="inline-flex items-center justify-center rounded-xl border border-zinc-900/15 bg-white px-4 py-3 text-sm font-semibold text-zinc-900 transition hover:bg-zinc-50"
                >
                  <Mail className="mr-2 h-4 w-4" />
                  Email us
                </a>
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
        <div className="flex flex-col items-end gap-2">
          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#d7cab8] bg-white/95 text-zinc-900 shadow-[0_12px_28px_rgba(85,58,17,0.2)] backdrop-blur-xl transition hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400/70"
            aria-label="Scroll to top"
          >
            <ChevronUp className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={() => setOpen((current) => !current)}
            className="inline-flex h-11 items-center gap-2 rounded-full border border-[#d7cab8] bg-white/95 px-4 text-xs font-semibold text-zinc-900 shadow-[0_14px_35px_rgba(85,58,17,0.2)] backdrop-blur-xl transition hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400/70 sm:h-12 sm:text-sm"
            aria-expanded={open}
            aria-label="Open contact options"
          >
            {open ? <X className="h-4 w-4" /> : <MessageCircle className="h-4 w-4" />}
            <span>Contact us</span>
          </button>
        </div>
      </div>
    </div>
  );
}

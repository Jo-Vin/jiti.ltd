"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  BriefcaseBusiness,
  Mail,
  Menu,
  MessageCircle,
  Star,
  Sparkles,
  Wrench,
  X,
} from "lucide-react";
import Image from "next/image";
import { contact, navLinks } from "@/data/siteData";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    const handleClickOutside = (event) => {
      if (!menuRef.current) {
        return;
      }

      if (!menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);
    window.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("keydown", handleEscape);
      window.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <motion.header
        className="relative z-40 mx-auto mt-3 w-[calc(100%-1rem)] max-w-6xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 1.9 }}
      >
        <nav
          className="relative flex items-center justify-between rounded-full border border-[#dacdbd] bg-white/80 pl-6 pr-3 py-2 text-sm shadow-[0_14px_40px_rgba(84,58,20,0.12)] backdrop-blur-xl sm:px-5"
          aria-label="Primary"
        >
          <a href="#main-content" className="group flex items-center text-zinc-950">
            <Image
              src="/logos/Jiti_Logo_Black.png"
              alt="Jiti Ltd"
              width={148}
              height={49}
              className="h-[1.65rem] w-auto transition group-hover:opacity-90 sm:h-7"
              priority
            />
          </a>

          <ul className="hidden items-center gap-6 text-[0.82rem] text-zinc-700 md:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="transition hover:text-zinc-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-2 md:flex">
            <a
              href="#contact"
              className="inline-flex items-center rounded-full bg-zinc-900 px-3 py-2 text-xs font-semibold text-white transition hover:bg-zinc-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400/70"
              aria-label="Open contact section"
            >
              <MessageCircle className="mr-1.5 h-3.5 w-3.5" />
              Contact
            </a>
            <a
              href={contact.emailLink}
              className="hidden items-center rounded-full border border-zinc-900/15 bg-white/60 px-3 py-2 text-xs font-semibold text-zinc-800 transition hover:bg-white sm:inline-flex"
              aria-label="Email Jiti Ltd"
            >
              <Mail className="mr-1.5 h-3.5 w-3.5" />
              Email
            </a>
          </div>
        </nav>
      </motion.header>

      <div
        ref={menuRef}
        className="fixed right-[calc(0.75rem+env(safe-area-inset-right))] top-[calc(0.88rem+env(safe-area-inset-top))] z-[90] md:hidden"
      >
        <button
          type="button"
          onClick={() => setMenuOpen((current) => !current)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-zinc-900/14 bg-white/92 text-zinc-900 shadow-[0_10px_26px_rgba(0,0,0,0.12)] transition hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400/70"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
        >
          {menuOpen ? <X className="h-4.5 w-4.5" /> : <Menu className="h-4.5 w-4.5" />}
        </button>

        <AnimatePresence>
          {menuOpen ? (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 8, scale: 0.97 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="absolute right-0 top-12 z-50 w-[min(86vw,19rem)] rounded-2xl border border-[#dacdbd] bg-[#fffaf4]/96 p-2.5 shadow-[0_18px_46px_rgba(68,48,18,0.18)] backdrop-blur-xl"
            >
              <div className="mb-1 px-2 py-1">
                <p className="text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-zinc-600">
                  Quick navigation
                </p>
              </div>

              <div className="grid gap-1.5">
                <a
                  href="#work"
                  onClick={() => setMenuOpen(false)}
                  className="inline-flex items-center justify-between rounded-xl border border-zinc-900/10 bg-white/86 px-3 py-2 text-sm font-medium text-zinc-900"
                >
                  <span className="inline-flex items-center gap-2">
                    <BriefcaseBusiness className="h-4 w-4" />
                    Portfolio showcase
                  </span>
                </a>
                <a
                  href="#services"
                  onClick={() => setMenuOpen(false)}
                  className="inline-flex items-center justify-between rounded-xl border border-zinc-900/10 bg-white/86 px-3 py-2 text-sm font-medium text-zinc-900"
                >
                  <span className="inline-flex items-center gap-2">
                    <Wrench className="h-4 w-4" />
                    Services
                  </span>
                </a>
                <a
                  href="#reviews"
                  onClick={() => setMenuOpen(false)}
                  className="inline-flex items-center justify-between rounded-xl border border-zinc-900/10 bg-white/86 px-3 py-2 text-sm font-medium text-zinc-900"
                >
                  <span className="inline-flex items-center gap-2">
                    <Star className="h-4 w-4" />
                    Reviews
                  </span>
                </a>
                <a
                  href="#contact"
                  onClick={() => setMenuOpen(false)}
                  className="inline-flex items-center justify-between rounded-xl border border-zinc-900/10 bg-white/86 px-3 py-2 text-sm font-medium text-zinc-900"
                >
                  <span className="inline-flex items-center gap-2">
                    <Sparkles className="h-4 w-4" />
                    Contact section
                  </span>
                </a>
                <a
                  href={contact.emailLink}
                  onClick={() => setMenuOpen(false)}
                  className="inline-flex items-center justify-between rounded-xl border border-zinc-900/10 bg-white/86 px-3 py-2 text-sm font-medium text-zinc-900"
                >
                  <span className="inline-flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    Email us
                  </span>
                </a>
                <a
                  href={contact.instagramLink}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setMenuOpen(false)}
                  className="inline-flex items-center justify-between rounded-xl bg-zinc-900 px-3 py-2 text-sm font-semibold text-white"
                >
                  <span className="inline-flex items-center gap-2">
                    <MessageCircle className="h-4 w-4" />
                    DM on Instagram
                  </span>
                </a>
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </>
  );
}

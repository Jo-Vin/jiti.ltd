import React, { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Mail, Instagram, Sparkles, Code2, Smartphone, Palette, Play, Star, MousePointer2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const projects = [
  {
    name: "Guides.app",
    type: "Travel tech",
    tagline: "Tour guide app with 75+ language translation and offline support.",
    stat: "75+ languages",
    gradient: "from-sky-200 via-indigo-200 to-violet-300",
    accent: "bg-indigo-500",
    screen: "Global tour dashboard",
  },
  {
    name: "Property.Codes",
    type: "PropTech",
    tagline: "Patent-pending hot lead generator for estate agents with real-time notifications.",
    stat: "Real-time leads",
    gradient: "from-emerald-200 via-lime-200 to-yellow-200",
    accent: "bg-emerald-500",
    screen: "QR lead capture flow",
  },
  {
    name: "Single.Cards",
    type: "Marketplace",
    tagline: "Custom trading card marketplace with AI scanning, Stripe and database management.",
    stat: "AI scanning",
    gradient: "from-orange-200 via-rose-200 to-pink-300",
    accent: "bg-rose-500",
    screen: "Card marketplace UI",
  },
  {
    name: "Rocup",
    type: "Community commerce",
    tagline: "Shop check-in, reward system, leaderboard and Shopify / CRM integrations.",
    stat: "Gymshark-powered",
    gradient: "from-zinc-200 via-stone-200 to-orange-200",
    accent: "bg-zinc-900",
    screen: "Run club leaderboard",
  },
  {
    name: "Shrink my House",
    type: "Service website + CRM",
    tagline: "Website design, development and workflow automation with CRM integration.",
    stat: "5★ client review",
    gradient: "from-fuchsia-200 via-purple-200 to-blue-200",
    accent: "bg-purple-500",
    screen: "Client booking journey",
  },
];

const services = [
  [Code2, "Web & app development", "Custom products, e-commerce, marketplaces, dashboards and integrations."],
  [Smartphone, "Mobile-first product design", "Beautiful interfaces that work as well on a phone as they do on desktop."],
  [Palette, "Brand + visual systems", "Logos, design direction, launch assets and cohesive digital identities."],
];

function SplashScreen({ done }) {
  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-[#0d0b10] text-white"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.7, ease: "easeInOut" } }}
        >
          <motion.div className="absolute h-[60rem] w-[60rem] rounded-full bg-fuchsia-500/20 blur-3xl" animate={{ scale: [0.8, 1.15, 0.9], rotate: 180 }} transition={{ duration: 2.2 }} />
          <motion.div
            className="relative text-center"
            initial={{ y: 18, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-[2rem] border border-white/15 bg-white/10 shadow-2xl backdrop-blur">
              <Sparkles className="h-9 w-9" />
            </div>
            <h1 className="text-5xl font-black tracking-tight md:text-8xl">jiti ltd</h1>
            <p className="mt-4 text-sm uppercase tracking-[0.45em] text-white/60">products • design • software</p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function DeviceShowcase() {
  const { scrollYProgress } = useScroll();
  const index = useTransform(scrollYProgress, [0.05, 0.2, 0.36, 0.52, 0.68], [0, 1, 2, 3, 4]);
  const [active, setActive] = useState(0);

  useEffect(() => index.on("change", (v) => setActive(Math.max(0, Math.min(projects.length - 1, Math.round(v))))), [index]);

  const project = projects[active];

  return (
    <section id="work" className="relative min-h-[360vh] bg-[#f8f2ea] px-5 py-24 text-[#161313]">
      <div className="sticky top-4 mx-auto grid max-w-7xl gap-10 lg:top-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <p className="mb-4 inline-flex rounded-full border border-black/10 bg-white/60 px-4 py-2 text-sm font-semibold backdrop-blur">Scroll to browse the studio wall</p>
          <h2 className="max-w-xl text-4xl font-black tracking-tight md:text-6xl">One immersive portfolio, without making people dig.</h2>
          <p className="mt-6 max-w-lg text-lg leading-8 text-black/60">The laptop and phone become a living gallery. As visitors scroll, each flagship project takes over the device while the supporting cards reveal proof, outcomes and services.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            {projects.map((item, i) => (
              <button key={item.name} onClick={() => setActive(i)} className={`rounded-full px-4 py-2 text-sm font-bold transition ${i === active ? "bg-black text-white" : "bg-white/70 text-black/55"}`}>{item.name}</button>
            ))}
          </div>
        </div>

        <div className="relative">
          <motion.div layout className="absolute -right-4 -top-8 hidden rounded-3xl border border-white/60 bg-white/70 p-4 shadow-xl backdrop-blur md:block">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-black/40">Now showing</p>
            <p className="mt-1 text-xl font-black">{project.name}</p>
          </motion.div>

          <div className="rounded-[2rem] border border-black/10 bg-[#2a2320] p-3 shadow-2xl md:rounded-[2.6rem] md:p-5">
            <div className="rounded-[1.4rem] bg-[#0d0b10] p-2 md:rounded-[2rem]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={project.name}
                  className={`min-h-[360px] overflow-hidden rounded-[1.2rem] bg-gradient-to-br ${project.gradient} p-6 md:min-h-[520px] md:rounded-[1.7rem] md:p-9`}
                  initial={{ opacity: 0, scale: 0.96, filter: "blur(12px)" }}
                  animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                  exit={{ opacity: 0, scale: 1.04, filter: "blur(12px)" }}
                  transition={{ duration: 0.45 }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex gap-2"><span className="h-3 w-3 rounded-full bg-red-400"/><span className="h-3 w-3 rounded-full bg-yellow-300"/><span className="h-3 w-3 rounded-full bg-green-400"/></div>
                    <span className="rounded-full bg-white/55 px-3 py-1 text-xs font-black">{project.type}</span>
                  </div>
                  <div className="mt-12 grid gap-6 md:grid-cols-[1fr_0.8fr] md:items-end">
                    <div>
                      <div className={`mb-5 h-14 w-14 rounded-2xl ${project.accent} shadow-xl`} />
                      <h3 className="text-4xl font-black md:text-6xl">{project.name}</h3>
                      <p className="mt-4 max-w-md text-lg font-medium text-black/65">{project.tagline}</p>
                    </div>
                    <div className="rounded-[1.8rem] border border-white/55 bg-white/40 p-5 shadow-xl backdrop-blur">
                      <div className="mb-4 flex items-center gap-2 text-sm font-black"><Play className="h-4 w-4" /> {project.screen}</div>
                      <div className="space-y-3">
                        <div className="h-20 rounded-2xl bg-white/70" />
                        <div className="grid grid-cols-3 gap-3"><div className="h-16 rounded-2xl bg-white/55"/><div className="h-16 rounded-2xl bg-white/40"/><div className="h-16 rounded-2xl bg-white/55"/></div>
                        <div className="h-28 rounded-2xl bg-black/10" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          <div className="absolute -bottom-8 left-4 w-36 rounded-[2rem] border-8 border-[#171315] bg-[#171315] shadow-2xl md:left-10 md:w-44">
            <div className={`h-64 rounded-[1.4rem] bg-gradient-to-br ${project.gradient} p-4`}>
              <div className="mx-auto mb-5 h-1 w-12 rounded-full bg-black/30" />
              <p className="text-xs font-black uppercase text-black/50">Mobile view</p>
              <p className="mt-2 text-2xl font-black">{project.name}</p>
              <div className="mt-8 space-y-2"><div className="h-16 rounded-2xl bg-white/55"/><div className="h-10 rounded-2xl bg-white/40"/><div className="h-10 rounded-2xl bg-white/40"/></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function JitiPortfolioMockup() {
  const [splashDone, setSplashDone] = useState(false);
  useEffect(() => { const t = setTimeout(() => setSplashDone(true), 1800); return () => clearTimeout(t); }, []);

  const featured = useMemo(() => projects.slice(0, 3), []);

  return (
    <div className="min-h-screen bg-[#0d0b10] font-sans text-white">
      <SplashScreen done={splashDone} />

      <nav className="fixed left-1/2 top-4 z-40 flex w-[calc(100%-1.5rem)] max-w-5xl -translate-x-1/2 items-center justify-between rounded-full border border-white/10 bg-black/35 px-4 py-3 backdrop-blur-xl">
        <div className="flex items-center gap-3"><div className="grid h-10 w-10 place-items-center rounded-full bg-white text-sm font-black text-black">J</div><span className="font-black">jiti ltd</span></div>
        <div className="hidden gap-6 text-sm text-white/70 md:flex"><a href="#work">Work</a><a href="#services">Services</a><a href="#contact">Contact</a></div>
        <Button className="rounded-full bg-white text-black hover:bg-white/90"><Instagram className="mr-2 h-4 w-4"/>DM us</Button>
      </nav>

      <header className="relative overflow-hidden px-5 pb-24 pt-36 md:pt-44">
        <motion.div className="absolute left-1/2 top-0 h-[48rem] w-[48rem] -translate-x-1/2 rounded-full bg-gradient-to-r from-fuchsia-500/20 via-orange-500/20 to-cyan-500/20 blur-3xl" animate={{ rotate: 360 }} transition={{ duration: 24, repeat: Infinity, ease: "linear" }} />
        <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-semibold text-white/75"><MousePointer2 className="h-4 w-4"/> A cinematic portfolio for Jiti + Vouker</p>
            <h1 className="max-w-4xl text-5xl font-black leading-[0.95] tracking-tight md:text-8xl">Software that feels like a product launch.</h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/65 md:text-xl">Jiti Ltd brings together product engineering, app development, web design, brand systems and automation into one premium studio for ambitious clients.</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button size="lg" className="rounded-full bg-white px-7 text-black hover:bg-white/90">Start a project <ArrowRight className="ml-2 h-4 w-4"/></Button>
              <Button size="lg" variant="outline" className="rounded-full border-white/20 bg-white/5 px-7 text-white hover:bg-white/10"><Mail className="mr-2 h-4 w-4"/> hello@jiti.ltd</Button>
            </div>
          </div>

          <Card className="overflow-hidden rounded-[2rem] border-white/10 bg-white/10 text-white shadow-2xl backdrop-blur">
            <CardContent className="p-4 md:p-6">
              <div className="rounded-[1.5rem] bg-[#f8f2ea] p-4 text-black">
                <div className="mb-5 flex items-center justify-between"><span className="font-black">Selected builds</span><span className="rounded-full bg-black px-3 py-1 text-xs font-bold text-white">Live work</span></div>
                <div className="grid gap-3">
                  {featured.map((p) => <div key={p.name} className="rounded-2xl bg-white p-4 shadow-sm"><div className="flex items-center justify-between"><b>{p.name}</b><span className="text-xs font-bold text-black/45">{p.stat}</span></div><p className="mt-2 text-sm text-black/55">{p.tagline}</p></div>)}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </header>

      <DeviceShowcase />

      <section id="services" className="bg-[#0d0b10] px-5 py-24">
        <div className="mx-auto max-w-7xl">
          <h2 className="max-w-3xl text-4xl font-black md:text-6xl">A studio that can design the thing, build the thing, and grow the thing.</h2>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {services.map(([Icon, title, copy]) => <Card key={title} className="rounded-[2rem] border-white/10 bg-white/[0.06] text-white"><CardContent className="p-7"><Icon className="mb-8 h-8 w-8"/><h3 className="text-2xl font-black">{title}</h3><p className="mt-4 leading-7 text-white/60">{copy}</p></CardContent></Card>)}
          </div>
        </div>
      </section>

      <section id="contact" className="px-5 py-24">
        <div className="mx-auto max-w-5xl rounded-[2.5rem] bg-gradient-to-br from-white to-[#f8f2ea] p-8 text-center text-black shadow-2xl md:p-16">
          <Star className="mx-auto mb-6 h-10 w-10" />
          <h2 className="text-4xl font-black md:text-6xl">Have an idea worth building?</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-black/60">DM Jiti on Instagram or email the team. The call-to-action stays simple because the portfolio does the persuasion.</p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button size="lg" className="rounded-full bg-black px-8 text-white hover:bg-black/90"><Instagram className="mr-2 h-4 w-4"/> DM on Instagram</Button>
            <Button size="lg" variant="outline" className="rounded-full border-black/15 px-8"><Mail className="mr-2 h-4 w-4"/> hello@jiti.ltd</Button>
          </div>
        </div>
      </section>
    </div>
  );
}

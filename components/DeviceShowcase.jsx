"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  Atom,
  ChevronDown,
  Cloud,
  FileCode2,
  Smartphone,
} from "lucide-react";
import Image from "next/image";
import { projects } from "@/data/siteData";

function ProjectIcon({ project, className = "" }) {
  const hasImage = Boolean(project.logo?.src);

  if (hasImage) {
    return (
      <div
        className={`mb-4 flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl border border-zinc-900/8 bg-white/88 p-1.5 shadow-sm ${className}`}
      >
        {/* TODO: Replace logo.src with final brand assets in /public when available. */}
        <Image
          src={project.logo.src}
          alt={project.logo.alt || `${project.name} logo`}
          width={40}
          height={40}
          className="h-full w-full object-contain"
        />
      </div>
    );
  }

  return <div className={`mb-4 h-12 w-12 rounded-2xl ${project.accent} ${className}`} />;
}

function ProgressRail({ activeIndex, onSelect }) {
  return (
    <div className="absolute -left-11 top-1/2 z-20 hidden h-[64vh] -translate-y-1/2 lg:flex">
      <div className="flex h-full flex-col gap-2 rounded-full border border-[#d6cab8] bg-white/78 p-1.5 shadow-sm backdrop-blur-sm">
        {projects.map((project, index) => (
          <button
            key={`${project.slug}-progress`}
            type="button"
            onClick={() => onSelect(index)}
            className="group relative flex-1 rounded-full border border-zinc-900/8 p-[2px]"
            aria-label={`Jump to ${project.name}`}
            aria-pressed={index === activeIndex}
          >
            <span
              className={`block h-full w-full rounded-full transition ${
                index === activeIndex ? "opacity-100" : "opacity-35 group-hover:opacity-65"
              }`}
              style={{ backgroundColor: project.accentColor || "#18181b" }}
            />
          </button>
        ))}
      </div>
    </div>
  );
}

const techIconMap = {
  Atom,
  Cloud,
  FileCode2,
  Smartphone,
};

function getCategoryTags(category) {
  if (Array.isArray(category)) {
    return category.filter(Boolean);
  }

  if (typeof category === "string" && category.trim()) {
    return [category];
  }

  return [];
}

function TechStackSection({ stack = [], className = "" }) {
  if (!stack.length) {
    return null;
  }

  return (
    <div className={className}>
      <p className="text-[0.64rem] font-semibold uppercase tracking-[0.14em] text-zinc-600">
        Technologies used
      </p>
      <div className="mt-2 flex flex-wrap gap-2">
        {stack.map((item) => {
          const Icon = techIconMap[item.icon] || FileCode2;
          return (
            <span
              key={`tech-${item.name}`}
              className="inline-flex items-center gap-1.5 rounded-full border border-zinc-900/12 bg-white px-2.5 py-1 text-[0.62rem] font-semibold tracking-[0.04em] text-zinc-700 uppercase sm:text-[0.66rem]"
            >
              <Icon className="h-3.5 w-3.5" />
              {item.name}
            </span>
          );
        })}
      </div>
    </div>
  );
}

function GuidesJourneyCanvas({ project, compact = false }) {
  const imageSrc =
    (compact ? project.showcase?.mobileImage : project.showcase?.desktopImage) ||
    project.showcase?.desktopImage ||
    project.showcase?.mobileImage ||
    "/Guides.app_Showcase.webp";
  const imageFit = compact
    ? project.showcase?.mobileImageFit ||
      project.showcase?.imageFit ||
      "cover"
    : project.showcase?.desktopImageFit ||
      project.showcase?.imageFit ||
      "contain";
  const isContain = imageFit === "contain";
  const fitClass = isContain ? "object-contain" : "object-cover";
  const paddingClass =
    isContain ? (compact ? "p-1.5" : "p-2.5 sm:p-3") : "";
  const compactBoostClass = compact
    ? isContain
      ? "object-center"
      : "object-top scale-[1.18] sm:scale-[1.22]"
    : "";

  return (
    <div className="relative h-full w-full overflow-hidden rounded-2xl border border-[#ddca89] bg-[#fff4c8]">
      <div className="absolute inset-0 bg-gradient-to-br from-[#fff5d8] via-[#ffe8ab] to-[#ffd152]" />
      <Image
        src={imageSrc}
        alt={`${project.name} showcase screenshot`}
        fill
        sizes={compact ? "70vw" : "(min-width: 1024px) 48vw, 92vw"}
        className={`relative z-[1] transform-gpu ${fitClass} ${paddingClass} ${compactBoostClass}`}
      />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] p-2.5">
        <div className="inline-flex rounded-full border border-white/70 bg-black/55 px-2.5 py-1 text-[0.54rem] font-semibold uppercase tracking-[0.14em] text-white">
          Live Guides preview
        </div>
      </div>
    </div>
  );
}

function GuidesDesktopPanels({ project }) {
  return (
    <div className="mt-5 grid h-[calc(100%-2.5rem)] min-h-0 grid-cols-[1.14fr_0.86fr] gap-4">
      <div className="grid min-h-0 grid-rows-[auto_minmax(0,1fr)] gap-4 rounded-[1.3rem] border border-[#e6d8b5] bg-[#fffaf0] p-5">
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-start gap-3">
            <ProjectIcon project={project} className="mb-0 h-11 w-11 rounded-xl p-1" />
            <p className="mt-1 text-[0.62rem] font-semibold uppercase tracking-[0.15em] text-[#6f5c2e]">
              Guides platform
            </p>
          </div>
          <span className="rounded-full border border-[#dcc886] bg-white px-3 py-1 text-xs font-semibold text-[#5f4f20]">
            Web + iOS + Android
          </span>
        </div>

        <div className="min-h-0 overflow-hidden">
          <GuidesJourneyCanvas project={project} />
        </div>
      </div>

      <div className="grid min-h-0 grid-rows-[auto_minmax(0,1fr)] rounded-[1.3rem] border border-[#eadfbe] bg-white/78 p-4">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-zinc-700/70">
          Mobile rollout
        </p>

        <div className="mt-3 grid gap-2">
          <div className="grid grid-cols-1 gap-2">
            <a
              href={project.showcase?.appStoreUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between gap-2 rounded-xl border border-zinc-900/8 bg-white/88 px-3 py-2 transition hover:bg-white"
              aria-label="Open Guides on Apple App Store"
            >
              {/* TODO: Replace app store assets if updated by Guides branding team. */}
              <Image
                src={project.showcase?.appStoreBadge || "/logos/guides-app-store.svg"}
                alt="Download on the App Store"
                width={108}
                height={32}
                className="h-auto w-[6.75rem]"
              />
              <span className="text-xs font-semibold text-zinc-700">iOS</span>
            </a>
            <a
              href={project.showcase?.googlePlayUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between gap-2 rounded-xl border border-zinc-900/8 bg-white/88 px-3 py-2 transition hover:bg-white"
              aria-label="Open Guides on Google Play"
            >
              <Image
                src={project.showcase?.googlePlayBadge || "/logos/guides-google-play.svg"}
                alt="Get it on Google Play"
                width={108}
                height={32}
                className="h-auto w-[6.75rem]"
              />
              <span className="text-xs font-semibold text-zinc-700">Android</span>
            </a>
          </div>

          <a
            href={project.showcase?.websiteUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-[#d9c580] bg-[#fff6da] px-3 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-zinc-800 transition hover:bg-[#fff1c2]"
          >
            View guides.app
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>

          <div className="grid gap-2">
            {project.showcase?.features?.map((feature) => (
              <div
                key={`guides-feature-${feature}`}
                className="rounded-xl border border-[#ead9ae] bg-[#fff8e6] px-3 py-2 text-sm font-medium text-zinc-800"
              >
                {feature}
              </div>
            ))}
          </div>

          <TechStackSection
            stack={project.techStack}
            className="rounded-xl border border-zinc-900/8 bg-white/88 px-3 py-2"
          />

          <div className="rounded-xl border border-zinc-900/8 bg-white/88 px-3 py-2">
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.15em] text-zinc-700">
              A Jiti platform
            </p>
            <p className="mt-1 text-sm text-zinc-700">
              Experience design, platform engineering, and mobile delivery in one product.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function DefaultDesktopPanels({ project }) {
  return (
    <div className="mt-5 grid h-[calc(100%-2.5rem)] grid-cols-[1.14fr_0.86fr] gap-4">
      <div className="rounded-[1.3rem] bg-white/78 p-5">
        <ProjectIcon project={project} />
        <h3 className="max-w-xl text-4xl font-bold text-zinc-900">{project.laptopTitle}</h3>
        <div className="mt-5 space-y-3">
          {/* TODO: Replace this desktop panel with a real project screenshot. */}
          <div className="h-16 rounded-2xl bg-white/82" />
          <div className="grid grid-cols-3 gap-3">
            <div className="h-12 rounded-xl bg-white/66" />
            <div className="h-12 rounded-xl bg-white/56" />
            <div className="h-12 rounded-xl bg-white/66" />
          </div>
          <div className="h-24 rounded-2xl bg-black/10" />
        </div>
      </div>

      <div className="rounded-[1.3rem] bg-white/68 p-4">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-zinc-700/70">
          Supporting panel
        </p>
        <div className="mt-3 space-y-3">
          <div className="h-20 rounded-2xl bg-white/72" />
          <div className="h-10 rounded-xl bg-white/62" />
          <div className="h-10 rounded-xl bg-white/58" />
          <div className="h-20 rounded-2xl bg-black/12" />
        </div>
      </div>
    </div>
  );
}

function GuidesMobilePhone({ project }) {
  return (
    <div className="mx-auto w-[min(100%,12.6rem)] min-w-0 rounded-[2.2rem] border-[7px] border-[#101114] bg-[#101114] shadow-[0_18px_42px_rgba(0,0,0,0.32)] sm:w-[min(100%,15rem)] sm:border-[8px]">
      <div className="rounded-[1.7rem] bg-gradient-to-br from-[#fff5d8] via-[#ffe8ab] to-[#ffd152] p-2.5">
        <div className="mx-auto h-1 w-12 rounded-full bg-black/28" />

        <div className="mt-2.5 h-[18.8rem] overflow-hidden sm:h-[21.8rem]">
          <GuidesJourneyCanvas project={project} compact />
        </div>
      </div>
    </div>
  );
}

function DefaultMobilePhone({ project }) {
  return (
    <div className="mx-auto w-[min(100%,12.6rem)] min-w-0 rounded-[2.2rem] border-[7px] border-[#101114] bg-[#101114] shadow-[0_18px_42px_rgba(0,0,0,0.32)] sm:w-[min(100%,15rem)] sm:border-[8px]">
      <div className={`rounded-[1.7rem] bg-gradient-to-br p-4 ${project.gradient}`}>
        <div className="mx-auto h-1 w-12 rounded-full bg-black/28" />
        <p className="mt-4 text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-zinc-800/72">
          Mobile preview
        </p>
        <p className="mt-1 text-2xl font-bold text-zinc-900">{project.phoneTitle}</p>

        {/* TODO: Replace this mobile panel with a real project screenshot. */}
        <div className="mt-5 space-y-3">
          <div className="h-12 rounded-xl bg-white/68" />
          <div className="h-8 rounded-xl bg-white/56" />
          <div className="h-8 rounded-xl bg-white/50" />
          <div className="h-8 rounded-xl bg-white/45" />
        </div>
        <p className="mt-4 flex items-center text-[0.65rem] font-semibold uppercase tracking-[0.15em] text-zinc-800/72">
          Open project
          <ArrowUpRight className="ml-1 h-3 w-3" />
        </p>
      </div>
    </div>
  );
}

export default function DeviceShowcase({ onboardingHintKey = 0 }) {
  const showcaseRef = useRef(null);
  const stepRefs = useRef([]);
  const detailsRef = useRef(null);
  const activeIndexRef = useRef(0);
  const scrollStepLockedRef = useRef(false);
  const scrollStepUnlockTimerRef = useRef(null);
  const touchStartRef = useRef({ x: 0, y: 0 });
  const [activeIndex, setActiveIndex] = useState(0);
  const [dismissedOnboardingHintKey, setDismissedOnboardingHintKey] = useState(0);

  useEffect(() => {
    activeIndexRef.current = activeIndex;
  }, [activeIndex]);

  useEffect(() => {
    const steps = stepRefs.current.filter(Boolean);
    if (!steps.length) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries.filter((entry) => entry.isIntersecting);
        if (!visibleEntries.length) {
          return;
        }

        let nearest = visibleEntries[0];
        let nearestDistance = Number.POSITIVE_INFINITY;

        visibleEntries.forEach((entry) => {
          const { top, height } = entry.boundingClientRect;
          const distanceFromCenter = Math.abs(top + height / 2 - window.innerHeight / 2);

          if (distanceFromCenter < nearestDistance) {
            nearest = entry;
            nearestDistance = distanceFromCenter;
          }
        });

        const nextIndex = Number(nearest.target.getAttribute("data-step-index"));
        if (!Number.isNaN(nextIndex)) {
          setActiveIndex((current) => (current === nextIndex ? current : nextIndex));
        }
      },
      {
        root: null,
        rootMargin: "-35% 0px -35% 0px",
        threshold: [0.1, 0.5, 0.9],
      },
    );

    steps.forEach((step) => observer.observe(step));

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!detailsRef.current) {
      return;
    }

    detailsRef.current.scrollTop = 0;
  }, [activeIndex]);

  useEffect(() => {
    return () => {
      if (scrollStepUnlockTimerRef.current) {
        window.clearTimeout(scrollStepUnlockTimerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!onboardingHintKey || onboardingHintKey <= dismissedOnboardingHintKey) {
      return undefined;
    }

    const timer = window.setTimeout(() => {
      setDismissedOnboardingHintKey(onboardingHintKey);
    }, 3600);

    return () => window.clearTimeout(timer);
  }, [onboardingHintKey, dismissedOnboardingHintKey]);

  const showOnboardingHint = onboardingHintKey > dismissedOnboardingHintKey;

  const activeProject = projects[activeIndex];
  const activeCategoryTags = getCategoryTags(activeProject.category);
  const hasActiveLogo = Boolean(activeProject.logo?.src);
  const isFinalProject = activeIndex === projects.length - 1;
  const isGuidesActive = activeProject.slug === "guides-app";
  const mobileWheelProjects = projects.map((_, offset) => {
    const wheelIndex = (activeIndex + offset) % projects.length;
    return {
      ...projects[wheelIndex],
      wheelOffset: offset,
      index: wheelIndex,
    };
  });
  const mobilePreviewProjects = mobileWheelProjects.slice(0, 3);

  const jumpToProject = (index) => {
    const target = stepRefs.current[index];
    if (!target) {
      return;
    }

    setActiveIndex(index);
    const viewportOffset = window.innerHeight * 0.24;
    const top = target.getBoundingClientRect().top + window.scrollY - viewportOffset;
    window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
  };

  useEffect(() => {
    const isShowcasePinned = () => {
      const showcase = showcaseRef.current;
      if (!showcase) {
        return false;
      }

      const bounds = showcase.getBoundingClientRect();
      return bounds.top <= 0 && bounds.bottom >= window.innerHeight;
    };

    const queueDirectionalStep = (direction) => {
      if (scrollStepLockedRef.current) {
        return true;
      }

      const currentIndex = activeIndexRef.current;
      const nextIndex = currentIndex + direction;
      if (nextIndex < 0 || nextIndex > projects.length - 1) {
        return false;
      }

      scrollStepLockedRef.current = true;
      jumpToProject(nextIndex);

      if (scrollStepUnlockTimerRef.current) {
        window.clearTimeout(scrollStepUnlockTimerRef.current);
      }

      scrollStepUnlockTimerRef.current = window.setTimeout(() => {
        scrollStepLockedRef.current = false;
      }, 560);

      return true;
    };

    const handleWheel = (event) => {
      if (!isShowcasePinned()) {
        return;
      }

      if (Math.abs(event.deltaY) < 14) {
        return;
      }

      const didQueueStep = queueDirectionalStep(event.deltaY > 0 ? 1 : -1);
      if (didQueueStep) {
        event.preventDefault();
      }
    };

    const handleTouchStart = (event) => {
      if (!isShowcasePinned()) {
        return;
      }

      const touch = event.touches?.[0];
      if (!touch) {
        return;
      }

      touchStartRef.current = { x: touch.clientX, y: touch.clientY };
    };

    const handleTouchMove = (event) => {
      if (!isShowcasePinned()) {
        return;
      }

      const touch = event.touches?.[0];
      if (!touch) {
        return;
      }

      const deltaY = touchStartRef.current.y - touch.clientY;
      const deltaX = touchStartRef.current.x - touch.clientX;

      if (Math.abs(deltaY) < 26 || Math.abs(deltaY) < Math.abs(deltaX)) {
        return;
      }

      const didQueueStep = queueDirectionalStep(deltaY > 0 ? 1 : -1);
      if (didQueueStep) {
        event.preventDefault();
        touchStartRef.current = { x: touch.clientX, y: touch.clientY };
      }
    };

    const handleTouchEnd = () => {
      touchStartRef.current = { x: 0, y: 0 };
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: false });
    window.addEventListener("touchend", handleTouchEnd, { passive: true });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, []);

  const jumpToServices = () => {
    const target = document.getElementById("services");
    if (!target) {
      return;
    }

    target.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const jumpToNextProject = () => {
    if (projects.length < 2) {
      return;
    }

    const nextIndex = (activeIndex + 1) % projects.length;
    jumpToProject(nextIndex);
  };

  return (
    <section
      id="work"
      ref={showcaseRef}
      className="overflow-x-clip px-0 pb-10 pt-4 sm:px-4 sm:pt-8 lg:px-8"
    >
      <div className="mx-auto mb-2 max-w-5xl px-4 md:hidden">
        <p className="inline-flex rounded-full border border-zinc-900/12 bg-white/85 px-3 py-1.5 text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-zinc-700 shadow-sm">
          Selected Work
        </p>
        <h2 className="mt-3 text-2xl leading-tight font-bold text-zinc-950">
          Scroll to preview each project
        </h2>
        <AnimatePresence>
          {showOnboardingHint ? (
            <motion.p
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: [0.3, 1, 0.3, 1, 0.3], y: [4, 0, 0, 0, 0] }}
              exit={{ opacity: 0, y: 2 }}
              transition={{ duration: 2.4, ease: "easeInOut" }}
              className="mt-2 text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-zinc-600"
            >
              Scroll to view other projects
            </motion.p>
          ) : null}
        </AnimatePresence>
      </div>

      <div className="mx-auto mb-4 hidden max-w-5xl px-2 md:block md:px-4">
        <p className="inline-flex rounded-full border border-zinc-900/12 bg-white/85 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-700 shadow-sm">
          Selected Work
        </p>
        <h2 className="mt-4 text-4xl font-bold text-zinc-950 sm:text-5xl lg:text-6xl">
          Browse each product clearly,
          <br />
          with brand-led context.
        </h2>
        <AnimatePresence>
          {showOnboardingHint ? (
            <motion.p
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: [0.25, 0.9, 0.25, 0.9, 0.25], y: [5, 0, 0, 0, 0] }}
              exit={{ opacity: 0, y: 2 }}
              transition={{ duration: 2.6, ease: "easeInOut" }}
              className="mt-3 text-xs font-semibold uppercase tracking-[0.16em] text-zinc-600"
            >
              Scroll to view other projects
            </motion.p>
          ) : null}
        </AnimatePresence>
      </div>

      <div className="relative">
        <div className="sticky top-0 h-[100dvh]">
          <div className="relative mx-auto h-full max-w-[1600px] px-0 pb-0 pt-0 sm:px-4 sm:pt-3 lg:px-8 lg:pt-4">
            <ProgressRail activeIndex={activeIndex} onSelect={jumpToProject} />

            <div className="relative h-full max-w-full overflow-hidden rounded-none border border-[#d9cdbf] bg-[#fffaf3] shadow-[0_22px_70px_rgba(87,60,18,0.15)] sm:rounded-[2.5rem]">
              {!isFinalProject ? (
                <button
                  type="button"
                  onClick={jumpToNextProject}
                  className="absolute right-0 top-[18.5svh] z-30 -translate-y-1/2 rounded-l-xl border border-r-0 border-zinc-900/12 bg-white/90 py-2 pl-2 pr-1 shadow-sm backdrop-blur lg:hidden"
                  aria-label="Scroll to next project"
                >
                  <div className="flex h-28 flex-col items-center justify-between">
                    <motion.span
                      className="inline-flex text-zinc-700"
                      animate={{ y: [0, 3.5, 0], opacity: [0.45, 1, 0.45] }}
                      transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <ChevronDown className="h-3.5 w-3.5" />
                    </motion.span>
                    <span className="[writing-mode:vertical-rl] text-[0.54rem] font-semibold uppercase tracking-[0.08em] text-zinc-600">
                      Scroll for next project
                    </span>
                  </div>
                </button>
              ) : null}

              <div className="grid h-full grid-rows-[46svh_minmax(0,1fr)_auto] sm:grid-rows-[47svh_minmax(0,1fr)_auto] lg:grid-cols-[0.38fr_0.62fr] lg:grid-rows-1">
                <div
                  className={`order-1 relative overflow-hidden border-b border-[#decfbf] bg-gradient-to-br ${activeProject.gradient} lg:order-2 lg:border-b-0 lg:border-l`}
                >
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeProject.slug}
                      className="h-full w-full"
                      initial={{ opacity: 0, scale: 0.98, filter: "blur(10px)" }}
                      animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                      exit={{ opacity: 0, scale: 1.02, filter: "blur(10px)" }}
                      transition={{ duration: 0.42, ease: "easeInOut" }}
                    >
                      <div className="relative h-full p-3 sm:p-5 lg:p-7">
                        <div className="absolute inset-0 bg-white/10" />

                        <div className="relative hidden h-full rounded-[1.6rem] border border-white/50 bg-white/74 p-5 shadow-sm lg:block">
                          <div className="flex items-center justify-between gap-3">
                            <div className="flex items-center gap-2">
                              <span className="h-3 w-3 rounded-full bg-rose-400" />
                              <span className="h-3 w-3 rounded-full bg-amber-300" />
                              <span className="h-3 w-3 rounded-full bg-emerald-400" />
                            </div>
                            {activeCategoryTags.length ? (
                              <div className="flex flex-wrap justify-end gap-1.5">
                                {activeCategoryTags.map((categoryTag) => (
                                  <span
                                    key={`${activeProject.slug}-desktop-tag-${categoryTag}`}
                                    className="rounded-full bg-white/80 px-3 py-1 text-xs font-semibold text-zinc-700"
                                  >
                                    {categoryTag}
                                  </span>
                                ))}
                              </div>
                            ) : null}
                          </div>

                          {isGuidesActive ? (
                            <GuidesDesktopPanels project={activeProject} />
                          ) : (
                            <DefaultDesktopPanels project={activeProject} />
                          )}
                        </div>

                        <div className="relative flex h-full w-full min-w-0 items-center justify-center overflow-x-hidden px-2 lg:hidden">
                          {isGuidesActive ? (
                            <GuidesMobilePhone project={activeProject} />
                          ) : (
                            <DefaultMobilePhone project={activeProject} />
                          )}
                        </div>

                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>

                <aside
                  ref={detailsRef}
                  className="order-2 flex min-h-0 min-w-0 flex-col overflow-y-hidden overflow-x-hidden bg-white/92 px-4 pb-3 pt-4 lg:order-1 lg:overflow-hidden lg:px-7 lg:py-8"
                >
                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-zinc-600">
                    Now showing
                  </p>

                  <div className="relative mt-2 min-w-0">
                    <h3
                      className={`min-w-0 break-words text-[1.78rem] leading-[1.03] font-bold text-zinc-950 sm:text-4xl ${
                        hasActiveLogo ? "pr-15" : ""
                      }`}
                    >
                      {activeProject.name}
                    </h3>
                    {hasActiveLogo ? (
                      <div className="absolute right-0 top-0.5 flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-zinc-900/10 bg-white/88 p-1.5 shadow-sm">
                        <Image
                          src={activeProject.logo.src}
                          alt={activeProject.logo.alt || `${activeProject.name} logo`}
                          width={38}
                          height={38}
                          className="h-full w-full object-contain"
                        />
                      </div>
                    ) : null}
                  </div>

                  {activeCategoryTags.length ? (
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {activeCategoryTags.map((categoryTag) => (
                        <span
                          key={`${activeProject.slug}-details-tag-${categoryTag}`}
                          className="inline-flex rounded-full border border-zinc-900/16 px-2.5 py-1 text-[0.64rem] font-semibold uppercase tracking-[0.14em] text-zinc-700 sm:text-[0.72rem]"
                        >
                          {categoryTag}
                        </span>
                      ))}
                    </div>
                  ) : null}

                  <p className="mt-3 break-words text-sm leading-6 text-zinc-700 sm:text-base sm:leading-7">
                    {activeProject.summary}
                  </p>

                  <ul className="mt-4 grid gap-2 text-sm text-zinc-700 sm:grid-cols-2">
                    {activeProject.highlights.map((highlight, index) => (
                      <li
                        key={highlight}
                        className={`min-w-0 items-start gap-2 break-words ${index > 1 ? "hidden sm:flex" : "flex"}`}
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-amber-400" />
                        {highlight}
                      </li>
                    ))}
                  </ul>

                  <TechStackSection stack={activeProject.techStack} className="mt-4" />

                  {isFinalProject ? (
                    <div className="mt-4 rounded-2xl border border-[#dfcfb8] bg-[#fff8ea] p-3">
                      <p className="text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-zinc-700/80">
                        Finish line reached
                      </p>
                      <p className="mt-1 text-sm font-medium text-zinc-800">
                        Ready to see what we can do next?
                      </p>
                      <button
                        type="button"
                        onClick={jumpToServices}
                        className="mt-2 inline-flex items-center rounded-full bg-zinc-900 px-3 py-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-white transition hover:bg-zinc-800"
                      >
                        Go to services
                        <ArrowUpRight className="ml-1.5 h-3.5 w-3.5" />
                      </button>
                    </div>
                  ) : null}

                  {activeProject.showcase?.appStoreBadge &&
                  activeProject.showcase?.googlePlayBadge ? (
                    <div className="mt-2.5 grid grid-cols-2 gap-3 lg:hidden">
                      <a
                        href={activeProject.showcase.appStoreUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex min-w-0 items-center justify-center overflow-hidden rounded-xl py-1.5"
                        aria-label={`Open ${activeProject.name} on Apple App Store`}
                      >
                        <Image
                          src={activeProject.showcase.appStoreBadge}
                          alt="Download on the App Store"
                          width={132}
                          height={40}
                          className="h-10 w-auto object-contain"
                        />
                      </a>
                      <a
                        href={activeProject.showcase.googlePlayUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex min-w-0 items-center justify-center overflow-hidden rounded-xl py-1.5"
                        aria-label={`Open ${activeProject.name} on Google Play`}
                      >
                        <Image
                          src={activeProject.showcase.googlePlayBadge}
                          alt="Get it on Google Play"
                          width={132}
                          height={40}
                          className="h-10 w-auto object-contain"
                        />
                      </a>
                    </div>
                  ) : null}

                  <div className="mt-4 hidden lg:flex lg:flex-wrap lg:gap-2">
                    {projects.map((project, index) => (
                      <button
                        key={project.slug}
                        type="button"
                        onClick={() => jumpToProject(index)}
                        className={`shrink-0 rounded-full px-4 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.14em] transition ${
                          index === activeIndex
                            ? "bg-zinc-900 text-white"
                            : "border border-zinc-900/14 bg-white text-zinc-700 hover:bg-zinc-100"
                        }`}
                        aria-label={`Jump to ${project.name}`}
                        aria-pressed={index === activeIndex}
                      >
                        {project.name}
                      </button>
                    ))}
                  </div>
                </aside>

                <div className="order-3 border-t border-[#decfbf] bg-white/96 px-3 py-1.5 lg:hidden">
                  <p className="mb-1 text-center text-[0.56rem] font-semibold uppercase tracking-[0.16em] text-zinc-600">
                    Project {activeIndex + 1} of {projects.length}
                  </p>
                  <div className="overflow-hidden pb-0.5">
                    <motion.div
                      key={activeProject.slug}
                      initial={{ x: 14, opacity: 0.86 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.28, ease: "easeOut" }}
                      className="grid grid-cols-4 items-center gap-1.5"
                    >
                      {mobilePreviewProjects.map((project, wheelOrder) => {
                        const isActiveWheelItem = wheelOrder === 0;

                        return (
                          <button
                            key={`${project.slug}-mobile-pill-${wheelOrder}`}
                            type="button"
                            onClick={() => jumpToProject(project.index)}
                            className={`min-w-0 rounded-full px-2.5 py-1.5 text-[0.58rem] font-semibold uppercase tracking-[0.12em] transition ${
                              isActiveWheelItem
                                ? "col-span-2 bg-zinc-900 text-white"
                                : "col-span-1 border border-zinc-900/14 bg-white text-zinc-700 hover:bg-zinc-100"
                            }`}
                            aria-label={`Jump to ${project.name}`}
                            aria-pressed={project.index === activeIndex}
                          >
                            <span className="block min-w-0 truncate text-center">
                              {isActiveWheelItem
                                ? project.name
                                : (project.shortName || project.name)}
                            </span>
                          </button>
                        );
                      })}
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pointer-events-none" aria-hidden="true">
          {projects.map((project, index) => (
            <div
              key={project.slug}
              ref={(node) => {
                stepRefs.current[index] = node;
              }}
              data-step-index={index}
              className="h-[86svh] md:h-[88svh]"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export const navLinks = [
  { href: "#work", label: "Work" },
  { href: "#services", label: "Services" },
  { href: "#why-jiti", label: "Why Jiti" },
  { href: "#contact", label: "Contact" },
];

export const contact = {
  email: "hello@jiti.ltd",
  emailLink:
    "mailto:hello@jiti.ltd?subject=Hey%2C%20I%20saw%20your%20portfolio.%20I%20wanted%20to%20get%20in%20touch.",
  instagramHandle: "@jiti.ltd",
  instagramLink: "https://instagram.com/jiti.ltd",
};

export const projects = [
  {
    slug: "guides-app",
    name: "Guides.app",
    shortName: "Guides",
    category: "Travel Tech",
    tagline:
      "A self-guided tour platform for web, iOS, and Android with offline-first mobile experiences.",
    summary:
      "We designed and built Guides as a trusted travel platform where users can discover self-guided tours, explore landmarks, and continue tours smoothly while offline.",
    gradient: "from-[#fff5d8] via-[#ffe9ac] to-[#ffd152]",
    accent: "bg-amber-400",
    accentColor: "#ffd152",
    laptopTitle: "Self-guided discovery platform",
    phoneTitle: "Offline walking experience",
    logo: {
      text: "Guides",
      src: "/logos/guides-icon.png",
      wordmarkSrc: "/logos/guides-logo.svg",
      alt: "Guides.app logo",
    },
    highlights: [
      "Self-guided tours by city and landmark",
      "Offline app support on iOS and Android",
      "Interactive maps and guided audio",
    ],
    techStack: [
      { name: "Python", icon: "FileCode2" },
      { name: "React", icon: "Atom" },
      { name: "React Native", icon: "Smartphone" },
      { name: "AWS", icon: "Cloud" },
    ],
    services: ["Product design", "Platform engineering", "Mobile app delivery"],
    showcase: {
      desktopImage: "/Guides.app_Showcase.webp",
      mobileImage: "/Guides.app_Showcase.png",
      imageFit: "cover",
      appStoreBadge: "/logos/guides-app-store.svg",
      googlePlayBadge: "/logos/guides-google-play.svg",
      appStoreUrl:
        "https://apps.apple.com/gb/app/guides-discover-as-you-walk/id6765522739",
      googlePlayUrl:
        "https://play.google.com/store/apps/details?id=app.guides.mobile&pcampaignid=web_share",
      websiteUrl: "https://guides.app/",
      features: [
        "Offline access",
        "Self-guided experiences",
        "Interactive maps",
        "Built for exploring",
      ],
    },
  },
  {
    slug: "property-codes",
    name: "Property.Codes",
    shortName: "Property",
    category: "PropTech",
    tagline:
      "A patent-pending hot lead generator for estate agents with real-time notifications.",
    summary:
      "We built a lead-intent pipeline that captures buyer signals, scores urgency, and alerts sales teams instantly so high-intent prospects are reached first.",
    gradient: "from-lime-200 via-emerald-100 to-teal-200",
    accent: "bg-emerald-600",
    accentColor: "#10b981",
    laptopTitle: "Lead signal intelligence",
    phoneTitle: "Agent alert stream",
    logo: {
      text: "Property.Codes",
      src: "",
      alt: "Property.Codes logo",
    },
    highlights: [
      "Patent-pending approach",
      "Live intent signals",
      "Automated routing",
    ],
    services: ["Platform architecture", "Workflow automation", "Realtime notifications"],
  },
  {
    slug: "single-cards",
    name: "Single.Cards",
    shortName: "Single",
    category: "Marketplace",
    tagline:
      "A trading card marketplace with AI card scanning, Stripe payments, and robust database management.",
    summary:
      "From listing flow to checkout, we delivered a polished marketplace that balances collector-grade detail with fast transaction performance.",
    gradient: "from-rose-200 via-orange-100 to-amber-200",
    accent: "bg-rose-600",
    accentColor: "#f43f5e",
    laptopTitle: "Marketplace operations view",
    phoneTitle: "AI scan + list flow",
    logo: {
      text: "Single.Cards",
      src: "",
      alt: "Single.Cards logo",
    },
    highlights: ["AI card recognition", "Stripe integration", "Seller inventory tooling"],
    services: ["E-commerce build", "Payment integration", "Data modeling"],
  },
  {
    slug: "rocup",
    name: "Rocup",
    shortName: "Rocup",
    category: "Community Commerce",
    tagline:
      "Community commerce with shop check-in, rewards, leaderboards, and Shopify and CRM integrations.",
    summary:
      "We connected engagement mechanics and commerce systems into one playful platform that drives repeat participation and measurable retention.",
    gradient: "from-zinc-200 via-stone-100 to-orange-100",
    accent: "bg-zinc-900",
    accentColor: "#18181b",
    laptopTitle: "Partner and reward console",
    phoneTitle: "Leaderboard + rewards",
    logo: {
      text: "Rocup",
      src: "",
      alt: "Rocup logo",
    },
    highlights: [
      "Check-in gamification",
      "Reward economy",
      "Shopify and CRM sync",
    ],
    services: ["Platform UX", "Integration engineering", "Growth loops"],
  },
  {
    slug: "shrink-my-house",
    name: "Shrink my House",
    shortName: "Shrink",
    category: "Service Website",
    tagline:
      "A conversion-focused service site with CRM integration, automation, and 5-star review outcomes.",
    summary:
      "We rebuilt the full inquiry journey so lead capture, routing, and follow-up happen automatically while the brand stays clear and trustworthy.",
    gradient: "from-fuchsia-200 via-purple-100 to-blue-200",
    accent: "bg-violet-600",
    accentColor: "#7c3aed",
    laptopTitle: "Service funnel dashboard",
    phoneTitle: "Booking and trust flow",
    logo: {
      text: "Shrink my House",
      src: "",
      alt: "Shrink my House logo",
    },
    highlights: [
      "Automation-first operations",
      "CRM-connected forms",
      "5-star review support",
    ],
    services: ["Web build", "CRM integration", "Funnel optimization"],
  },
];

export const services = [
  {
    title: "Product Design",
    description:
      "From rough concepts to launch-ready experiences, we design interfaces and flows that feel premium and behave clearly.",
    bullets: ["UX strategy", "UI systems", "Prototype testing"],
    icon: "Palette",
  },
  {
    title: "Software Development",
    description:
      "Web apps, mobile apps, and platforms engineered for reliability, speed, and maintainable growth.",
    bullets: ["Frontend and backend", "API architecture", "Quality-focused delivery"],
    icon: "Code2",
  },
  {
    title: "Automation + Integrations",
    description:
      "We remove repetitive admin with connected workflows across CRMs, commerce stacks, and messaging systems.",
    bullets: ["CRM automation", "Shopify ecosystems", "Operational analytics"],
    icon: "Workflow",
  },
  {
    title: "Email Design + CRM Setup",
    description:
      "We design high-converting email journeys and configure CRM foundations so campaigns and pipelines run smoothly.",
    bullets: ["Lifecycle email design", "CRM setup and data hygiene", "Template and automation handover"],
    icon: "Mail",
  },
  {
    title: "E-commerce + Marketplaces",
    description:
      "Commerce builds tuned for conversion, retention, and smooth operations at scale.",
    bullets: ["Checkout optimization", "Seller tooling", "Payment orchestration"],
    icon: "ShoppingBag",
  },
  {
    title: "Branding",
    description:
      "Visual systems and messaging that position your offer clearly and hold together across every customer touchpoint.",
    bullets: ["Brand direction", "Launch assets", "Voice and positioning"],
    icon: "Sparkles",
  },
];

export const whyJiti = [
  {
    title: "Design + Build in One Studio",
    description:
      "No handoff friction. Strategy, design, engineering, and automation sit in one team with shared momentum.",
  },
  {
    title: "Business-Led Decisions",
    description:
      "We care about growth signals: activation, conversion, retention, and operational speed, not just pretty screens.",
  },
  {
    title: "Built for Real-World Constraints",
    description:
      "We design for uncertain connectivity, legacy tools, and delivery pace so the final product performs in real usage.",
  },
];

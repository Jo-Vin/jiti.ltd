export const navLinks = [
  { href: "#work", label: "Work" },
  { href: "#services", label: "Services" },
  { href: "#reviews", label: "Reviews" },
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
    slug: "rocup",
    name: "Rocup",
    shortName: "Rocup",
    category: ["CTO", "Community", "App", "Web", "CRM"],
    tagline:
      "Complete system link community & commerce with shop check-in, rewards, leaderboards, and Shopify and CRM integrations.",
    summary:
      "As CTO of Rocup, the growing fitness brand with partnerships with Gymshark, Redbull, Grenade & Wing Stop, we work on the BAU systems & on the technology touch points that connected engagement mechanics and commerce systems into one complete platform that drives repeat participation, measurable retention and drives sales.",
    gradient: "from-zinc-200 via-stone-100 to-orange-100",
    accent: "bg-zinc-900",
    accentColor: "#18181b",
    laptopTitle: "Partner and reward console",
    phoneTitle: "Leaderboard + rewards",
    logo: {
      text: "Rocup",
      src: "/clients/Rocup_Logo.png",
      alt: "Rocup logo",
      layout: "wide",
      chipClass: "border-zinc-900/25 bg-zinc-900",
      imageClass: "h-auto w-full object-contain",
    },
    highlights: [
      "Rocup iOS & Andorid App",
      "CRM",
      "Check-in gamification",
      "Reward economy",
      "Shopify and CRM sync",
    ],
    services: ["Platform UX", "Integration engineering", "Growth loops"],
    showcase: {
      desktopImage: "/clients/Rocup_Web_Desktop.png",
      mobileImage: "/clients/Rocup_App_Mobile.jpeg",
      mobileShowcaseImages: [
        "/clients/Rocup_App_Mobile.jpeg",
      ],
      mobilePortraitImages: ["/clients/Rocup_App_Mobile.jpeg", "/clients/Rocup_Pace_Calculator.png"],
      desktopImageFit: "contain",
      mobileImageFit: "contain",
      mobileNoFrame: true,
      mobileImageRadius: 20,
    },
  },
  {
    slug: "guides-app",
    name: "Guides.app",
    shortName: "Guides",
    category: ["Travel Tech", "App", "Web", "QR"],
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
      desktopImage: "/clients/Guides.app_Showcase.webp",
      mobileImage: "/clients/Guides.app_Showcase_London.png",
      mobileShowcaseImages: [
        "/clients/Guides.app_Showcase_London.png",
        "/clients/Guides.app_Showcase.webp",
        "/clients/Guides.app_App_Showcase.png",
      ],
      mobilePortraitImages: [
        "/clients/Guides.app_Showcase_London.png",
        "/clients/Guides.app_App_Showcase.png",
      ],
      desktopImageFit: "contain",
      mobileImageFit: "contain",
      mobileNoFrame: true,
      mobileImageRadius: 20,
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
    slug: "disposable-app",
    name: "Disposable.app",
    shortName: "Disposable",
    category: ["Photo Sharing", "App", "PHP", "Co-founded"],
    tagline:
      "International photo-sharing app startup built in PHP, with outreach-led growth.",
    summary:
      "Co-founded and developed Disposable.app, an international photo-sharing startup used in over 120 countries and now ranking #1 on Google.com.",
    gradient: "from-cyan-200 via-sky-100 to-indigo-200",
    accent: "bg-sky-600",
    accentColor: "#0284c7",
    laptopTitle: "Global photo-sharing growth engine",
    phoneTitle: "International sharing feed",
    logo: {
      text: "Disposable.app",
      src: "/clients/disposable_logo_white.png",
      alt: "Disposable.app logo",
      chipClass: "border-sky-900/22 bg-sky-700/95",
      imageClass: "h-full w-full object-contain",
    },
    highlights: [
      "Built in PHP from the ground up",
      "Used in over 120 countries",
      "Co-founded with outreach-led growth",
    ],
    services: ["Product build", "PHP engineering", "Founder-led outreach"],
    showcase: {
      desktopImage: "/clients/disposable_desktop.png",
      mobileImage: "/clients/disposable_mobile.png",
      mobileShowcaseImages: [
        "/clients/disposable_mobile.png",
      ],
      mobilePortraitImages: ["/clients/disposable_mobile.png", "/clients/disposable_mobile_pics.png"],
      desktopImageFit: "contain",
      mobileImageFit: "contain",
      mobileNoFrame: true,
      mobileImageRadius: 20,
    },
  },
  {
    slug: "single-cards",
    name: "Single.Cards",
    shortName: "Single",
    category: ["E-commerce", "Marketplace", "AI", "Stripe"],
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
      src: "/clients/Single_Cards_Logo.png",
      alt: "Single.Cards logo",
      chipClass: "border-zinc-900/24 bg-zinc-900",
      imageClass: "h-full w-full object-contain",
    },
    highlights: ["AI card recognition", "Stripe integration", "Seller inventory tooling"],
    services: ["E-commerce build", "Payment integration", "Data modeling"],
    showcase: {
      desktopImage: "/clients/Single.cards_Desktop.png",
      mobileImage: "/clients/Single.cards_Mobile.png",
      mobileShowcaseImages: [
        "/clients/Single.cards_Mobile.png",
        "/clients/Single_Cards_Mobile.jpg",
      ],
      mobilePortraitImages: [
        "/clients/Single.cards_Mobile.png",
        "/clients/Single_Cards_Mobile.jpg",
      ],
      desktopImageFit: "contain",
      mobileImageFit: "contain",
      mobileNoFrame: true,
      mobileImageRadius: 20,
    },
  },
  {
    slug: "shrink-my-house",
    name: "Shrink my House",
    shortName: "Shrink",
    category: ["Service Business", "Web", "CRM", "Automation"],
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
      src: "/clients/ShrinkMyHouseLogo.png",
      alt: "Shrink my House logo",
    },
    highlights: [
      "Automation-first operations",
      "CRM-connected forms",
      "5-star review support",
    ],
    services: ["Web build", "CRM integration", "Funnel optimization"],
    showcase: {
      desktopImage: "/clients/ShrinkmyHouseLandingPage.gif",
      mobileImage: "/clients/ShrinkMyHouse_Mobile.png",
      mobileShowcaseImages: [
        "/clients/ShrinkMyHouse_Mobile.png",
      ],
      mobilePortraitImages: ["/clients/ShrinkMyHouse_Mobile.png", '/clients/Shrinkmyhouse_Insta.png'],
      desktopImageFit: "contain",
      mobileImageFit: "contain",
      mobileNoFrame: true,
      mobileImageRadius: 20,
    },
  },
  {
    slug: "juta-asia",
    name: "Juta Asia",
    shortName: "Juta",
    category: ["Property", "Web", "Residential", "Commercial"],
    tagline:
      "Up-market residential and commercial property showcase with premium digital presentation.",
    summary:
      "Juta Asia Corporation Sdn Bhd is a dynamic property development company backed by shareholders with extensive real estate and construction experience, focused on up-market residential and commercial developments and a commercial project on track for Green Building Index (GBI) Gold.",
    gradient: "from-sky-200 via-blue-100 to-emerald-100",
    accent: "bg-[#b49b6d]",
    accentColor: "#b49b6d",
    laptopTitle: "Premium property showcase platform",
    phoneTitle: "Residential + commercial portfolio",
    logo: {
      text: "Juta Asia",
      src: "/clients/JutaAsia_Logo.svg",
      alt: "Juta Asia logo",
      chipClass: "border-[#d5c197] bg-white/95",
      imageClass: "h-full w-full object-contain p-1",
    },
    highlights: [
      "Up-market residential project presentation",
      "Commercial property pipeline with GBI Gold trajectory",
      "Brand-led browsing on desktop and mobile",
    ],
    services: ["Web experience design", "Frontend development", "Brand presentation systems"],
    showcase: {
      desktopImage: "/clients/JutaAsia_Desktop.png",
      mobileImage: "/clients/JutaAsia_Mobile.png",
      mobileShowcaseImages: [
        "/clients/JutaAsia_Mobile.png",
      ],
      mobilePortraitImages: ["/clients/JutaAsia_Mobile.png"],
      desktopImageFit: "contain",
      mobileImageFit: "contain",
      mobileNoFrame: true,
      mobileImageRadius: 20,
    },
  },
  {
    slug: "cet",
    name: "CET",
    shortName: "CET",
    category: ["Events", "E-commerce", "Web", "Tickets"],
    tagline:
      "Ticketing storefront for premium event and hospitality packages with clear conversion paths.",
    summary:
      "We built CET as a focused commerce experience for event ticket and hospitality packages, balancing premium brand presentation with a straightforward path from browsing to cart.",
    gradient: "from-emerald-200 via-slate-100 to-blue-200",
    accent: "bg-emerald-600",
    accentColor: "#16a34a",
    laptopTitle: "Event ticket commerce experience",
    phoneTitle: "Mobile ticket checkout flow",
    logo: {
      text: "Corporate Event Tickets",
      src: "/clients/CETLogoMist.png",
      alt: "Corporate Event Tickets logo",
      layout: "wide",
      chipClass: "border-emerald-500/35 bg-zinc-900/95",
      imageClass: "h-auto w-full object-contain",
    },
    highlights: [
      "Premium package-led event merchandising",
      "Fast mobile product and cart journey",
      "Brand-consistent navigation and conversion UX",
    ],
    services: ["E-commerce UX", "Web development", "Conversion optimisation"],
    showcase: {
      desktopImage: "/clients/CETDesktop.png",
      mobileImage: "/clients/CETMobile.png",
      mobileShowcaseImages: ["/clients/CETMobile.png"],
      mobilePortraitImages: ["/clients/CETMobile.png", "/clients/CET_Mobile Wembley.png"],
      desktopImageFit: "contain",
      mobileImageFit: "contain",
      mobileNoFrame: true,
      mobileImageRadius: 20,
    },
  },
  //   {
  //   slug: "property-codes",
  //   name: "Property.Codes",
  //   shortName: "Property",
  //   category: ["PropTech", "Web", "CRM", "Automation"],
  //   tagline:
  //     "A patent-pending hot lead generator for estate agents with real-time notifications.",
  //   summary:
  //     "We built a lead-intent pipeline that captures buyer signals, scores urgency, and alerts sales teams instantly so high-intent prospects are reached first.",
  //   gradient: "from-lime-200 via-emerald-100 to-teal-200",
  //   accent: "bg-emerald-600",
  //   accentColor: "#10b981",
  //   laptopTitle: "Lead signal intelligence",
  //   phoneTitle: "Agent alert stream",
  //   logo: {
  //     text: "Property.Codes",
  //     src: "",
  //     alt: "Property.Codes logo",
  //   },
  //   highlights: [
  //     "Buyer intent capture",
  //     "Live intent signals",
  //     "Automated routing",
  //   ],
  //   services: ["Platform architecture", "Workflow automation", "Realtime notifications"],
  // },
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

export const socialProof = {
  totalReviews: 10,
  rating: 5,
  headline: "Client feedback from real projects delivered by our team.",
};

export const testimonials = [
  {
    quote:
      "The service we received went above and beyond website development. Jo-Vin brought depth across business and product decisions, guided us through visual directions, and delivered a final result that lines up perfectly with our brand.",
    shortQuote:
      "The service went above and beyond, and the final result lines up perfectly with our brand.",
    author: "Alexandra Hyde",
    company: "Shrink My House",
  },
  {
    quote:
      "Surpassed my expectations with attention to detail and produced a fantastic logo.",
    author: "Dee Banks",
    company: "China Unboxed",
  },
    {
    quote:
      "Great designer who matched my expectations, very efficient and professional.",
    author: "Leon",
    company: "Legacy 1 Fitness",
  },
  {
    quote:
      "Created a user-friendly website that met the design intent and more.",
    author: "Lewis Tompson",
    company: "Asyleam",
  },
  {
    quote: "Great website.",
    author: "Ethan Nath",
    company: "Outside The Bubbles",
  },
  {
    quote: "Efficient workflow.",
    author: "Yue Wai-Ming",
    company: "Mass Music Studios",
  },
  {
    quote: "10/10.",
    author: "Shakeel Faraz",
    company: "Corporate Event Tickets",
  },
  {
    quote: "Overall 10/10.",
    author: "Daniel Taylor",
    company: "Promo Vehicles",
  },
  {
    quote: "Would highly recommend to others.",
    author: "Adam Patel",
    company: "Fastrack Solutions",
  },
];

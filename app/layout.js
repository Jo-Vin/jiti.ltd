import { DM_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";

const headingFont = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["500", "700"]
});

const bodyFont = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "700"]
});

export const metadata = {
  metadataBase: new URL("https://www.jiti.ltd"),
  title: {
    default: "Jiti Ltd | Product Design + Software Studio",
    template: "%s | Jiti Ltd"
  },
  description:
    "Jiti Ltd is a premium studio for product design, software development, web and app builds, automation, e-commerce, marketplaces, and branding.",
  keywords: [
    "Jiti Ltd",
    "product design studio",
    "software development agency",
    "web app development",
    "mobile app development",
    "e-commerce development",
    "automation agency",
    "marketplace development",
    "branding studio"
  ],
  openGraph: {
    title: "Jiti Ltd | Product Design + Software Studio",
    description:
      "Premium product design, software development, automation, and digital build work for ambitious teams.",
    url: "https://www.jiti.ltd",
    siteName: "Jiti Ltd",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Jiti Ltd portfolio preview"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Jiti Ltd | Product Design + Software Studio",
    description:
      "Premium product design, software development, automation, and digital build work for ambitious teams.",
    images: ["/og-image.svg"]
  },
  icons: {
    icon: "/logos/Jiti_Square_White.png",
    shortcut: "/logos/Jiti_Square_White.png",
    apple: "/logos/Jiti_Square_White.png"
  }
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${headingFont.variable} ${bodyFont.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[var(--canvas)] text-[var(--ink)]">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-[60] focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-black"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}

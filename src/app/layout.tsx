import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
import { baseUrl } from "./sitemap";
import { Header, Footer } from "@/components";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { cn } from "@/lib/style";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Viviane Dias",
    template: "%s | Viviane Dias",
  },
  description:
    "Hi! I'm Viviane Dias, a full-stack software engineer with over 5+ years of experience based in São Paulo, Brazil.",
  openGraph: {
    title: "Viviane Dias | Portfolio",
    description:
      "Hi! I'm Viviane Dias, a full-stack software engineer with over 5+ years of experience based in São Paulo, Brazil.",
    url: baseUrl,
    siteName: "Viviane Dias's Portfolio",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <body
        className={cn(
          geistSans.variable,
          geistMono.variable,
          "flex min-h-dvh flex-col items-center",
          "bg-gradient-to-b from-teal-50 to-violet-50",
          "dark:bg-gradient-to-b dark:from-gray-950 dark:to-gray-900",
          "bg-teal-50dark:bg-gray-900",
          "text-gray-900 antialiased dark:text-gray-200"
        )}
      >
        <Header />
        <main className="flex w-full flex-1 flex-col px-6 md:max-w-3xl">
          {children}
        </main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}

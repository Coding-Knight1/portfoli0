import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/Navigation";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: "Shreyas GN | Backend Engineer",
  description: "Backend-focused software engineer with strong fundamentals in data structures, backend architecture, and database systems.",
};

import { SmoothScroll } from "@/components/ui/SmoothScroll";
import { Noise } from "@/components/ui/Noise";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${jetBrainsMono.variable} font-mono bg-[#fcfcfb] text-[#111111] antialiased selection:bg-[#5e5ce6] selection:text-white`}
      >
        <Noise />
        <SmoothScroll>
          <Navigation />
          <main className="min-h-screen">
            {children}
          </main>
        </SmoothScroll>
      </body>
    </html>
  );
}

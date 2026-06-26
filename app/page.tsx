// FILE: app/page.tsx

import React from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { SocialProof } from "@/components/SocialProof";
import { Pricing } from "@/components/Pricing";
import { Footer } from "@/components/Footer";
import { ScrollReveal } from "@/components/ScrollReveal";

export default function Home() {
  return (
    <>
      {/* Scroll Reveal Observer Script */}
      <ScrollReveal />

      {/* Accessible Skip Link for Keyboard Users */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-primary focus:text-bg focus:px-6 focus:py-3 focus:rounded-lg focus:outline-none focus:ring-2 focus:ring-accent font-sans font-bold"
      >
        Skip to main content
      </a>

      {/* Main Navigation Header */}
      <Navbar />

      {/* Main Core Content */}
      <main id="main-content" className="relative">
        <Hero />
        <Features />
        <SocialProof />
        <Pricing />
      </main>

      {/* Footer Resources */}
      <Footer />
    </>
  );
}

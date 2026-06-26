// FILE: app/docs/page.tsx

import React from "react";
import { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Developer Documentation | NeuralFlow AI",
  description: "Learn how to build, deploy, and scale streaming pipelines and serverless AI orchestrations with NeuralFlow.",
};

export default function DocsPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="relative min-h-screen bg-bg pt-24 sm:pt-32 pb-16 px-4 sm:px-6 lg:px-8 font-sans">
        <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Docs Sidebar (Desktop) */}
          <aside className="lg:col-span-3 hidden lg:flex flex-col gap-6 border-r border-border/60 pr-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-primary font-mono">Getting Started</span>
              <ul className="mt-3 space-y-2.5">
                <li><a href="#quickstart" className="text-sm font-medium text-text hover:text-primary transition-hover">Quickstart</a></li>
                <li><a href="#installation" className="text-sm font-medium text-muted hover:text-text transition-hover">Installation</a></li>
                <li><a href="#architecture" className="text-sm font-medium text-muted hover:text-text transition-hover">Core Architecture</a></li>
              </ul>
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-accent font-mono">API Guides</span>
              <ul className="mt-3 space-y-2.5">
                <li><a href="#api" className="text-sm font-medium text-muted hover:text-text transition-hover">API Reference</a></li>
                <li><a href="#status" className="text-sm font-medium text-muted hover:text-text transition-hover">System Status</a></li>
                <li><a href="#cli" className="text-sm font-medium text-muted hover:text-text transition-hover">CLI Tooling</a></li>
              </ul>
            </div>
          </aside>

          {/* Docs Content */}
          <article className="lg:col-span-9 flex flex-col gap-12 leading-relaxed">
            {/* Section 1: Intro */}
            <section id="quickstart" className="scroll-mt-28">
              <h1 className="text-3xl sm:text-4xl font-mono font-bold tracking-tight text-text">
                Documentation &amp; Quickstart
              </h1>
              <p className="mt-4 text-base sm:text-lg text-muted">
                Welcome to the NeuralFlow AI developer docs. Learn how to initialize streaming ingest pipelines, connect to our global edge proxy, and orchestrate serverless flows.
              </p>

              {/* Code snippet */}
              <div className="mt-6 rounded-xl border border-border bg-[#0A0D14] p-5 font-mono text-sm leading-relaxed overflow-x-auto text-[#F3F6F9]">
                <div className="flex items-center justify-between pb-3 border-b border-border/40 text-xs text-muted mb-3 select-none">
                  <span>Terminal</span>
                  <span className="text-primary font-bold">CLI</span>
                </div>
                <div className="text-primary font-bold">$ npm install @neuralflow/core</div>
                <div className="text-muted mt-1"># Initialize a low-latency transform pipeline</div>
                <div className="text-primary font-bold mt-1">$ npx neuralflow init --template=scale</div>
              </div>
            </section>

            {/* Section 2: Installation */}
            <section id="installation" className="scroll-mt-28 border-t border-border/40 pt-8">
              <h2 className="text-2xl font-mono font-bold text-text">Installation &amp; Setup</h2>
              <p className="mt-3 text-sm sm:text-base text-muted">
                NeuralFlow integrates natively with Node.js 18+, Python 3.9+, and Go 1.18+. Configuration settings can be set locally via environmental variables or fetched from your enterprise control pane.
              </p>
              <div className="mt-6 rounded-xl border border-border bg-[#0A0D14] p-5 font-mono text-xs leading-relaxed overflow-x-auto">
                <span className="text-[#C678DD]">const</span> <span className="text-[#61AFEF]">flow</span> = <span className="text-[#C678DD]">new</span> <span className="text-[#98C379]">NeuralFlow</span>({"{ "}
                <span className="text-[#D19A66]">apiKey</span>: process.env.NEURALFLOW_API_KEY, 
                <span className="text-[#D19A66]">latencyMode</span>: <span className="text-[#98C379]">&quot;ultra-low&quot;</span> 
                {"});"}
              </div>
            </section>

            {/* Section 3: API Reference */}
            <section id="api" className="scroll-mt-28 border-t border-border/40 pt-8">
              <h2 className="text-2xl font-mono font-bold text-text">REST / GraphQL API Reference</h2>
              <p className="mt-3 text-sm sm:text-base text-muted">
                Execute automated serverless decision flows with standard HTTP endpoints. The default base endpoint is globally proxied to route incoming events to the nearest active edge cell within 18ms.
              </p>
              <div className="mt-4 border border-border bg-[#101726]/40 rounded-xl p-4 flex flex-col gap-3 font-mono text-xs text-text">
                <div className="flex gap-2.5 items-center">
                  <span className="bg-primary/10 border border-primary/20 text-primary px-2.5 py-0.5 rounded font-bold uppercase">POST</span>
                  <span className="text-muted">https://api.neuralflow.ai/v1/stream</span>
                </div>
                <div className="text-[11px] text-muted">Returns real-time pipeline telemetry and transform logs.</div>
              </div>
            </section>

            {/* Section 4: System Status */}
            <section id="status" className="scroll-mt-28 border-t border-border/40 pt-8">
              <h2 className="text-2xl font-mono font-bold text-text">System Status</h2>
              <p className="mt-3 text-sm sm:text-base text-muted">
                We guarantee 99.99% system uptime SLA for all Enterprise clients. Active checks run from 12 edge points globally.
              </p>
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="border border-border/80 bg-surface/30 p-4 rounded-xl flex items-center justify-between font-sans">
                  <div>
                    <span className="block text-sm font-semibold text-text">Edge Cells</span>
                    <span className="block text-xs text-muted">152 active nodes</span>
                  </div>
                  <span className="text-xs font-bold font-mono text-primary bg-primary/10 px-2 py-0.5 rounded">ONLINE</span>
                </div>
                <div className="border border-border/80 bg-surface/30 p-4 rounded-xl flex items-center justify-between font-sans">
                  <div>
                    <span className="block text-sm font-semibold text-text">Average Latency</span>
                    <span className="block text-xs text-muted">Last 24 hours</span>
                  </div>
                  <span className="text-xs font-bold font-mono text-accent bg-accent/10 px-2 py-0.5 rounded">18.4ms</span>
                </div>
              </div>
            </section>
          </article>
        </div>
      </main>
      <Footer />
    </>
  );
}

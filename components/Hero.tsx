// FILE: components/Hero.tsx

"use client";

import React, { useState, useEffect } from "react";

export const Hero = React.memo(function Hero() {
  const [isDemoOpen, setIsDemoOpen] = useState(false);

  useEffect(() => {
    if (!isDemoOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsDemoOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isDemoOpen]);

  const handleStartFreeTrial = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });
    setTimeout(() => {
      const proCta = document.getElementById("pro-cta");
      if (proCta) {
        proCta.focus();
        proCta.classList.add("ring-4", "ring-primary/45");
        setTimeout(() => proCta.classList.remove("ring-4", "ring-primary/45"), 1500);
      }
    }, 600);
  };
  return (
    <section
      className="relative flex min-h-[calc(100vh-4rem)] sm:min-h-[calc(100vh-5rem)] w-full items-center justify-center overflow-hidden bg-bg px-4 py-16 sm:px-6 lg:px-8 font-sans"
      aria-label="Introduction to NeuralFlow AI"
    >
      {/* Background Animated Gradient Mesh & Blurry Blobs */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none overflow-hidden">
        {/* Blurry blob 1 */}
        <div
          className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px] animate-[floatBlob_18s_infinite_ease-in-out]"
          aria-hidden="true"
        />
        {/* Blurry blob 2 */}
        <div
          className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] bg-accent/5 rounded-full blur-[120px] animate-[floatBlob_14s_infinite_ease-in-out_2s]"
          aria-hidden="true"
        />
        {/* Shifting radial gradient mesh */}
        <div
          className="absolute inset-0 opacity-15 mix-blend-screen filter blur-[100px] animate-[gradientShift_15s_ease_infinite]"
          style={{
            backgroundImage: `
              radial-gradient(circle at 30% 20%, var(--color-primary) 0%, transparent 60%),
              radial-gradient(circle at 70% 80%, var(--color-accent) 0%, transparent 60%)
            `,
            backgroundSize: "200% 200%",
          }}
          aria-hidden="true"
        />
        {/* Subtle high-tech grid layer */}
        <div
          className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:3.5rem_3.5rem]"
          aria-hidden="true"
        />
        {/* Gradient mask */}
        <div
          className="absolute inset-0 bg-gradient-to-b from-bg via-transparent to-bg"
          aria-hidden="true"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Side: Value Proposition */}
        <div className="lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left">
          {/* Floating Badge */}
          <div className="animate-entry inline-flex items-center gap-2 rounded-full border border-border bg-surface/65 backdrop-blur-md px-3.5 py-1.5 text-xs font-semibold text-muted transition-hover hover:border-primary/50 shadow-md font-mono uppercase tracking-wider">
            <span className="text-primary" aria-hidden="true">⚡</span>
            <span>Trusted by 10,000+ engineers</span>
          </div>

          {/* Headline - JetBrains Mono */}
          <h1 className="animate-entry mt-6 font-mono text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-text leading-[1.15] text-balance">
            Automate Everything.
            <br />
            Accelerate Intelligence with{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent bg-[size:200%_auto] animate-[gradientShift_10s_ease_infinite]">
              AI Automation
            </span>
          </h1>

          {/* Subheadline - Inter (max-w-3xl for better text wrapping) */}
          <p className="animate-entry animate-entry-delay-1 mt-6 font-sans text-base sm:text-lg md:text-xl text-muted max-w-3xl leading-relaxed text-pretty">
            NeuralFlow AI transforms raw data into real-time decisions. Built for
            unparalleled enterprise scale, designed for lightning speed.
          </p>

          {/* Call to Actions - Inter */}
          <div className="animate-entry animate-entry-delay-2 mt-8 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto font-sans">
            <a
              href="#pricing"
              onClick={handleStartFreeTrial}
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-lg bg-primary hover:bg-primary/95 text-bg text-base font-bold py-3.5 px-8 transition-hover shadow-lg shadow-primary/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
              aria-label="Start free trial of NeuralFlow AI"
            >
              Start Free Trial
            </a>
            <button
              type="button"
              onClick={() => setIsDemoOpen(true)}
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-lg border border-border bg-surface/30 hover:bg-surface/80 text-text hover:text-white text-base font-bold py-3.5 px-8 transition-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2"
              aria-label="Watch demo video of NeuralFlow AI"
            >
              Watch Demo
            </button>
          </div>
        </div>

        {/* Right Side: Interactive glassmorphic dashboard mockup */}
        <div className="lg:col-span-6 animate-entry animate-entry-delay-2 hidden lg:block w-full relative">
          {/* Floating Badge 1 */}
          <div className="absolute top-8 -left-12 z-20 px-3.5 py-1.5 rounded-full border border-border/80 bg-surface/90 backdrop-blur-sm shadow-xl text-xs font-semibold text-text select-none animate-badge-float hover:border-primary/50 transition-hover flex items-center gap-1.5 font-mono">
            <span className="text-primary" aria-hidden="true">🔒</span> SOC2 Certified
          </div>
          {/* Floating Badge 2 */}
          <div className="absolute bottom-10 -right-6 z-20 px-3.5 py-1.5 rounded-full border border-border/80 bg-surface/90 backdrop-blur-sm shadow-xl text-xs font-semibold text-text select-none animate-badge-float-delayed hover:border-accent/50 transition-hover flex items-center gap-1.5 font-mono">
            <span className="text-accent" aria-hidden="true">✓</span> SLA 99.99%
          </div>

          <div className="relative rounded-2xl border border-border bg-surface/50 backdrop-blur-sm shadow-2xl shadow-black/40 overflow-hidden w-full max-w-[580px] ml-auto z-10">
            {/* Header: window controls */}
            <div className="bg-[#0A0D14] border-b border-border/80 px-4 py-3.5 flex items-center justify-between font-mono">
              <div className="flex gap-1.5 items-center">
                <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
              </div>
              <span className="text-xs text-muted select-none">neuralflow-dashboard.sh</span>
              <div className="w-12 h-2" />
            </div>

            {/* Dashboard Workspace - JetBrains Mono */}
            <div className="p-5 flex flex-col gap-5 font-mono">
              {/* Row 1: System load and network parameters */}
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-bg/75 border border-border/60 rounded-xl p-3.5 flex flex-col justify-between">
                  <span className="text-[10px] text-muted uppercase tracking-wider font-semibold">Latency</span>
                  <span className="text-lg font-bold text-success mt-1 select-none flex items-center gap-1.5">
                    18ms
                    <span className="w-2.5 h-2.5 rounded-full bg-primary animate-ping" />
                  </span>
                </div>
                <div className="bg-bg/75 border border-border/60 rounded-xl p-3.5 flex flex-col justify-between">
                  <span className="text-[10px] text-muted uppercase tracking-wider font-semibold">Throughput</span>
                  <span className="text-lg font-bold text-text mt-1 select-none">10.4M<span className="text-xs text-muted">/s</span></span>
                </div>
                <div className="bg-bg/75 border border-border/60 rounded-xl p-3.5 flex flex-col justify-between">
                  <span className="text-[10px] text-muted uppercase tracking-wider font-semibold">Status</span>
                  <span className="text-lg font-bold text-accent mt-1 select-none">Healthy</span>
                </div>
              </div>

              {/* Row 2: Live Ingest Graph Mockup */}
              <div className="bg-bg/75 border border-border/60 rounded-xl p-4 flex flex-col">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold text-text">AI Data Pipeline Feed</span>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse" />
                    <span className="text-[10px] text-muted tracking-wide uppercase">Live scaling</span>
                  </div>
                </div>

                {/* SVG Graph stream flow */}
                <div className="w-full h-24 relative overflow-hidden flex items-end">
                  <svg className="w-full h-full" viewBox="0 0 400 100" fill="none">
                    <defs>
                      <linearGradient id="gradient-graph" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="var(--color-primary)" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="var(--color-primary)" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    <line x1="0" y1="25" x2="400" y2="25" stroke="var(--color-border)" strokeWidth="0.5" strokeDasharray="5 5" />
                    <line x1="0" y1="50" x2="400" y2="50" stroke="var(--color-border)" strokeWidth="0.5" strokeDasharray="5 5" />
                    <line x1="0" y1="75" x2="400" y2="75" stroke="var(--color-border)" strokeWidth="0.5" strokeDasharray="5 5" />

                    <path
                      d="M0,80 Q40,65 80,45 T160,55 T240,30 T320,50 T400,20 L400,100 L0,100 Z"
                      fill="url(#gradient-graph)"
                    />
                    <path
                      d="M0,80 Q40,65 80,45 T160,55 T240,30 T320,50 T400,20"
                      stroke="var(--color-primary)"
                      strokeWidth="2.5"
                      className="dash-flow-line"
                    />
                    <path
                      d="M0,80 Q40,65 80,45 T160,55 T240,30 T320,50 T400,20"
                      stroke="var(--color-accent)"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                    {/* Flowing dot animation path overlay */}
                    <path
                      d="M0,80 Q40,65 80,45 T160,55 T240,30 T320,50 T400,20"
                      stroke="var(--color-primary)"
                      strokeWidth="4"
                      strokeLinecap="round"
                      className="dash-flow-dot opacity-90"
                    />
                    {/* Live glowing pulse overlay */}
                    <circle cx="400" cy="20" r="3.5" fill="var(--color-primary)" />
                    <circle cx="400" cy="20" r="7" stroke="var(--color-primary)" strokeWidth="1" fill="none" className="animate-ping" />
                  </svg>
                </div>
              </div>

              {/* Row 3: Live Code Editor */}
              <div className="bg-bg/90 border border-border/80 rounded-xl p-4 text-[11px] leading-relaxed overflow-hidden">
                <div className="flex items-center gap-1.5 text-muted mb-2 pb-2 border-b border-border/40 select-none">
                  <svg className="w-3.5 h-3.5 text-accent" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                  </svg>
                  <span>node-stream.ts</span>
                </div>
                <div className="text-muted flex flex-col gap-0.5">
                  <div>
                    <span className="text-[#E5C07B]">import</span>{" "}
                    <span className="text-[#E06C75]">{"{ NeuralFlow }"}</span>{" "}
                    <span className="text-[#E5C07B]">from</span>{" "}
                    <span className="text-[#98C379]">&quot;@neuralflow/core&quot;</span>;
                  </div>
                  <div>
                    <span className="text-[#C678DD]">const</span>{" "}
                    <span className="text-[#61AFEF]">flow</span> ={" "}
                    <span className="text-[#C678DD]">new</span>{" "}
                    <span className="text-[#98C379]">NeuralFlow</span>({"{ "}
                  </div>
                  <div className="pl-4">
                    <span className="text-[#D19A66]">model</span>:{" "}
                    <span className="text-[#98C379]">&quot;transformer-v4&quot;</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-[#D19A66]">latencyMode</span>:{" "}
                    <span className="text-[#98C379]">&quot;ultra-low&quot;</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-[#D19A66]">autoScale</span>:{" "}
                    <span className="text-[#56B6C2]">true</span>
                  </div>
                  <div>{"});"}</div>
                  <div className="mt-1">
                    <span className="text-[#C678DD]">await</span>{" "}
                    <span className="text-[#61AFEF]">flow</span>.
                    <span className="text-[#61AFEF]">stream</span>(pipeline);
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Demo Modal */}
      {isDemoOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-bg/85 backdrop-blur-md animate-price-change"
          role="dialog"
          aria-modal="true"
          aria-label="Demo Player"
        >
          <div className="relative w-full max-w-4xl bg-surface border border-border rounded-2xl overflow-hidden shadow-2xl">
            {/* Modal header */}
            <div className="bg-[#0A0D14] border-b border-border/80 px-4 py-3.5 flex items-center justify-between font-mono">
              <span className="text-xs text-text font-bold">NeuralFlow AI - Platform Walkthrough</span>
              <button
                type="button"
                onClick={() => setIsDemoOpen(false)}
                className="text-muted hover:text-text focus:outline-none focus:ring-2 focus:ring-primary rounded-md p-1 transition-hover"
                aria-label="Close demo"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            {/* Interactive terminal demo workspace */}
            <div className="aspect-video bg-bg p-6 flex flex-col justify-between font-mono text-sm leading-relaxed overflow-y-auto">
              <div className="flex flex-col gap-2">
                <div className="text-primary font-bold select-none">$ npx neuralflow init --template=auto-scaling-pipeline</div>
                <div className="text-muted">Initializing project configuration...</div>
                <div className="text-success font-semibold">✔ Successfully configured local environment files.</div>
                <div className="text-muted mt-2">Connecting to global edge gateway...</div>
                <div className="text-text mt-1 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-primary animate-ping" />
                  <span>Established connection to 150+ edge nodes (SLA: 99.99%)</span>
                </div>
                <div className="text-muted mt-2">Starting simulation ingest generator...</div>
                <div className="text-accent font-bold mt-1">Ingesting 10.4M messages/sec... Latency: 18ms</div>
                {/* Simulated visual progress bar */}
                <div className="w-full bg-surface border border-border/80 h-2 rounded-full mt-4 overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-primary to-accent animate-[gradientShift_10s_ease_infinite]" style={{ width: "85%" }} />
                </div>
              </div>
              <div className="flex items-center justify-between border-t border-border/40 pt-4 mt-6 text-xs text-muted">
                <span>Press ESC or click close to exit demo</span>
                <span className="text-primary font-bold">NeuralFlow AI CLI v1.4.2</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
});

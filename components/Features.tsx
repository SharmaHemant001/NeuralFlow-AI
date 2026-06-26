// FILE: components/Features.tsx

"use client";

import React, { useState, useEffect } from "react";

interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export const Features = React.memo(function Features() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const handle = (e: MediaQueryListEvent | MediaQueryList) => {
      setIsMobile(e.matches);
    };
    handle(mq);
    mq.addEventListener("change", handle);
    return () => mq.removeEventListener("change", handle);
  }, []);

  const features: Feature[] = [
    {
      title: "Real-Time Pipeline",
      description: "Process millions of events per second with zero latency.",
      icon: (
        <svg
          className="w-6 h-6 text-primary transition-transform duration-200 group-hover:rotate-[8deg] group-hover:scale-110"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: "AI Orchestration",
      description: "Self-healing workflows powered by transformer models.",
      icon: (
        <svg
          className="w-6 h-6 text-accent transition-transform duration-200 group-hover:rotate-[8deg] group-hover:scale-110"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />
        </svg>
      )
    },
    {
      title: "Multi-Cloud Sync",
      description: "Seamless replication across AWS, GCP, and Azure.",
      icon: (
        <svg
          className="w-6 h-6 text-primary transition-transform duration-200 group-hover:rotate-[8deg] group-hover:scale-110"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
          />
        </svg>
      )
    },
    {
      title: "Smart Analytics",
      description: "Predictive dashboards with natural language querying.",
      icon: (
        <svg
          className="w-6 h-6 text-accent transition-transform duration-200 group-hover:rotate-[8deg] group-hover:scale-110"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 002 2h2a2 2 0 002-2z"
          />
        </svg>
      )
    },
    {
      title: "Zero-Config Deploy",
      description: "Ship to production in under 60 seconds.",
      icon: (
        <svg
          className="w-6 h-6 text-primary transition-transform duration-200 group-hover:rotate-[8deg] group-hover:scale-110"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
          />
        </svg>
      )
    },
    {
      title: "Enterprise Security",
      description: "SOC2 compliant with end-to-end encryption.",
      icon: (
        <svg
          className="w-6 h-6 text-primary transition-transform duration-200 group-hover:rotate-[8deg] group-hover:scale-110"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      )
    }
  ];

  return (
    <section
      id="features"
      className="py-24 sm:py-32 bg-bg relative overflow-hidden font-sans"
      aria-label="Platform Features"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20 reveal-on-scroll">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-text leading-tight font-sans">
            Engineered for Scale, Built for Intelligence
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted font-sans">
            NeuralFlow AI powers your core data pipelines with modern architecture and self-healing infrastructure.
          </p>
        </div>

        {/* MOBILE LAYOUT (<768px): Accordion */}
        {isMobile ? (
          <div className="flex flex-col gap-4 border border-border/60 rounded-2xl bg-surface/30 p-4 reveal-on-scroll" role="tablist">
            {features.map((feature, i) => {
              const isActive = activeIndex === i;
              return (
                <article
                  key={feature.title}
                  className={`border-b border-border/40 last:border-b-0 pb-4 last:pb-0 font-sans ${
                    isActive ? "text-text" : "text-muted"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setActiveIndex(isActive ? -1 : i)}
                    className="w-full flex items-center justify-between text-left py-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary rounded-md"
                    aria-expanded={isActive}
                    aria-label={`Toggle description for ${feature.title}`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex items-center justify-center p-2 rounded-lg bg-surface border border-border/80">
                        {feature.icon}
                      </div>
                      <span className="font-semibold text-lg text-text">
                        {feature.title}
                      </span>
                    </div>
                    <svg
                      className={`w-5 h-5 text-muted transition-all duration-150 ease-out ${
                        isActive ? "transform rotate-180 text-primary" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      isActive ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="pl-14 pr-4 py-2 text-sm sm:text-base text-muted leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        ) : (
          /* DESKTOP LAYOUT (>=768px): Bento Grid */
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[180px] reveal-on-scroll">
            {features.map((feature, i) => {
              let gridClasses = "md:col-span-1";
              if (i === 0 || i === 3 || i === 4) {
                gridClasses = "md:col-span-2";
              }

              const isActive = activeIndex === i;

              return (
                <article
                  key={feature.title}
                  onMouseEnter={() => setActiveIndex(i)}
                  className={`group relative rounded-2xl border bg-surface/40 p-6 flex flex-col justify-between h-full transition-all duration-180 ease-out hover:-translate-y-[4px] font-sans ${gridClasses} ${
                    isActive
                      ? "border-primary/60 shadow-[0_4px_25px_rgba(255,200,1,0.18)] -translate-y-[4px]"
                      : "border-border/60 hover:border-primary/50 hover:shadow-[0_4px_20px_rgba(255,200,1,0.12)]"
                  }`}
                >
                  {/* Subtle Inner Glow Background on active bento */}
                  <div
                    className={`absolute inset-0 rounded-2xl pointer-events-none transition-hover duration-300 ${
                      isActive ? "opacity-5" : "opacity-0"
                    }`}
                    style={{
                      backgroundImage: "radial-gradient(circle at 10% 10%, var(--color-primary), transparent 60%)"
                    }}
                    aria-hidden="true"
                  />

                  {/* Top Bar: Icon + Title */}
                  <div className="flex items-start gap-4">
                    <div className="flex items-center justify-center p-3 rounded-xl bg-surface border border-border/80 group-hover:border-primary/30 transition-hover">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-lg sm:text-xl text-text">
                        {feature.title}
                      </h3>
                      <p className="mt-2 text-sm sm:text-base text-muted group-hover:text-text/90 transition-hover leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>

                  {/* Bottom Indicator Line */}
                  <div
                    className={`h-0.5 w-12 rounded-full transition-all duration-300 ${
                      isActive ? "bg-primary w-24" : "bg-border/60"
                    }`}
                    aria-hidden="true"
                  />
                </article>
              );
            })}
          </div>
        )}
      </div>

      {/* Decorative Blur Backgrounds */}
      <div
        className="absolute top-1/2 left-0 w-80 h-80 bg-primary/5 rounded-full blur-[150px] select-none pointer-events-none"
        aria-hidden="true"
      />
    </section>
  );
});

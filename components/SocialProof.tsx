// FILE: components/SocialProof.tsx

"use client";

import React, { useState, useEffect, useRef } from "react";

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
  initials: string;
}

const AnimatedNumber = React.memo(function AnimatedNumber({
  value,
  decimals = 0,
  suffix = ""
}: {
  value: number;
  decimals?: number;
  suffix?: string;
}) {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let observer: IntersectionObserver;
    let frameId: number;

    const startAnimation = () => {
      const duration = 1200; // ms
      const startTime = performance.now();

      const animate = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const ease = 1 - Math.pow(1 - progress, 3); // easeOutCubic
        setDisplayValue(ease * value);

        if (progress < 1) {
          frameId = requestAnimationFrame(animate);
        } else {
          setDisplayValue(value);
        }
      };

      frameId = requestAnimationFrame(animate);
    };

    if (ref.current) {
      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            startAnimation();
            observer.disconnect();
          }
        },
        { threshold: 0.1 }
      );
      observer.observe(ref.current);
    }

    return () => {
      if (observer) observer.disconnect();
      if (frameId) cancelAnimationFrame(frameId);
    };
  }, [value]);

  return (
    <span ref={ref} className="font-mono">
      {displayValue.toFixed(decimals)}
      {suffix}
    </span>
  );
});

const TestimonialCard = React.memo(function TestimonialCard({
  quote,
  name,
  role,
  company,
  initials
}: Testimonial) {
  return (
    <article className="flex flex-col justify-between rounded-2xl border border-border/60 bg-surface/40 p-8 transition-hover hover:border-primary/30 hover:shadow-[0_0_30px_rgba(255,200,1,0.06)] font-sans">
      <div>
        {/* Star Rating */}
        <div className="flex gap-1 mb-6 text-primary" aria-label="5 out of 5 stars">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              className="w-5 h-5 fill-current"
              viewBox="0 0 20 20"
              aria-hidden="true"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>

        {/* Quote */}
        <blockquote className="text-base sm:text-lg text-text/90 italic leading-relaxed">
          &ldquo;{quote}&rdquo;
        </blockquote>
      </div>

      {/* Author details */}
      <div className="mt-8 flex items-center gap-4 border-t border-border/40 pt-6">
        <div
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-tr from-primary via-accent to-accent text-bg font-sans font-black text-sm shadow-md border border-border/80 relative"
          aria-hidden="true"
        >
          {initials}
          <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-primary border-2 border-surface shadow-sm" />
        </div>
        <div>
          <span className="block font-bold text-sm text-text">
            {name}
          </span>
          <span className="block text-xs text-muted">
            {role}, <span className="text-text/70">{company}</span>
          </span>
        </div>
      </div>
    </article>
  );
});

export const SocialProof = React.memo(function SocialProof() {
  const logos = [
    {
      name: "Veritas",
      icon: (
        <svg className="w-5 h-5 text-primary shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.617 3.06a8.973 8.973 0 01-1.617 3.06A8.974 8.974 0 0112 21a8.974 8.974 0 01-5.766-1.88 8.973 8.973 0 01-1.617-3.06A8.974 8.974 0 013 12c0-3.34 2.22-6.16 5.25-7.06a8.958 8.958 0 018.5 0A8.997 8.997 0 0121 12z" />
        </svg>
      )
    },
    {
      name: "Quantum Labs",
      icon: (
        <svg className="w-5 h-5 text-accent shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
        </svg>
      )
    },
    {
      name: "NovaTech",
      icon: (
        <svg className="w-5 h-5 text-primary shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 21l-.813-5.096L3.096 15 8.19 14.187 9 9l.813 5.187 5.096.813-5.096.904zM19.006 5.004L18.5 8l-.506-2.996L15 4.5l2.994-.506L18.5 1l.506 2.994L22 4.5l-2.994.504z" />
        </svg>
      )
    },
    {
      name: "Axiom",
      icon: (
        <svg className="w-5 h-5 text-accent shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 8.25h13.5M5.25 12h13.5m-13.5 3.75h13.5M12 3v18" />
        </svg>
      )
    },
    {
      name: "Hyperion",
      icon: (
        <svg className="w-5 h-5 text-primary shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8a4 4 0 100 8 4 4 0 000-8zM12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m12.728 12.728l-.707-.707" />
        </svg>
      )
    },
    {
      name: "Cascade",
      icon: (
        <svg className="w-5 h-5 text-primary shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
        </svg>
      )
    }
  ];

  const testimonials: Testimonial[] = [
    {
      quote: "NeuralFlow AI cut our data processing costs by 40% while resolving ingestion bottlenecks in under an hour. The real-time capabilities are unmatched.",
      name: "Sarah Chen",
      role: "VP of Engineering",
      company: "NovaTech",
      initials: "SC"
    },
    {
      quote: "The multi-cloud sync feature is a lifesaver. We replicate terabytes of data across regions without layout shifts, complex config, or pipeline crashes.",
      name: "Marcus Vance",
      role: "Chief Architect",
      company: "Quantum Labs",
      initials: "MV"
    },
    {
      quote: "Transitioning to NeuralFlow AI allowed our data teams to deploy self-healing workflows without needing dedicated ops. The REST and GraphQL APIs are incredibly robust.",
      name: "Elena Rostova",
      role: "Director of Analytics",
      company: "Veritas",
      initials: "ER"
    }
  ];

  return (
    <section
      className="py-24 sm:py-32 bg-surface/20 border-y border-border/40 relative overflow-hidden font-sans"
      aria-label="Social proof and metrics"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* LOGO STRIP */}
        <div className="text-center mb-16 reveal-on-scroll">
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-muted">
            Trusted by teams at
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-4 sm:gap-x-10">
            {logos.map((logo) => (
              <div
                key={logo.name}
                className="flex items-center gap-2 text-muted hover:text-text cursor-pointer transition-hover opacity-75 hover:opacity-100 py-1 px-3 rounded-lg border border-transparent hover:border-border/40 hover:bg-surface/30 select-none"
              >
                {logo.icon}
                <span className="text-sm sm:text-base font-bold tracking-tight">{logo.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* TESTIMONIALS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24 items-stretch reveal-on-scroll">
          {testimonials.map((t) => (
            <TestimonialCard key={t.name} {...t} />
          ))}
        </div>

        {/* METRIC COUNTERS WITH ANIMATED NUMBERS */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 border-t border-border/40 pt-16 text-center reveal-on-scroll font-mono">
          <div>
            <span className="block text-4xl sm:text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent bg-[size:200%_auto]">
              <AnimatedNumber value={99.99} decimals={2} suffix="%" />
            </span>
            <span className="block font-sans font-bold text-sm sm:text-base text-text mt-3">
              Uptime SLA
            </span>
            <span className="block font-sans text-xs sm:text-sm text-muted mt-1">
              Enterprise-grade reliability
            </span>
          </div>

          <div>
            <span className="block text-4xl sm:text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent bg-[size:200%_auto]">
              <AnimatedNumber value={10} decimals={0} suffix="M+" />
            </span>
            <span className="block font-sans font-bold text-sm sm:text-base text-text mt-3">
              Events / Sec
            </span>
            <span className="block font-sans text-xs sm:text-sm text-muted mt-1">
              Ultra-low latency pipelines
            </span>
          </div>

          <div>
            <span className="block text-4xl sm:text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent bg-[size:200%_auto]">
              <AnimatedNumber value={150} decimals={0} suffix="+" />
            </span>
            <span className="block font-sans font-bold text-sm sm:text-base text-text mt-3">
              Countries
            </span>
            <span className="block font-sans text-xs sm:text-sm text-muted mt-1">
              Global edge network replication
            </span>
          </div>
        </div>
      </div>

      {/* Decorative blurs */}
      <div
        className="absolute top-1/3 right-0 w-80 h-80 bg-primary/5 rounded-full blur-[150px] select-none pointer-events-none"
        aria-hidden="true"
      />
    </section>
  );
});

// FILE: app/blog/page.tsx

import React from "react";
import { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Blog Feed & Engineering Insights | NeuralFlow AI",
  description: "Read technical articles, platform updates, and engineering case studies from the NeuralFlow AI development team.",
};

export default function BlogPage() {
  const posts = [
    {
      title: "How We Optimized Ingest Telemetry Under 20ms",
      date: "June 24, 2026",
      readTime: "5 min read",
      category: "Engineering",
      excerpt: "Deep dive into edge-proxied transport layers and custom socket clustering algorithms designed for scale.",
      author: "Marcus Vance"
    },
    {
      title: "Unveiling Self-Healing Transformer Workflows",
      date: "May 18, 2026",
      readTime: "8 min read",
      category: "Intelligence",
      excerpt: "Introducing context-dependent model orchestrations that repair failed execution branches in production.",
      author: "Sarah Chen"
    },
    {
      title: "Building Multi-Cloud Ingest without Layout Shifts",
      date: "April 11, 2026",
      readTime: "4 min read",
      category: "Infrastructure",
      excerpt: "Replicating pipeline configurations dynamically across regions with low sync lag.",
      author: "Elena Rostova"
    }
  ];

  return (
    <>
      <Navbar />
      <main id="main-content" className="relative min-h-screen bg-bg pt-24 sm:pt-32 pb-16 px-4 sm:px-6 lg:px-8 font-sans">
        {/* Glow decoration */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[150px] pointer-events-none select-none" />

        <div className="relative max-w-7xl mx-auto z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-mono font-bold tracking-tight text-text leading-tight">
              NeuralFlow Blog
            </h1>
            <p className="mt-4 text-base sm:text-lg text-muted">
              Technical articles, platform updates, and engineering insights from our core development team.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article
                key={post.title}
                className="group relative flex flex-col justify-between rounded-2xl border border-border/60 bg-surface/40 p-6 transition-all duration-180 ease-out hover:-translate-y-[4px] hover:border-primary/50 hover:shadow-[0_15px_35px_rgba(255,200,1,0.06)]"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-semibold text-muted font-mono uppercase tracking-wider mb-4">
                    <span className="text-primary">{post.category}</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h2 className="text-xl font-bold text-text group-hover:text-primary transition-hover leading-tight">
                    {post.title}
                  </h2>
                  <p className="mt-3 text-sm text-muted leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-border/40 flex items-center justify-between text-xs text-muted">
                  <span>By {post.author}</span>
                  <span>{post.date}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

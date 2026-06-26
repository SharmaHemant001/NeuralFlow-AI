// FILE: app/terms/page.tsx

import React from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="relative min-h-screen bg-bg pt-24 sm:pt-32 pb-16 px-4 sm:px-6 lg:px-8 font-sans">
        <div className="relative max-w-3xl mx-auto z-10">
          <h1 className="text-3xl sm:text-4xl font-mono font-bold tracking-tight text-text leading-tight mb-8">
            Terms of Service
          </h1>
          
          <div className="space-y-6 text-sm sm:text-base text-muted leading-relaxed">
            <p>
              Last updated: June 26, 2026.
            </p>
            <p>
              By accessing the NeuralFlow AI API or console, you agree to comply with the terms set forth herein.
            </p>
            
            <h2 className="text-xl font-mono font-bold text-text pt-4">1. License &amp; Ingestion Limits</h2>
            <p>
              Customers are granted a limited license to execute serverless pipelines up to the throughput capacities defined by their respective billing tier:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Starter plan: 1M events per second max.</li>
              <li>Pro plan: 10M events per second max.</li>
              <li>Enterprise plan: Custom computed scale.</li>
            </ul>

            <h2 id="sla" className="text-xl font-mono font-bold text-text pt-4">2. SLA Guarantee &amp; Uptime</h2>
            <p>
              We provide a 99.99% uptime guarantee for all enterprise API ingestion endpoints. Failures to meet these thresholds will result in service credits calculated in accordance with our standard customer SLA documentation.
            </p>

            <h2 className="text-xl font-mono font-bold text-text pt-4">3. Termination</h2>
            <p>
              Either party may terminate active subscription plans at any time via the console. Pre-paid annual accounts are eligible for prorated refunds under the conditions specified in your Master Services Agreement.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

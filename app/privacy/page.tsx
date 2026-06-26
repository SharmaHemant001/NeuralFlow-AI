// FILE: app/privacy/page.tsx

import React from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="relative min-h-screen bg-bg pt-24 sm:pt-32 pb-16 px-4 sm:px-6 lg:px-8 font-sans">
        <div className="relative max-w-3xl mx-auto z-10">
          <h1 className="text-3xl sm:text-4xl font-mono font-bold tracking-tight text-text leading-tight mb-8">
            Privacy Policy
          </h1>
          
          <div className="space-y-6 text-sm sm:text-base text-muted leading-relaxed">
            <p>
              Last updated: June 26, 2026.
            </p>
            <p>
              At NeuralFlow AI, we prioritize the security and confidentiality of your data. This Privacy Policy details how we collect, process, and protect information when you utilize our platform.
            </p>
            
            <h2 id="security" className="text-xl font-mono font-bold text-text pt-4">1. Data Ingestion &amp; Processing</h2>
            <p>
              All client data ingested via the NeuralFlow AI core API is processed in-memory at our edge cells. We do not store raw pipeline logs or payload content unless explicitly configured by the customer for persistence.
            </p>

            <h2 className="text-xl font-mono font-bold text-text pt-4">2. Compliance &amp; Certifications</h2>
            <p>
              Our infrastructure is fully SOC2 Type II certified. All data transfers across multi-cloud regions are encrypted in transit using TLS 1.3 and encrypted at rest using AES-256 keys.
            </p>

            <h2 className="text-xl font-mono font-bold text-text pt-4">3. Third-Party Disclosures</h2>
            <p>
              We do not sell, rent, or trade customer usage logs, metadata, or metrics with third-party service providers.
            </p>
            
            <h2 className="text-xl font-mono font-bold text-text pt-4">4. Contact Information</h2>
            <p>
              For inquiries regarding data compliance or requests for custom SLA arrangements, please submit an inquiry on our <a href="/contact" className="text-primary hover:underline">Contact page</a>.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

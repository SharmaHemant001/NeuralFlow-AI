// FILE: app/contact/page.tsx

"use client";

import React, { useState, useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    plan: "pro",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Read plan query parameter if any
    const params = new URLSearchParams(window.location.search);
    const planParam = params.get("plan");
    if (planParam && ["starter", "pro", "enterprise"].includes(planParam)) {
      setFormData((prev) => ({ ...prev, plan: planParam }));
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in all required fields.");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <>
      <Navbar />
      <main id="main-content" className="relative min-h-screen bg-bg pt-24 sm:pt-32 pb-16 px-4 sm:px-6 lg:px-8 font-sans">
        {/* Glow decoration */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/5 rounded-full blur-[150px] pointer-events-none select-none" />

        <div className="relative max-w-xl mx-auto z-10">
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl font-mono font-bold tracking-tight text-text leading-tight">
              Get in Touch
            </h1>
            <p className="mt-4 text-base text-muted">
              Connect with our team to start your trial, request a custom demo, or scale enterprise plans.
            </p>
          </div>

          <div className="bg-surface/50 border border-border rounded-2xl p-6 sm:p-8 backdrop-blur-sm shadow-2xl">
            {submitted ? (
              <div className="text-center py-10 animate-price-change" role="alert">
                <div className="w-16 h-16 bg-success/15 border border-success/30 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="text-xl font-bold text-text">Inquiry Received!</h2>
                <p className="mt-3 text-sm text-muted max-w-sm mx-auto leading-relaxed">
                  Thank you, <span className="text-text font-semibold">{formData.name}</span>. One of our engineers will follow up with you at <span className="text-text font-semibold">{formData.email}</span> shortly.
                </p>
                <div className="mt-8">
                  <a
                    href="/"
                    className="inline-flex items-center justify-center rounded-lg bg-bg hover:bg-surface border border-border text-text text-sm font-semibold py-2.5 px-6 transition-hover"
                  >
                    Return Home
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-text">
                    Name <span className="text-accent">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="mt-2 block w-full rounded-lg bg-bg/85 border border-border px-4 py-3 text-text text-sm placeholder:text-muted/60 focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-hover"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-text">
                    Work Email <span className="text-accent">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@company.com"
                    className="mt-2 block w-full rounded-lg bg-bg/85 border border-border px-4 py-3 text-text text-sm placeholder:text-muted/60 focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-hover"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-semibold text-text">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="e.g. Acme Corp"
                    className="mt-2 block w-full rounded-lg bg-bg/85 border border-border px-4 py-3 text-text text-sm placeholder:text-muted/60 focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-hover"
                  />
                </div>

                <div>
                  <label htmlFor="plan" className="block text-sm font-semibold text-text">
                    Interested Plan
                  </label>
                  <div className="relative mt-2">
                    <select
                      id="plan"
                      name="plan"
                      value={formData.plan}
                      onChange={handleChange}
                      className="appearance-none block w-full rounded-lg bg-bg/85 border border-border px-4 py-3 pr-10 text-text text-sm focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-hover cursor-pointer"
                    >
                      <option value="starter" className="bg-[#101726]">Starter Plan - $29/mo</option>
                      <option value="pro" className="bg-[#101726]">Pro Plan - $79/mo (Recommended)</option>
                      <option value="enterprise" className="bg-[#101726]">Enterprise Plan - Custom</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-muted">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-text">
                    Message / Use Case <span className="text-accent">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your pipeline scale or requirements..."
                    className="mt-2 block w-full rounded-lg bg-bg/85 border border-border px-4 py-3 text-text text-sm placeholder:text-muted/60 focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-hover resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full inline-flex items-center justify-center rounded-lg bg-primary hover:bg-primary/95 text-bg font-bold py-3.5 px-6 transition-hover shadow-lg shadow-primary/10 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? "Sending..." : "Submit Inquiry"}
                </button>
              </form>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

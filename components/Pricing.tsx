// FILE: components/Pricing.tsx

"use client";

import React, { useState } from "react";
import { PRICING_MATRIX, computePrice } from "@/lib/pricingMatrix";

export const Pricing = React.memo(function Pricing() {
  const [currency, setCurrency] = useState<keyof typeof PRICING_MATRIX.currencies>("USD");
  const [isAnnual, setIsAnnual] = useState(false);

  const handleCurrencyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCurrency(e.target.value as keyof typeof PRICING_MATRIX.currencies);
  };

  const handleBillingToggle = () => {
    setIsAnnual(!isAnnual);
  };

  return (
    <section
      id="pricing"
      className="py-24 sm:py-32 bg-bg relative overflow-hidden font-sans"
      aria-label="Pricing tiers and plans"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header - Inter */}
        <div className="text-center max-w-3xl mx-auto mb-16 reveal-on-scroll">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-text leading-tight">
            Simple, Transparent Pricing
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted">
            All prices computed directly. Switch currency or toggle annual billing to instantly calculate your plan.
          </p>
        </div>

        {/* Controls Layout - Inter */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16 reveal-on-scroll">
          {/* Billing Toggle (Monthly / Annual) */}
          <div className="flex items-center gap-3 bg-surface/50 border border-border/80 rounded-full p-1.5 px-3">
            <span className="text-sm font-medium text-muted">Monthly</span>
            <label className="relative inline-flex items-center cursor-pointer select-none">
              <input
                type="checkbox"
                role="switch"
                aria-checked={isAnnual}
                checked={isAnnual}
                onChange={handleBillingToggle}
                className="sr-only peer"
                aria-label="Toggle annual billing with 20% discount"
              />
              {/* Toggle track */}
              <div className="w-11 h-6 bg-bg border border-border/80 rounded-full transition-all duration-300 peer-checked:bg-primary/20 peer-checked:border-primary/40 peer-focus-visible:ring-2 peer-focus-visible:ring-primary peer-focus-visible:ring-offset-2 peer-focus-visible:ring-offset-bg"></div>
              {/* Toggle slider circle */}
              <div className="absolute top-[4px] left-[4px] bg-muted peer-checked:bg-primary rounded-full h-4 w-4 transition-all duration-300 ease-out-expo peer-checked:translate-x-5 pointer-events-none"></div>
            </label>
            <span className="text-sm font-medium text-text flex items-center gap-2">
              Annual
              <span className="inline-block rounded-full bg-success/15 border border-success/30 px-2 py-0.5 text-[10px] font-semibold text-primary uppercase tracking-wider font-mono">
                Save 20%
              </span>
            </span>
          </div>

          {/* Currency Selector */}
          <div className="relative">
            <label htmlFor="currency-select" className="sr-only">
              Select billing currency
            </label>
            <select
              id="currency-select"
              value={currency}
              onChange={handleCurrencyChange}
              className="appearance-none bg-[#101726] border border-[#FFC801] text-[#F3F6F9] text-sm rounded-full block w-32 px-4 py-2 pr-8 focus:border-[#FFC801] focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-bg cursor-pointer transition-hover font-sans"
            >
              <option value="USD" className="bg-[#101726] text-[#F3F6F9]">USD ($)</option>
              <option value="INR" className="bg-[#101726] text-[#F3F6F9]">INR (₹)</option>
              <option value="EUR" className="bg-[#101726] text-[#F3F6F9]">EUR (€)</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-muted">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto reveal-on-scroll">
          {/* STARTER CARD */}
          <article className="group relative flex flex-col justify-between rounded-2xl border border-border/60 bg-surface/40 pt-6 pb-7 px-6 sm:px-8 transition-all duration-200 ease-out hover:-translate-y-[4px] hover:scale-[1.01] hover:border-primary/50 hover:shadow-[0_15px_35px_rgba(255,200,1,0.06)]">
            <div>
              <h3 className="font-sans font-bold text-xl text-text">
                {PRICING_MATRIX.tiers.starter.label}
              </h3>
              <p className="mt-2 text-sm text-muted">Ideal for small developers and prototypes.</p>

              {/* Dynamic Price Display - JetBrains Mono */}
              <div className="mt-5 flex items-baseline gap-2">
                <span
                  key={`${currency}-${isAnnual}`}
                  className="text-4xl sm:text-5xl font-mono font-bold tracking-tight text-text animate-price-change inline-block"
                >
                  {computePrice("starter", currency, isAnnual)}
                </span>
                <span className="text-sm font-semibold text-muted font-sans">/mo</span>
              </div>

              {/* Feature List */}
              <ul className="mt-6 space-y-3.5" role="list">
                {PRICING_MATRIX.tiers.starter.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-primary shrink-0"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-muted">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6">
              <a
                href="/contact?plan=starter"
                className="w-full inline-flex items-center justify-center rounded-lg bg-bg hover:bg-surface border border-border text-text text-sm font-semibold py-3 transition-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
                aria-label="Start free trial with Starter plan"
              >
                Start Starter Trial
              </a>
            </div>
          </article>

          {/* PRO CARD (Highlighted - Most Popular) */}
          <article className="group relative flex flex-col justify-between rounded-2xl border-2 border-primary bg-surface/60 pt-6 pb-7 px-6 sm:px-8 shadow-[0_0_30px_rgba(255,200,1,0.12)] transition-all duration-200 ease-out hover:-translate-y-[4px] hover:scale-[1.01] hover:border-primary hover:shadow-[0_15px_40px_rgba(255,200,1,0.18)] md:-translate-y-2">
            {/* Pop Badge */}
            <span className="absolute top-0 right-6 -translate-y-1/2 inline-block rounded-full bg-primary px-3 py-1 text-xs font-bold text-bg uppercase tracking-wider font-sans">
              Most Popular
            </span>

            <div>
              <h3 className="font-sans font-bold text-xl text-text">
                {PRICING_MATRIX.tiers.pro.label}
              </h3>
              <p className="mt-2 text-sm text-muted">The complete suite for growing data teams.</p>

              {/* Dynamic Price Display - JetBrains Mono */}
              <div className="mt-5 flex items-baseline gap-2">
                <span
                  key={`${currency}-${isAnnual}`}
                  className="text-4xl sm:text-5xl font-mono font-bold tracking-tight text-text animate-price-change inline-block"
                >
                  {computePrice("pro", currency, isAnnual)}
                </span>
                <span className="text-sm font-semibold text-muted font-sans">/mo</span>
              </div>

              {/* Feature List */}
              <ul className="mt-6 space-y-3.5" role="list">
                {PRICING_MATRIX.tiers.pro.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-primary shrink-0"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-text/90 font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6">
              <a
                id="pro-cta"
                href="/contact?plan=pro"
                className="w-full inline-flex items-center justify-center rounded-lg bg-primary hover:bg-primary/90 text-bg text-sm font-bold py-3 transition-hover shadow-md shadow-primary/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent"
                aria-label="Start free trial with Pro plan"
              >
                Start Pro Trial
              </a>
            </div>
          </article>

          {/* ENTERPRISE CARD */}
          <article className="group relative flex flex-col justify-between rounded-2xl border border-border/60 bg-surface/40 pt-6 pb-7 px-6 sm:px-8 transition-all duration-200 ease-out hover:-translate-y-[4px] hover:scale-[1.01] hover:border-primary/50 hover:shadow-[0_15px_35px_rgba(255,200,1,0.06)]">
            <div>
              <h3 className="font-sans font-bold text-xl text-text">
                {PRICING_MATRIX.tiers.enterprise.label}
              </h3>
              <p className="mt-2 text-sm text-muted">Mission-critical infrastructure for scale.</p>

              {/* Dynamic Price Display - JetBrains Mono */}
              <div className="mt-5 flex items-baseline gap-2">
                <span
                  key={`${currency}-${isAnnual}`}
                  className="text-4xl sm:text-5xl font-mono font-bold tracking-tight text-text animate-price-change inline-block"
                >
                  {computePrice("enterprise", currency, isAnnual)}
                </span>
                <span className="text-sm font-semibold text-muted font-sans">/mo</span>
              </div>

              {/* Feature List */}
              <ul className="mt-6 space-y-3.5" role="list">
                {PRICING_MATRIX.tiers.enterprise.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-primary shrink-0"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-muted">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6">
              <a
                href="/contact?plan=enterprise"
                className="w-full inline-flex items-center justify-center rounded-lg bg-bg hover:bg-surface border border-border text-text text-sm font-semibold py-3 transition-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
                aria-label="Contact sales for Enterprise plan"
              >
                Contact Sales
              </a>
            </div>
          </article>
        </div>
      </div>

      {/* Decorative Blur Background */}
      <div
        className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[150px] select-none pointer-events-none"
        aria-hidden="true"
      />
    </section>
  );
});

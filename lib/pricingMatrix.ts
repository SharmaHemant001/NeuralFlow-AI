// FILE: lib/pricingMatrix.ts

export const PRICING_MATRIX = {
  tiers: {
    starter: {
      baseUSD: 29,
      label: "Starter",
      features: [
        "5 pipelines",
        "10GB storage",
        "Basic analytics",
        "Email support",
        "REST API"
      ]
    },
    pro: {
      baseUSD: 79,
      label: "Pro",
      features: [
        "Unlimited pipelines",
        "500GB storage",
        "Advanced analytics",
        "Priority support",
        "GraphQL API",
        "Team collaboration"
      ]
    },
    enterprise: {
      baseUSD: 199,
      label: "Enterprise",
      features: [
        "Custom pipelines",
        "Unlimited storage",
        "AI insights",
        "24/7 dedicated support",
        "Custom API",
        "SLA guarantee",
        "SSO & SAML"
      ]
    }
  },
  currencies: {
    USD: { symbol: "$", tariff: 1.00, locale: "en-US" },
    INR: { symbol: "₹", tariff: 83.50, locale: "en-IN" },
    EUR: { symbol: "€", tariff: 0.92, locale: "de-DE" }
  },
  annualDiscount: 0.80
} as const;

export function computePrice(
  tier: keyof typeof PRICING_MATRIX.tiers,
  currency: keyof typeof PRICING_MATRIX.currencies,
  isAnnual: boolean
): string {
  const base = PRICING_MATRIX.tiers[tier].baseUSD;
  const { symbol, tariff } = PRICING_MATRIX.currencies[currency];
  const monthly = base * tariff;
  const final = isAnnual ? monthly * PRICING_MATRIX.annualDiscount : monthly;
  return `${symbol}${Math.round(final)}`;
}

// FILE: app/layout.tsx

import type { Metadata, Viewport } from "next";
import { JetBrains_Mono, Inter } from "next/font/google";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#FFC801",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "NeuralFlow AI | Intelligent Data Automation Platform",
  description: "NeuralFlow AI automates your entire data pipeline with enterprise-grade AI. Real-time processing, multi-currency pricing, zero-config deployment.",
  keywords: [
    "AI automation",
    "data pipeline",
    "machine learning platform",
    "enterprise AI"
  ],
  alternates: {
    canonical: "https://neuralflow.ai",
  },
  openGraph: {
    title: "NeuralFlow AI | Intelligent Data Automation Platform",
    description: "NeuralFlow AI automates your entire data pipeline with enterprise-grade AI. Real-time processing, multi-currency pricing, zero-config deployment.",
    type: "website",
    url: "https://neuralflow.ai",
    images: [
      {
        url: "https://neuralflow.ai/og-image.png",
        width: 1200,
        height: 630,
        alt: "NeuralFlow AI Platform Overview"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "NeuralFlow AI | Intelligent Data Automation Platform",
    description: "NeuralFlow AI automates your entire data pipeline with enterprise-grade AI. Real-time processing, multi-currency pricing, zero-config deployment.",
    images: ["https://neuralflow.ai/og-image.png"]
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jetbrainsMono.variable} ${inter.variable}`}>
      <body className="bg-bg text-text antialiased font-sans selection:bg-primary/20 selection:text-text">
        {children}
      </body>
    </html>
  );
}

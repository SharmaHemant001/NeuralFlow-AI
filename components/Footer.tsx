// FILE: components/Footer.tsx

"use client";

import React from "react";

export const Footer = React.memo(function Footer() {
  const currentYear = new Date().getFullYear();

  const productLinks = [
    { label: "Pipelines", href: "/#features" },
    { label: "Analytics", href: "/#features" },
    { label: "Cloud Sync", href: "/#features" },
    { label: "Security", href: "/#features" }
  ];

  const resourcesLinks = [
    { label: "Documentation", href: "/docs" },
    { label: "API Reference", href: "/docs#api" },
    { label: "System Status", href: "/docs#status" },
    { label: "Contact Support", href: "/contact" }
  ];

  const companyLinks = [
    { label: "About Us", href: "/contact#about" },
    { label: "Blog Feed", href: "/blog" },
    { label: "Careers", href: "/contact#careers" },
    { label: "Press Kit", href: "/contact#press" }
  ];

  const legalLinks = [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Security Info", href: "/privacy#security" },
    { label: "SLA Guarantee", href: "/terms#sla" }
  ];

  return (
    <footer className="bg-bg border-t border-border/80 text-muted font-sans" aria-label="NeuralFlow AI footer">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 md:gap-8">
          {/* Column 1: Brand Logo & Tagline */}
          <div className="col-span-2 md:col-span-1 flex flex-col gap-4">
            <a
              href="#"
              className="flex items-center gap-2.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-4 rounded-md transition-hover w-fit"
              aria-label="NeuralFlow AI Home"
            >
              <span className="font-sans text-xl font-bold tracking-tight text-text">
                Neural<span className="text-primary">Flow</span>
              </span>
              <span className="flex items-center justify-center rounded-full bg-primary/10 border border-primary/20 px-2 py-0.5 text-[9px] font-semibold text-primary tracking-wider uppercase font-mono">
                AI
              </span>
            </a>
            <p className="text-sm leading-relaxed text-muted max-w-xs font-sans">
              Intelligent enterprise-grade data pipeline automation at scale. Process, monitor, and synchronize with ease.
            </p>
          </div>

          {/* Column 2: Product */}
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-text font-mono">
              Product
            </span>
            <nav className="mt-4" aria-label="Footer Product links">
              <ul className="space-y-3">
                {productLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm hover:text-text focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary rounded-md transition-hover font-sans"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Column 3: Resources */}
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-text font-mono">
              Resources
            </span>
            <nav className="mt-4" aria-label="Footer Resources links">
              <ul className="space-y-3">
                {resourcesLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm hover:text-text focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary rounded-md transition-hover font-sans"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Column 4: Company */}
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-text font-mono">
              Company
            </span>
            <nav className="mt-4" aria-label="Footer Company links">
              <ul className="space-y-3">
                {companyLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm hover:text-text focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary rounded-md transition-hover font-sans"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Column 5: Legal */}
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-text font-mono">
              Legal
            </span>
            <nav className="mt-4" aria-label="Footer Legal links">
              <ul className="space-y-3">
                {legalLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm hover:text-text focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary rounded-md transition-hover font-sans"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Socials */}
        <div className="mt-16 border-t border-border/40 pt-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-xs leading-5 font-sans">
            &copy; {currentYear} NeuralFlow AI. All rights reserved. Built for global compliance.
          </p>

          {/* Social Icons (SVG inline) */}
          <div className="flex space-x-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-text transition-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary rounded-full p-1"
              aria-label="Follow NeuralFlow AI on GitHub"
            >
              <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.138 20.161 22 16.418 22 12c0-5.523-4.477-10-10-10z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-text transition-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary rounded-full p-1"
              aria-label="Follow NeuralFlow AI on Twitter"
            >
              <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-text transition-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary rounded-full p-1"
              aria-label="Follow NeuralFlow AI on LinkedIn"
            >
              <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
});

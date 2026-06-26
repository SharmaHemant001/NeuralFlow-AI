// FILE: components/Navbar.tsx

"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export const Navbar = React.memo(function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = ["features", "pricing", "docs", "blog"];
    const observerOptions = {
      root: null,
      rootMargin: "-45% 0px -45% 0px",
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinks = [
    { label: "Features", href: pathname === "/" ? "#features" : "/#features" },
    { label: "Pricing", href: pathname === "/" ? "#pricing" : "/#pricing" },
    { label: "Docs", href: "/docs" },
    { label: "Blog", href: "/blog" }
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 font-sans ${
        isScrolled
          ? "border-b border-border/60 bg-[#080C14]/90 backdrop-blur-md shadow-md shadow-black/20"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 sm:h-20 items-center justify-between">
          {/* Logo Section */}
          <a
            href="#"
            className="flex items-center gap-2.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-4 rounded-md transition-hover"
            aria-label="NeuralFlow AI Home"
          >
            <span className="font-sans text-xl sm:text-2xl font-black tracking-tight text-text">
              Neural<span className="text-primary">Flow</span>
            </span>
            <span className="flex items-center justify-center rounded-full bg-primary/10 border border-primary/20 px-2 py-0.5 text-[10px] sm:text-[11px] font-semibold text-primary tracking-wider uppercase font-mono">
              AI
            </span>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
            <ul className="flex items-center gap-8">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.slice(1);
                return (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className={`group text-sm font-medium transition-hover py-2 px-1 relative block ${
                        isActive ? "text-primary" : "text-muted hover:text-text"
                      }`}
                    >
                      {link.label}
                      <span
                        className={`absolute bottom-0 left-0 h-[2px] bg-primary transition-transform duration-180 ease-out origin-left ${
                          isActive ? "w-full scale-x-100" : "w-full scale-x-0 group-hover:scale-x-100"
                        }`}
                      />
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:block">
            <a
              href={pathname === "/" ? "#pricing" : "/#pricing"}
              onClick={(e) => {
                if (pathname === "/") {
                  e.preventDefault();
                  document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });
                  setTimeout(() => {
                    const proCta = document.getElementById("pro-cta");
                    if (proCta) {
                      proCta.focus();
                      proCta.classList.add("ring-4", "ring-primary/45");
                      setTimeout(() => proCta.classList.remove("ring-4", "ring-primary/45"), 1500);
                    }
                  }, 600);
                }
              }}
              className="inline-flex items-center justify-center rounded-lg bg-primary hover:bg-primary/90 text-bg text-sm font-bold py-2.5 px-5 transition-hover shadow-lg shadow-primary/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
              aria-label="Get started with NeuralFlow AI"
            >
              Get Started
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={toggleMobileMenu}
            className="inline-flex items-center justify-center p-2 rounded-lg text-muted hover:text-text hover:bg-surface focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary md:hidden transition-hover"
            aria-expanded={isMobileMenuOpen}
            aria-label="Main menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              aria-hidden="true"
            >
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Slide-down Overlay */}
      <div
        className={`md:hidden fixed inset-x-0 top-16 sm:top-20 bottom-0 bg-bg/98 backdrop-blur-lg z-40 transition-all duration-300 ease-in-out border-t border-border/80 ${
          isMobileMenuOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <nav className="h-full px-6 py-8" aria-label="Mobile navigation">
          <ul className="flex flex-col gap-6">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.slice(1);
              return (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`text-lg font-medium py-2 block border-b border-border/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary rounded-sm transition-hover ${
                      isActive ? "text-primary font-semibold" : "text-muted hover:text-text"
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
            <li className="pt-4">
              <a
                href={pathname === "/" ? "#pricing" : "/#pricing"}
                onClick={(e) => {
                  setIsMobileMenuOpen(false);
                  if (pathname === "/") {
                    e.preventDefault();
                    document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });
                    setTimeout(() => {
                      const proCta = document.getElementById("pro-cta");
                      if (proCta) {
                        proCta.focus();
                        proCta.classList.add("ring-4", "ring-primary/45");
                        setTimeout(() => proCta.classList.remove("ring-4", "ring-primary/45"), 1500);
                      }
                    }, 600);
                  }
                }}
                className="w-full inline-flex items-center justify-center rounded-lg bg-primary hover:bg-primary/90 text-bg text-base font-bold py-3 px-6 transition-hover shadow-lg shadow-primary/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent"
              >
                Get Started
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
});

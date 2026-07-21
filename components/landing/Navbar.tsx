"use client";

import { useEffect, useState } from "react";
import { ArrowRightIcon, CloseIcon, LogoIcon, MenuIcon } from "./icons";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "How it Works", href: "#how-it-works" },
  { label: "Chains", href: "#chains" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-strong py-3" : "bg-transparent py-5"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 lg:px-8">
        <a href="#" className="group flex items-center gap-2.5">
          <LogoIcon className="h-8 w-8 transition-transform duration-300 group-hover:scale-105" />
          <span className="text-lg font-semibold tracking-tight text-white">
            Arc<span className="gradient-text">Navigator</span>
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-zinc-400 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href="#"
            className="rounded-lg px-4 py-2 text-sm text-zinc-300 transition-colors hover:text-white"
          >
            Sign in
          </a>
          <a
            href="#cta"
            className="group flex items-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-violet-600 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-blue-500/20 transition-all hover:shadow-blue-500/30 hover:brightness-110"
          >
            Get Started
            <ArrowRightIcon className="transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>

        <button
          type="button"
          className="rounded-lg p-2 text-zinc-400 transition-colors hover:bg-white/5 hover:text-white md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </nav>

      <div
        className={`fixed inset-0 top-[60px] z-40 glass-strong transition-all duration-300 md:hidden ${
          mobileOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <div className="flex flex-col gap-1 p-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="rounded-lg px-4 py-3 text-base text-zinc-300 transition-colors hover:bg-white/5 hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <hr className="my-4 border-white/10" />
          <a
            href="#cta"
            onClick={() => setMobileOpen(false)}
            className="flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-violet-600 px-4 py-3 text-sm font-medium text-white"
          >
            Get Started
            <ArrowRightIcon />
          </a>
        </div>
      </div>
    </header>
  );
}

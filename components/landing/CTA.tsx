"use client";

import { AnimatedSection } from "./AnimatedSection";
import { ArrowRightIcon } from "./icons";

export function CTA() {
  return (
    <section id="cta" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <AnimatedSection>
          <div className="relative overflow-hidden rounded-3xl border border-white/10">
            <div
              className="absolute inset-0 opacity-40"
              style={{
                background:
                  "linear-gradient(135deg, rgba(59,130,246,0.15) 0%, rgba(139,92,246,0.15) 50%, rgba(99,102,241,0.1) 100%)",
                backgroundSize: "200% 200%",
                animation: "gradient-shift 8s ease infinite",
              }}
            />
            <div className="absolute inset-0 glass" />

            <div className="relative px-6 py-16 text-center md:px-16 md:py-20">
              <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl lg:text-5xl">
                Ready to move smarter?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-lg text-zinc-400">
                Join thousands of teams routing stablecoins with ArcNavigator.
                Start free — no credit card required.
              </p>

              <form
                className="mx-auto mt-10 flex max-w-md flex-col gap-3 sm:flex-row"
                onSubmit={(e) => e.preventDefault()}
              >
                <input
                  type="email"
                  placeholder="you@company.com"
                  aria-label="Email address"
                  className="h-12 flex-1 rounded-xl border border-white/10 bg-black/40 px-4 text-sm text-white placeholder:text-zinc-500 outline-none transition-colors focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20"
                />
                <button
                  type="submit"
                  className="group flex h-12 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 px-6 text-sm font-medium text-white shadow-lg shadow-blue-500/20 transition-all hover:shadow-blue-500/30 hover:brightness-110"
                >
                  Get early access
                  <ArrowRightIcon className="transition-transform group-hover:translate-x-1" />
                </button>
              </form>

              <p className="mt-4 text-xs text-zinc-600">
                Free tier includes up to $50k/month in routed volume.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

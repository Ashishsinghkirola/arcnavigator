import { LogoIcon } from "./icons";

const footerLinks = {
  Product: [
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#" },
    { label: "Changelog", href: "#" },
    { label: "API Docs", href: "#" },
  ],
  Company: [
    { label: "About", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Contact", href: "#" },
  ],
  Legal: [
    { label: "Privacy", href: "#" },
    { label: "Terms", href: "#" },
    { label: "Security", href: "#" },
  ],
};

export function Footer() {
  return (
    <footer className="relative border-t border-white/5">
      <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-2.5">
              <LogoIcon className="h-7 w-7" />
              <span className="text-base font-semibold text-white">
                Arc<span className="gradient-text">Navigator</span>
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-zinc-500">
              The smartest way to move stablecoins across chains. Built for
              speed, transparency, and scale.
            </p>
            <div className="mt-6 flex gap-4">
              {["X", "GitHub", "Discord"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/5 bg-white/[0.02] text-xs font-medium text-zinc-500 transition-all hover:border-white/10 hover:text-white"
                  aria-label={social}
                >
                  {social === "X" ? "𝕏" : social.slice(0, 2)}
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-sm font-medium text-white">{category}</h3>
              <ul className="mt-4 space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-zinc-500 transition-colors hover:text-zinc-300"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 sm:flex-row">
          <p className="text-sm text-zinc-600">
            &copy; {new Date().getFullYear()} ArcNavigator. All rights reserved.
          </p>
          <p className="font-mono text-xs text-zinc-700">
            Built for the multichain future
          </p>
        </div>
      </div>
    </footer>
  );
}

import { AnimatedSection } from "./AnimatedSection";

const chains = [
  { name: "Ethereum", abbr: "ETH", color: "#627EEA" },
  { name: "Arbitrum", abbr: "ARB", color: "#28A0F0" },
  { name: "Base", abbr: "BASE", color: "#0052FF" },
  { name: "Optimism", abbr: "OP", color: "#FF0420" },
  { name: "Polygon", abbr: "POL", color: "#8247E5" },
  { name: "Avalanche", abbr: "AVAX", color: "#E84142" },
  { name: "Solana", abbr: "SOL", color: "#9945FF" },
  { name: "BNB Chain", abbr: "BNB", color: "#F0B90B" },
  { name: "Scroll", abbr: "SCR", color: "#FFEEDA" },
  { name: "Linea", abbr: "LIN", color: "#61DFFF" },
  { name: "zkSync", abbr: "ZK", color: "#8C8DFC" },
  { name: "Starknet", abbr: "STRK", color: "#EC796B" },
];

export function SupportedChains() {
  return (
    <section id="chains" className="relative py-24 md:py-32">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <AnimatedSection className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-blue-400">
            Supported Chains
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-4xl lg:text-5xl">
            One interface,{" "}
            <span className="gradient-text">every network</span>
          </h2>
          <p className="mt-4 text-lg text-zinc-400">
            Move stablecoins across the chains your users already live on —
            with more networks added every month.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={100}>
          <div className="mt-16 overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02] p-6 md:p-8">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
              {chains.map((chain, i) => (
                <div
                  key={chain.name}
                  className="group flex flex-col items-center rounded-xl border border-white/5 bg-white/[0.02] p-4 transition-all duration-300 hover:border-white/10 hover:bg-white/[0.05]"
                  style={{ animationDelay: `${i * 50}ms` }}
                >
                  <div
                    className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl text-sm font-bold text-white transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundColor: `${chain.color}22`, color: chain.color }}
                  >
                    {chain.abbr.slice(0, 3)}
                  </div>
                  <span className="text-sm font-medium text-zinc-300">{chain.name}</span>
                </div>
              ))}
            </div>

            <p className="mt-8 text-center text-sm text-zinc-500">
              + more chains coming soon ·{" "}
              <a href="#" className="text-blue-400 transition-colors hover:text-blue-300">
                Request a chain
              </a>
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

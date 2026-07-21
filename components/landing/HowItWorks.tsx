import { AnimatedSection } from "./AnimatedSection";

const steps = [
  {
    step: "01",
    title: "Connect your wallet",
    description:
      "Link any EVM-compatible wallet in one click. No account creation, no KYC for basic transfers.",
    detail: "MetaMask · Coinbase · WalletConnect",
  },
  {
    step: "02",
    title: "Choose your route",
    description:
      "ArcNavigator compares every available path and surfaces the best option — or let AI pick for you.",
    detail: "Live fee comparison · Slippage protection",
  },
  {
    step: "03",
    title: "Send & track",
    description:
      "Confirm once and watch your transfer settle in seconds. Full transaction history in your dashboard.",
    detail: "Real-time status · On-chain proof",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-24 md:py-32">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <AnimatedSection className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-violet-400">
            How it Works
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-4xl lg:text-5xl">
            Three steps to{" "}
            <span className="gradient-text">any chain</span>
          </h2>
          <p className="mt-4 text-lg text-zinc-400">
            No complexity. No guesswork. Just the fastest path from A to B.
          </p>
        </AnimatedSection>

        <div className="relative mt-16">
          <div className="absolute top-12 right-0 left-0 hidden h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent md:block" />

          <div className="grid gap-8 md:grid-cols-3 md:gap-6">
            {steps.map((item, i) => (
              <AnimatedSection key={item.step} delay={i * 120}>
                <div className="relative flex flex-col items-center text-center md:items-start md:text-left">
                  <div className="relative z-10 mb-6 flex h-24 w-24 items-center justify-center rounded-2xl border border-white/10 bg-black/80 glass">
                    <span className="font-mono text-3xl font-bold gradient-text">
                      {item.step}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                    {item.description}
                  </p>
                  <p className="mt-4 font-mono text-xs text-zinc-600">{item.detail}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

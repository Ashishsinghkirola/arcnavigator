import { ArrowRightIcon, CheckIcon } from "./icons";

const stats = [
  { value: "$2.4B+", label: "Volume routed" },
  { value: "12", label: "Supported chains" },
  { value: "<2s", label: "Avg. settlement" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <div
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-zinc-300 opacity-0 animate-fade-in-up"
            style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-500" />
            </span>
            Now live on 12 chains
          </div>

          <h1
            className="max-w-4xl text-4xl font-semibold tracking-tight text-white opacity-0 animate-fade-in-up sm:text-5xl md:text-6xl lg:text-7xl"
            style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
          >
            The smartest way to{" "}
            <span className="gradient-text">move stablecoins</span>
          </h1>

          <p
            className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400 opacity-0 animate-fade-in-up md:text-xl"
            style={{ animationDelay: "0.35s", animationFillMode: "forwards" }}
          >
            ArcNavigator finds the optimal route across chains, settles in seconds,
            and gives you full visibility — powered by intelligent routing and AI.
          </p>

          <div
            className="mt-10 flex flex-col gap-4 opacity-0 animate-fade-in-up sm:flex-row sm:items-center"
            style={{ animationDelay: "0.5s", animationFillMode: "forwards" }}
          >
            <a
              href="#cta"
              className="group flex h-12 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 px-8 text-sm font-medium text-white shadow-xl shadow-blue-500/25 transition-all hover:shadow-blue-500/40 hover:brightness-110"
            >
              Start moving funds
              <ArrowRightIcon className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#how-it-works"
              className="flex h-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 px-8 text-sm font-medium text-zinc-300 backdrop-blur transition-all hover:border-white/20 hover:bg-white/10 hover:text-white"
            >
              See how it works
            </a>
          </div>

          <ul
            className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-zinc-500 opacity-0 animate-fade-in-up"
            style={{ animationDelay: "0.65s", animationFillMode: "forwards" }}
          >
            {["No hidden fees", "Non-custodial", "Enterprise ready"].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <CheckIcon className="text-blue-400" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div
          className="relative mx-auto mt-16 max-w-4xl opacity-0 animate-fade-in-up md:mt-20"
          style={{ animationDelay: "0.8s", animationFillMode: "forwards" }}
        >
          <div className="gradient-border rounded-2xl">
            <div className="glass-strong overflow-hidden rounded-2xl p-1">
              <div className="rounded-xl bg-black/60 p-6 md:p-8">
                <div className="mb-6 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-3 w-3 rounded-full bg-red-500/80" />
                    <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
                    <div className="h-3 w-3 rounded-full bg-green-500/80" />
                  </div>
                  <span className="font-mono text-xs text-zinc-500">app.arcnavigator.io</span>
                </div>

                <div className="grid gap-4 md:grid-cols-3">
                  <div className="rounded-xl border border-white/5 bg-white/[0.03] p-4">
                    <p className="text-xs font-medium uppercase tracking-wider text-zinc-500">From</p>
                    <p className="mt-1 text-lg font-semibold text-white">USDC</p>
                    <p className="text-sm text-zinc-400">Ethereum</p>
                  </div>
                  <div className="flex flex-col items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/5 p-4">
                    <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-violet-500">
                      <svg className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                        <path d="M4 10H16M12 6L16 10L12 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <p className="text-xs font-medium text-blue-400">Best route found</p>
                    <p className="mt-0.5 font-mono text-sm text-zinc-300">0.02% fee · 1.8s</p>
                  </div>
                  <div className="rounded-xl border border-white/5 bg-white/[0.03] p-4">
                    <p className="text-xs font-medium uppercase tracking-wider text-zinc-500">To</p>
                    <p className="mt-1 text-lg font-semibold text-white">USDC</p>
                    <p className="text-sm text-zinc-400">Base</p>
                  </div>
                </div>

                <div className="mt-6 flex items-center justify-between rounded-xl border border-white/5 bg-white/[0.02] px-4 py-3">
                  <span className="text-sm text-zinc-400">Amount</span>
                  <span className="font-mono text-lg font-medium text-white">$10,000.00</span>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-6 left-1/2 hidden -translate-x-1/2 md:block">
            <div className="h-px w-64 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
          </div>
        </div>

        <dl className="mx-auto mt-20 grid max-w-3xl grid-cols-3 gap-8 border-t border-white/5 pt-12">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="text-center opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${0.9 + i * 0.1}s`, animationFillMode: "forwards" }}
            >
              <dt className="text-2xl font-semibold text-white md:text-3xl">{stat.value}</dt>
              <dd className="mt-1 text-sm text-zinc-500">{stat.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

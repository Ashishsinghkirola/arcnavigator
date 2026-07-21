import { AnimatedSection } from "./AnimatedSection";
import {
  AIIcon,
  AnalyticsIcon,
  CrossChainIcon,
  LinkIcon,
  QRIcon,
  RoutingIcon,
} from "./icons";

const features = [
  {
    icon: RoutingIcon,
    title: "Smart Routing",
    description:
      "Our engine scans every bridge and DEX in real time to find the lowest-cost, fastest path for your transfer.",
    gradient: "from-blue-500/20 to-blue-600/5",
    iconColor: "text-blue-400",
  },
  {
    icon: CrossChainIcon,
    title: "Cross-chain Transfers",
    description:
      "Move USDC, USDT, and DAI across 12+ chains with a single transaction — no manual bridging required.",
    gradient: "from-violet-500/20 to-violet-600/5",
    iconColor: "text-violet-400",
  },
  {
    icon: AIIcon,
    title: "AI Assistant",
    description:
      "Ask natural-language questions about routes, fees, and settlement times. Get instant, actionable answers.",
    gradient: "from-indigo-500/20 to-indigo-600/5",
    iconColor: "text-indigo-400",
  },
  {
    icon: LinkIcon,
    title: "Payment Links",
    description:
      "Generate shareable payment links in seconds. Recipients claim funds on any supported chain.",
    gradient: "from-cyan-500/20 to-cyan-600/5",
    iconColor: "text-cyan-400",
  },
  {
    icon: QRIcon,
    title: "QR Payments",
    description:
      "Accept stablecoin payments in person with dynamic QR codes that auto-select the best receiving chain.",
    gradient: "from-purple-500/20 to-purple-600/5",
    iconColor: "text-purple-400",
  },
  {
    icon: AnalyticsIcon,
    title: "Analytics",
    description:
      "Track volume, fees saved, and settlement times with a real-time dashboard built for finance teams.",
    gradient: "from-sky-500/20 to-sky-600/5",
    iconColor: "text-sky-400",
  },
];

export function Features() {
  return (
    <section id="features" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <AnimatedSection className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-blue-400">
            Features
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-4xl lg:text-5xl">
            Everything you need to move{" "}
            <span className="gradient-text">value at scale</span>
          </h2>
          <p className="mt-4 text-lg text-zinc-400">
            Built for treasuries, merchants, and developers who demand speed,
            transparency, and control.
          </p>
        </AnimatedSection>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <AnimatedSection key={feature.title} delay={i * 80}>
              <div className="group relative h-full overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02] p-6 transition-all duration-300 hover:border-white/10 hover:bg-white/[0.04]">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
                />
                <div className="relative">
                  <div
                    className={`mb-4 inline-flex rounded-xl border border-white/10 bg-white/5 p-3 ${feature.iconColor}`}
                  >
                    <feature.icon />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                    {feature.description}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

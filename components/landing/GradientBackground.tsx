export function GradientBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden" aria-hidden="true">
      <div className="grid-bg absolute inset-0 opacity-60" />
      <div className="noise absolute inset-0" />
      <div
        className="absolute -top-40 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full opacity-30 blur-[120px] animate-pulse-glow"
        style={{ background: "radial-gradient(circle, #3b82f6 0%, transparent 70%)" }}
      />
      <div
        className="absolute top-1/3 -right-32 h-[500px] w-[500px] rounded-full opacity-20 blur-[100px] animate-float"
        style={{ background: "radial-gradient(circle, #8b5cf6 0%, transparent 70%)" }}
      />
      <div
        className="absolute -bottom-32 -left-32 h-[400px] w-[400px] rounded-full opacity-15 blur-[100px]"
        style={{ background: "radial-gradient(circle, #6366f1 0%, transparent 70%)" }}
      />
    </div>
  );
}

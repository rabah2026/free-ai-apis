import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative py-24 sm:py-32 px-4 text-center overflow-hidden">
      {/* Ambient glow blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 left-1/4 -translate-x-1/2 w-[520px] h-[420px] bg-indigo-600/[0.13] rounded-full blur-3xl" />
        <div className="absolute top-8 right-[20%] w-[340px] h-[300px] bg-violet-600/[0.09] rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[640px] h-[180px] bg-indigo-900/[0.18] rounded-full blur-3xl" />
      </div>
      {/* Top-down fade overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-950/15 via-transparent to-transparent pointer-events-none" />

      <div className="relative max-w-3xl mx-auto">
        <p className="text-indigo-400/80 text-xs font-semibold tracking-[0.18em] uppercase mb-6">
          For beginners&nbsp;&nbsp;·&nbsp;&nbsp;Official APIs only&nbsp;&nbsp;·&nbsp;&nbsp;Honest free tier info
        </p>
        <h1 className="text-4xl sm:text-6xl font-bold text-white leading-[1.12] tracking-tight mb-6">
          Free AI APIs,<br />explained for beginners.
        </h1>
        <p className="text-lg sm:text-xl text-[#8bacc9] leading-relaxed mb-10 max-w-2xl mx-auto">
          Find official AI APIs with free tiers, free credits, clear docs, starter examples, and honest beginner guidance.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="/apis"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 shadow-lg shadow-indigo-950/60"
          >
            Explore APIs
          </Link>
          <Link
            href="/finder"
            className="inline-flex items-center gap-2 bg-[#111827]/80 hover:bg-[#1a2234] text-white font-semibold px-6 py-3 rounded-xl border border-[#2a3f5f]/70 hover:border-indigo-800/60 transition-all duration-300"
          >
            Find the right API
          </Link>
        </div>
      </div>
    </section>
  );
}

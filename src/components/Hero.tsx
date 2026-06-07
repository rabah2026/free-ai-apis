import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative py-24 sm:py-32 px-4 text-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-950/20 to-transparent pointer-events-none" />
      <div className="relative max-w-3xl mx-auto">
        <p className="text-indigo-400 text-sm font-semibold tracking-wider uppercase mb-6">
          For beginners · Official APIs only · Honest free tier info
        </p>
        <h1 className="text-4xl sm:text-6xl font-bold text-white leading-tight tracking-tight mb-6">
          Free AI APIs,<br />explained for beginners.
        </h1>
        <p className="text-lg sm:text-xl text-[#7d94b5] leading-relaxed mb-10 max-w-2xl mx-auto">
          Find official AI APIs with free tiers, free credits, clear docs, starter examples, and honest beginner guidance.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="/apis" className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-6 py-3 rounded-xl transition-colors">
            Explore APIs
          </Link>
          <Link href="/finder" className="inline-flex items-center gap-2 bg-[#111827] hover:bg-[#1a2234] text-white font-semibold px-6 py-3 rounded-xl border border-[#1e2d45] transition-colors">
            Find the right API
          </Link>
        </div>
      </div>
    </section>
  );
}

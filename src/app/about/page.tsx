import type { Metadata } from "next";
import { SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: `About & Verification Policy | ${SITE_NAME}`,
  description: "How we verify API information and our commitment to only linking official provider sources.",
};

export default function AboutPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-12">
      <h1 className="text-3xl font-bold text-white mb-6">About &amp; Verification Policy</h1>

      <div className="space-y-8 text-[#7d94b5] text-sm leading-relaxed">
        <section>
          <h2 className="text-lg font-bold text-white mb-3">What this site is</h2>
          <p>{SITE_NAME} is a beginner-focused directory of official AI APIs. Our goal is to help developers who are just starting out find real, trustworthy AI APIs — with honest information about free tiers, pricing, and difficulty.</p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-white mb-3">Official sources only</h2>
          <p>Every API provider listed on this site links only to official provider websites and official documentation. We do not link to unofficial wrappers, resellers, or unofficial &quot;free API key&quot; aggregators.</p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-white mb-3">Pricing and free tiers change</h2>
          <p>Free tiers, pricing, and rate limits change frequently. We include a <strong className="text-white">last verified date</strong> on every provider page. This is the date we last checked the information against official sources.</p>
          <p className="mt-3 font-medium text-amber-300">Always check the official pricing page before building a production app that depends on a free tier.</p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-white mb-3">How we handle unknown information</h2>
          <p>If a provider&apos;s free tier is not clearly documented or we cannot verify it from official sources, we mark it as <strong className="text-white">&quot;Check Pricing&quot;</strong> instead of guessing or inventing numbers. We prefer honest uncertainty over inaccurate confidence.</p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-white mb-3">What we do not do</h2>
          <ul className="space-y-2">
            <li>• We do not sell API keys or provide access to any AI service.</li>
            <li>• We do not recommend unofficial &quot;free API key&quot; websites — these are often unsafe.</li>
            <li>• We do not claim any API has &quot;unlimited free&quot; access unless official docs clearly state it.</li>
            <li>• We do not maintain affiliate relationships with any listed provider.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-bold text-white mb-3">Disclaimer</h2>
          <div className="bg-amber-950/30 border border-amber-900/50 rounded-xl p-4 text-amber-300">
            Free limits and pricing can change. Always check the official pricing page before production use. This site provides information for educational purposes only.
          </div>
        </section>
      </div>
    </div>
  );
}

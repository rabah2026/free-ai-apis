import Link from "next/link";
import { apis } from "@/data/apis";
import { guides } from "@/data/guides";
import Hero from "@/components/Hero";
import ApiCard from "@/components/ApiCard";
import GuideCard from "@/components/GuideCard";
import TrustSection from "@/components/TrustSection";
import WarningSection from "@/components/WarningSection";

export default function HomePage() {
  const featuredApis = apis.filter((a) => a.beginnerDifficulty === "easy").slice(0, 3);
  const featuredGuides = guides.slice(0, 4);

  return (
    <>
      <Hero />

      {/* Featured APIs */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold text-white">Start here</h2>
            <p className="text-[#7d94b5] mt-1">Beginner-friendly APIs with real free tiers</p>
          </div>
          <Link href="/apis" className="text-sm text-indigo-400 hover:underline">View all →</Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {featuredApis.map((api) => (
            <ApiCard key={api.id} api={api} />
          ))}
        </div>
      </section>

      {/* Beginner guides */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12 border-t border-[#1e2d45]">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold text-white">Beginner guides</h2>
            <p className="text-[#7d94b5] mt-1">Everything you need to understand AI APIs</p>
          </div>
          <Link href="/guides" className="text-sm text-indigo-400 hover:underline">View all →</Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {featuredGuides.map((g) => (
            <GuideCard key={g.id} guide={g} />
          ))}
        </div>
      </section>

      <TrustSection />
      <WarningSection />
    </>
  );
}

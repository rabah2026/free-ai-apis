import Link from "next/link";
import { guides } from "@/data/guides";
import Hero from "@/components/Hero";
import FeaturedApis from "@/components/FeaturedApis";
import GuideCard from "@/components/GuideCard";
import TrustSection from "@/components/TrustSection";
import WarningSection from "@/components/WarningSection";

export default function HomePage() {
  const featuredGuides = guides.slice(0, 4);

  return (
    <>
      <Hero />
      <FeaturedApis />

      {/* Beginner guides */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12 border-t border-[#1e2d45]">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold text-white">Beginner guides</h2>
            <p className="text-[#8bacc9] mt-1">Everything you need to understand AI APIs</p>
          </div>
          <Link href="/guides" className="text-sm text-indigo-400 hover:text-indigo-300 hover:underline transition-colors">View all →</Link>
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

import type { Metadata } from "next";
import { guides } from "@/data/guides";
import GuideCard from "@/components/GuideCard";

export const metadata: Metadata = {
  title: "Beginner Guides | AI API Starter",
  description: "Plain-English guides to help beginners understand AI APIs, free tiers, API keys, tokens, and more.",
};

export default function GuidesPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-white mb-2">Beginner Guides</h1>
        <p className="text-[#7d94b5]">Everything you need to understand AI APIs — explained simply.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {guides.map((guide) => (
          <GuideCard key={guide.id} guide={guide} />
        ))}
      </div>
    </div>
  );
}

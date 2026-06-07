"use client";
import { useState } from "react";
import { apis } from "@/data/apis";
import { FreeTierType, Difficulty, Compatibility } from "@/data/apis";
import { filterApis } from "@/lib/api-utils";
import ApiCard from "@/components/ApiCard";
import SearchAndFilters from "@/components/SearchAndFilters";
import EmptyState from "@/components/EmptyState";

export default function ApisPage() {
  const [query, setQuery] = useState("");
  const [freeTier, setFreeTier] = useState<FreeTierType | "all">("all");
  const [difficulty, setDifficulty] = useState<Difficulty | "all">("all");
  const [openAiCompat, setOpenAiCompat] = useState<Compatibility | "all">("all");

  const filtered = filterApis(apis, query, freeTier, difficulty, openAiCompat, "all");

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-white mb-2">AI API Directory</h1>
        <p className="text-[#7d94b5]">Official AI APIs with free tiers, beginner summaries, and honest pricing info.</p>
      </div>
      <div className="mb-8">
        <SearchAndFilters
          query={query} onQuery={setQuery}
          freeTier={freeTier} onFreeTier={setFreeTier}
          difficulty={difficulty} onDifficulty={setDifficulty}
          openAiCompat={openAiCompat} onOpenAiCompat={setOpenAiCompat}
        />
      </div>
      <div className="text-sm text-[#4a6080] mb-4">{filtered.length} provider{filtered.length !== 1 ? "s" : ""}</div>
      {filtered.length === 0 ? (
        <EmptyState message="No APIs match your filters. Try adjusting your search." />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((api) => (
            <ApiCard key={api.id} api={api} />
          ))}
        </div>
      )}
    </div>
  );
}

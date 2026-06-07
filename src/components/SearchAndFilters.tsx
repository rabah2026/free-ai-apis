"use client";
import { FreeTierType, Difficulty, Compatibility } from "@/data/apis";
import { getFreeTierLabel, getDifficultyLabel } from "@/lib/api-utils";

type Props = {
  query: string; onQuery: (v: string) => void;
  freeTier: FreeTierType | "all"; onFreeTier: (v: FreeTierType | "all") => void;
  difficulty: Difficulty | "all"; onDifficulty: (v: Difficulty | "all") => void;
  openAiCompat: Compatibility | "all"; onOpenAiCompat: (v: Compatibility | "all") => void;
};

const FREE_TIER_OPTIONS: (FreeTierType | "all")[] = ["all", "free-tier", "free-trial", "free-credits", "local-free", "paid-only", "unknown"];
const DIFFICULTY_OPTIONS: (Difficulty | "all")[] = ["all", "easy", "medium", "advanced"];

export default function SearchAndFilters({ query, onQuery, freeTier, onFreeTier, difficulty, onDifficulty, openAiCompat, onOpenAiCompat }: Props) {
  return (
    <div className="space-y-4">
      <input
        type="search"
        value={query}
        onChange={(e) => onQuery(e.target.value)}
        placeholder="Search APIs, features, providers…"
        className="w-full bg-[#111827] border border-[#1e2d45] text-white placeholder-[#4a6080] rounded-xl px-4 py-3 outline-none focus:border-indigo-700 transition-colors"
      />
      <div className="flex flex-wrap gap-2">
        <select
          value={freeTier}
          onChange={(e) => onFreeTier(e.target.value as FreeTierType | "all")}
          className="bg-[#111827] border border-[#1e2d45] text-[#7d94b5] rounded-lg px-3 py-2 text-sm outline-none"
        >
          {FREE_TIER_OPTIONS.map((v) => (
            <option key={v} value={v}>{v === "all" ? "All free tiers" : getFreeTierLabel(v as FreeTierType)}</option>
          ))}
        </select>
        <select
          value={difficulty}
          onChange={(e) => onDifficulty(e.target.value as Difficulty | "all")}
          className="bg-[#111827] border border-[#1e2d45] text-[#7d94b5] rounded-lg px-3 py-2 text-sm outline-none"
        >
          {DIFFICULTY_OPTIONS.map((v) => (
            <option key={v} value={v}>{v === "all" ? "All difficulties" : getDifficultyLabel(v as Difficulty)}</option>
          ))}
        </select>
        <select
          value={openAiCompat}
          onChange={(e) => onOpenAiCompat(e.target.value as Compatibility | "all")}
          className="bg-[#111827] border border-[#1e2d45] text-[#7d94b5] rounded-lg px-3 py-2 text-sm outline-none"
        >
          <option value="all">All compatibility</option>
          <option value="yes">OpenAI-compatible: Yes</option>
          <option value="partial">OpenAI-compatible: Partial</option>
          <option value="no">OpenAI-compatible: No</option>
          <option value="unknown">OpenAI-compatible: Unknown</option>
        </select>
      </div>
    </div>
  );
}

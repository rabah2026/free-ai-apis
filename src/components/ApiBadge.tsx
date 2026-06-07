import { FreeTierType, Difficulty } from "@/data/apis";
import { getFreeTierLabel, getDifficultyLabel } from "@/lib/api-utils";

type Props = {
  variant: "freeTier" | "difficulty";
  value: FreeTierType | Difficulty;
};

export default function ApiBadge({ variant, value }: Props) {
  if (variant === "freeTier") {
    const v = value as FreeTierType;
    const colorMap: Record<FreeTierType, string> = {
      "free-tier": "bg-emerald-950/60 text-emerald-400 border border-emerald-900",
      "free-trial": "bg-blue-950/60 text-blue-400 border border-blue-900",
      "free-credits": "bg-violet-950/60 text-violet-400 border border-violet-900",
      "local-free": "bg-cyan-950/60 text-cyan-400 border border-cyan-900",
      "paid-only": "bg-[#1e2d45] text-[#7d94b5] border border-[#2a3f5f]",
      "unknown": "bg-[#1e2d45] text-[#7d94b5] border border-[#2a3f5f]"
    };
    return (
      <span className={`inline-flex items-center px-2 py-0.5 rounded-md text-xs font-semibold ${colorMap[v]}`}>
        {getFreeTierLabel(v)}
      </span>
    );
  }

  const v = value as Difficulty;
  const colorMap: Record<Difficulty, string> = {
    easy: "bg-emerald-950/60 text-emerald-400 border border-emerald-900",
    medium: "bg-amber-950/60 text-amber-400 border border-amber-900",
    advanced: "bg-red-950/60 text-red-400 border border-red-900"
  };
  return (
    <span className={`inline-flex items-center px-2 py-0.5 rounded-md text-xs font-semibold ${colorMap[v]}`}>
      {getDifficultyLabel(v)}
    </span>
  );
}

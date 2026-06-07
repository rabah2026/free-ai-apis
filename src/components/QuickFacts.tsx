import { ApiProvider } from "@/data/apis";
import { getFreeTierLabel, getDifficultyLabel, getCompatibilityLabel } from "@/lib/api-utils";

type Props = { api: ApiProvider };
export default function QuickFacts({ api }: Props) {
  const facts = [
    { label: "Free Tier", value: getFreeTierLabel(api.freeTierType) },
    { label: "Difficulty", value: getDifficultyLabel(api.beginnerDifficulty) },
    { label: "OpenAI Compatible", value: getCompatibilityLabel(api.openAiCompatible) },
    { label: "Credit Card Required", value: api.requiresCreditCard === "no" ? "No" : api.requiresCreditCard === "yes" ? "Yes" : "Check docs" },
  ];
  return (
    <div className="grid grid-cols-2 gap-3">
      {facts.map((f) => (
        <div key={f.label} className="bg-[#111827] border border-[#1e2d45] rounded-xl p-3">
          <div className="text-xs text-[#4a6080] mb-1">{f.label}</div>
          <div className="font-semibold text-white text-sm">{f.value}</div>
        </div>
      ))}
    </div>
  );
}

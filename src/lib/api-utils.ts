import { ApiProvider, FreeTierType, Difficulty, Compatibility } from "@/data/apis";

export function getFreeTierLabel(type: FreeTierType): string {
  const labels: Record<FreeTierType, string> = {
    "free-tier": "Free Tier",
    "free-trial": "Free Trial",
    "free-credits": "Free Credits",
    "local-free": "Local / Free",
    "paid-only": "Paid Only",
    "unknown": "Check Pricing"
  };
  return labels[type];
}

export function getDifficultyLabel(d: Difficulty): string {
  const labels: Record<Difficulty, string> = {
    easy: "Beginner",
    medium: "Intermediate",
    advanced: "Advanced"
  };
  return labels[d];
}

export function getCompatibilityLabel(c: Compatibility): string {
  const labels: Record<Compatibility, string> = {
    yes: "Yes",
    no: "No",
    partial: "Partial",
    unknown: "Unknown"
  };
  return labels[c];
}

export function filterApis(
  apis: ApiProvider[],
  query: string,
  freeTier: FreeTierType | "all",
  difficulty: Difficulty | "all",
  openAiCompat: Compatibility | "all",
  useCase: string | "all"
): ApiProvider[] {
  return apis.filter((api) => {
    const matchQuery =
      !query ||
      api.name.toLowerCase().includes(query.toLowerCase()) ||
      api.shortDescription.toLowerCase().includes(query.toLowerCase()) ||
      api.bestFor.some((b) => b.toLowerCase().includes(query.toLowerCase()));

    const matchFreeTier = freeTier === "all" || api.freeTierType === freeTier;
    const matchDifficulty = difficulty === "all" || api.beginnerDifficulty === difficulty;
    const matchCompat = openAiCompat === "all" || api.openAiCompatible === openAiCompat;
    const matchUseCase =
      useCase === "all" ||
      api.bestFor.some((b) => b.toLowerCase().includes(useCase.toLowerCase())) ||
      api.supportedFeatures.some((f) => f.toLowerCase().includes(useCase.toLowerCase()));

    return matchQuery && matchFreeTier && matchDifficulty && matchCompat && matchUseCase;
  });
}

export function getRecommendations(
  apis: ApiProvider[],
  useCase: string
): ApiProvider[] {
  return apis
    .filter((api) => {
      const matches =
        api.bestFor.some((b) => b.toLowerCase().includes(useCase.toLowerCase())) ||
        api.supportedFeatures.some((f) => f.toLowerCase().includes(useCase.toLowerCase()));
      return matches;
    })
    .sort((a, b) => {
      const order: Difficulty[] = ["easy", "medium", "advanced"];
      return order.indexOf(a.beginnerDifficulty) - order.indexOf(b.beginnerDifficulty);
    });
}

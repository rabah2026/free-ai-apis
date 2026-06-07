"use client";
import { useState } from "react";
import { apis } from "@/data/apis";
import { getRecommendations } from "@/lib/api-utils";
import RecommendationList from "@/components/RecommendationList";

const USE_CASES = [
  { label: "Chatbot", value: "Chatbot" },
  { label: "Summarizer", value: "Summarization" },
  { label: "Image generation", value: "Image generation" },
  { label: "Voice transcription", value: "Speech-to-text" },
  { label: "Text-to-speech", value: "Text-to-speech" },
  { label: "Embeddings", value: "Embeddings" },
  { label: "Code assistant", value: "Code generation" },
  { label: "Vision / image understanding", value: "Vision" },
  { label: "Open-source models", value: "Open-source models" },
  { label: "Fast inference", value: "Fast inference" },
];

export default function FinderPage() {
  const [selected, setSelected] = useState<string | null>(null);
  const recommendations = selected ? getRecommendations(apis, selected) : [];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-white mb-2">Find the right API</h1>
        <p className="text-[#7d94b5]">Pick what you want to build and we&apos;ll recommend beginner-friendly APIs.</p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-12">
        {USE_CASES.map((uc) => (
          <button
            key={uc.value}
            onClick={() => setSelected(selected === uc.value ? null : uc.value)}
            className={`rounded-xl px-4 py-4 text-sm font-medium border text-left transition-colors ${
              selected === uc.value
                ? "bg-indigo-600 text-white border-indigo-500"
                : "bg-[#111827] text-[#7d94b5] border-[#1e2d45] hover:border-indigo-800 hover:text-white"
            }`}
          >
            {uc.label}
          </button>
        ))}
      </div>

      {selected && (
        <div>
          <h2 className="text-xl font-bold text-white mb-6">
            Recommended for: <span className="text-indigo-400">{selected}</span>
          </h2>
          <RecommendationList apis={recommendations} useCase={selected} />
        </div>
      )}

      {!selected && (
        <div className="text-center py-12 text-[#4a6080]">
          <p>Select a use case above to see recommendations.</p>
        </div>
      )}
    </div>
  );
}

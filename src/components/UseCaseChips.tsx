"use client";
type Props = {
  selected: string;
  onSelect: (value: string) => void;
};
const USE_CASES = [
  "Chatbot", "Image generation", "Speech-to-text", "Text-to-speech",
  "OCR", "RAG", "Embeddings", "Agents", "Vision", "Local AI"
];

export default function UseCaseChips({ selected, onSelect }: Props) {
  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {USE_CASES.map((uc) => (
        <button
          key={uc}
          onClick={() => onSelect(selected === uc ? "" : uc)}
          className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
            selected === uc
              ? "bg-indigo-600 text-white border-indigo-500"
              : "bg-[#111827] text-[#7d94b5] border-[#1e2d45] hover:border-indigo-800 hover:text-white"
          }`}
        >
          {uc}
        </button>
      ))}
    </div>
  );
}

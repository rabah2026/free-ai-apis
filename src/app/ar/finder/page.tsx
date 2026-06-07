"use client";
import { useState } from "react";
import { apis } from "@/data/apis";
import { getRecommendations } from "@/lib/api-utils";
import ApiCard from "@/components/ApiCard";
import EmptyState from "@/components/EmptyState";

const USE_CASES = [
  { label: "شات بوت", value: "Chatbot" },
  { label: "تلخيص النصوص", value: "Summarization" },
  { label: "توليد الصور", value: "Image generation" },
  { label: "تحويل الصوت إلى نص", value: "Speech-to-text" },
  { label: "تحويل النص إلى صوت", value: "Text-to-speech" },
  { label: "تضمينات النصوص", value: "Embeddings" },
  { label: "مساعد برمجي", value: "Code generation" },
  { label: "فهم الصور", value: "Vision" },
  { label: "نماذج مفتوحة المصدر", value: "Open-source models" },
  { label: "استنتاج سريع", value: "Fast inference" },
];

export default function ArFinderPage() {
  const [selected, setSelected] = useState<string | null>(null);
  const recommendations = selected ? getRecommendations(apis, selected) : [];

  return (
    <div dir="rtl" className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-white mb-2">ابحث عن الواجهة البرمجية المناسبة</h1>
        <p className="text-[#7d94b5]">اختر ما تريد بناءه وسنوصي بواجهات مناسبة للمبتدئين.</p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-12">
        {USE_CASES.map((uc) => (
          <button
            key={uc.value}
            onClick={() => setSelected(selected === uc.value ? null : uc.value)}
            className={`rounded-xl px-4 py-4 text-sm font-medium border text-right transition-colors ${
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
            موصى به لـ: <span className="text-indigo-400">{USE_CASES.find((u) => u.value === selected)?.label}</span>
          </h2>
          {recommendations.length === 0 ? (
            <EmptyState message={`لا توجد واجهات لـ "${selected}". جرّب حالة استخدام أخرى.`} />
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {recommendations.map((api) => <ApiCard key={api.id} api={api} />)}
            </div>
          )}
        </div>
      )}

      {!selected && (
        <div className="text-center py-12 text-[#4a6080]">
          <p>اختر حالة استخدام أعلاه لرؤية التوصيات.</p>
        </div>
      )}
    </div>
  );
}

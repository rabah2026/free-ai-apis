"use client";
import { useState } from "react";
import { apis, FreeTierType, Difficulty, Compatibility } from "@/data/apis";
import { filterApis } from "@/lib/api-utils";
import ApiCard from "@/components/ApiCard";
import EmptyState from "@/components/EmptyState";

const FREE_TIER_OPTIONS: (FreeTierType | "all")[] = ["all", "free-tier", "free-trial", "free-credits", "local-free", "paid-only", "unknown"];
const DIFFICULTY_OPTIONS: (Difficulty | "all")[] = ["all", "easy", "medium", "advanced"];

const freeTierLabelsAr: Record<FreeTierType | "all", string> = {
  all: "جميع الطبقات المجانية",
  "free-tier": "طبقة مجانية",
  "free-trial": "تجربة مجانية",
  "free-credits": "أرصدة مجانية",
  "local-free": "مجاني محلياً",
  "paid-only": "مدفوع فقط",
  unknown: "راجع الأسعار",
};

const difficultyLabelsAr: Record<Difficulty | "all", string> = {
  all: "جميع مستويات الصعوبة",
  easy: "مبتدئ",
  medium: "متوسط",
  advanced: "متقدم",
};

export default function ArApisPage() {
  const [query, setQuery] = useState("");
  const [freeTier, setFreeTier] = useState<FreeTierType | "all">("all");
  const [difficulty, setDifficulty] = useState<Difficulty | "all">("all");
  const [openAiCompat, setOpenAiCompat] = useState<Compatibility | "all">("all");
  const filtered = filterApis(apis, query, freeTier, difficulty, openAiCompat, "all");

  return (
    <div dir="rtl" className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-white mb-2">دليل واجهات الذكاء الاصطناعي</h1>
        <p className="text-[#7d94b5]">واجهات برمجية رسمية مع طبقات مجانية وملخصات للمبتدئين ومعلومات صادقة عن الأسعار.</p>
      </div>
      <div className="space-y-4 mb-8">
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="ابحث عن واجهات، ميزات، مزوّدين…"
          className="w-full bg-[#111827] border border-[#1e2d45] text-white placeholder-[#4a6080] rounded-xl px-4 py-3 outline-none focus:border-indigo-700 transition-colors text-right"
          dir="rtl"
        />
        <div className="flex flex-wrap gap-2">
          <select
            value={freeTier}
            onChange={(e) => setFreeTier(e.target.value as FreeTierType | "all")}
            className="bg-[#111827] border border-[#1e2d45] text-[#7d94b5] rounded-lg px-3 py-2 text-sm outline-none"
            dir="rtl"
          >
            {FREE_TIER_OPTIONS.map((v) => <option key={v} value={v}>{freeTierLabelsAr[v]}</option>)}
          </select>
          <select
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value as Difficulty | "all")}
            className="bg-[#111827] border border-[#1e2d45] text-[#7d94b5] rounded-lg px-3 py-2 text-sm outline-none"
            dir="rtl"
          >
            {DIFFICULTY_OPTIONS.map((v) => <option key={v} value={v}>{difficultyLabelsAr[v]}</option>)}
          </select>
          <select
            value={openAiCompat}
            onChange={(e) => setOpenAiCompat(e.target.value as Compatibility | "all")}
            className="bg-[#111827] border border-[#1e2d45] text-[#7d94b5] rounded-lg px-3 py-2 text-sm outline-none"
            dir="rtl"
          >
            <option value="all">جميع حالات التوافق</option>
            <option value="yes">متوافق مع OpenAI: نعم</option>
            <option value="partial">متوافق مع OpenAI: جزئياً</option>
            <option value="no">متوافق مع OpenAI: لا</option>
            <option value="unknown">التوافق: غير معروف</option>
          </select>
        </div>
      </div>
      <div className="text-sm text-[#4a6080] mb-4">{filtered.length} مزوّد</div>
      {filtered.length === 0 ? (
        <EmptyState message="لا توجد واجهات تطابق عوامل التصفية. حاول تعديل بحثك." />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((api) => <ApiCard key={api.id} api={api} />)}
        </div>
      )}
    </div>
  );
}

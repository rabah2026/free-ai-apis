"use client";
import { useState } from "react";
import Link from "next/link";
import { apis } from "@/data/apis";
import ApiCard from "@/components/ApiCard";

const INITIAL = 6;
const STEP = 6;

const diffOrder = { easy: 0, medium: 1, advanced: 2 } as const;
const sorted = [...apis].sort(
  (a, b) => diffOrder[a.beginnerDifficulty] - diffOrder[b.beginnerDifficulty]
);

type Props = { locale?: "en" | "ar" };

export default function FeaturedApis({ locale = "en" }: Props) {
  const [count, setCount] = useState(INITIAL);
  const isAr = locale === "ar";
  const visible = sorted.slice(0, count);
  const remaining = sorted.length - count;
  const hasMore = remaining > 0;

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-2xl font-bold text-white">
            {isAr ? "ابدأ من هنا" : "Start here"}
          </h2>
          <p className="text-[#8bacc9] mt-1">
            {isAr
              ? "APIs مناسبة للمبتدئين مع خطط مجانية حقيقية"
              : "Beginner-friendly APIs with real free tiers"}
          </p>
        </div>
        <Link
          href={isAr ? "/ar/apis" : "/apis"}
          className="text-sm text-indigo-400 hover:text-indigo-300 hover:underline transition-colors shrink-0"
        >
          {isAr ? "عرض الكل ←" : "View all →"}
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {visible.map((api) => (
          <ApiCard key={api.id} api={api} locale={locale} />
        ))}
      </div>

      <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
        {hasMore ? (
          <>
            <button
              onClick={() => setCount((c) => Math.min(c + STEP, sorted.length))}
              className="inline-flex items-center gap-2 bg-[#111827] hover:bg-[#1a2234] text-white font-semibold px-6 py-3 rounded-xl border border-[#2a3f5f]/70 hover:border-indigo-800/60 transition-all duration-300 text-sm"
            >
              {isAr
                ? `تحميل المزيد — ${remaining} أخرى`
                : `Load more — ${remaining} more`}
            </button>
            <Link
              href={isAr ? "/ar/apis" : "/apis"}
              className="text-sm text-[#8bacc9] hover:text-white transition-colors px-2 py-3"
            >
              {isAr ? "أو عرض الكل ←" : "or view all →"}
            </Link>
          </>
        ) : (
          <Link
            href={isAr ? "/ar/apis" : "/apis"}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 shadow-lg shadow-indigo-950/60 text-sm"
          >
            {isAr
              ? `عرض صفحة الـ APIs الكاملة ←`
              : `Browse the full API directory →`}
          </Link>
        )}
      </div>
    </section>
  );
}

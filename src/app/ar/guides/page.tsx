import type { Metadata } from "next";
import Link from "next/link";
import { guides } from "@/data/guides";

export const metadata: Metadata = {
  title: "أدلة المبتدئين | مرشد واجهات الذكاء الاصطناعي",
  description: "أدلة بسيطة تساعد المبتدئين على فهم واجهات الذكاء الاصطناعي والطبقات المجانية ومفاتيح API والمزيد.",
};

export default function ArGuidesPage() {
  return (
    <div dir="rtl" className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-white mb-2">أدلة المبتدئين</h1>
        <p className="text-[#7d94b5]">كل ما تحتاج لفهم واجهات الذكاء الاصطناعي — موضّح ببساطة.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {guides.map((guide) => (
          <Link href={`/ar/guides/${guide.slug}`} key={guide.id} className="block group">
            <article className="bg-[#111827] border border-[#1e2d45] rounded-2xl p-5 hover:border-[#2a3f5f] transition-colors h-full">
              <div className="text-xs text-[#4a6080] mb-2">{guide.readingTime} قراءة</div>
              <h3 className="font-bold text-white group-hover:text-indigo-300 transition-colors mb-2">
                {guide.titleAr ?? guide.title}
              </h3>
              <p className="text-sm text-[#7d94b5] leading-relaxed">{guide.summaryAr ?? guide.summary}</p>
            </article>
          </Link>
        ))}
      </div>
    </div>
  );
}

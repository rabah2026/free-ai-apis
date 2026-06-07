"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  const isArabic = pathname.startsWith("/ar");

  if (isArabic) {
    return (
      <footer className="border-t border-[#1e2d45] bg-[#0a0d14] mt-24" dir="rtl">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 grid grid-cols-1 sm:grid-cols-3 gap-8 text-sm text-[#7d94b5]">
          <div>
            <div className="font-bold text-white mb-2" style={{ fontFamily: "system-ui, sans-serif" }}>مرشد واجهات الذكاء الاصطناعي</div>
            <p className="leading-relaxed">واجهات الذكاء الاصطناعي الرسمية موضّحة للمبتدئين. مزوّدون حقيقيون فقط، وثائق حقيقية، ومعلومات صادقة عن الطبقات المجانية.</p>
          </div>
          <div>
            <div className="font-semibold text-white mb-3">الدليل</div>
            <ul className="space-y-2">
              <li><Link href="/ar/apis" className="hover:text-white transition-colors">جميع الواجهات البرمجية</Link></li>
              <li><Link href="/ar/finder" className="hover:text-white transition-colors">ابحث عن الواجهة المناسبة</Link></li>
              <li><Link href="/ar/guides" className="hover:text-white transition-colors">أدلة المبتدئين</Link></li>
            </ul>
          </div>
          <div>
            <div className="font-semibold text-white mb-3">معلومات</div>
            <ul className="space-y-2">
              <li><Link href="/ar/about" className="hover:text-white transition-colors">عن الموقع وسياسة التحقق</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-[#1e2d45] max-w-6xl mx-auto px-4 sm:px-6 py-4 text-xs text-[#4a6080]">
          قد تتغير الحدود المجانية والأسعار. تحقق دائمًا من التسعير الرسمي للمزوّد قبل الاستخدام في الإنتاج.
        </div>
      </footer>
    );
  }

  return (
    <footer className="border-t border-[#1e2d45] bg-[#0a0d14] mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 grid grid-cols-1 sm:grid-cols-3 gap-8 text-sm text-[#7d94b5]">
        <div>
          <div className="font-bold text-white mb-2">AI API Starter</div>
          <p className="leading-relaxed">Official AI APIs explained for beginners. Only real providers, real docs, and honest free tier info.</p>
        </div>
        <div>
          <div className="font-semibold text-white mb-3">Directory</div>
          <ul className="space-y-2">
            <li><Link href="/apis" className="hover:text-white transition-colors">All APIs</Link></li>
            <li><Link href="/finder" className="hover:text-white transition-colors">Use-case Finder</Link></li>
            <li><Link href="/guides" className="hover:text-white transition-colors">Beginner Guides</Link></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold text-white mb-3">Info</div>
          <ul className="space-y-2">
            <li><Link href="/about" className="hover:text-white transition-colors">About &amp; Verification Policy</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-[#1e2d45] max-w-6xl mx-auto px-4 sm:px-6 py-4 text-xs text-[#4a6080]">
        Free limits and pricing can change. Always check official provider pricing before production use.
      </div>
    </footer>
  );
}

import Link from "next/link";
import { guides } from "@/data/guides";
import FeaturedApis from "@/components/FeaturedApis";
import GuideCard from "@/components/GuideCard";

export default function ArHomePage() {
  const featuredGuides = guides.slice(0, 4);

  return (
    <div dir="rtl">
      {/* Hero */}
      <section className="relative py-24 sm:py-32 px-4 text-center overflow-hidden">
        {/* Ambient glow blobs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-32 right-1/4 translate-x-1/2 w-[520px] h-[420px] bg-indigo-600/[0.13] rounded-full blur-3xl" />
          <div className="absolute top-8 left-[20%] w-[340px] h-[300px] bg-violet-600/[0.09] rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[640px] h-[180px] bg-indigo-900/[0.18] rounded-full blur-3xl" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-950/15 via-transparent to-transparent pointer-events-none" />
        <div className="relative max-w-3xl mx-auto">
          <p className="text-indigo-400/80 text-xs font-semibold tracking-[0.18em] uppercase mb-6">
            للمبتدئين&nbsp;&nbsp;·&nbsp;&nbsp;مصادر رسمية فقط&nbsp;&nbsp;·&nbsp;&nbsp;معلومات صادقة عن الخطط المجانية
          </p>
          <h1 className="text-4xl sm:text-6xl font-bold text-white leading-[1.12] tracking-tight mb-6">
            AI APIs المجانية،<br />موضّحة للمبتدئين.
          </h1>
          <p className="text-lg sm:text-xl text-[#8bacc9] leading-relaxed mb-10 max-w-2xl mx-auto">
            اكتشف AI APIs الرسمية التي تقدم طبقات مجانية وأرصدة مجانية، مع توثيق واضح وأمثلة عملية وإرشادات صادقة للمبتدئين.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/ar/apis" className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 shadow-lg shadow-indigo-950/60">
              استعرض APIs
            </Link>
            <Link href="/ar/finder" className="inline-flex items-center gap-2 bg-[#111827]/80 hover:bg-[#1a2234] text-white font-semibold px-6 py-3 rounded-xl border border-[#2a3f5f]/70 hover:border-indigo-800/60 transition-all duration-300">
              ابحث عن API المناسب
            </Link>
          </div>
        </div>
      </section>

      <FeaturedApis locale="ar" />

      {/* Guides */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12 border-t border-[#1e2d45]">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold text-white">أدلة المبتدئين</h2>
            <p className="text-[#8bacc9] mt-1">كل ما تحتاج لفهم AI APIs</p>
          </div>
          <Link href="/ar/guides" className="text-sm text-indigo-400 hover:text-indigo-300 hover:underline transition-colors">عرض الكل ←</Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {featuredGuides.map((g) => <GuideCard key={g.id} guide={g} locale="ar" />)}
        </div>
      </section>

      {/* Trust */}
      <section className="py-16 border-t border-[#1e2d45]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-white mb-2">لماذا تثق بهذا الدليل؟</h2>
          <p className="text-[#8bacc9] mb-10">بنينا هذا الموقع للمبتدئين الذين يستحقون معلومات صادقة ودقيقة.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { title: "مصادر رسمية فقط", desc: "كل API مدرج يرتبط بالموقع الرسمي للمزوّد والتوثيق الرسمي." },
              { title: "تواريخ آخر تحقق", desc: "كل صفحة مزوّد تُظهر متى تم التحقق من المعلومات مقابل المصادر الرسمية." },
              { title: "صادقون بشأن المجهول", desc: "إذا كانت الطبقة المجانية غير واضحة، نضع علامة «غير معروف» بدلًا من التخمين." },
              { title: "لا مفاتيح غير رسمية", desc: "لا نرتبط أبدًا بمواقع «API keys مجانية» غير رسمية." },
            ].map((item) => (
              <div key={item.title} className="bg-[#111827] border border-[#1e2d45] rounded-2xl p-5">
                <div className="font-semibold text-white mb-1">{item.title}</div>
                <div className="text-sm text-[#8bacc9]">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Warning */}
      <section className="py-12 border-t border-[#1e2d45]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="bg-amber-950/30 border border-amber-900/50 rounded-2xl p-6">
            <h2 className="font-bold text-amber-300 text-lg mb-3">⚠️ تحذير: مواقع «API keys مجانية» غير الرسمية</h2>
            <p className="text-sm text-amber-200/80 leading-relaxed mb-4">
              هناك مواقع كثيرة تدّعي توفير API keys مجانية. هذه المواقع غير رسمية وقد تكون خطرة.
            </p>
            <ul className="space-y-2 text-sm text-amber-200/70">
              <li>• قد تسرق بيانات اعتمادك أو تحقن محتوى ضارًا في الردود.</li>
              <li>• قد تعمل الـ API keys بشكل مؤقت ثم تتوقف، مما يعطل تطبيقك.</li>
              <li>• استخدام API keys غير الرسمية قد ينتهك شروط خدمة المزوّد.</li>
              <li>• هذا الموقع يرتبط فقط بصفحات تسجيل المزوّدين الرسمية.</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

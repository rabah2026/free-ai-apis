import Link from "next/link";
import { apis } from "@/data/apis";
import { guides } from "@/data/guides";
import ApiCard from "@/components/ApiCard";
import GuideCard from "@/components/GuideCard";

export default function ArHomePage() {
  const featuredApis = apis.filter((a) => a.beginnerDifficulty === "easy").slice(0, 3);
  const featuredGuides = guides.slice(0, 4);

  return (
    <div dir="rtl">
      {/* Hero */}
      <section className="relative py-24 sm:py-32 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-950/20 to-transparent pointer-events-none" />
        <div className="relative max-w-3xl mx-auto">
          <p className="text-indigo-400 text-sm font-semibold tracking-wider uppercase mb-6">
            للمبتدئين · مصادر رسمية فقط · معلومات صادقة عن الخطط المجانية
          </p>
          <h1 className="text-4xl sm:text-6xl font-bold text-white leading-tight tracking-tight mb-6">
            AI APIs المجانية،<br />موضّحة للمبتدئين.
          </h1>
          <p className="text-lg sm:text-xl text-[#7d94b5] leading-relaxed mb-10 max-w-2xl mx-auto">
            اكتشف AI APIs الرسمية التي تقدم طبقات مجانية وأرصدة مجانية، مع توثيق واضح وأمثلة عملية وإرشادات صادقة للمبتدئين.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/ar/apis" className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-6 py-3 rounded-xl transition-colors">
              استعرض APIs
            </Link>
            <Link href="/ar/finder" className="inline-flex items-center gap-2 bg-[#111827] hover:bg-[#1a2234] text-white font-semibold px-6 py-3 rounded-xl border border-[#1e2d45] transition-colors">
              ابحث عن API المناسب
            </Link>
          </div>
        </div>
      </section>

      {/* Featured APIs */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold text-white">ابدأ من هنا</h2>
            <p className="text-[#7d94b5] mt-1">APIs مناسبة للمبتدئين مع خطط مجانية حقيقية</p>
          </div>
          <Link href="/ar/apis" className="text-sm text-indigo-400 hover:underline">عرض الكل ←</Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {featuredApis.map((api) => <ApiCard key={api.id} api={api} locale="ar" />)}
        </div>
      </section>

      {/* Guides */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12 border-t border-[#1e2d45]">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold text-white">أدلة المبتدئين</h2>
            <p className="text-[#7d94b5] mt-1">كل ما تحتاج لفهم AI APIs</p>
          </div>
          <Link href="/ar/guides" className="text-sm text-indigo-400 hover:underline">عرض الكل ←</Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {featuredGuides.map((g) => <GuideCard key={g.id} guide={g} locale="ar" />)}
        </div>
      </section>

      {/* Trust */}
      <section className="py-16 border-t border-[#1e2d45]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-white mb-2">لماذا تثق بهذا الدليل؟</h2>
          <p className="text-[#7d94b5] mb-10">بنينا هذا الموقع للمبتدئين الذين يستحقون معلومات صادقة ودقيقة.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { title: "مصادر رسمية فقط", desc: "كل API مدرج يرتبط بالموقع الرسمي للمزوّد والتوثيق الرسمي." },
              { title: "تواريخ آخر تحقق", desc: "كل صفحة مزوّد تُظهر متى تم التحقق من المعلومات مقابل المصادر الرسمية." },
              { title: "صادقون بشأن المجهول", desc: "إذا كانت الطبقة المجانية غير واضحة، نضع علامة «غير معروف» بدلًا من التخمين." },
              { title: "لا مفاتيح غير رسمية", desc: "لا نرتبط أبدًا بمواقع «API keys مجانية» غير رسمية." },
            ].map((item) => (
              <div key={item.title} className="bg-[#111827] border border-[#1e2d45] rounded-2xl p-5">
                <div className="font-semibold text-white mb-1">{item.title}</div>
                <div className="text-sm text-[#7d94b5]">{item.desc}</div>
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

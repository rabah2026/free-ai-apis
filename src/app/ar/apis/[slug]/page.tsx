import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { apis } from "@/data/apis";
import type { ApiProvider } from "@/data/apis";
import ApiBadge from "@/components/ApiBadge";
import ApiCard from "@/components/ApiCard";

type Props = { params: { slug: string } };

export async function generateStaticParams() {
  return apis.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const api = apis.find((a) => a.slug === params.slug);
  if (!api) return {};
  return {
    title: `${api.name} — دليل المبتدئ | مرشد AI APIs`,
    description: api.beginnerSummary,
  };
}

const freeTierLabelsAr: Record<string, string> = {
  "free-tier": "طبقة مجانية",
  "free-trial": "تجربة مجانية",
  "free-credits": "أرصدة مجانية",
  "local-free": "مجاني محلياً",
  "paid-only": "مدفوع فقط",
  unknown: "راجع الأسعار",
};

const diffLabelsAr: Record<string, string> = {
  easy: "مبتدئ",
  medium: "متوسط",
  advanced: "متقدم",
};

const compatLabelsAr: Record<string, string> = {
  yes: "نعم",
  no: "لا",
  partial: "جزئياً",
  unknown: "غير معروف",
};

function QuickFactsAr({ api }: { api: ApiProvider }) {
  const facts = [
    { label: "الطبقة المجانية", value: freeTierLabelsAr[api.freeTierType] ?? api.freeTierType },
    { label: "مستوى الصعوبة", value: diffLabelsAr[api.beginnerDifficulty] ?? api.beginnerDifficulty },
    { label: "متوافق مع OpenAI", value: compatLabelsAr[api.openAiCompatible] ?? api.openAiCompatible },
    {
      label: "بطاقة ائتمانية مطلوبة",
      value: api.requiresCreditCard === "no" ? "لا" : api.requiresCreditCard === "yes" ? "نعم" : "راجع التوثيق",
    },
  ];
  return (
    <div className="grid grid-cols-2 gap-3">
      {facts.map((f) => (
        <div key={f.label} className="bg-[#111827] border border-[#1e2d45] rounded-xl p-3">
          <div className="text-xs text-[#4a6080] mb-1">{f.label}</div>
          <div className="font-semibold text-white text-sm">{f.value}</div>
        </div>
      ))}
    </div>
  );
}

export default function ArApiDetailPage({ params }: Props) {
  const api = apis.find((a) => a.slug === params.slug);
  if (!api) notFound();

  const similar = apis
    .filter((a) => a.id !== api.id && a.bestFor.some((b) => api.bestFor.includes(b)))
    .slice(0, 3);

  const secondaryLinks = [
    { label: "الموقع الرسمي", url: api.officialWebsite },
    { label: "التوثيق", url: api.docsUrl },
    ...(api.pricingUrl ? [{ label: "الأسعار / الطبقة المجانية", url: api.pricingUrl }] : []),
  ];

  return (
    <div dir="rtl" className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
      <div className="bg-amber-950/30 border border-amber-900/50 rounded-xl px-4 py-3 text-sm text-amber-300 mb-8">
        ⚠️ قد تتغير الحدود المجانية والأسعار. تحقق دائمًا من صفحة التسعير الرسمية قبل الاستخدام في الإنتاج.
      </div>

      <div className="mb-8">
        <div className="flex flex-wrap items-center gap-3 mb-3">
          <ApiBadge variant="freeTier" value={api.freeTierType} />
          <ApiBadge variant="difficulty" value={api.beginnerDifficulty} />
        </div>
        <h1 className="text-3xl font-bold text-white mb-3">{api.name}</h1>
        <p className="text-lg text-[#7d94b5] leading-relaxed">{api.beginnerSummary}</p>
        {api.apiKeyUrl && (
          <div className="flex flex-wrap gap-3 mt-5">
            <a
              href={api.apiKeyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold px-5 py-2.5 rounded-xl transition-colors text-sm"
            >
              احصل على مفتاح API ←
            </a>
            <a
              href={api.docsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#111827] hover:bg-[#1a2234] text-white font-semibold px-5 py-2.5 rounded-xl border border-[#1e2d45] transition-colors text-sm"
            >
              التوثيق الرسمي
            </a>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <section>
            <h2 className="text-lg font-bold text-white mb-3">تفاصيل الطبقة المجانية</h2>
            <div className="bg-[#111827] border border-[#1e2d45] rounded-2xl p-5">
              <p className="text-sm text-[#7d94b5] leading-relaxed">{api.freeTierNotes}</p>
            </div>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-3">الأنسب لـ</h2>
            <div className="flex flex-wrap gap-2">
              {api.bestFor.map((use) => (
                <span key={use} className="bg-indigo-950/50 text-indigo-300 border border-indigo-900/50 text-sm px-3 py-1 rounded-full">
                  {use}
                </span>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-3">كيف تبدأ</h2>
            <ol className="space-y-3">
              {api.starterSteps.map((step, i) => (
                <li key={i} className="flex gap-3 text-sm text-[#7d94b5]">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-950 text-indigo-400 text-xs flex items-center justify-center font-bold">
                    {i + 1}
                  </span>
                  <span className="leading-relaxed">{step}</span>
                </li>
              ))}
            </ol>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-3">مثال عملي</h2>
            <div className="bg-[#111827] border border-[#1e2d45] rounded-2xl p-5">
              <p className="text-sm text-[#7d94b5] leading-relaxed">{api.exampleUseCase}</p>
            </div>
          </section>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <section>
              <h2 className="text-lg font-bold text-white mb-3">المميزات</h2>
              <ul className="space-y-2">
                {api.pros.map((p) => (
                  <li key={p} className="flex gap-2 text-sm text-[#7d94b5]">
                    <span className="text-emerald-500">✓</span>{p}
                  </li>
                ))}
              </ul>
            </section>
            <section>
              <h2 className="text-lg font-bold text-white mb-3">القيود</h2>
              <ul className="space-y-2">
                {api.limitations.map((l) => (
                  <li key={l} className="flex gap-2 text-sm text-[#7d94b5]">
                    <span className="text-amber-500">→</span>{l}
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>

        <div className="space-y-4">
          <QuickFactsAr api={api} />
          <div className="flex flex-col gap-2">
            {api.apiKeyUrl && (
              <a
                href={api.apiKeyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between bg-emerald-950/50 border border-emerald-800/60 hover:border-emerald-600 rounded-xl px-4 py-3 text-sm font-semibold text-emerald-300 transition-colors group"
              >
                <span>احصل على مفتاح API</span>
                <span className="text-emerald-600 group-hover:text-emerald-400 text-xs truncate max-w-[150px] mr-2">{api.apiKeyUrl}</span>
              </a>
            )}
            {secondaryLinks.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between bg-[#111827] border border-[#1e2d45] hover:border-indigo-800 rounded-xl px-4 py-3 text-sm text-white transition-colors group"
              >
                <span>{link.label}</span>
                <span className="text-[#4a6080] group-hover:text-indigo-400 text-xs truncate max-w-[150px] mr-2">{link.url}</span>
              </a>
            ))}
          </div>
          <div className="bg-[#111827] border border-[#1e2d45] rounded-2xl p-5">
            <h3 className="font-semibold text-white mb-3 text-sm uppercase tracking-wider">المصادر الرسمية</h3>
            <ul className="space-y-2">
              {api.sourceUrls.map((url) => (
                <li key={url}>
                  <a href={url} target="_blank" rel="noopener noreferrer" className="text-sm text-indigo-400 hover:underline break-all">
                    {url}
                  </a>
                </li>
              ))}
            </ul>
            <p className="text-xs text-[#4a6080] mt-4">آخر تحقق: {api.lastVerified}</p>
          </div>
        </div>
      </div>

      {similar.length > 0 && (
        <section className="mt-16 border-t border-[#1e2d45] pt-10">
          <h2 className="text-xl font-bold text-white mb-6">APIs مشابهة</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {similar.map((a) => <ApiCard key={a.id} api={a} locale="ar" />)}
          </div>
        </section>
      )}
    </div>
  );
}

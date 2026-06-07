import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { apis } from "@/data/apis";
import ApiBadge from "@/components/ApiBadge";
import QuickFacts from "@/components/QuickFacts";
import OfficialLinks from "@/components/OfficialLinks";
import SourceList from "@/components/SourceList";
import ApiCard from "@/components/ApiCard";
import { DISCLAIMER } from "@/lib/constants";

type Props = { params: { slug: string } };

export async function generateStaticParams() {
  return apis.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const api = apis.find((a) => a.slug === params.slug);
  if (!api) return {};
  return {
    title: `${api.name} Beginner Guide | AI API Starter`,
    description: api.beginnerSummary,
  };
}

export default function ApiDetailPage({ params }: Props) {
  const api = apis.find((a) => a.slug === params.slug);
  if (!api) notFound();

  const similar = apis.filter(
    (a) => a.id !== api.id && a.bestFor.some((b) => api.bestFor.includes(b))
  ).slice(0, 3);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
      {/* Disclaimer */}
      <div className="bg-amber-950/30 border border-amber-900/50 rounded-xl px-4 py-3 text-sm text-amber-300 mb-8">
        ⚠️ {DISCLAIMER}
      </div>

      {/* Header */}
      <div className="mb-8">
        <div className="flex flex-wrap items-center gap-3 mb-3">
          <ApiBadge variant="freeTier" value={api.freeTierType} />
          <ApiBadge variant="difficulty" value={api.beginnerDifficulty} />
        </div>
        <h1 className="text-3xl font-bold text-white mb-3">{api.name}</h1>
        <p className="text-lg text-[#7d94b5] leading-relaxed">{api.beginnerSummary}</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          {/* Free tier */}
          <section>
            <h2 className="text-lg font-bold text-white mb-3">Free tier details</h2>
            <div className="bg-[#111827] border border-[#1e2d45] rounded-2xl p-5">
              <p className="text-sm text-[#7d94b5] leading-relaxed">{api.freeTierNotes}</p>
            </div>
          </section>

          {/* Best for */}
          <section>
            <h2 className="text-lg font-bold text-white mb-3">Best for</h2>
            <div className="flex flex-wrap gap-2">
              {api.bestFor.map((use) => (
                <span key={use} className="bg-indigo-950/50 text-indigo-300 border border-indigo-900/50 text-sm px-3 py-1 rounded-full">{use}</span>
              ))}
            </div>
          </section>

          {/* Starter steps */}
          <section>
            <h2 className="text-lg font-bold text-white mb-3">Getting started</h2>
            <ol className="space-y-3">
              {api.starterSteps.map((step, i) => (
                <li key={i} className="flex gap-3 text-sm text-[#7d94b5]">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-950 text-indigo-400 text-xs flex items-center justify-center font-bold">{i + 1}</span>
                  <span className="leading-relaxed">{step}</span>
                </li>
              ))}
            </ol>
          </section>

          {/* Example project */}
          <section>
            <h2 className="text-lg font-bold text-white mb-3">Example project</h2>
            <div className="bg-[#111827] border border-[#1e2d45] rounded-2xl p-5">
              <p className="text-sm text-[#7d94b5] leading-relaxed">{api.exampleUseCase}</p>
            </div>
          </section>

          {/* Pros & limitations */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <section>
              <h2 className="text-lg font-bold text-white mb-3">Pros</h2>
              <ul className="space-y-2">
                {api.pros.map((p) => (
                  <li key={p} className="flex gap-2 text-sm text-[#7d94b5]"><span className="text-emerald-500">✓</span>{p}</li>
                ))}
              </ul>
            </section>
            <section>
              <h2 className="text-lg font-bold text-white mb-3">Limitations</h2>
              <ul className="space-y-2">
                {api.limitations.map((l) => (
                  <li key={l} className="flex gap-2 text-sm text-[#7d94b5]"><span className="text-amber-500">→</span>{l}</li>
                ))}
              </ul>
            </section>
          </div>
        </div>

        <div className="space-y-4">
          <QuickFacts api={api} />
          <OfficialLinks api={api} />
          <SourceList urls={api.sourceUrls} lastVerified={api.lastVerified} />
        </div>
      </div>

      {/* Similar APIs */}
      {similar.length > 0 && (
        <section className="mt-16 border-t border-[#1e2d45] pt-10">
          <h2 className="text-xl font-bold text-white mb-6">Similar APIs</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {similar.map((a) => <ApiCard key={a.id} api={a} />)}
          </div>
        </section>
      )}
    </div>
  );
}

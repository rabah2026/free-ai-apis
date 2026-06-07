import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { guides } from "@/data/guides";

type Props = { params: { slug: string } };

export async function generateStaticParams() {
  return guides.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const guide = guides.find((g) => g.slug === params.slug);
  if (!guide) return {};
  return {
    title: `${guide.title} | AI API Starter`,
    description: guide.summary,
  };
}

export default function GuideDetailPage({ params }: Props) {
  const guide = guides.find((g) => g.slug === params.slug);
  if (!guide) notFound();

  const paragraphs = guide.content.split("\n\n");

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-12">
      <Link href="/guides" className="text-sm text-indigo-400 hover:underline mb-8 inline-block">← Back to guides</Link>
      <div className="text-xs text-[#4a6080] mb-3">{guide.readingTime} read · Last verified {guide.lastVerified}</div>
      <h1 className="text-3xl font-bold text-white mb-4">{guide.title}</h1>
      <p className="text-lg text-[#7d94b5] mb-10">{guide.summary}</p>
      <div className="prose prose-invert prose-sm max-w-none space-y-5">
        {paragraphs.map((para, i) => {
          if (para.startsWith("**") && para.endsWith("**")) {
            return <h2 key={i} className="text-lg font-bold text-white mt-8 mb-3">{para.replace(/\*\*/g, "")}</h2>;
          }
          if (para.startsWith("```")) {
            const code = para.replace(/^```[a-z]*\n/, "").replace(/```$/, "");
            return <pre key={i} className="bg-[#0a0d14] border border-[#1e2d45] rounded-xl p-4 overflow-x-auto text-sm text-[#c8d6ef] font-mono">{code}</pre>;
          }
          if (para.match(/^`[^`]+`$/)) {
            return <pre key={i} className="bg-[#0a0d14] border border-[#1e2d45] rounded-xl p-4 text-sm text-[#c8d6ef] font-mono">{para.replace(/`/g, "")}</pre>;
          }
          const formattedPara = para.replace(/\*\*([^*]+)\*\*/g, '<strong class="text-white">$1</strong>');
          if (para.startsWith("- ") || para.startsWith("• ")) {
            const items = para.split("\n").filter(Boolean);
            return (
              <ul key={i} className="space-y-1 text-[#7d94b5]">
                {items.map((item, j) => (
                  <li key={j} className="flex gap-2 text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: "• " + item.replace(/^[-•]\s*/, "").replace(/\*\*([^*]+)\*\*/g, '<strong class="text-white">$1</strong>') }} />
                ))}
              </ul>
            );
          }
          if (/^\d+\.\s/.test(para)) {
            const items = para.split("\n").filter(Boolean);
            return (
              <ol key={i} className="space-y-1 text-[#7d94b5] list-decimal list-inside">
                {items.map((item, j) => (
                  <li key={j} className="text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: item.replace(/^\d+\.\s*/, "").replace(/\*\*([^*]+)\*\*/g, '<strong class="text-white">$1</strong>') }} />
                ))}
              </ol>
            );
          }
          return <p key={i} className="text-[#7d94b5] leading-relaxed text-sm" dangerouslySetInnerHTML={{ __html: formattedPara }} />;
        })}
      </div>
    </div>
  );
}

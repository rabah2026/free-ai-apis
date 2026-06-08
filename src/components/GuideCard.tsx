import Link from "next/link";
import { Guide } from "@/data/guides";

type Props = { guide: Guide; locale?: "en" | "ar" };

export default function GuideCard({ guide, locale = "en" }: Props) {
  const isAr = locale === "ar";
  const href = isAr ? `/ar/guides/${guide.slug}` : `/guides/${guide.slug}`;
  const title = isAr && guide.titleAr ? guide.titleAr : guide.title;
  const summary = isAr && guide.summaryAr ? guide.summaryAr : guide.summary;
  const readingLabel = isAr ? `${guide.readingTime} قراءة` : `${guide.readingTime} read`;

  return (
    <Link href={href} className="block group">
      <article className="bg-[#111827] border border-[#1e2d45] rounded-2xl p-5 hover:border-[#2a3f5f] transition-colors h-full">
        <div className="text-xs text-[#4a6080] mb-2">{readingLabel}</div>
        <h3 className="font-bold text-white group-hover:text-indigo-300 transition-colors mb-2">{title}</h3>
        <p className="text-sm text-[#7d94b5] leading-relaxed">{summary}</p>
      </article>
    </Link>
  );
}

import Link from "next/link";
import { Guide } from "@/data/guides";

type Props = { guide: Guide };
export default function GuideCard({ guide }: Props) {
  return (
    <Link href={`/guides/${guide.slug}`} className="block group">
      <article className="bg-[#111827] border border-[#1e2d45] rounded-2xl p-5 hover:border-[#2a3f5f] transition-colors h-full">
        <div className="text-xs text-[#4a6080] mb-2">{guide.readingTime} read</div>
        <h3 className="font-bold text-white group-hover:text-indigo-300 transition-colors mb-2">{guide.title}</h3>
        <p className="text-sm text-[#7d94b5] leading-relaxed">{guide.summary}</p>
      </article>
    </Link>
  );
}

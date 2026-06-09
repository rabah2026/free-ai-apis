import Link from "next/link";
import { ApiProvider } from "@/data/apis";
import ApiBadge from "./ApiBadge";

type Props = { api: ApiProvider; locale?: "en" | "ar" };

export default function ApiCard({ api, locale = "en" }: Props) {
  const isAr = locale === "ar";
  const href = isAr ? `/ar/apis/${api.slug}` : `/apis/${api.slug}`;
  const description = isAr && api.shortDescriptionAr ? api.shortDescriptionAr : api.shortDescription;
  const verifiedLabel = isAr ? `تم التحقق ${api.lastVerified}` : `Verified ${api.lastVerified}`;

  return (
    <Link href={href} className="block group">
      <article className="bg-[#111827] border border-[#1e2d45] rounded-2xl p-5 h-full flex flex-col gap-3 hover:border-indigo-900/60 hover:shadow-[0_0_32px_-6px_rgba(99,102,241,0.18)] transition-all duration-300">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-bold text-white group-hover:text-indigo-300 transition-colors leading-tight">{api.name}</h3>
          <ApiBadge variant="freeTier" value={api.freeTierType} locale={locale} />
        </div>
        <p className="text-sm text-[#7d94b5] leading-relaxed flex-1">{description}</p>
        <div className="flex flex-wrap gap-1.5 mt-auto">
          {api.bestFor.slice(0, 3).map((use) => (
            <span key={use} className="text-xs bg-[#1a2234] text-[#7d94b5] px-2 py-0.5 rounded-md border border-[#1e2d45]">
              {use}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-2 pt-1 border-t border-[#1e2d45]">
          <ApiBadge variant="difficulty" value={api.beginnerDifficulty} locale={locale} />
          <span className="text-xs text-[#4a6080] ml-auto">{verifiedLabel}</span>
        </div>
      </article>
    </Link>
  );
}

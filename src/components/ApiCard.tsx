import Link from "next/link";
import { ApiProvider } from "@/data/apis";
import ApiBadge from "./ApiBadge";

type Props = { api: ApiProvider };

export default function ApiCard({ api }: Props) {
  return (
    <Link href={`/apis/${api.slug}`} className="block group">
      <article className="bg-[#111827] border border-[#1e2d45] rounded-2xl p-5 h-full flex flex-col gap-3 hover:border-[#2a3f5f] transition-colors">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-bold text-white group-hover:text-indigo-300 transition-colors leading-tight">{api.name}</h3>
          <ApiBadge variant="freeTier" value={api.freeTierType} />
        </div>
        <p className="text-sm text-[#7d94b5] leading-relaxed flex-1">{api.shortDescription}</p>
        <div className="flex flex-wrap gap-1.5 mt-auto">
          {api.bestFor.slice(0, 3).map((use) => (
            <span key={use} className="text-xs bg-[#1a2234] text-[#7d94b5] px-2 py-0.5 rounded-md border border-[#1e2d45]">
              {use}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-2 pt-1 border-t border-[#1e2d45]">
          <ApiBadge variant="difficulty" value={api.beginnerDifficulty} />
          <span className="text-xs text-[#4a6080] ml-auto">Verified {api.lastVerified}</span>
        </div>
      </article>
    </Link>
  );
}

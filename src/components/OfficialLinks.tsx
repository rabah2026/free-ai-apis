import { ApiProvider } from "@/data/apis";

type Props = { api: ApiProvider };
export default function OfficialLinks({ api }: Props) {
  const secondary = [
    { label: "Official Website", url: api.officialWebsite },
    { label: "Documentation", url: api.docsUrl },
    ...(api.pricingUrl ? [{ label: "Pricing / Free Tier", url: api.pricingUrl }] : []),
  ];
  return (
    <div className="flex flex-col gap-2">
      {api.apiKeyUrl && (
        <a
          href={api.apiKeyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between bg-emerald-950/50 border border-emerald-800/60 hover:border-emerald-600 rounded-xl px-4 py-3 text-sm font-semibold text-emerald-300 transition-colors group"
        >
          <span>Get API Key</span>
          <span className="text-emerald-600 group-hover:text-emerald-400 transition-colors text-xs truncate max-w-[200px] ml-2">{api.apiKeyUrl}</span>
        </a>
      )}
      {secondary.map((link) => (
        <a
          key={link.label}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between bg-[#111827] border border-[#1e2d45] hover:border-indigo-800 rounded-xl px-4 py-3 text-sm text-white transition-colors group"
        >
          <span>{link.label}</span>
          <span className="text-[#4a6080] group-hover:text-indigo-400 transition-colors text-xs truncate max-w-[200px] ml-2">{link.url}</span>
        </a>
      ))}
    </div>
  );
}

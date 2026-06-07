import { ApiProvider } from "@/data/apis";

type Props = { api: ApiProvider };
export default function OfficialLinks({ api }: Props) {
  const links = [
    { label: "Official Website", url: api.officialWebsite },
    { label: "Documentation", url: api.docsUrl },
    ...(api.pricingUrl ? [{ label: "Pricing / Free Tier", url: api.pricingUrl }] : []),
    ...(api.apiKeyUrl ? [{ label: "Get API Key", url: api.apiKeyUrl }] : []),
  ];
  return (
    <div className="flex flex-col gap-2">
      {links.map((link) => (
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

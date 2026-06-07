type Props = { urls: string[]; lastVerified: string };
export default function SourceList({ urls, lastVerified }: Props) {
  return (
    <div className="bg-[#111827] border border-[#1e2d45] rounded-2xl p-5">
      <h3 className="font-semibold text-white mb-3 text-sm uppercase tracking-wider">Official Sources</h3>
      <ul className="space-y-2">
        {urls.map((url) => (
          <li key={url}>
            <a href={url} target="_blank" rel="noopener noreferrer" className="text-sm text-indigo-400 hover:underline break-all">
              {url}
            </a>
          </li>
        ))}
      </ul>
      <p className="text-xs text-[#4a6080] mt-4">Last verified: {lastVerified}</p>
    </div>
  );
}

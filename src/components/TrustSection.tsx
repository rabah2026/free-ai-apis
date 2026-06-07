export default function TrustSection() {
  const items = [
    { title: "Official sources only", desc: "Every API entry links to the provider's official website and official documentation." },
    { title: "Last verified dates", desc: "Every provider page shows when the information was last verified against official sources." },
    { title: "Honest about unknowns", desc: "If a free tier is unclear, we mark it as unknown instead of guessing or inventing numbers." },
    { title: "No unofficial keys", desc: "We never link to unofficial 'free API key' sites. Only direct provider sign-up pages." },
  ];
  return (
    <section className="py-16 border-t border-[#1e2d45]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl font-bold text-white mb-2">Why trust this directory?</h2>
        <p className="text-[#7d94b5] mb-10">We built this for beginners who deserve honest, accurate information.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {items.map((item) => (
            <div key={item.title} className="bg-[#111827] border border-[#1e2d45] rounded-2xl p-5">
              <div className="font-semibold text-white mb-1">{item.title}</div>
              <div className="text-sm text-[#7d94b5]">{item.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function WarningSection() {
  return (
    <section className="py-12 border-t border-[#1e2d45]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="bg-amber-950/30 border border-amber-900/50 rounded-2xl p-6">
          <h2 className="font-bold text-amber-300 text-lg mb-3">⚠️ Warning: Unofficial &quot;Free API Key&quot; Sites</h2>
          <p className="text-sm text-amber-200/80 leading-relaxed mb-4">
            There are many websites that claim to offer free API keys for OpenAI, Anthropic, and other AI providers. These sites are unofficial and potentially dangerous.
          </p>
          <ul className="space-y-2 text-sm text-amber-200/70">
            <li>• They may steal your credentials or inject malicious content into responses.</li>
            <li>• Keys may work temporarily then stop, breaking your app.</li>
            <li>• Using unofficial keys may violate provider terms of service.</li>
            <li>• This site only links to official provider sign-up pages.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";
import { SITE_NAME } from "@/lib/constants";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-[#0a0d14]/90 backdrop-blur border-b border-[#1e2d45]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16 gap-4">
        <Link href="/" className="font-bold text-lg text-white tracking-tight">
          {SITE_NAME}
        </Link>
        <nav className="flex items-center gap-1">
          <Link href="/apis" className="text-sm text-[#7d94b5] hover:text-white px-3 py-1.5 rounded-lg transition-colors">
            APIs
          </Link>
          <Link href="/finder" className="text-sm text-[#7d94b5] hover:text-white px-3 py-1.5 rounded-lg transition-colors">
            Finder
          </Link>
          <Link href="/guides" className="text-sm text-[#7d94b5] hover:text-white px-3 py-1.5 rounded-lg transition-colors">
            Guides
          </Link>
          <Link href="/about" className="text-sm text-[#7d94b5] hover:text-white px-3 py-1.5 rounded-lg transition-colors">
            About
          </Link>
        </nav>
      </div>
    </header>
  );
}

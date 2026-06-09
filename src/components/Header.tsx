"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const isArabic = pathname.startsWith("/ar");
  const switchHref = isArabic
    ? pathname.replace(/^\/ar/, "") || "/"
    : `/ar${pathname === "/" ? "" : pathname}`;

  if (isArabic) {
    return (
      <header className="sticky top-0 z-50 bg-[#0a0d14]/92 backdrop-blur-md border-b border-[#1e2d45]/80 relative" dir="rtl">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-indigo-500/25 to-transparent pointer-events-none" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16 gap-2">
          <Link href="/ar" className="font-bold text-base text-white tracking-tight whitespace-nowrap shrink-0">
            مرشد AI
          </Link>
          <nav className="flex items-center gap-0.5 overflow-x-auto">
            <Link href="/ar/apis" className="text-sm text-[#8bacc9] hover:text-white px-2.5 py-1.5 rounded-lg transition-colors whitespace-nowrap">APIs</Link>
            <Link href="/ar/finder" className="text-sm text-[#8bacc9] hover:text-white px-2.5 py-1.5 rounded-lg transition-colors whitespace-nowrap">ابحث</Link>
            <Link href="/ar/guides" className="text-sm text-[#8bacc9] hover:text-white px-2.5 py-1.5 rounded-lg transition-colors whitespace-nowrap">أدلة</Link>
            <Link href="/ar/about" className="text-sm text-[#8bacc9] hover:text-white px-2.5 py-1.5 rounded-lg transition-colors whitespace-nowrap hidden sm:block">عن الموقع</Link>
            <Link href={switchHref} className="text-sm bg-[#1a2234] text-indigo-400 hover:text-indigo-300 px-2.5 py-1.5 rounded-lg border border-[#2a3f5f]/60 hover:border-indigo-800/60 transition-all whitespace-nowrap mr-1">English</Link>
          </nav>
        </div>
      </header>
    );
  }

  return (
    <header className="sticky top-0 z-50 bg-[#0a0d14]/92 backdrop-blur-md border-b border-[#1e2d45]/80 relative">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-indigo-500/25 to-transparent pointer-events-none" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16 gap-4">
        <Link href="/" className="font-bold text-lg text-white tracking-tight">AI API Starter</Link>
        <nav className="flex items-center gap-1">
          <Link href="/apis" className="text-sm text-[#8bacc9] hover:text-white px-3 py-1.5 rounded-lg transition-colors">APIs</Link>
          <Link href="/finder" className="text-sm text-[#8bacc9] hover:text-white px-3 py-1.5 rounded-lg transition-colors">Finder</Link>
          <Link href="/guides" className="text-sm text-[#8bacc9] hover:text-white px-3 py-1.5 rounded-lg transition-colors">Guides</Link>
          <Link href="/about" className="text-sm text-[#8bacc9] hover:text-white px-3 py-1.5 rounded-lg transition-colors">About</Link>
          <Link href={switchHref} className="text-sm bg-[#1a2234] text-indigo-400 hover:text-indigo-300 px-3 py-1.5 rounded-lg border border-[#2a3f5f]/60 hover:border-indigo-800/60 transition-all ml-2">العربية</Link>
        </nav>
      </div>
    </header>
  );
}

"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/60 backdrop-blur-md border-b border-white/10">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 h-16">
        <Link href="/" className="text-xl font-bold text-red-500">
          StreamLite
        </Link>

        {/* Future: search, profile, menu */}
        <nav className="space-x-6 text-sm">
          <Link href="/" className="hover:text-red-400">
            Home
          </Link>
          <Link href="/movies" className="hover:text-red-400">
            Movies
          </Link>
        </nav>
      </div>
    </header>
  );
}

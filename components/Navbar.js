"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-stone-50/90 backdrop-blur-md border-b border-stone-200">
      <div className="max-w-6xl mx-auto px-6 py-3.5 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-1.5 no-underline">
          <span className="text-xl text-amber-warmth">◆</span>
          <span className="text-[22px] font-serif text-stone-900">SkyScout</span>
          <span className="text-sm font-sans text-stone-400">.ca</span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-sm font-sans text-stone-600 no-underline hover:text-stone-900 transition-colors">
            Home
          </Link>
          <Link href="/search" className="text-sm font-sans text-stone-600 no-underline hover:text-stone-900 transition-colors">
            Search
          </Link>
          <Link href="/deals" className="text-sm font-sans text-stone-600 no-underline hover:text-stone-900 transition-colors">
            Deals
          </Link>
          <Link href="/blog" className="text-sm font-sans text-stone-600 no-underline hover:text-stone-900 transition-colors">
            Blog
          </Link>
          <Link
            href="/search"
            className="px-5 py-2 bg-stone-900 text-stone-50 rounded-lg text-[13px] font-sans font-semibold no-underline hover:bg-stone-800 transition-colors"
          >
            ✈ Search Flights
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-stone-600 text-xl bg-transparent border-none cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-stone-200 bg-stone-50 px-6 py-4 flex flex-col gap-3 animate-fade-in">
          <Link href="/" className="text-sm font-sans text-stone-600 no-underline py-2" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link href="/search" className="text-sm font-sans text-stone-600 no-underline py-2" onClick={() => setMenuOpen(false)}>Search Flights</Link>
          <Link href="/deals" className="text-sm font-sans text-stone-600 no-underline py-2" onClick={() => setMenuOpen(false)}>Deals</Link>
          <Link href="/blog" className="text-sm font-sans text-stone-600 no-underline py-2" onClick={() => setMenuOpen(false)}>Blog</Link>
        </div>
      )}
    </nav>
  );
}

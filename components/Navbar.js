"use client";


import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path) => pathname === path;

  return (
    <nav className="sticky top-0 z-[100] bg-stone-50/92 backdrop-blur-md border-b border-stone-200">
      <div className="max-w-6xl mx-auto px-6 py-3.5 flex justify-between items-center">
        {/* Logo — use <a> for guaranteed full-page navigation */}
        <a href="/" className="flex items-center gap-1.5 no-underline relative z-[101]">
          <span className="text-xl" style={{ color: "#D4A373" }}>◆</span>
          <span className="text-[22px] font-serif text-stone-900 font-normal">SkyScout</span>
          <span className="text-sm font-sans text-stone-400">.ca</span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6">
          <a 
            href="/" 
            className={`text-sm font-sans no-underline transition-colors ${
              isActive("/") ? "text-stone-900 font-semibold" : "text-stone-600 hover:text-stone-900"
              }`}
          >
            Home
          </a>
          
          <a href="/search"
              className={`text-sm font-sans no-underline transition-colors ${
              isActive("/search") ? "text-stone-900 font-semibold" : "text-stone-600 hover:text-stone-900"
          }`}
          >
            Search
          </a>
          <a 
            href="/blog"
  className={`text-sm font-sans no-underline transition-colors ${
    isActive("/blog") ? "text-stone-900 font-semibold" : "text-stone-600 hover:text-stone-900"
  }`}
>
  Blog
</a>





          <a
            href="/search"
            className="px-5 py-2 bg-stone-900 text-stone-50 rounded-lg text-[13px] font-sans font-semibold no-underline hover:bg-stone-800 transition-colors"
          >
            ✈ Search Flights
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-stone-600 text-xl bg-transparent border-none cursor-pointer p-2 relative z-[101]"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-stone-200 bg-stone-50 px-6 py-4 flex flex-col gap-3 animate-fade-in">
          <a href="/" className="text-sm font-sans text-stone-600 no-underline py-2">Home</a>
          <a href="/search" className="text-sm font-sans text-stone-600 no-underline py-2">Search Flights</a>
          <a href="/blog" className="text-sm font-sans text-stone-600 no-underline py-2">Blog</a>
        </div>
      )}
    </nav>
  );
}

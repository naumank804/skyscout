import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-stone-925 pt-16 pb-0">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-between flex-wrap gap-10 pb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-1.5 mb-3">
              <span className="text-xl text-amber-warmth">◆</span>
              <span className="text-[22px] font-serif text-stone-50">SkyScout</span>
              <span className="text-sm font-sans text-stone-500">.ca</span>
            </div>
            <p className="text-stone-500 text-sm font-sans max-w-xs leading-relaxed">
              Helping Canadians find the cheapest flights worldwide. Powered by Travelpayouts.
            </p>
          </div>

          {/* Links */}
          <div className="flex gap-16 flex-wrap">
            <div className="flex flex-col gap-2.5">
              <h4 className="text-xs font-sans font-bold text-stone-500 uppercase tracking-wider mb-1">Product</h4>
              <Link href="/search" className="text-sm font-sans text-stone-600 no-underline hover:text-stone-400">Flight Search</Link>
              <Link href="/blog" className="text-sm font-sans text-stone-600 no-underline hover:text-stone-400">Blog</Link>
            </div>
            <div className="flex flex-col gap-2.5">
              <h4 className="text-xs font-sans font-bold text-stone-500 uppercase tracking-wider mb-1">Company</h4>
              <Link href="/about" className="text-sm font-sans text-stone-600 no-underline hover:text-stone-400">About</Link>
              <Link href="/contact" className="text-sm font-sans text-stone-600 no-underline hover:text-stone-400">Contact</Link>
            </div>
            <div className="flex flex-col gap-2.5">
              <h4 className="text-xs font-sans font-bold text-stone-500 uppercase tracking-wider mb-1">Legal</h4>
              <Link href="/privacy" className="text-sm font-sans text-stone-600 no-underline hover:text-stone-400">Privacy Policy</Link>
              <Link href="/terms" className="text-sm font-sans text-stone-600 no-underline hover:text-stone-400">Terms of Service</Link>
              <span className="text-sm font-sans text-stone-600">Affiliate Disclosure</span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-stone-800 py-5 text-sm font-sans text-stone-600">
          © {new Date().getFullYear()} SkyScout.ca — All rights reserved
        </div>
      </div>
    </footer>
  );
}

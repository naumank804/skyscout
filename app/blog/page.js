import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


const POSTS = [
  {
    slug: "cheapest-flights-toronto-summer-2026",
    title: "The 15 Cheapest Flights from Toronto This Summer (2026)",
    excerpt: "We crunched the numbers on thousands of routes. Here are the absolute cheapest round-trip flights from YYZ for June, July, and August 2026 — including some jaw-dropping deals under $300.",
    date: "April 20, 2026",
    readTime: "8 min read",
    category: "Deals",
  },
  {
    slug: "how-to-find-cheap-flights-canada",
    title: "How to Find Cheap Flights from Canada: The Complete Guide",
    excerpt: "Everything Canadian travelers need to know about finding the lowest fares — from flexible date searching and error fares to the best booking windows and tools.",
    date: "April 18, 2026",
    readTime: "12 min read",
    category: "Guide",
  },
  {
    slug: "best-budget-destinations-from-toronto",
    title: "10 Best Budget Destinations You Can Fly to from Toronto for Under $400",
    excerpt: "Think you need to spend $800+ to leave the country? Think again. These incredible destinations are all reachable from Pearson for under $400 round trip.",
    date: "April 15, 2026",
    readTime: "10 min read",
    category: "Inspiration",
  },
  {
    slug: "flight-price-mistakes-error-fares",
    title: "How to Spot and Book Error Fares (Flight Pricing Mistakes)",
    excerpt: "Airlines make pricing errors more often than you think. Here's how to find them, when to book, and whether airlines actually honour them.",
    date: "April 12, 2026",
    readTime: "7 min read",
    category: "Guide",
  },
  {
    slug: "best-time-to-book-flights-canada",
    title: "The Best Time to Book Flights from Canada in 2026",
    excerpt: "Is booking on Tuesday really cheaper? How far in advance should you book? We analyzed millions of fares to separate fact from fiction.",
    date: "April 10, 2026",
    readTime: "9 min read",
    category: "Research",
  },
  {
    slug: "vancouver-to-asia-cheap",
    title: "Flying from Vancouver to Asia? Here's How to Do It Cheap",
    excerpt: "Vancouver's proximity to Asia makes it one of the best Canadian cities for cheap trans-Pacific flights. Here are the routes, airlines, and tricks to know.",
    date: "April 8, 2026",
    readTime: "8 min read",
    category: "Route Guide",
  },
];

export const metadata = {
  title: "Cheap Flight Tips & Deals Blog | SkyScoutTravel.com",
  description: "Tips, guides, and deal alerts for Canadian travelers. Learn how to find cheap flights from Toronto, Vancouver, Montreal and other Canadian airports.",
};

export default function BlogPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen">
        {/* Hero */}
        <section className="bg-stone-925 py-16 px-6 text-center relative overflow-hidden">
          <div className="grain-overlay" />
          <div className="relative">
            <span className="text-xs font-sans font-bold uppercase tracking-widest text-amber-warmth mb-3 block">Blog</span>
            <h1 className="text-4xl md:text-5xl font-serif text-stone-50 mb-4">Travel smarter, fly cheaper</h1>
            <p className="text-stone-500 font-sans max-w-lg mx-auto leading-relaxed">
              Tips, guides, and insider knowledge to help Canadians get the best flight deals.
            </p>
          </div>
        </section>

        {/* Posts */}
        <section className="py-12 px-6">
          <div className="max-w-3xl mx-auto">
            {POSTS.map((post, i) => (
              <article
                key={i}
                className="border-b border-stone-200 py-8 first:pt-0 last:border-b-0 hover-lift rounded-lg px-2"
              >
                <div className="flex gap-3 items-center mb-3">
                  <span className="text-[11px] font-sans font-bold uppercase tracking-wider text-amber-warmth bg-amber-50 px-2 py-0.5 rounded">
                    {post.category}
                  </span>
                  <span className="text-[12px] font-sans text-stone-400">{post.date}</span>
                  <span className="text-[12px] font-sans text-stone-400">· {post.readTime}</span>
                </div>
                <h2 className="text-xl md:text-2xl font-serif mb-2 leading-tight">
                  <a href={`/blog/${post.slug}`} className="text-stone-900 no-underline hover:text-amber-warmth transition-colors">
                    {post.title}
                  </a>
                </h2>
                <p className="text-sm font-sans text-stone-500 leading-relaxed m-0">
                  {post.excerpt}
                </p>
              </article>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
